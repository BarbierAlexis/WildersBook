const WilderModel = require("../models/Wilder");
const asyncHandler = require("express-async-handler");

module.exports = {
  update: asyncHandler(async (req, res) => {
    const result = await WilderModel.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      city: req.body.city,
      skills: req.body.skills,
    });
    res.json({ succes: true, result });
  }),
};
