import dao from '../daos/recept-dao.js';
import { HttpError } from '../models/errors/http-error.js';
import { Recept } from '../models/recept.js';
import kategorieService from './kategorie-service.js';

class ReceptService {
    nactiVse(): Recept[] {
        return dao.nactiVse();
    }

    nactiPodleId(id: number): Recept | undefined {
        return dao.nactiPodleId(id);
    }

    nactiPodleIdKategorie(idKategorie: number): Recept[] {
        return dao.nactiPodleIdKategorie(idKategorie);
    }

    nactiNahodne(idKategorie: number, limit: number): Recept[] {
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

    vloz(model: Recept): number | bigint {
        const kategorie = kategorieService.nactiPodleId(model.idKategorie);
        if (kategorie === undefined) 
            throw new HttpError(400, "Recept musí mít existujicí kategorii!");

        return dao.vloz(model);
    }
}

function randomInt(max: number): number {
    return Math.floor(Math.random() * max);
}

export default new ReceptService();