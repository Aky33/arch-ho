const express = require('express');
const router = express.Router();

const kategorieDao = require('../daos/kategorie-dao');

router.get('/', (req, res) => {
    res.json({message: kategorieDao.nactiVse()});
});

router.post('/', (req, res) => {
    if (req.body === undefined) {
        throw new Error("Nevalidní data");
    }

    const {nazev} = req.body;

    kategorieDao.vloz(nazev);

    res.json({
        message: `Vložení nové kategorie`,
        data: nazev
    });
});

router.get('/:id', (req, res) => {
    res.json({message: `Detail kategorie s id:${req.params.id}`});
});

router.put('/:id', (req, res) => {
    res.json({message: `Update kategorie`});
});

module.exports = router;