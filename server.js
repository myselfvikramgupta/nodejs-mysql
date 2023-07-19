import express from "express";
import { APP_ENVIRONMENT,APP_PORT } from "./config";
import routes from "./routes";
import { errorHandler } from "./middleware/errorHandler";
const app = express();

app.use(express.json());
app.use("/api", routes);

// Get Environment
app.get("/", (req, res) => {
  res.send(`<h1>${APP_ENVIRONMENT} Environment </h1>`);
});

// fallback url
app.all('*', (req, res) => {
  res.status(404).send('<h1>404! Page not found</h1>');
});
app.use(errorHandler);
app.listen(APP_PORT, () => console.log("Listing on port " + APP_PORT));
