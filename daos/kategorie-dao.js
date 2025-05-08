const db = require('../config/db-sqlite');

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

    nactiPodleId(id) {
        const sql = `SELECT * FROM kategorie WHERE id = ?`;
        return db.prepare(sql).get(id);
    }

    vloz(nazev) {
        const sql = `INSERT INTO kategorie (nazev) VALUES (?)`;
        return db.prepare(sql).run(nazev).lastInsertRowid;
    }
}

module.exports = new KategorieDao();