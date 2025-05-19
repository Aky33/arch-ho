import db from '../config/db-sqlite.js';
import { Kategorie } from '../models/kategorie.js';

class KategorieDao {
    constructor() {
        db.prepare(`
            CREATE TABLE IF NOT EXISTS kategorie (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nazev TEXT NOT NULL
            )
        `).run();
    }

    nactiVse(): Kategorie[] {
        const sql = `SELECT * FROM kategorie`;
        return db.prepare<Kategorie[], Kategorie>(sql).all();
    }

    nactiPodleId(id: number): Kategorie | undefined {
        const sql = `SELECT * FROM kategorie WHERE id = ?`;
        return db.prepare<number, Kategorie>(sql).get(id);
    }

    vloz(model: Kategorie): number | bigint {
        const sql = `INSERT INTO kategorie (nazev) VALUES (?)`;
        return db.prepare(sql).run(model.nazev).lastInsertRowid;
    }
}

export default new KategorieDao();