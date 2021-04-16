const WilderModel = require("../models/Wilder");
const asyncHandler = require("express-async-handler");

module.exports = {
  delete: asyncHandler(async (req, res) => {
    const result = await WilderModel.findByIdAndRemove(req.params.id);
    res.json({ succes: true, result });
  }),
};
