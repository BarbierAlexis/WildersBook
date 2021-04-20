import WilderModel from "../models/Wilder";
import asyncHandler from "express-async-handler";

export default {
  create: asyncHandler(async (req, res) => {
    await WilderModel.init();
    const wilder = new WilderModel(req.body);
    const result = await wilder.save();
    res.json({ success: true, result: result });
  }),
};
