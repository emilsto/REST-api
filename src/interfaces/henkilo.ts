import {Document} from "mongoose";

export default interface IHenkilo extends Document {
    etunimi: String,
    sukunimi: String,
    ika: Number
}