import dao from '../daos/kategorie-dao.js';

class KategorieService {
    nactiVse() {
        return dao.nactiVse();
    }

    nactiPodleId(id) {
        return dao.nactiPodleId(id);
    }

    vloz(nazev) {
        return dao.vloz(nazev);
    }
}

export default new KategorieService();