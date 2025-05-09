const dao = require('../daos/kategorie-dao');

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

module.exports = new KategorieService();