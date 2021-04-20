import WilderModel from "../models/Wilder";
import asyncHandler from "express-async-handler";

export default {
  findAll: asyncHandler(async (req, res) => {
    const result = await WilderModel.find();
    res.json({ succes: true, result });
  }),
};
