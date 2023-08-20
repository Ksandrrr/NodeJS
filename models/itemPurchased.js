import { Schema, model } from "mongoose";
import Joi from "joi";

import handleMongooseError from "../helpers/HandleMongooseError.js";

const itemPurchasedSchema = new Schema(
  {
    receipt_id: {
      type: Number,
      required: [true, "Set receipt_id for purchased"],
    },
    product_id: {
      type: Number,
      required: [true, "Set product_id for purchased"],
    },
    quantity: {
      type: Number,
      required: [true, "Set quantity for purchased"],
    },
    price: {
      type: Number,
      required: [true, "Set price for product"],
    },
  },
  { versionKey: false }
);

const itemPurchasedAddSchema = Joi.object({
  receipt_id: Joi.string().required().messages({
    "any.required": `"missing required receipt_id field"`,
  }),
  product_id: Joi.string().required().messages({
    "any.required": `"missing required product_id field"`,
  }),
   quantity: Joi.string().required().messages({
    "any.required": `"missing required quantity field"`,
  }),
  price: Joi.string().required().messages({
    "any.required": `"missing required price field"`,
  }),
});

itemPurchasedSchema.post("save", handleMongooseError);

const Purchased = model("itemPurchased", itemPurchasedSchema);

export { itemPurchasedAddSchema, Purchased };
