import express from "express";
import userRoute from "./routes/user"

const app = express();

app.use(express.json());
app.use('/api/user',userRoute);
// app.use('/api/data');

app.listen(3000);