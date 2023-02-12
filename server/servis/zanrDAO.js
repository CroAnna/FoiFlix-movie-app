const Baza = require("./baza.js");

class ZanrDAO {
  constructor() {
    this.baza = new Baza();
  }

  dajSve = async function () {
    console.log("THIS BAZA " + this.baza.podaci);
    this.baza.spojiSeNaBazu();
    console.log("THIS BAZA poslije " + this.baza.podaci);
    let sql = "SELECT * FROM zanr;";
    var podaci = await this.baza.izvrsiUpit(sql, []);
    this.baza.zatvoriVezu();
    return podaci;
  };

  daj = async function (id) {
    this.baza.spojiSeNaBazu();
    console.log("THIS BAZA " + this.baza);

    let sql = "SELECT * FROM zanr WHERE id=?;";
    var podaci = await this.baza.izvrsiUpit(sql, [id]);
    this.baza.zatvoriVezu();
    if (podaci.length == 1) return podaci[0];
    else return null;
  };

  brisi = async function (id) {
    this.baza.spojiSeNaBazu();
    let sql = "DELETE FROM zanr WHERE id=?;";
    var podaci = await this.baza.izvrsiUpit(sql, [id]);
    this.baza.zatvoriVezu();
    return true;
  };

  brisiSve = async function () {
    this.baza.spojiSeNaBazu();
    let sql = "DELETE FROM zanr WHERE zanr.id NOT IN (SELECT film_zanr.zanr_id FROM film_zanr);";
    await this.baza.izvrsiUpit(sql, []);
    return true;
  };

  dodaj = async function (zanr) {
    console.log("THIS BAZA 2 " + this.baza);
    console.log("zanr = " + zanr + zanr.id + zanr.name);
    let sql = `INSERT INTO zanr (id, name) VALUES (?,?)`;
    let podaci = [
      zanr.id,
      zanr.name
    ];
    console.log("this baza " + this.db + " " + this.baza);

    try {
      console.log("sql i podaci ---> " + sql + " " + podaci);

      await this.baza.izvrsiUpit(sql, podaci);
    } catch (error) {
      console.log("Neispravno je nekaj - zanr insert - " + error)
      return false;
    }
    return true;
  };

  azuriraj = async function (id, zanr) {
    let sql = `UPDATE zanr SET name=? WHERE id=?`;
    let podaci = [
      zanr.name,
      zanr.id,
    ];
    try {
      await this.baza.izvrsiUpit(sql, podaci);
    } catch (error) {
      console.log("Neispravno je nekaj - zanr - " + error)
      return false;
    }
    return true;
  };
}

module.exports = ZanrDAO;

