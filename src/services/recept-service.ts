import dao from '../daos/recept-dao.js';

class ReceptService {
    nactiVse() {
        return dao.nactiVse();
    }

    nactiPodleId(id: number) {
        return dao.nactiPodleId(id);
    }

    nactiPodleIdKategorie(idKategorie: number) {
        return dao.nactiPodleIdKategorie(idKategorie);
    }

    nactiNahodne(idKategorie: number, limit: number) {
        const kategorie = this.nactiPodleIdKategorie(idKategorie);
        const len = kategorie.length;
        if (len <= limit) {
            return kategorie;
        }

        const vylosovanaCisla: number[] = [];
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

    vloz(idKategorie: number, nazev: string, postup: string) {
        return dao.vloz(idKategorie, nazev, postup);
    }
}

function randomInt(max: number) {
    return Math.floor(Math.random() * max);
}

export default new ReceptService();