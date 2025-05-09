import dao from '../daos/recept-dao.js';

class ReceptService {
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

export default new ReceptService();