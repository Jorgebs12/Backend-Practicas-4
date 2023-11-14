import mongoose from "npm:mongoose@7.6.3";
import { Personas } from "../types.ts";

const Schema = mongoose.Schema;

const PersonaSchema = new Schema({

    nombre: {type: String, requiered: true}
});

export type PersonaModelType = mongoose.Document & Omit<Personas, "id">;
export default mongoose.model<PersonaModelType>("Planetas", PersonaSchema); 


