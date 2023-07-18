import express from "express";
import  {APP_PORT} from "./config"
import routes from "./routes";
import { errorHandler } from "./middleware/errorHandler"
const app   = express();

app.use(express.json());
app.use("/",routes)
app.use(errorHandler)
app.listen(APP_PORT,()=>console.log("Listing on port " + APP_PORT))