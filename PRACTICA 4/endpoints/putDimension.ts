import { Request, Response } from "npm:express@4.18.2";
import DimensionModel from "../db/dimensiones.ts"; 

export const putDimension = async (req: Request, res: Response) => {
    try {
        const { idPlanetario } = req.body;
        const { id } = req.params;
        const dimension = await DimensionModel.findByIdAndUpdate(id, { idPlanetario }, { new: true });
        if (dimension) {
            res.status(200).json(dimension);
        } else {
            res.status(404).json({ message: "Dimension not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};