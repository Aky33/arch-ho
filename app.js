const express = require('express');
const app = express();
const kategorieController = require('./controllers/kategorie-controller');

//Middleware na parsování json
app.use(express.json());
app.use('/kategorie', kategorieController);

app.get('/', (req, res) => {
    res.json({message: `Arch BE domácí úkol`});
});

module.exports = app;