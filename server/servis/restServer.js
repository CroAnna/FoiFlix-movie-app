const konst = require("../konstante.js");
const express = require("express");

const Konfiguracija = require("../konfiguracija");




//const portovi = require(konst.dirPortova + "portovi_rest.js");
const restKorisnik = require("./restKorisnik.js");
const restFilm = require("./restFilm.js");
const restZanr = require("./restZanr.js");
const RestTMDB = require("./restTMDB.js");
const fsPromise = require("fs/promises");


const cors = require('cors');


const server = express();
server.use(cors());

let konf = new Konfiguracija();
konf
  .ucitajKonfiguraciju()
  .then(pokreniServer)
  .catch((err) => {
    console.error(err);
    if (process.argv.length == 2)
      console.error("Potrebno je unjeti i naziv konfiguracija");
    else console.error("Nemoguce otvoriti datoteku");
    process.exit();
  });



let port;

function pokreniServer() {
  server.use(express.urlencoded({ extended: true }));
  server.use(express.json());

  pripremaPutanjeResursKorisnika();
  pripremiPutanjeResursTMDB();
  pripremaPutanjaFilmova();
  pripremaPutanjaZanrova();

  let jsonobjekt = konf.dajKonf();
  let restport = jsonobjekt["rest.port"]
  console.log("restport " + restport);
  port = restport;

  server.use((zahtjev, odgovor) => {
    odgovor.status(404);
    var odg = { greska: "Stranica nije pronadena!" };
    odgovor.send(JSON.stringify(odg));
  });

  server.listen(port, () => {
    console.log(`Server pokrenut na portu: ${port}`);
  });
}

function pripremiPutanjeResursTMDB() {
  let restTMDB = new RestTMDB(konf.dajKonf()["tmdb.apikey.v3"]);
  server.get("/api/tmdb/zanr", restTMDB.getZanr.bind(restTMDB));
  server.post("/api/tmdb/zanr", restZanr.postZanrTmdb.bind(restTMDB));
  server.put("/api/tmdb/zanr", restZanr.putZanrTmdb.bind(restTMDB));
  server.delete("/api/tmdb/zanr", restZanr.deleteZanrTmdb.bind(restTMDB));

  server.get("/api/tmdb/filmovi", restTMDB.getFilmovi.bind(restTMDB));
  server.post("/api/tmdb/filmovi", restZanr.postTmdbFilmovi.bind(restTMDB));
  server.put("/api/tmdb/filmovi", restZanr.putTmdbFilmovi.bind(restTMDB));
  server.delete("/api/tmdb/filmovi", restZanr.deleteTmdbFilmovi.bind(restTMDB));
}

function pripremaPutanjeResursKorisnika() {
  server.get("/api/korisnici", restKorisnik.getKorisnici);
  server.post("/api/korisnici", restKorisnik.postKorisnici);
  server.put("/api/korisnici", restKorisnik.putKorisnici);
  server.delete("/api/korisnici", restKorisnik.deleteKorisnici);

  server.post("/api/korisnici/:korime/prijava", restKorisnik.getKorisnikPrijava);
  server.get("/api/korisnici/:korime/prijava", restKorisnik.gettKorisnikPrijava);
  server.delete("/api/korisnici/:korime/prijava", restKorisnik.deleteKorisnikPrijava);
  server.put("/api/korisnici/:korime/prijava", restKorisnik.putKorisnikPrijava);

  server.get("/api/korisnici/:korime", restKorisnik.getKorisnik);
  server.post("/api/korisnici/:korime", restKorisnik.postKorisnik);
  server.put("/api/korisnici/:korime", restKorisnik.putKorisnik);
  server.delete("/api/korisnici/:korime", restKorisnik.deleteKorisnik);

  server.post("/api/korisnici/:korime/aktivacija", restKorisnik.postKorisnikAktivacija);
  server.put("/api/korisnici/:korime/aktivacija", restKorisnik.putKorisnikAktivacija);
  server.get("/api/korisnici/:korime/aktivacija", restKorisnik.getKorisnikAktivacija);
  server.delete("/api/korisnici/:korime/aktivacija", restKorisnik.deleteKorisnikAktivacija);

  server.put("/api/korisnici/:korime/blokiranje", restKorisnik.putKorisnikBlokiranje);
}

function pripremaPutanjaFilmova() {
  server.get("/api/filmovi", restFilm.getFilmovi);
  server.post("/api/filmovi", restFilm.postFilmovi);
  server.delete("/api/filmovi", restFilm.deleteFilmovi);
  server.put("/api/filmovi", restFilm.putFilmovi);

  server.get("/api/filmovi/:id", restFilm.getFilm);
  server.post("/api/filmovi/:id", restFilm.postFilm);
  server.put("/api/filmovi/:id", restFilm.putFilm);
  server.delete("/api/filmovi/:id", restFilm.deleteFilm);
}

function pripremaPutanjaZanrova() {
  server.get("/api/zanr", restZanr.getZanrovi);
  server.post("/api/zanr", restZanr.postZanrovi);
  server.put("/api/zanr", restZanr.putZanrovi);
  server.delete("/api/zanr", restZanr.deleteZanrovi);

  server.get("/api/zanr/:id", restZanr.getZanr);
  server.post("/api/zanr/:id", restZanr.postZanr);
  server.put("/api/zanr/:id", restZanr.putZanr);
  server.delete("/api/zanr/:id", restZanr.deleteZanr);
}