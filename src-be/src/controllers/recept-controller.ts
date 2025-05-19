import receptService from '../services/recept-service.js';
import { Recept } from '../models/recept.js';

class ReceptController {
    nactiVse(req: any, res: any, next: any) {
        try {
            const recepty = receptService.nactiVse();
            res.json(recepty);
        } catch (err) {
            next(err);
        }
    }

    nactiPodleId(req: any, res: any, next: any) {
        try {
            const{id} = req.params;
            const recepty = receptService.nactiPodleId(id);
            res.json(recepty);
        } catch (err) {
            next(err);
        }
    }

    nactiNahodne(req: any, res: any, next: any) {
        try {
            const {idKategorie, limit} = req.query;
            const recepty = receptService.nactiNahodne(idKategorie, limit);
            res.json(recepty);
        } catch (err) {
            next(err);
        }
    }

    vloz(req: any, res: any, next: any) {
        try {
            const model = new Recept(req.body);
            const id = receptService.vloz(model);
            res.json(id);
        } catch (err) {
            next(err);
        }
    }
}

export default new ReceptController();