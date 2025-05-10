import dao from '../daos/kategorie-dao.js';

class KategorieService {
    nactiVse() {
        return dao.nactiVse();
    }

    nactiPodleId(id: number) {
        return dao.nactiPodleId(id);
    }

    vloz(nazev: string) {
        return dao.vloz(nazev);
    }
}

export default new KategorieService();