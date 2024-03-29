const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51KWFrCSCtFclrF40KLtCVchmtZ6cVzUt2gYoBUowNh1RhaeXFYNFCuG2tEFEmi6DrNwaM72LG9teMHFHlW15kLdr001RC7z3X1')

// API

//~ App config
const app = express();

//~ Middlewares
app.use(cors({origin:true}));
app.use(express.json());

//~ API routes
app.get('/',(request, response)=>response.status(200).send('Hello world'));

app.post('/payments/create', async (request, response)=>{
    const total = request.query.total;

    console.log('Payment Request Received BOOM!!!! for this amount>>>', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of the currency
        currency:'usd',
    });
    //  OK-created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

//~ Listen Command
exports.api = functions.https.onRequest(app)

//Example end point
//http://localhost:5001/fir-66a45/us-central1/api