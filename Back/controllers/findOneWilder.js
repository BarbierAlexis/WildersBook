const WilderModel = require("../models/Wilder");
const asyncHandler = require("express-async-handler");

module.exports = {
  findOne: asyncHandler(async (req, res) => {
    const result = await WilderModel.findById(req.params.id);
    res.json({ succes: true, result });
  }),
};
