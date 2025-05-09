import receptService from '../services/recept-service.js';

class ReceptController {
    nactiVse(req, res, next) {
        try {
            const kategorie = receptService.nactiVse();
            res.json(kategorie);
        } catch (err) {
            next(err);
        }
    }

    nactiPodleId(req, res, next) {
        try {
            const{id} = req.body;
            const kategorie = receptService.nactiPodleId(id);
            res.json(kategorie);
        } catch (err) {
            next(err);
        }
    }

    vloz(req, res, next) {
        try {
            const {nazev} = req.body;
            const id = receptService.vloz(nazev);
            res.json(id);
        } catch (err) {
            next(err);
        }
    }
}

export default new ReceptController();