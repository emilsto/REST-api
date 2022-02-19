import mongoose from "mongoose";
import config from "config";

const henkiloSchema = new mongoose.Schema({
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
    }
})

const Henkilo = mongoose.model("Henkilo", henkiloSchema);

export default Henkilo;