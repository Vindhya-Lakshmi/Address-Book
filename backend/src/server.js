import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js"

dotenv.config();  
connectDB();      

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactRoutes);

app.get("/check", (req, res) => {
    res.send("Address Book API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
