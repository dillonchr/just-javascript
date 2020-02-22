const express = require('express');
const cors = require('cors');
const app = express();
const fetch = require('node-fetch');

const SERVER_API_URL = process.env.SERVER_API_URL || 'http://localhost:3009/login';

app.use(cors());

app.get('/login', (req, res) => {
    const username = req.query.email;
    const password = req.query.password;

    fetch(SERVER_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    }, (err, response) => {
        if (!err) {
            const apiToken = response.apiToken;
            res.send(JSON.stringify({status: response.status, apiToken: apiToken, username: username}));
        } else {
            res.send(JSON.stringify({error: true, message: err.message}));
        }
    });
});

const products = [
    {name: 'Screwdriver', cost: 5, price: 40},
    {name: 'Hammer', cost: 5, price: 400},
    {name: 'Drill', cost: 5, price: 40},
];

app.get('/product/:id', (req, res) => {
    const id = req.params.id;
    const product = products[id];
    if (product) {
        res.send(JSON.stringify(product));
    } else {
        res.sendStatus(404).send('Not Found');
    }
});

app.get('/add/:name/:cost/:price', (req, res) => {
    const id = products.length;
    const product = req.params;
    products.push(product);
    res.send(JSON.stringify({id: id}));
});

app.listen(3009);

