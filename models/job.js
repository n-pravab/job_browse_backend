import mongoose from "mongoose";

const salaryEnum = [
  "Under $50K",
  "$50K - $60K",
  "$60K - $70K",
  "$70K - $80K",
  "$80K - $90K",
  "$90K - $100K",
  "$100K - $125K",
  "$125K - $150K",
  "$150K - $175K",
  "$175K - $200K",
  "Over $200K",
];

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["Full-time", "Part-time", "Contract", "Internship", "Temporary"],
      required: true,
    },
    salary: {
      type: String,
      enum: salaryEnum,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    company: {
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      contactEmail: {
        type: String,
        required: true,
      },
      contactPhone: {
        type: String,
        required: true,
      },
    },
  },
  { timestamps: true }
);

const Job = mongoose.model("Job", jobSchema);

export default Job;
