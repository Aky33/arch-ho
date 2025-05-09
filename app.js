const express = require('express');
const app = express();

const kategorieRoute = require('./routes/kategorie-route');

//Middleware na parsování json
app.use(express.json());
app.use('/kategorie', kategorieRoute);

app.get('/', (req, res) => {
    res.json({message: `Arch BE domácí úkol`});
});

module.exports = app;