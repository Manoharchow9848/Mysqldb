import {studnet,Attendance} from '../model/index.js'
import { Op } from 'sequelize';
export const getAllStudnets = async(req,res)=>{
    try {
        const students = await studnet.findAll();
        res.json(students);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch students' });
    }
}
export const getAttendanceByDate = async (req, res) => {
    const {date} = req.query;
    try {
        const attendance  = await Attendance.findAll({
            where:{date},
            include:[studnet]
        })
         res.json(attendance);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch attendance for the date' });
    }

}
export const submitAttendance = async (req, res) => {
    const {date,attendance} = req.body;
    try {
        for (const entry of attendance){
            const {sid,status} = entry;
            const existing = await Attendance.findOne({
                where :{sid,date}
            });
            if(existing){
                await existing.update({status})
            }else{
                await Attendance.create({sid, date, status})
                const Student = await studnet.findByPk(sid);
                
        if (status === 'present') {
          Student.totalPresent += 1;
        } else {
          Student.totalAbsent += 1;
        }
        await Student.save();
            }
        }
        res.json({ message: 'Attendance submitted successfully' });
    } catch (error) {
        console.error(error);
    res.status(500).json({ error: 'Failed to submit attendance' });
    }
}
export const getAttendanceSummary = async (req, res) => {
  try {
    const Student = await studnet.findAll();

    const summary = Student.map((s) => {
      const total = s.totalPresent + s.totalAbsent;
      const percentage = total > 0 ? ((s.totalPresent / total) * 100).toFixed(2) : '0.00';

      return {
        id: s.id,
        name: s.name,
        present: s.totalPresent,
        absent: s.totalAbsent,
        percentage: `${percentage}%`
      };
    });

    res.json(summary);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get summary' });
  }
};