const KorisnikDAO = require("./korisnikDAO.js");

exports.getKorisnici = function (zahtjev, odgovor) {
  console.log("u getKorisnici u restKorisnik");

  odgovor.type("application/json");
  let kdao = new KorisnikDAO();
  kdao.dajSve().then((korisnici) => {
    odgovor.send(JSON.stringify(korisnici));
    console.log("uspjesno dohvaceni u restKorisnik");

  });
};

exports.postKorisnici = function (zahtjev, odgovor) {
  console.log("u post korisnici");
  odgovor.type("application/json");
  let podaci = zahtjev.body;
  let kdao = new KorisnikDAO();
  kdao.dodaj(podaci).then((poruka) => {
    odgovor.send(JSON.stringify(poruka));
  });
};

exports.putKorisnici = function (zahtjev, odgovor) {
  odgovor.type("application/json");
  odgovor.status(501);
  let poruka = { greska: "metoda nije implementirana" };
  odgovor.send(JSON.stringify(poruka));
};

exports.deleteKorisnici = function (zahtjev, odgovor) {
  odgovor.type("application/json");
  odgovor.status(501);
  let poruka = { greska: "metoda nije implementirana" };
  odgovor.send(JSON.stringify(poruka));
};

exports.getKorisnik = function (zahtjev, odgovor) {
  odgovor.type("application/json");
  let kdao = new KorisnikDAO();
  let korime = zahtjev.params.korime;
  kdao.daj(korime).then((korisnik) => {
    odgovor.send(JSON.stringify(korisnik));
  })
};

exports.postKorisnik = function (zahtjev, odgovor) {
  odgovor.type("application/json");
  odgovor.status(405);
  let poruka = { greska: "Metoda nije dopustena!" };
  odgovor.send(JSON.stringify(poruka));
}

exports.putKorisnik = function (zahtjev, odgovor) {
  odgovor.type("application/json");
  let korime = zahtjev.params.korime;
  let podaci = zahtjev.body;
  let kdao = new KorisnikDAO();
  kdao.azuriraj(korime, podaci).then((poruka) => {
    odgovor.send(JSON.stringify(poruka));
  });
};

exports.deleteKorisnik = function (zahtjev, odgovor) {
  odgovor.type("application/json");
  odgovor.status(501);
  let poruka = { greska: "metoda nije implementirana" };
  odgovor.send(JSON.stringify(poruka));
};

exports.gettKorisnikPrijava = function (zahtjev, odgovor) {
  odgovor.type("application/json");
  odgovor.status(501);
  let poruka = { greska: "metoda nije implementirana" };
  odgovor.send(JSON.stringify(poruka));
};

exports.deleteKorisnikPrijava = function (zahtjev, odgovor) {
  odgovor.type("application/json");
  odgovor.status(501);
  let poruka = { greska: "metoda nije implementirana" };
  odgovor.send(JSON.stringify(poruka));
};

exports.putKorisnikPrijava = function (zahtjev, odgovor) {
  odgovor.type("application/json");
  odgovor.status(501);
  let poruka = { greska: "metoda nije implementirana" };
  odgovor.send(JSON.stringify(poruka));
};

exports.getKorisnikPrijava = function (zahtjev, odgovor) {
  odgovor.type("application/json");
  let kdao = new KorisnikDAO();
  let korime = zahtjev.params.korime;
  kdao.daj(korime).then((korisnik) => {
    if (korisnik != null && korisnik.lozinka == zahtjev.body.lozinka) {
      odgovor.send(JSON.stringify(korisnik));
    } else {
      odgovor.status(401);
      odgovor.send(JSON.stringify({ greska: "Krivi podaci!" }));
    }
  });
};

exports.getKorisnikAktivacija = function (zahtjev, odgovor) {
  odgovor.type("application/json");
  odgovor.status(501);
  let poruka = { greska: "metoda nije implementirana" };
  odgovor.send(JSON.stringify(poruka));
};

exports.deleteKorisnikAktivacija = function (zahtjev, odgovor) {
  odgovor.type("application/json");
  odgovor.status(501);
  let poruka = { greska: "metoda nije implementirana" };
  odgovor.send(JSON.stringify(poruka));
};

exports.postKorisnikAktivacija = function (zahtjev, odgovor) {
  odgovor.type("application/json");
  odgovor.status(405);
  let poruka = { greska: "Metoda nije dopustena!" };
  odgovor.send(JSON.stringify(poruka));
}

exports.putKorisnikAktivacija = function (zahtjev, odgovor) {
  odgovor.type("application/json");
  let korime = zahtjev.params.korime;
  let podaci = zahtjev.body;
  let kdao = new KorisnikDAO();
  kdao.aktiviraj(korime, podaci).then((poruka) => {
    odgovor.send(JSON.stringify(poruka));
  });
};

exports.putKorisnikBlokiranje = function (zahtjev, odgovor) {
  odgovor.type("application/json");
  let korime = zahtjev.params.korime;
  let podaci = zahtjev.body;
  let kdao = new KorisnikDAO();
  kdao.blokiraj(korime, podaci).then((poruka) => {
    odgovor.send(JSON.stringify(poruka));
  });
};