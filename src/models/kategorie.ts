export class Kategorie {
    id!: number;
    nazev!: string;

    constructor(data: {nazev: string}) {
        this.nazev = data.nazev;
    }
}