import  HttpError from"../helpers/HttpError.js"
import  ctrlWrapper from"../utils/ctrlWrapper.js"
import  {Products} from "../models/products.js"
import { Score } from "../models/score.js"
import  {Purchased} from "../models/itemPurchased.js"

const getProducts = async (req, res) => {
  const result = await Products.find({});
  
  if (result.length === 0) {
    throw HttpError(404, `Not found`);
  } else {
    res.status(200).json(result);
  }
}; 

const getScore = async (req, res) => {
  const lastScore = await Score.findOne().sort({ number: -1 });
  const lastNumber = lastScore ? lastScore.number : 0;
  const newScore = await Score.create({ ...req.body, number: lastNumber + 1 });
  res.status(201).json(newScore);
}; 

const itemPurchased = async (req, res) => {
  
  const result = await Purchased.create({ ...req.body });
  res.status(201).json(result);
}; 


export default {
  getProducts: ctrlWrapper(getProducts),
  getScore: ctrlWrapper(getScore),
  itemPurchased: ctrlWrapper(itemPurchased),
};