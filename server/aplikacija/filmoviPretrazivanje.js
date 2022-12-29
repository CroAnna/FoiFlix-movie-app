const konst = require("../konstante.js");
//const portRest = require(konst.dirPortova + "portovi_rest.js").askarica20;
//const url = "http://spider.foi.hr:" + portRest + "/api";
const url = "localhost:9000/api";
const kodovi = require("./moduli/kodovi.js");

class FilmoviZanroviPretrazivanje {
  async dohvatiFilmove(stranica, kljucnaRijec = "") {
    let putanja = url + "/tmdb/filmovi?stranica=" + stranica + "&kljucnaRijec=" + kljucnaRijec;
    console.log(putanja)
    let odgovor = await fetch(putanja);
    let podaci = await odgovor.text();
    let filmovi = JSON.parse(podaci);
    console.log(filmovi)
    return filmovi;
  }

  async dohvatiSveZanrove() {
    let odgovor = await fetch(url + "/tmdb/zanr");
    let podaci = await odgovor.text();
    console.log(podaci);
    console.log(odgovor.status);
    let zanrovi = JSON.parse(podaci).genres;
    return zanrovi;
  }

  async dohvatiMojeZanrove() {
    console.log("putanja => " + url + "/zanr");
    let odgovor = await fetch("localhost:9000/api/zanr?korime={rest.korime}&lozinka={rest.lozinka}"); // TODO
    console.log("u dohvatiMojeZanrove");
    let podaci = await odgovor.text();
    console.log(podaci);
    console.log(odgovor.status);
    let zanrovi = JSON.parse(podaci);
    return zanrovi;
  }

  async dohvatiMojeFilmove() {
    console.log("putanja => " + url + "/filmoviMoji");
    let odgovor = await fetch("localhost:9000/api/filmovi?korime={rest.korime}&lozinka={rest.lozinka}");
    console.log("u dohvatiMojeFilmove");
    let podaci = await odgovor.text();
    console.log(podaci);
    console.log(odgovor.status);
    let filmovi = JSON.parse(podaci);
    return filmovi;
  }

  async dohvatiMojeKorisnike() {
    let odgovor = await fetch("localhost:9000/api/korisnici?korime={rest.korime}&lozinka={rest.lozinka}");
    let podaci = await odgovor.text();
    console.log(odgovor.status);
    let korisnici = JSON.parse(podaci);
    return korisnici;
  }

  async dohvatiNasumceFilm(zanr) {
    let odgovor = await fetch(
      url + "/tmdb/filmovi?stranica=1&kljucnaRijec=love"//
    );
    let podaci = await odgovor.text();
    let filmovi = JSON.parse(podaci);
    let rez = [
      filmovi.results[kodovi.dajNasumceBroj(0, 20)],
      filmovi.results[kodovi.dajNasumceBroj(0, 20)],
    ];
    return rez;
  }
}

module.exports = FilmoviZanroviPretrazivanje;