import { nactiVse as _nactiVse, nactiPodleId as _nactiPodleId, vloz as _vloz } from '../daos/recept-dao';

class ReceptService {
    nactiVse() {
        return _nactiVse();
    }

    nactiPodleId(id) {
        return _nactiPodleId(id);
    }

    vloz(nazev) {
        return _vloz(nazev);
    }
}

export default new ReceptService();