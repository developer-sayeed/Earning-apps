import express from "express";
import {
  createDeposit,
  deleteDeposit,
  getAllDeposit,
  getSingleUser,
} from "../controllers/depositController.js";

const depositRouter = express.Router();

// create route

depositRouter.route("/").post(createDeposit).get(getAllDeposit);
depositRouter.route("/:id").get(getSingleUser).delete(deleteDeposit);

// export default depositRouter
export default depositRouter;
