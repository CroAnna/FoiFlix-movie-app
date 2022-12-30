const FilmoviPretrazivanje = require("./filmoviPretrazivanje.js");
const jwt = require("./moduli/jwt.js")
const Autentifikacija = require("./autentifikacija.js")
let auth = new Autentifikacija();
let fp = new FilmoviPretrazivanje();

exports.aktvacijaRacuna = async function (zahtjev, odgovor) {
    console.log(zahtjev.query);
    let korime = zahtjev.query.korime;
    let kod = zahtjev.query.kod;

    let poruka = await auth.aktivirajKorisnickiRacun(korime, kod);
    console.log(poruka)

    if (poruka.status == 200) {
        odgovor.send(await poruka.text());
    } else {
        odgovor.send(await poruka.text());
    }
}

exports.dajSveZanrove = async function (zahtjev, odgovor) {
    odgovor.json(await fp.dohvatiSveZanrove());
}

exports.dajMojeKorisnike = async function (zahtjev, odgovor) {
    odgovor.json(await fp.dohvatiMojeKorisnike());
}

exports.dajMojeZanrove = async function (zahtjev, odgovor) {
    odgovor.json(await fp.dohvatiMojeZanrove());
}

exports.dajMojeFilmove = async function (zahtjev, odgovor) {
    odgovor.json(await fp.dohvatiMojeFilmove());
}

exports.dajDvaFilma = async function (zahtjev, odgovor) {
    odgovor.json(await fp.dohvatiNasumceFilm(zahtjev.query.zanr))
}

exports.getJWT = async function (zahtjev, odgovor) {
    odgovor.type('json')
    if (zahtjev.session.jwt != null) {
        let k = { korime: jwt.dajTijelo(zahtjev.session.jwt).korime };
        let noviToken = jwt.kreirajToken(k)
        odgovor.send({ ok: noviToken });
        return
    }
    odgovor.status(401);
    odgovor.send({ greska: "nemam token!" });
}

exports.filmoviPretrazivanje = async function (zahtjev, odgovor) {
    let str = zahtjev.query.str;
    let filter = zahtjev.query.filter;
    console.log(zahtjev.query)
    odgovor.json(await fp.dohvatiFilmove(str, filter))
}

exports.dodajFilm = async function (zahtjev, odgovor) {
    tijelo = zahtjev.body;
    let zaglavlje = new Headers();
    zaglavlje.set("Content-Type", "application/json");

    let parametri = {
        method: "POST",
        body: JSON.stringify(tijelo),
        headers: zaglavlje,
    };

    let odgFetch = await fetch(
        "http://localhost:9000/api/filmovi?korime={rest.korime}&lozinka={rest.lozinka}",//
        parametri
    );

    if (odgFetch.status == 200) {
        console.log("Film ubačen na servisu");
        return true;
    } else {
        console.log(odgovor.status);
        console.log(await odgovor.text());
        return false;
    }
    odgovor.json({ ok: "OK" });
}


exports.filmoviUpdate = async (zahtjev, odgovor) => {
    console.log("fetch upr filmovi update " + zahtjev.body.id);

    tijelo = zahtjev.body;
    let zaglavlje = new Headers();
    zaglavlje.set("Content-Type", "application/json");
    let parametri = {
        method: "PUT",
        body: JSON.stringify(tijelo),
        headers: zaglavlje,
    };
    let odgFetch = await fetch(
        "http://localhost:9000/api/filmovi/:id?korime={rest.korime}&lozinka={rest.lozinka}",
        parametri
    );
    if (odgFetch.status == 200) {
        console.log("Film updatean na servisu");
        return true;
    } else {
        console.log(odgovor.status);
        return false;
    }
}

