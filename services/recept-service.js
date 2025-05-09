import dao from '../daos/recept-dao.js';

class ReceptService {
    nactiVse() {
        return dao.nactiVse();
    }

    nactiPodleId(id) {
        return dao.nactiPodleId(id);
    }

    nactiPodleIdKategorie(idKategorie) {
        return dao.nactiPodleIdKategorie(idKategorie);
    }

    nactiNahodne(idKategorie, limit) {
        const kategorie = this.nactiPodleIdKategorie(idKategorie);
        const len = kategorie.length;
        if (len <= limit) {
            return kategorie;
        }

        const vylosovanaCisla = [];
        const vysledek = [];
        for (let i = 0; i < limit; i++) {
            let nahodneCislo = randomInt(len);
            while (vylosovanaCisla.includes(nahodneCislo)) {
                nahodneCislo = randomInt(len);
            }

            vylosovanaCisla.push(nahodneCislo);
            vysledek.push(kategorie[nahodneCislo]);
        }

        return vysledek;
    }

    vloz(idKategorie, nazev, postup) {
        return dao.vloz(idKategorie, nazev, postup);
    }
}

function randomInt(max) {
    return Math.floor(Math.random() * max);
}

export default new ReceptService();