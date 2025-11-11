import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: String,
  email: String,
  address: String,
}, { timestamps: true });

export default mongoose.model("Contact", contactSchema);
