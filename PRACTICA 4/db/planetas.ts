import mongoose from "npm:mongoose@7.6.3";
import { Planetas } from "../types.ts";

const Schema = mongoose.Schema;

const PlanetaSchema = new Schema({

    idPeople: [{ type: Schema.Types.ObjectId, ref: "personas" }]
});

export type PlanetaModelType = mongoose.Document & Omit<Planetas, "id">;
export default mongoose.model<PlanetaModelType>("Planetas", PlanetaSchema); //Exporto el modelo de datos de la plantilla en la base de datos
