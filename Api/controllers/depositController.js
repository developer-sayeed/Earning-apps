import asyncHandler from "express-async-handler";
import DepositModel from "../models/Deposit.js";

/**
 * @DESC Get all users data
 * @ROUTE /api/v1/user
 * @method GET
 * @access public
 */
export const getAllDeposit = asyncHandler(async (req, res) => {
  const deposit = await DepositModel.find();

  if (deposit.length === 0) {
    return res.status(404).json({ message: "Deposit record Not Found" });
  }

  res.status(200).json(deposit);
});

/**
 * @DESC Get Single users data
 * @ROUTE /api/v1/user/:id
 * @method GET
 * @access public
 */
export const getSingleUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const deposit = await DepositModel.findById(id);

  if (!deposit) {
    return res.status(404).json({ message: "Single Deposit data not found" });
  }

  res.status(200).json(deposit);
});

/**
 * @DESC Create new User
 * @ROUTE /api/v1/deposit
 * @method POST
 * @access public
 */
export const createDeposit = asyncHandler(async (req, res) => {
  const { amount, txId } = req.body;

  if (!amount || !txId) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // check user email
  const depositTxIdCheck = await DepositModel.findOne({ txId });

  if (depositTxIdCheck) {
    return res.status(400).json({ message: "Invalid TxID, already Used" });
  }

  // create new Deposit
  const deposit = await DepositModel.create({
    amount,
    txId,
  });

  res.status(200).json({ deposit, message: "Deposit successfully" });
});

/**
 * @DESC Delete User
 * @ROUTE /api/v1/user/:id
 * @method DELETE
 * @access public
 */
export const deleteDeposit = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const removeDeposit = await DepositModel.findByIdAndDelete(id);

  res.status(200).json(removeDeposit);
});
