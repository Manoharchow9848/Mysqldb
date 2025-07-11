import { db } from "../db/connectdb.js";

export const getAllBuses = async(req,res)=>{
    try {
         const connection = await db();
         const [rows] = await connection.execute('SELECT * FROM buses');
         res.status(200).json(rows);
        connection.end();
    } catch (error) {
        console.error("Error fetching buses:", error);
        res.status(500).json({ message: "Internal server error" });
        
    }
}

export const registerBus = async(req,res)=>{
    const { busNumber,totalSeats,availableSeats } = req.body;
    try {
        const connection = await db();
        const [insertResult] = await connection.execute(`
            Insert into buses (busNumber, totalSeats, availableSeats)
            values (?, ?, ?)
            `,[busNumber,totalSeats,availableSeats]);
        if (insertResult.affectedRows > 0) {
            res.status(201).json({ message: "Bus registered successfully" });
        } else {
            res.status(400).json({ message: "Failed to register bus"});
        }
        connection.end();
    } catch (error) {
        console.error("Error registering bus:", error);
        res.status(500).json({ message: "Internal server error" });   
    }
}