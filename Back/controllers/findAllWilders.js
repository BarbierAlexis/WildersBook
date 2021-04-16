const WilderModel = require("../models/Wilder");
const asyncHandler = require("express-async-handler");

module.exports = {
  findAll: asyncHandler(async (req, res) => {
    const result = await WilderModel.find();
    res.json({ succes: true, result });
  }),
};
