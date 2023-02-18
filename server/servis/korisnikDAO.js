const Baza = require("./baza.js");

class KorisnikDAO {
  constructor() {
    this.baza = new Baza();
  }

  dajSve = async function () {
    this.baza.spojiSeNaBazu();
    let sql = "SELECT * FROM korisnik;";
    var podaci = await this.baza.izvrsiUpit(sql, []);
    this.baza.zatvoriVezu();
    return podaci;
  };

  daj = async function (korime) {
    this.baza.spojiSeNaBazu();
    let sql = "SELECT * FROM korisnik WHERE korime=?;";
    var podaci = await this.baza.izvrsiUpit(sql, [korime]);
    this.baza.zatvoriVezu();
    if (podaci.length == 1) return podaci[0];
    else return null;
  };

  dodaj = async function (korisnik) {
    console.log("U DODAJ U DAOU");

    let sql = `INSERT INTO korisnik (korime,lozinka,ime,prezime,email,uloga_id,tajniTOTPkljuc) VALUES (?,?,?,?,?,?,?)`;
    let podaci = [
      korisnik.korime,
      korisnik.lozinka,
      korisnik.ime,
      korisnik.prezime,
      korisnik.email,
      2,
      "ABC"
    ];

    try {
      await this.baza.izvrsiUpit(sql, podaci);
    } catch (error) {
      console.log("Neispravno je nekaj " + error)
      return false;
    }
    return true;
  };

  obrisi = async function (korime) {
    let sql = "DELETE FROM korisnik WHERE korime=?";
    await this.baza.izvrsiUpit(sql, [korime]);
    return true;
  };

  azuriraj = async function (korime, korisnik_podaci) {
    let sql = `UPDATE korisnik SET ime=?, prezime=? WHERE korime=?`;
    console.log("UPDATE -----> " + korime + " " + korisnik_podaci.ime + " " + korisnik_podaci.prezime);

    let podaci = [
      korisnik_podaci.ime,
      korisnik_podaci.prezime,
      korisnik_podaci.korime,
    ];
    await this.baza.izvrsiUpit(sql, podaci);
    return true;
  };

  aktiviraj = async function (korime, korisnik) {
    let sql = `UPDATE korisnik SET aktiviran=1 WHERE korime=?`;
    let podaci = [
      korime,
    ];
    await this.baza.izvrsiUpit(sql, podaci);
    console.log("korisnik " + korime + " je aktiviran");
    return true;
  };
}

module.exports = KorisnikDAO;