import WilderModel from "../models/Wilder";
import asyncHandler from "express-async-handler";

export default {
  update: asyncHandler(async (req, res) => {
    const result = await WilderModel.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      city: req.body.city,
      skills: req.body.skills,
    });
    res.json({ succes: true, result });
  }),
};
