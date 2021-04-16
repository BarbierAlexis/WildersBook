const express = require("express");
const mongoose = require("mongoose");
const WilderModel = require("./models/Wilder");
const createWilderController = require("./controllers/createWilder");
const findAllWildersController = require("./controllers/findAllWilders");
const findOneWildersController = require("./controllers/findOneWilder");
const updateWilderController = require("./controllers/updateWilder");
const deleteWilderController = require("./controllers/deleteWilder");
const app = express();
const cors = require("cors");

//Middleware
app.use(express.json());
app.use(cors());

function runAsyncWrapper(callback) {
  return function (req, res, next) {
    callback(req, res, next).catch(next);
  };
}

//Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/api/wilder/create", runAsyncWrapper(createWilderController.create));
app.get(
  "/api/wilder/findAll",
  runAsyncWrapper(findAllWildersController.findAll)
);
app.get(
  "/api/wilder/findOne/:id",
  runAsyncWrapper(findOneWildersController.findOne)
);
app.put(
  "/api/wilder/update/:id",
  runAsyncWrapper(updateWilderController.update)
);
app.delete(
  "/api/wilder/delete/:id",
  runAsyncWrapper(deleteWilderController.delete)
);

//Database Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/wilderdb", {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    autoIndex: true,
  })
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(err));

//Start Server
app.listen(5000, () => console.log("Server started on 5000"));
