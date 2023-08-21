import { Schema, model, models} from "mongoose";

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "title is required"],
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default models.Task || model('Task', taskSchema)