import { Request, Response } from "npm:express@4.18.2";
import DimensionModel from "../db/dimensiones.ts"; 
import PlanetaModel from "../db/planetas.ts";

const postDimension = async (req: Request, res: Response) => {
  try {
    const { nombre, id_planeta } = req.body;
    const planeta = await PlanetaModel.findOne({ _id: id_planeta }).exec();
    if (!planeta) {
      res.status(404).send("Planeta no encontrado");
      return;
    }
    const dimension = await DimensionModel.create({ nombre, id_planeta });
    res.status(201).json(dimension);
  } catch (error) {
    res.status(500).send("Error al crear la dimension");
  }
};

export default postDimension;