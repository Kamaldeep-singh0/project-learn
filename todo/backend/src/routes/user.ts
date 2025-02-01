import express from "express";

const app = express.Router();

app.get("/details",(req,res)=>{
   res.status(200).json({
    name: "XYX",
    Age : "13",
    heigth : "6ft"
   })
})

export default app;