exports.filmoviDelete = async (zahtjev, odgovor) => {
    console.log("fetch upr filmovi delete " + zahtjev.body.id);
    tijelo = zahtjev.body;
    let zaglavlje = new Headers();
    zaglavlje.set("Content-Type", "application/json");
    let parametri = {
        method: "DELETE",
        body: JSON.stringify(tijelo),
        headers: zaglavlje,
    };
    let odgFetch = await fetch(
        "http://localhost:9000/api/filmovi/:id?korime={rest.korime}&lozinka={rest.lozinka}",//
        parametri
    );
    if (odgFetch.status == 200) {
        console.log("Film OBRISAN na servisu");
        return true;
    } else {
        console.log(odgovor.status);
        return false;
    }
}

exports.zanroviDodaj = async (zahtjev, odgovor) => {


    tijelo = zahtjev.body;
    console.log("id tijela " + tijelo.id);

    let zaglavlje = new Headers();
    zaglavlje.set("Content-Type", "application/json");

    let parametri = {
        method: "POST",
        body: JSON.stringify(tijelo),
        headers: zaglavlje,
    };

    let odgFetch = await fetch(
        "http://localhost:9000/api/zanr",
        parametri
    );

    if (odgFetch.status == 200) {
        console.log("Zanr ubačen na servisu");
        return true;
    } else {
        console.log(odgovor.status);
        return false;
    }
}

exports.zanroviUpdate = async (zahtjev, odgovor) => {
    console.log(" u zanroviUpdate");

    console.log(zahtjev.body + " " + zahtjev.body.id);

    tijelo = zahtjev.body;
    let zaglavlje = new Headers();
    zaglavlje.set("Content-Type", "application/json");

    let parametri = {
        method: "PUT",
        body: JSON.stringify(tijelo),
        headers: zaglavlje,
    };

    let odgFetch = await fetch(
        "http://localhost:9000/api/zanr/:id?korime={rest.korime}&lozinka={rest.lozinka}",
        parametri
    );

    if (odgFetch.status == 200) {
        console.log("Zanr updatean na servisu");
        return true;
    } else {
        console.log(odgovor.status);
        return false;
    }
}

exports.zanroviDelete = async (zahtjev, odgovor) => {
    tijelo = zahtjev.body;
    let zaglavlje = new Headers();
    zaglavlje.set("Content-Type", "application/json");

    let parametri = {
        method: "DELETE",
        body: JSON.stringify(tijelo),
        headers: zaglavlje,
    };

    let odgFetch = await fetch(
        "http://localhost:9000/api/zanr/?korime={rest.korime}&lozinka={rest.lozinka}",
        parametri
    );

    if (odgFetch.status == 200) {
        console.log("Zanr deletean na servisu");
        return true;
    } else {
        console.log(odgovor.status);
        return false;
    }
}

exports.korisnikUpdate = async (zahtjev, odgovor) => {
    tijelo = zahtjev.body;
    let zaglavlje = new Headers();
    zaglavlje.set("Content-Type", "application/json");

    let parametri = {
        method: "PUT",
        body: JSON.stringify(tijelo),
        headers: zaglavlje,
    };

    let odgFetch = await fetch(
        "http://localhost:9000/api/korisnici/:korime?korime={rest.korime}&lozinka={rest.lozinka}",
        parametri
    );

    if (odgFetch.status == 200) {
        console.log(odgFetch.json);
        console.log(odgFetch.text());
        console.log("Korisnik updatean na servisu");
        return true;
    } else {
        console.log(odgovor.status);
        return false;
    }
}

exports.korisniciBlokiraj = async (zahtjev, odgovor) => {
    tijelo = zahtjev.body;
    let korime = tijelo.korime;
    let zaglavlje = new Headers();
    zaglavlje.set("Content-Type", "application/json");

    let parametri = {
        method: "PUT",
        body: JSON.stringify(tijelo),
        headers: zaglavlje,
    };

    let odgFetch = await fetch(
        "http://localhost:9000/api/korisnici/" + korime + "/blokiranje?korime={rest.korime}&lozinka={rest.lozinka}",
        parametri
    );

    if (odgFetch.status == 200) {
        console.log("Korisnik blokiran na servisu");
        return true;
    } else {
        console.log(odgovor.status);
        return false;
    }
}