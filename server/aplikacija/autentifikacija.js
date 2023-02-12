const { json } = require("stream/consumers");
const konst = require("../konstante.js");
const kodovi = require("./moduli/kodovi.js");

class Autentifikacija {
  async dodajKorisnika(korisnik) {
    let tijelo = {
      ime: korisnik.ime,
      prezime: korisnik.prezime,
      lozinka: kodovi.kreirajSHA256(korisnik.lozinka, "moja sol"),
      email: korisnik.email,
      korime: korisnik.korime,
    };

    let zaglavlje = new Headers();
    zaglavlje.set("Content-Type", "application/json");

    let parametri = {
      method: "POST",
      body: JSON.stringify(tijelo),
      headers: zaglavlje,
    };
    console.log("prije await fetvh api korisnici u autentifikacija"
      + JSON.stringify(parametri.body));

    let odgovor = null;
    try {
      odgovor = await fetch("http://localhost:9000/api/korisnici/", parametri);
    } catch (err) {
      console.log("greska " + err);

    }

    console.log("nekakav je odgovor dosal");

    if (odgovor.status == 200) {
      console.log("Korisnik ubačen na servisu");
      return true;
    } else {
      console.log("u dodajKorisnika neuspjesno = " + odgovor.status);
      console.log(await odgovor.text());
      return false;
    }
  }

  async prijaviKorisnika(korime, lozinka) {
    lozinka = kodovi.kreirajSHA256(lozinka, "moja sol");
    let tijelo = {
      lozinka: lozinka,
    };

    let zaglavlje = new Headers();
    zaglavlje.set("Content-Type", "application/json");

    let parametri = {
      method: "POST",
      body: JSON.stringify(tijelo),
      headers: zaglavlje,
    };

    let odgovor = await fetch(
      "http://localhost:9000" +
      "/api/korisnici/" +
      korime +
      "/prijava?korime={rest.korime}&lozinka={rest.lozinka}",
      parametri
    );

    if (odgovor.status == 200) {
      return await odgovor.text();
    } else {
      return false;
    }
  }
}

module.exports = Autentifikacija;