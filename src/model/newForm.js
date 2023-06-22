import mongoose from "mongoose";

const FormSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
 
});

const newForm_model = mongoose.model("newForm", FormSchema);

export default newForm_model;