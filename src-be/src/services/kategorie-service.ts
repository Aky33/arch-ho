import dao from '../daos/kategorie-dao.js';
import { Kategorie } from '../models/kategorie.js';

class KategorieService {
    nactiVse(): Kategorie[] {
        return dao.nactiVse();
    }

    nactiPodleId(id: number): Kategorie | undefined {
        return dao.nactiPodleId(id);
    }

    vloz(model: Kategorie): number | bigint {
        return dao.vloz(model);
    }
}

export default new KategorieService();