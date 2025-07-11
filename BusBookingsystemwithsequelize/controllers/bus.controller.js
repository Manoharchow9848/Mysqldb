import Bookings from "../models/bookings.js";
import Buses from "../models/bus.js";
import User from "../models/user.js";
import { Op } from 'sequelize';
export const getAllBuses = async(req,res)=>{
    try {
         const buses = await Buses.findAll({
            where:{
                availableSeats:{
                    [Op.get]:10
                }
            }
         });
         return res.status(200).json(buses);
    } catch (error) {
        console.log('Error fetching in users',error)
        res.status(500).json({message:"Internal Server Error"})
    }
}
export const createBus = async(req,res)=>{
    const {busNumber,totalSeats,availableSeats} = req.body;
    if(!busNumber || !totalSeats || !availableSeats){
        return res.send("All field required")
    }
    try {
        const bus = await Buses.create({busNumber,totalSeats,availableSeats});
        return res.status(200).json(bus);
    } catch (error) {
        console.log('Error creating in bus',error)
        res.status(500).json({message:"Internal Server Error"})
    }
}


export const getBusBookingsWithUsers = async (req, res) => {
  try {
    const bookings = await Bookings.findAll({
      where: { busId: req.params.id },
      include: [
        {
          model: User,
          attributes: ["name", "email"]
        }
      ],
      attributes: ["id", "seatNumber"]
    });

    res.status(200).json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
