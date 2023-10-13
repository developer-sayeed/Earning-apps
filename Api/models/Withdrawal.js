import mongoose from "mongoose";

const WithdrawalSchema = mongoose.Schema(
  {
    amount: {
      type: number,
      trim: true,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    withdrawalBy: {
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

export default mongoose.model("Withdrawal", WithdrawalSchema);
