import express from 'express';

import { userSignup, userLogin } from '../controller/user-controller.mjs';
import { getProducts, getProductById } from '../controller/product-controller.mjs';
// import { getMilks , getMilkById } from '../controller/milk-controller.mjs';
import { addPaymentGateway, paytmResponse } from '../controller/payment-controller.js';
import Product from '../model/product-schema.mjs';



const router = express.Router();




router.post('/signup', userSignup);
router.post('/login', userLogin);



router.get('/products', getProducts);
router.get('/product/:id', getProductById);


// router.get('/milks', getMilks);
// router.get('/milk/:id', getMilkById);


router.post('/payment', addPaymentGateway);
router.post('/callback',paytmResponse);


export default router;

