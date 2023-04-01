
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();


const connectDB = require("./connections/connectDB");
const userRouter = require("./routes/user");
const PORT = process.env.PORT;

const app = express();
connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", userRouter);


app.get("/", async (req, res) => {
    res.json({
        status: "Server is Running",
    });
});

app.listen(PORT, () => {
    console.log("Server is running ...");
});