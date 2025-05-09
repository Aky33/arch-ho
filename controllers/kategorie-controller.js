import kategorieService  from '../services/kategorie-service.js';

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
            const{id} = req.params;
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

export default new KategorieController();