const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
const fileUpload = require('express-fileupload');
//Mongo DB Client & uri
const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.oskdg.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

app.use(cors());
app.use(express.static('images'));
app.use(fileUpload());
app.use(bodyParser.json());

// Test api
app.get('/', (req, res) => {
    res.send(['this', 'is', 'working'])
})

//MongoDB
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const orderCollection = client.db("creativeAgency").collection("serviceOrder");
    const reviewsCollection = client.db("creativeAgency").collection("reviews");

    app.post('/addOrder', (req, res) => {
        const file = req.files.file;
        const name = req.body.name;
        const email = req.body.email;
        const type = req.body.type;
        const details = req.body.details;
        const newImg = req.files.file.data;
        const encImg = newImg.toString('base64');
        const image = null;
        const orderData = { name, email, type, details, image }

        orderCollection.insertOne(orderData)
            .then(result => {
                console.log(result.insertedCount)
            })
    })

    app.get('/allOrders', (req, res) => {
        orderCollection.find({})
            .toArray((err, documents) => {
                res.send(documents)
            })
    })
    app.get('/singleOrder', (req, res) => {
        const email = req.query.email;
        orderCollection.find({ email: email })
            .toArray((err, documents) => {
                res.send(documents)
            })
    })

    app.post('/addreview', (req, res) => {
        const review = req.body;
        reviewsCollection.insertOne(review)
            .then(result => res.send(result.insertedCount))
            .catch(err => console.log(err))
    })

    app.get('/reviews', (req, res) => {
        reviewsCollection.find({})
            .toArray((err, documents) => {
                res.send(documents)
            })
    });



});

app.listen(process.env.PORT || 5000)