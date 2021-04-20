import WilderModel from "../models/Wilder";
import asyncHandler from "express-async-handler";

export default {
  findOne: asyncHandler(async (req, res) => {
    const result = await WilderModel.findById(req.params.id);
    res.json({ succes: true, result });
  }),
};
