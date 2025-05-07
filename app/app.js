const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

app.listen(port, () => {
    console.log(`Server běží na http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.json({message: "Arch BE domácí úkol"});
});

app.get('/kategorie', (req, res) => {

});
app.post(
    
)

app.get('/kategorie/:id', (req, res) => {

});

app.post('/kategorie/vloz', (req, res) => {

});