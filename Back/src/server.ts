import express, { Request, Response, NextFunction} from "express";
import mongoose from "mongoose";
import cors from "cors";
import createWilderController from "./controllers/createWilder";
import findAllWildersController from "./controllers/findAllWilders";
import findOneWildersController from "./controllers/findOneWilder";
import updateWilderController from "./controllers/updateWilder";
import deleteWilderController from "./controllers/deleteWilder";
const app = express();

//Middleware
app.use(express.json());
app.use(cors());

function runAsyncWrapper(callback: any) {
  return function (req:Request, res:Response, next:NextFunction) {
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
  .catch((err: any) => console.log(err));

//Start Server
app.listen(5000, () => console.log("Server started on 5000"));
