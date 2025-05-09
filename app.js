import express, { json } from 'express';
const app = express();

import kategorieRoute from './routes/kategorie-route.js';
import receptRoute from './routes/recept-route.js';

//Middleware na parsování json
app.use(json());
app.use('/kategorie', kategorieRoute);
app.use('/recepty', receptRoute);

app.get('/', (req, res) => {
    res.json({message: `Arch BE domácí úkol`});
});

export default app;