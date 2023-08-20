import  express from 'express'

import controller from"../../controllers/index.js"


const router = express.Router();

router.get("/list", controller.getProducts);

router.post("/score", controller.getScore);

router.post("/receipt", controller.itemPurchased);

export default router;
