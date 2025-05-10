import { Kategorie } from '../models/kategorie.js';
import kategorieService  from '../services/kategorie-service.js';

class KategorieController {
    nactiVse(req: any, res: any, next: any) {
        try {
            const kategorie = kategorieService.nactiVse();
            res.json(kategorie);
        } catch (err) {
            next(err);
        }
    }

    nactiPodleId(req: any, res: any, next: any) {
        try {
            const{id} = req.params;
            const kategorie = kategorieService.nactiPodleId(id);
            res.json(kategorie);
        } catch (err) {
            next(err);
        }
    }

    vloz(req: any, res: any, next: any) {
        try {
            const model = new Kategorie(req.body);
            const id = kategorieService.vloz(model);
            res.json(id);
        } catch (err) {
            next(err);
        }
    }
}

export default new KategorieController();