const TMDBklijent = require("./klijentTMDB.js");

class RestTMDB {
  constructor(api_kljuc) {
    this.tmdbKlijent = new TMDBklijent(api_kljuc);
  }

  getFilm(zahtjev, odgovor) {
    this.tmdbKlijent
      .dohvatiFilm(zahtjev.params.idFilma)
      .then((film) => {
        odgovor.type("application/json");
        odgovor.send(film);
      })
      .catch((greska) => {
        odgovor.json(greska);
      });
  }
  /*
    exports.getKorisnik = function (zahtjev, odgovor) {
      odgovor.type("application/json");
      let kdao = new KorisnikDAO();
      let korime = zahtjev.params.korime;
      kdao.daj(korime).then((korisnik) => {
        odgovor.send(JSON.stringify(korisnik));
      })
    };*/

  getZanr(zahtjev, odgovor) {
    this.tmdbKlijent
      .dohvatiZanrove()
      .then((zanrovi) => {
        odgovor.type("application/json");
        odgovor.send(zanrovi);
      })
      .catch((greska) => {
        odgovor.json(greska);
      });
  }

  getFilmovi(zahtjev, odgovor) {
    odgovor.type("application/json");
    let stranica = zahtjev.query.stranica;
    let rijeci = zahtjev.query.kljucnaRijec;

    if (stranica == null || rijeci == null) {
      odgovor.status("417");
      odgovor.send({ greska: "neocekivani podaci" });
      return;
    }

    this.tmdbKlijent
      .pretraziFilmove(rijeci, stranica)
      .then((filmovi) => {
        odgovor.send(filmovi);
      })
      .catch((greska) => {
        odgovor.json(greska);
      });
  }
}

module.exports = RestTMDB;