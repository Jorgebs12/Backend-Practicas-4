import mongoose from "npm:mongoose@7.6.3";
import { Tardis } from "../types.ts";

const Schema = mongoose.Schema;

const TardisSchema = new Schema({
    
    camuflaje: {type: String, requiered: true},
    numRegeneracion: {type: Number, requiered: true},
    año: {type: Number, requiered: true},
    idDimensiones: [{ type: Schema.Types.ObjectId, ref: "dimensiones" }]
});

export type TardisModelType = mongoose.Document & Omit<Tardis, "id">;

export default mongoose.model<TardisModelType>("Tardis", TardisSchema);

