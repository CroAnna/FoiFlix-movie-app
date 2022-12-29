const konst = require("../konstante.js");
const sqlite3 = require("sqlite3");
const fs = require("fs");

class Baza {
  constructor() {

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
  }
  /*
    ucitajPodatkeZaBazu() {
      let podaciTekst = fs.readFileSync(konst.podaciZaBazu, "UTF-8");
      this.podaciBaza = JSON.parse(podaciTekst);
    }*/

  izvrsiUpit(sql, podaciZaSQL, povratnaFunkcija) {
    this.db.all(sql, podaciZaSQL, povratnaFunkcija);
  }

  izvrsiUpit(sql, podaciZaSQL) {
    return new Promise((resolve, reject) => {
      this.db.all(sql, podaciZaSQL, (error, result) => {
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
