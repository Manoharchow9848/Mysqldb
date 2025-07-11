import students from '../model/student.js';

export const getAllStudents = async (req, res) => {
    try {
        const studentList = await students.findAll();
        if (studentList.length === 0) {
            return res.status(404).json({ message: 'No students found' });
        }
        res.status(200).json(studentList);
    } catch (error) {
        console.error('Error fetching students:', error);
        res.status(500).json({ message: 'Internal server error' });
        
    }
}
export const createStudent = async (req, res) => {
    try {
         const {name,email} = req.body;
        if (!name || !email) {
            return res.status(400).json({ message: 'Name and email are required' });
        }
        const newStudent = await students.create({ name, email });
        res.status(201).json(newStudent);   
    } catch (error) {
        console.error('Error creating student:', error);
        res.status(500).json({ message: 'Internal server error' });
        
    }
    
}
export const getStudentById = async (req, res) => {
    const studentId = req.params.id;
    try {
         const student = await students.findByPk(studentId);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json(student);
    } catch (error) {
        console.error('Error fetching student by ID:', error);
        res.status(500).json({ message: 'Internal server error' });
        
    }
    
}
export const updateStudent = async (req, res) => {
    const studentId = req.params.id;
    const updatedStudent = req.body;
    try {
         const student = await students.findByPk(studentId);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        await student.update(updatedStudent);
        res.status(200).json(student);
    } catch (error) {
        console.error('Error updating student:', error);
        res.status(500).json({ message: 'Internal server error' });
        
    }
    
}
export const deleteStudent = async (req, res) => {
    const studentId = req.params.id;
    try {
        const student = await students.findByPk(studentId);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }   
        await student.destroy();
        res.status(204).json({ message: 'Student deleted successfully' });
    } catch (error) {
        console.error('Error deleting student:', error);
        res.status(500).json({ message: 'Internal server error' });
        
    }
    
}