import db from '../config/db-sqlite.js';

class KategorieDao {
    constructor() {
        db.prepare(`
            CREATE TABLE IF NOT EXISTS kategorie (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nazev TEXT NOT NULL
            )
        `).run();
    }

    nactiVse() {
        const sql = `SELECT * FROM kategorie`;
        return db.prepare(sql).all();
    }

    nactiPodleId(id: number) {
        const sql = `SELECT * FROM kategorie WHERE id = ?`;
        return db.prepare(sql).get(id);
    }

    vloz(nazev: string) {
        const sql = `INSERT INTO kategorie (nazev) VALUES (?)`;
        return db.prepare(sql).run(nazev).lastInsertRowid;
    }
}

export default new KategorieDao();