const express = require('express');
const router = express.Router();

const kategorieController = require('../controllers/kategorie-controller');

router.get('/', kategorieController.nactiVse);
router.post('/', kategorieController.vloz);
router.get('/:id', kategorieController.nactiPodleId);

router.put('/:id', (req, res) => {
    res.json({ message: `Update kategorie` });
});

module.exports = router;