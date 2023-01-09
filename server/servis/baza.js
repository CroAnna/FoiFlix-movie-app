const konst = require("../konstante.js");
const sqlite3 = require("sqlite3");
const fs = require("fs");

class Baza {
  constructor() {
    this.db = new sqlite3.Database("../baza.sqlite", (err) => {
      if (err) {
        console.log(err.message);
      }
    })
  }

  spojiSeNaBazu() {
    this.db = new sqlite3.Database("../baza.sqlite", (err) => {
      if (err) {
        console.log(err.message);
      }
    })
    console.log("otvori DB vezu");
  }

  izvrsiUpit(sql, podaciZaSQL, povratnaFunkcija) {
    this.db.all(sql, podaciZaSQL, povratnaFunkcija);
  }

  izvrsiUpit(sql, podaciZaSQL) {
    return new Promise((resolve, reject) => {
      console.log("prije all");

      this.db.all(sql, podaciZaSQL, (error, result) => {
        console.log("u izvrsi upit " + sql + podaciZaSQL);

        if (error) reject(error);
        else resolve(result);
      });
    });
  }
  zatvoriVezu() {
    this.db.close((err) => {
      if (err) {
        console.error(err.message);
      }
      console.log("Zatvori DB konekciju");
    });
  }
}

module.exports = Baza;
