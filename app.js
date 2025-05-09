const express = require('express');
const app = express();

const kategorieRoute = require('./routes/kategorie-route');
const receptRoute = require('./routes/recept-route');

//Middleware na parsování json
app.use(express.json());
app.use('/kategorie', kategorieRoute);
app.use('/recepty', receptRoute);

app.get('/', (req, res) => {
    res.json({message: `Arch BE domácí úkol`});
});

module.exports = app;