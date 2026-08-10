import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

import notesRoutes from "./src/routes/notesRoutes.js"
import connectDB from "./src/config/db.js";
import rateLimiter from "./src/middleware/rateLimiter.js";


dotenv.config();

const app = express();
const __dirname = path.resolve()

app.use(express.json());

if (process.env.NODE_ENV !== "production") {
    app.use(cors());
}

app.use(rateLimiter);


app.use("/api/notes", notesRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")))

    app.get(/.*/, (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"))
    });
}

connectDB().then(() => {
    app.listen(5001, () => {
        console.log("server is running on port 5001")
    })
})
