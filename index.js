import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import busRoute from "./routes/bus.js"
import seatRoute from "./routes/seat.js"
import usersRoute from "./routes/users.js"

const app = express()
dotenv.config()

const connect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MONGODB")
      } catch (error) {
        throw error 
      }
};

mongoose.connection.on("disconnected", ()=>{
    console.log("MONGODB disconnected")
} )

mongoose.connection.on("connected", ()=>{
    console.log("MONGODB connected")
} )

app.get("/", (req, res)=> {
    res.send("hello first request")
})

//middlewares

app.use(express.json())
app.use("/auth", authRoute);
app.use("/bus", busRoute);
app.use("/seat", seatRoute);
app.use("/users", usersRoute);


app.listen(8800, ()=>{
    connect()
    console.log("Connected to backend")
});