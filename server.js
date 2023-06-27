import express from 'express';
import dotenv from "dotenv";
import cors from 'cors';
import bodyParser from 'body-parser';
import {v4 as uuid } from 'uuid'; 
import path from 'path';


import Connection from './database/db.mjs';
import DefaultData from './defaults/default.mjs';
import Router from './routes/route.mjs';


// import authRoutes from './routes/authRoute.mjs';
// import categoryRoutes from './routes/categoryRoutes.mjs';
// import productRoutes from "./routes/productRoutes.mjs";


const __dirname = path.resolve();


const app = express();

dotenv.config();

// routes
app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);

// app.use(express.static(path.join(__dirname , "./client/build")));
// app.get('*', function (_, res) {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"), function(err){
//         res.status(500).send(err);
//     })

// })





// app.use('/milk', milk);
//
// app.use("/api/v1/auth", authRoutes);
// app.use("/api/v1/category", categoryRoutes);
// app.use("/api/v1/product", productRoutes);




// const PORT=8000;
const PORT= process.env.PORT || 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const URL= process.env.MONGODB_URI || `mongodb://${USERNAME}:${PASSWORD}@ac-qqjrqlm-shard-00-00.7adbo0k.mongodb.net:27017,ac-qqjrqlm-shard-00-01.7adbo0k.mongodb.net:27017,ac-qqjrqlm-shard-00-02.7adbo0k.mongodb.net:27017/?ssl=true&replicaSet=atlas-hgw6vo-shard-0&authSource=admin&retryWrites=true&w=majority`;


// Connection(USERNAME,PASSWORD);
Connection(URL);

// if(process.env.NODE_ENV === 'production'){
//     app.use(express.static('/client/build'))
// }


app.use(express.static(path.join(__dirname , "./client/build")));
app.get('*', function (_, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"), function(err){
        res.status(500).send(err);
    })

})



app.listen( PORT , () => console.log(`Server is running successfully on PORT ${PORT}`) );



DefaultData();
// MilkDefaultData();


export let paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID;
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE;
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID;
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID;
paytmParams['ORDER_ID'] = uuid();
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID;
paytmParams['TXN_AMOUNT '] = '100';
// paytmParams['CALLBACK_URL'] = 'http://localhost:8000/callback';
paytmParams['CALLBACK_URL'] = 'callback';
paytmParams['EMAIL'] = 'sanya14n@gmail.com.com';
paytmParams['MOBILE_NO'] = '8790675409';


