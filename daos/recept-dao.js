import db from '../config/db-sqlite.js';

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

    nactiVse() {
        const sql = `SELECT * FROM recept`;
        return db.prepare(sql).all();
    }

    nactiPodleId(id) {
        const sql = `SELECT * FROM recept WHERE id = ?`;
        return db.prepare(sql).get(id);
    }

    vloz(idKategorie, nazev, postup) {
        const sql = `INSERT INTO recept (idKategorie, nazev, postup) VALUES (?, ?, ?)`;
        return db.prepare(sql).run(idKategorie, nazev, postup).lastInsertRowid;
    }
}

export default new ReceptDao();