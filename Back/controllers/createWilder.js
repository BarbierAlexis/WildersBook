const WilderModel = require("../models/Wilder");
const asyncHandler = require("express-async-handler");

module.exports = {
  create: asyncHandler(async (req, res) => {
    await WilderModel.init();
    const wilder = new WilderModel(req.body);
    const result = await wilder.save();
    res.json({ success: true, result: result });
  }),
};
