import mongoose from "mongoose";
import { Schema } from "mongoose";
import IHenkilo from "../interfaces/henkilo";

const henkiloSchema: Schema = new Schema({
    etunimi: {
        type: String,
        required: true
        },
    sukunimi: {
        type: String,
        required: true
    },
    ika: {
        type: Number,
        required: true
    },
    
})

export default mongoose.model<IHenkilo>("Henkilo", henkiloSchema);