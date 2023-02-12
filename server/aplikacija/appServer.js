const konst = require("../konstante.js");
const express = require("express");
const kolacici = require("cookie-parser");
const sesija = require("express-session")
const Konfiguracija = require("../konfiguracija");
const htmlUpravitelj = require("./htmlUpravitelj.js");
const fetchUpravitelj = require("./fetchUpravitelj.js");

const cors = require('cors');

const server = express();
server.use(cors());

// za automatsko pokretanje aplikacije sa npm start
server.use(express.static(__dirname + "/angular"));

function pokreniServer() {
  let jsonobjekt = konf.dajKonf();
  let appport = jsonobjekt["app.port"]
  console.log("appport " + appport);
  port = appport;


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

  pripremiPutanjeAutentifikacija();

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

function pripremiPutanjeAutentifikacija() {
  server.post("/registracija", htmlUpravitelj.registracija);
  server.post("/prijava", htmlUpravitelj.prijava);
}