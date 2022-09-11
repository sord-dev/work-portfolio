import mongoose from "mongoose";

const stringRequired = {
    type: String,
    required: true
} 

const ProjectSchema = new mongoose.Schema({
  title: stringRequired,
  subtitle: stringRequired,
  description: stringRequired,
  features: stringRequired,
  lessons: stringRequired,
  architecture: stringRequired,
  futureFeatures: stringRequired,
});

export const Project = mongoose.models.project || mongoose.model('project', ProjectSchema)