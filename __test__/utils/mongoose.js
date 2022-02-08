import mongoose from 'mongoose';
// require('dotenv').config();

export const connect = () => mongoose.connect("mongodb://localhost:27017/bot-test", { useNewUrlParser: true });

export const disconnect = () => mongoose.connection.close();