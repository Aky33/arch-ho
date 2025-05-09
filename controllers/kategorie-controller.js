const kategorieService = require('../services/kategorie-service');

class KategorieController {
    nactiVse(req, res, next) {
        try {
            const kategorie = kategorieService.nactiVse();
            res.json(kategorie);
        } catch (err) {
            next(err);
        }
    }

    nactiPodleId(req, res, next) {
        try {
            const{id} = req.body;
            const kategorie = kategorieService.nactiPodleId(id);
            res.json(kategorie);
        } catch (err) {
            next(err);
        }
    }

    vloz(req, res, next) {
        try {
            const {nazev} = req.body;
            const id = kategorieService.vloz(nazev);
            res.json(id);
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new KategorieController();