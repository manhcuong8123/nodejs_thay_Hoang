import  express from "express";
import userRouter from "./routers/user.js"
import dotenv from "dotenv"
dotenv.config();


const app = express();
app.use(express.json())

app.use("/", userRouter);



app.listen(process.env.PORT,()=>{
    console.log(`đã chạy ở  ${process.env.PORT}`);
})

export const viteNodeApp = app;
