import mongoose from "mongoose";

const DepositSchema = mongoose.Schema(
  {
    amount: {
      type: String,
      trim: true,
      required: true,
    },
    photo: {
      type: String,
    },
    txId: {
      type: String,
      required: true,
      unique: true,
    },
    depositedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    status: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Deposit", DepositSchema);
