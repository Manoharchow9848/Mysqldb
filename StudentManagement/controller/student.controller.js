import { db } from "../connectdb/sqldb.js";

export const getAllStudents = async(req, res) => {
    try {
        const connection = await db();
        const [students] = await connection.execute("SELECT * FROM students");
        res.status(200).json(students);
    } catch (error) {
        console.error("Error fetching students:", error);
        res.status(500).json({ message: "Internal Server Error" });
        
    }
}
export const getStudentById = async (req, res) => {
    const sid = req.params.sid;
    try {
         const connection = await db();
         const [student] = await connection.execute("SELECT * FROM students WHERE id = ?", [sid]);
         if (student.length === 0) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.status(200).json(student[0]);

    } catch (error) {
        console.error("Error fetching student by ID:", error);
        res.status(500).json({ message: "Internal Server Error" });
        
    }
}
export const createStudent = async (req, res) => {
    const {name,email,age} = req.body;
    try {
        if (!name || !email || !age) {
            return res.status(400).json({ message: "Name, email, and age are required" });
        }
        const connection = await db();
        const [insertResult] = await connection.execute(
            "INSERT INTO students (name, email, age) VALUES (?, ?, ?)",
            [name, email, age]
        );
        
        res.status(201).json({
            message: "Student created successfully",
            studentId: insertResult.insertId,
            name,
            email,
            age
        });

        
    } catch (error) {
        console.error("Error creating student:", error);
        res.status(500).json({ message: "Internal Server Error" });
        
    }
}
export const updateStudent = async(req,res)=>{
    const studentId = req.params.id;
    const updatedStudent = req.body;
    try {
        const connection = await db();
        const [result] = await connection.execute(`
            update students set name=?,email=?,age=? where id = ?;`,
            [updatedStudent.name, updatedStudent.email, updatedStudent.age, studentId])
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.status(200).json({
            message: "Student updated successfully",
            studentId,
            name: updatedStudent.name,
            email: updatedStudent.email,
            age: updatedStudent.age
        });
    } catch (error) {
        console.error("Error updating student:", error);
        res.status(500).json({ message: "Internal Server Error" });
        
    }
}
export const deleteStudent = async (req, res) => {
    try {
        const studentId = req.params.id;
        const connection = await db();
        const [result] = await connection.execute("DELETE FROM students WHERE id = ?", [studentId]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.status(200).json({ message: "Student deleted successfully" });
    } catch (error) {
        console.error("Error deleting student:", error);
        res.status(500).json({ message: "Internal Server Error" });
        
    }
}