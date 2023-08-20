import { Schema, model } from "mongoose";
import Joi from "joi"

import handleMongooseError from "../helpers/HandleMongooseError.js"

const scoreSchema = new Schema(
  {
    number: {
      type: Number,
      required: [true, "Set number for score"],
    },
    date: {
      type: Number,
      required: [true, "Set date for score"],
    },
    total: {
      type: Number,
      required: [true, "Set total for score"],
        },
  },
  { versionKey: false }
);

const scoreAddSchema = Joi.object({
  date: Joi.string().required().messages({
    "any.required": `"missing required date field"`,
  }),
  total: Joi.string().required().messages({
    "any.required": `"missing required total field"`,
  }),
});

scoreSchema.post("save", handleMongooseError);

const Score = model("score", scoreSchema);

export  {
  scoreAddSchema,
  Score,
};