import config from "config"
import express from "express";
import connect from "./utils/connect";
import HenkiloRoute from "./routers/henkilo";

const port = config.get("port");
const app = express();

//parse request
/*
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
*/

//This seems to do the job of bodyparser
app.use(express.json());


/* ROUTES */
app.use("/api/henkilot", HenkiloRoute);



/* START APP */
app.listen(port, async () => {
    console.log(`listening to port ${port}.`);
    
    //connect db
    await connect();
  });