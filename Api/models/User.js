import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      unique: true,
      required: true,
    },
    country: {
      type: String,
      default: null,
    },
    password: {
      type: String,
      default: 123456,
    },
    fundPassword: {
      type: String,
      default: 123456,
    },
    referId: {
      type: String,
      required: true,
      unique: true,
    },
    withdrawalAddress: {
      type: String,
      unique: true,
      default: "",
    },
    referredBy: {
      type: String,
    },
    currentVip: {
      type: Number,
      default: 0,
    },
    balance: {
      type: Number,
      default: 50,
    },
    totalBalance: {
      type: Number,
      default: 0,
    },
    todayEarning: {
      type: Number,
      default: 0,
    },
    yesterdayEarning: {
      type: Number,
      default: 0,
    },
    monthlyEarning: {
      type: Number,
      default: 0,
    },
    lastMonthlyEarning: {
      type: Number,
      default: 0,
    },
    weeklyEarning: {
      type: Number,
      default: 0,
    },
    totalEarning: {
      type: Number,
      default: 0,
    },
    deposit: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "deposit",
    },
    withdrawal: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "withdrawal",
    },
    roles: {
      type: Array,
      default: [],
    },

    status: {
      type: Boolean,
      default: true,
    },
    isBanned: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
// Custom function to generate a random user ID
userSchema.pre("save", function (next) {
  // Generate a random user ID
  const randomUserId = Math.floor(Math.random() * 101117604855);
  this.userID = randomUserId.toString(); // Convert it to a string
  next();
});

export default mongoose.model("User", userSchema);
