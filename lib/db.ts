import mongoose from 'mongoose';
import { Schema, models, model } from 'mongoose';

const dbConnect = async () => {
  try { 
    await mongoose.connect(process.env.MONGODB_URI!)
  } catch(error) {
    console.log("not connected")
  }
}

const ExplanationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    topic: { type: String, required: true },
    explanation: { type: String, required: true },
  }, {
    timestamps: true,
});

const Explanation = models.Explanation || model("Explanation", ExplanationSchema);

export { dbConnect, Explanation }
