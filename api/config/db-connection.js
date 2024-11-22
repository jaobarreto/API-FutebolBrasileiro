import mongoose from "mongoose";

require('dotenv').config();

const mongoose = require('mongoose');

const connect = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log('Conectado ao MongoDB'))
        .catch(err => console.error('Erro ao conectar ao MongoDB:', err));
};

connect();


const connection = mongoose.connection;

connection.on("error", () => {
  console.log("Erro ao conectar com o mongoDB Atlas.");
});

connection.on("open", () => {
  console.log("Conectado ao mongoDB Atlas com sucesso.");
});

connect()

export default mongoose;