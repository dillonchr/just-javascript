const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/login', (req, res) => {
    res.send(JSON.stringify(req.query));
});
app.listen(3009);

