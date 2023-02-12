const konst = require("../konstante.js");
const url = "http://localhost:9000/api";
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
    let odgovor = await fetch("http://localhost:9000/api/tmdb/zanr");
    let podaci = await odgovor.text();
    console.log("podaci:" + podaci);
    console.log("status: " + odgovor.status);
    let zanrovi = JSON.parse(podaci).genres;
    return zanrovi;
  }

  async dohvatiMojeZanrove() {
    let odgovor = await fetch("http://localhost:9000/api/zanr");
    let podaci = await odgovor.text();
    console.log(podaci);
    let zanrovi = JSON.parse(podaci);
    return zanrovi;
  }

  async dohvatiMojeFilmove() {
    let odgovor = await fetch("http://localhost:9000/api/filmovi?korime={rest.korime}&lozinka={rest.lozinka}");
    let podaci = await odgovor.text();
    console.log(podaci);
    let filmovi = JSON.parse(podaci);
    return filmovi;
  }

  async dohvatiMojeKorisnike() {
    let odgovor = await fetch("http://localhost:9000/api/korisnici?korime={rest.korime}&lozinka={rest.lozinka}");
    let podaci = await odgovor.text();
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