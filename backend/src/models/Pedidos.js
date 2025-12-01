import mongoose from "mongoose";

const { Schema } = mongoose;

const PedidosSchema = new Schema(
  {
    usuario: {
      type: Schema.Types.ObjectId,
      ref: "Usuario",
      required: true
    },

    productos: [
      {
        producto: {
          type: Schema.Types.ObjectId,
          ref: "Producto", // Usa tu modelo Producto actual
          required: true
        },
        cantidad: {
          type: Number,
          required: true,
          min: 1
        },
        precioUnitario: {
          type: Number,
          required: true
        }
      }
    ],

    total: {
      type: Number,
      required: true
    },

    estado: {
      type: String,
      enum: ["pendiente", "procesando", "enviado", "completado", "cancelado"],
      default: "pendiente"
    }
  },
  { timestamps: true }
);

export default mongoose.model("Pedidos", PedidosSchema);
