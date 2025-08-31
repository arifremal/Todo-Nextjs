import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://aremal:aremal123@cluster0.ll62dyz.mongodb.net/todo-app"
  );
  console.log('bd connected')
};
