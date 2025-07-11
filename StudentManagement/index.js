import { db } from "./connectdb/sqldb.js";
import express from "express";
import studentRouter from "./routes/student.route.js";



const app = express();
app.use(express.json());
const PORT = 3000;
app.use("/api/students", studentRouter);





app.listen(PORT, async () => {
  try {
    await db();
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.error('Failed to connect to the database:', error);
  }
});