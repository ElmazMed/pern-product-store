import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors"
import dotenv from "dotenv"
import productsRoute from "./routes/productsRoute.js"

dotenv.config()

const app = express();
const PORT = process.env.PORT

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use("/api/products", productsRoute)

app.listen(PORT, ()=>{console.log(PORT);
})