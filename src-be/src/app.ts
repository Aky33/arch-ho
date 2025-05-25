import express, { json } from 'express';
import cors from 'cors';
const app = express();
const port = process.env.PORT || 8080;

import kategorieRoute from './routes/kategorie-route.js';
import receptRoute from './routes/recept-route.js';
import errorMiddleware from './middlewares/error-middleware.js';

app.use(cors({
   origin: 'http://localhost:5173',
   credentials: true 
}))

//Middleware na parsování json
app.use(json());
app.use('/kategorie', kategorieRoute);
app.use('/recepty', receptRoute);

app.use(errorMiddleware);

app.listen(port, () => {
    console.log(`Server běží na http://localhost:${port}`);
});