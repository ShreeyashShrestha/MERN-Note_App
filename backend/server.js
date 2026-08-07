import express from "express";
import dotenv from "dotenv";
import cors from "cors"

import notesRoutes from "./src/routes/notesRoutes.js"
import connectDB from "./src/config/db.js";
import rateLimiter from "./src/middleware/rateLimiter.js";


dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(rateLimiter);


app.use("/api/notes", notesRoutes);

connectDB().then(() => {
    app.listen(5001, () => {
        console.log("server is running on port 5001")
    })
})
