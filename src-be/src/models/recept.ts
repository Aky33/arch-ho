export class Recept {
    id!: number;
    idKategorie!: number;
    nazev!: string;
    postup?: string;

    constructor(data: {idKategorie: number, nazev: string, postup: string}) {
        this.idKategorie = data.idKategorie;
        this.nazev = data.nazev;
        this.postup = data.postup;
    }
}