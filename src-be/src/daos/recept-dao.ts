import db from '../config/db-sqlite.js';
import { Recept } from '../models/recept.js';

class ReceptDao {
    constructor() {
        db.prepare(`
            CREATE TABLE IF NOT EXISTS recept (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                idKategorie INTEGER FOREING KEY REFERENCES kategorie(id),
                nazev TEXT NOT NULL,
                postup TEXT NULL
            )
        `).run();
    }

    nactiVse(): Recept[] {
        const sql = `SELECT * FROM recept`;
        return db.prepare<Recept[], Recept>(sql).all();
    }

    nactiPodleId(id: number): Recept | undefined {
        const sql = `SELECT * FROM recept WHERE id = ?`;
        return db.prepare<number, Recept>(sql).get(id);
    }

    nactiPodleIdKategorie(idKategorie: number): Recept[] {
        const sql = `SELECT * FROM recept WHERE idKategorie = ?`;
        return db.prepare<number, Recept>(sql).all(idKategorie);
    }

    vloz(model: Recept): number | bigint {
        const sql = `INSERT INTO recept (idKategorie, nazev, postup) VALUES (?, ?, ?)`;
        return db.prepare(sql).run(model.idKategorie, model.nazev, model.postup).lastInsertRowid;
    }
}

export default new ReceptDao();