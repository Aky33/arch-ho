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
        const recepty = this.nactiPodleIdKategorie(idKategorie);
        const len = recepty.length;

        //pokud je receptů méně nebo stejně jako chtěný limit, nemá smysl pokračovat
        if (len <= limit) {
            return recepty;
        }

        const vylosovanaCisla: number[] = [];
        const vysledek: Recept[] = [];
        for (let i = 0; i < limit; i++) {
            //vylosujeme náhodné číslo v rozmezí počtu receptů
            let nahodneCislo = randomInt(len);

            //kdyby náhodou jsme vylosovily takové, které už je použité losujeme znovu (není to úplně optimální a mělo by jít lépe)
            while (vylosovanaCisla.includes(nahodneCislo)) {
                nahodneCislo = randomInt(len);
            }

            //vylosované číslo a odpovídající recept si uložíme do separátních polí
            vylosovanaCisla.push(nahodneCislo);
            vysledek.push(recepty[nahodneCislo]);
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