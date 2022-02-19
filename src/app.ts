import config from "config"
import express from "express";
import connect from "./utils/connect";
import routes from "./routes";

const port = config.get("port");
const app = express();

//start app
app.listen(port, async () => {
    console.log(`listening to port ${port}.`);
    await connect();

    routes(app);
  });