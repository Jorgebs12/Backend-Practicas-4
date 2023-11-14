import mongoose from "npm:mongoose@7.6.3";
import { Dimensiones } from "../types.ts";

const Schema = mongoose.Schema;

const DimensionesSchema = new Schema({
    
    idPlanetario: [{ type: Schema.Types.ObjectId, ref: "Planetas" }]
});

export type DimensionModelType = mongoose.Document & Omit<Dimensiones, "id">;
export default mongoose.model<DimensionModelType>("dimensiones", DimensionesSchema); 
