import mongoose from "mongoose";
import MensajeSchema from "../models/Mensaje.js";

const addMensaje = async (req, res) => {
  const { sistema, year, idUsuario, mensaje, idConversacion } = req.body;
  try {
    const nombreColeccion = `${sistema}${year}`;
    //Verifica todas las collections en la base de datos regresa []
    const collections = await mongoose.connection.db
      .listCollections()
      .toArray();

    const existeColeccion = collections.some(
      (collection) => collection.name === nombreColeccion
    );
    if (!existeColeccion) {
      await mongoose.connection.createCollection(nombreColeccion);
    }
    const Mensaje = mongoose.model("Mensaje", MensajeSchema, nombreColeccion);

    const nuevoMensaje = await Mensaje.create({
      sistema,
      year,
      idUsuario,
      mensaje,
      idConversacion,
    });
    res.status(200).json({ success: true, nuevoMensaje });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getData = async (req, res) => {
  const { sistema, year, tipoId } = req.body;
  try {
    let data;
    const nombreColeccion = `${sistema}${year}`;
    const Mensaje = mongoose.model("Mensaje", MensajeSchema, nombreColeccion);
    if (tipoId === "conversacion") {
      data = await Mensaje.find({ idConversacion: req.params.id });
    } else if (tipoId === "mensaje") {
      data = await Mensaje.findById(req.params.id);
    }
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export { addMensaje, getData };
