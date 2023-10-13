const mongoose = require("mongoose");

const membershipSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User schema for the user with this membership
    required: true,
  },
  plan: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  active: {
    type: Boolean,
    default: fasle, // Membership is active by default
  },
  // Add a field to store the duration of the membership in months
  durationMonths: {
    type: Number,
    default: 12, // Set to 12 months (1 year) by default
  },
});

export default mongoose.model("Membership", membershipSchema);
