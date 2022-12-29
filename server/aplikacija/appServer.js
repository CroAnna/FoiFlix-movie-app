const konst = require("../konstante.js");
const express = require(konst.dirModula + "\\express");
const kolacici = require(konst.dirModula + "\\cookie-parser");
const sesija = require(konst.dirModula + "\\express-session")
const Konfiguracija = require("../konfiguracija");
//const portovi = require("portovi.js");
const htmlUpravitelj = require("./htmlUpravitelj.js");
const fetchUpravitelj = require("./fetchUpravitelj.js");
const port = 9001;
const server = express();

server.use(express.static("./html"));
server.use("/fotografije", express.static("./fotografije"));
server.use("/dokumentacija", express.static("../dokumentacija"));

function pokreniServer() {
  server.use(express.urlencoded({ extended: true }));
  server.use(express.json());
  server.use(kolacici());
  server.use(
    sesija({
      secret: konst.tajniKljucSesija,
      saveUninitialized: true,
      cookie: { maxAge: 1000 * 60 * 60 * 3 },
      resave: false,
    })
  );

  pripremiPutanjePocetna();
  pripremiPutanjeAutentifikacija();
  pripremiPutanjePretrazivanjeFilmova();
  pripremiPutanjeDokumentacija();
  pripremiPutanjeZanrovi();
  pripremiPutanjeFilmovi();
  pripremiPutanjeProfil();
  pripremiPutanjeKorisnici();
  pripremiPutanjeSlike();
  pripremiPutanjeFilmoviPrijedlozi();
  pripremiPutanjeGalerijaSlika();



  server.use("/js", express.static(__dirname + "/js"));
  server.use((zahtjev, odgovor) => {
    odgovor.status(404);
    var poruka = { greska: "Stranica nije pronađena! - ups" };
    odgovor.send(JSON.stringify(poruka));
  });

  server.listen(port, () => {
    console.log(`Server pokrenut na portu: ${port}`);
  });
}

let konf = new Konfiguracija();
konf
  .ucitajKonfiguraciju()
  .then(pokreniServer)
  .catch((greska) => {
    console.log(greska);
    if (process.argv.length == 2)
      console.error("Potrebno je dati naziv datoteke");
    else console.error("Nije moguće otvoriti datoteku: " + greska.path);
    process.exit();
  });

server.get("/", (zahtjev, odgovor) => {
  odgovor.redirect("/pocetna");
});


function pripremiPutanjePocetna() {
  server.get("/pocetna", htmlUpravitelj.pocetna);
  server.get("/ispisiUlogu", htmlUpravitelj.ispisiUlogu);
  server.get("/dajSveZanrove", fetchUpravitelj.dajSveZanrove);
  server.get("/dajMojeZanrove", fetchUpravitelj.dajMojeZanrove);
  server.get("/dajDvaFilma", fetchUpravitelj.dajDvaFilma);
}

function pripremiPutanjeKorisnici() {
  server.get("/korisnici", htmlUpravitelj.korisnici);
  server.put("/korisniciBlokiraj", fetchUpravitelj.korisniciBlokiraj);
}

function pripremiPutanjePretrazivanjeFilmova() {
  server.get("/filmoviPretrazivanje", htmlUpravitelj.filmoviPretrazivanje);
  server.post("/filmoviPretrazivanje", fetchUpravitelj.filmoviPretrazivanje);
  server.post("/dodajFilm", fetchUpravitelj.dodajFilm);
}

function pripremiPutanjeAutentifikacija() {
  server.get("/registracija", htmlUpravitelj.registracija);
  server.post("/registracija", htmlUpravitelj.registracija);
  server.get("/odjava", htmlUpravitelj.odjava);
  server.get("/prijava", htmlUpravitelj.prijava);
  server.post("/prijava", htmlUpravitelj.prijava);
  server.get("/getJWT", fetchUpravitelj.getJWT);
  server.get("/aktivacijaRacuna", fetchUpravitelj.aktvacijaRacuna);
}

function pripremiPutanjeDokumentacija() {
  server.get("/dokumentacija", htmlUpravitelj.dokumentacija);
}

function pripremiPutanjeZanrovi() {
  server.get("/zanrovi", htmlUpravitelj.zanrovi);
  server.post("/zanroviDodaj", fetchUpravitelj.zanroviDodaj);
  server.put("/zanroviUpdate", fetchUpravitelj.zanroviUpdate);
  server.delete("/zanroviDelete", fetchUpravitelj.zanroviDelete);
}

function pripremiPutanjeFilmovi() {
  server.get("/film", htmlUpravitelj.film);
  server.get("/filmoviPregled", htmlUpravitelj.filmoviPregled);
  server.get("/dajMojeFilmove", fetchUpravitelj.dajMojeFilmove);

}

function pripremiPutanjeProfil() {
  server.get("/profil", htmlUpravitelj.profil);
  server.get("/profil/ispisiKorime", htmlUpravitelj.ispisiKorime);
  server.put("/korisnikUpdate", fetchUpravitelj.korisnikUpdate);
  server.get("/dajMojeKorisnike", fetchUpravitelj.dajMojeKorisnike);
}

function pripremiPutanjeSlike() {
  server.get("/slika", htmlUpravitelj.slika);
};

function pripremiPutanjeFilmoviPrijedlozi() {
  server.get("/filmoviPrijedlozi", htmlUpravitelj.filmoviPrijedlozi);
  server.put("/filmoviUpdate", fetchUpravitelj.filmoviUpdate);
  server.delete("/filmoviDelete", fetchUpravitelj.filmoviDelete);
};

function pripremiPutanjeGalerijaSlika() {
  server.get("/galerija", htmlUpravitelj.galerija);
};