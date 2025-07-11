import Bookings from "../models/bookings.js";
import Buses from "../models/bus.js";
export const createBooking = async (req, res) => {
  const { userId, busId, seatNumber } = req.body;
  try {
    const booking = await Bookings.create({ userId, busId, seatNumber });
    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({ message: "Error creating booking", error });
  }
};

export const getUserBookings = async (req, res) => {
  try {
    const bookings = await Bookings.findAll({
      where: { userId: req.params.id },
      include: [{ model: Buses, attributes: ["busNumber"] }]
    });
    res.json(bookings);
  } catch (error) {
    res.status(400).json({ message: "Error", error });
  }
};