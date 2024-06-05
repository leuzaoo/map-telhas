const { Schema } = require("mongoose");

const contactSchema = new Schema({
  fullname: {
    type: String,
    required: [true, "Nome precisa ser preenchido."],
    trim: true,
    minLength: [2, "Nome deve conter no mínimo 2 caracteres."],
    maxLenght: [50, "Nome deve conter no máximo 50 caracteres."],
  },
  email: {
    type: String,
    required: [true, "Email precisa ser preenchido."],
    match: [
      /^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i,
      "Endereço de email inválido.",
    ],
  },
  message: {
    type: String,
    required: [true, "Preencha o campo com sua mensagem."],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;
