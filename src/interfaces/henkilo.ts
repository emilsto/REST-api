import {Document} from "mongoose";

//interface for Schema
export default interface IHenkilo extends Document {
    etunimi: String,
    sukunimi: String,
    ika: Number
}