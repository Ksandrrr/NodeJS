import { Schema, model } from "mongoose";
import Joi from "joi"

import handleMongooseError from "../helpers/HandleMongooseError.js"

const productsSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for product"],
    },
    price: {
      type: Number,
      required: [true, "Set price for product"],
        },
  },
  { versionKey: false }
);

const productsAddSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": `"missing required name field"`,
  }),
  price: Joi.string().required().messages({
    "any.required": `"missing required price field"`,
  }),

});

productsSchema.post("save", handleMongooseError);

const Products = model("products", productsSchema);

export  {
  productsAddSchema,
  Products,
};