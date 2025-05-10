import express, { json } from 'express';
const app = express();
const port = process.env.PORT || 8080;

import kategorieRoute from './routes/kategorie-route.js';
import receptRoute from './routes/recept-route.js';

//Middleware na parsování json
app.use(json());
app.use('/kategorie', kategorieRoute);
app.use('/recepty', receptRoute);

app.listen(port, () => {
    console.log(`Server běží na http://localhost:${port}`);
});