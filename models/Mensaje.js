import mongoose from "mongoose";

const MensajeSchema = new mongoose.Schema(
  {
    sistema: { type: String, required: true },
    year: { type: Number, required: true },
    idUsuario: { type: mongoose.Types.ObjectId, required: true },
    mensaje: { type: String, required: true },
    eliminado: { type: Boolean, default: false },
    idConversacion: { type: mongoose.Types.ObjectId, required: true },
  },
  { timestamps: true }
);

export default MensajeSchema;
