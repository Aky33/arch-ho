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
            const{id} = req.params;
            const kategorie = receptService.nactiPodleId(id);
            res.json(kategorie);
        } catch (err) {
            next(err);
        }
    }

    nactiNahodne(req, res, next) {
        try {
            const {idKategorie, limit} = req.query;
            const kategorie = receptService.nactiNahodne(idKategorie, limit);
            res.json(kategorie);
        } catch (err) {
            next(err);
        }
    }

    vloz(req, res, next) {
        try {
            const {idKategorie, nazev, postup} = req.body;
            const id = receptService.vloz(idKategorie, nazev, postup);
            res.json(id);
        } catch (err) {
            next(err);
        }
    }
}

export default new ReceptController();