import WilderModel from "../models/Wilder";
import asyncHandler from "express-async-handler";

export default {
  delete: asyncHandler(async (req, res) => {
    const result = await WilderModel.findByIdAndRemove(req.params.id);
    res.json({ succes: true, result });
  }),
};
