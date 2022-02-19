import mongoose from "mongoose";
import config from 'config';

//Connect to mongoDB (https://cloud.mongodb.com/)
function connect(){
const db_URL = config.get<string>("db_connect");


return mongoose.connect(db_URL)
.then(() =>{
    console.log("Connected to database");
}).catch((error) =>{
    console.error("Connection failed");
    process.exit(1);
})
}

export default connect;