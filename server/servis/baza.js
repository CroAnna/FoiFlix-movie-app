const konst = require("../konstante.js");
const sqlite3 = require("sqlite3");
const fs = require("fs");

class Baza {
  constructor() {
    console.log("prvo kreiranje nove baze u konstruktoru"); // OVO TU TREBAS DODAT DA DELA

    this.db = new sqlite3.Database("../baza.sqlite", (err) => {
      if (err) {
        console.log(err.message);
      }
    })
  }

  spojiSeNaBazu() {
    // In SQLite, the connection is established when the database is opened,
    // so there is no need to do anything here.
    //this.ucitajPodatkeZaBazu();
    //this.vezaDB = new sqlite3.Database(this.podaciBaza.bazaNaziv);

    this.db = new sqlite3.Database("../baza.sqlite", (err) => {
      if (err) {
        console.log(err.message);
      }
    })
    console.log("otvori DB vezu");

  }

  // OVO TU UCITAJ JE BILO ZAKOMENTIRANO
  ucitajPodatkeZaBazu() {
    let podaciTekst = fs.readFileSync(konst.podaciZaBazu, "UTF-8");
    this.podaciBaza = JSON.parse(podaciTekst);
  }

  izvrsiUpit(sql, podaciZaSQL, povratnaFunkcija) {
    this.db.all(sql, podaciZaSQL, povratnaFunkcija);
  }

  async izvrsiUpitRun(sql, podaciZaSQL) {
    return new Promise((resolve, reject) => {
      this.vezaDB.run(sql, podaciZaSQL, (greska) => {
        if (greska) reject(greska);
        else resolve();
      });
    });
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
  /*
    async izvrsiUpit(sql, podaciZaSQL) {
      return new Promise((resolve, reject) => {
        this.db.run(sql, podaciZaSQL, (greska) => {
          if (greska) reject(greska);
          else resolve();
        });
      });
    }
  */
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
