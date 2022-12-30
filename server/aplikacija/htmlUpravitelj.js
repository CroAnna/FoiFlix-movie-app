const ds = require("fs/promises");
const jwt = require("./moduli/jwt.js")
const totp = require("./moduli/totp.js")
const Autentifikacija = require("./autentifikacija.js")
let auth = new Autentifikacija();
var trenutnaUloga;

exports.pocetna = async function (zahtjev, odgovor) {
    trenutnaUloga = zahtjev.session.uloga_id;
    let pocetna = await ucitajStranicu("pocetna")
    odgovor.send(pocetna);
}

exports.registracija = async function (zahtjev, odgovor) {
    let greska = "";
    console.log("zasal sam u registraciju,metoda = " + zahtjev.method);

    if (zahtjev.method == "POST") {
        console.log("ZAHTJEV BODY " + JSON.stringify(zahtjev.body)); // tu dojdu dobri podaci

        let uspjeh = await auth.dodajKorisnika(zahtjev.body);

        if (uspjeh) {
            odgovor.redirect("/prijava");
            return;
        } else {
            greska = "Dodavanje nije uspjelo provjerite podatke!";
        }
    }

    let stranica = await ucitajStranicu("registracija", greska);
    odgovor.send(stranica);
}

exports.zanrovi = async function (zahtjev, odgovor) {
    let greska = "";
    let stranica = await ucitajStranicu("zanrovi", greska);
    odgovor.send(stranica);
}

exports.odjava = async function (zahtjev, odgovor) {
    zahtjev.session.korime = null;
    zahtjev.session.korisnik = null;
    zahtjev.session.uloga_id = null;
    odgovor.redirect("/");
};

exports.prijava = async function (zahtjev, odgovor) {
    let greska = ""
    if (zahtjev.method == "POST") {
        var korime = zahtjev.body.korime;
        var lozinka = zahtjev.body.lozinka;
        var korisnik = await auth.prijaviKorisnika(korime, lozinka);

        if (korisnik) {
            /*
            var zaKljucIzBazeIAktivaciju = JSON.parse(korisnik);
            let totpKljuc = zaKljucIzBazeIAktivaciju.tajniTOTPkljuc;
            let totpKod = zahtjev.body.totp;*/
            /*
            if (!totp.provjeriAkt(zaKljucIzBazeIAktivaciju.aktiviran)) {
                greska = "Nije aktiviran!"
            }
            else if (!totp.provjeriTOTP(totpKod, totpKljuc)) {
                greska = "TOTP nije dobar!"
            } else {*/
            var nekak = JSON.parse(korisnik);
            zahtjev.session.jwt = jwt.kreirajToken(korisnik)
            zahtjev.session.korisnik = nekak.ime + " " + nekak.prezime;
            zahtjev.session.uloga_id = nekak.uloga_id;
            zahtjev.session.korisnik_id = nekak.id;
            zahtjev.session.korime = nekak.korime;

            odgovor.redirect("/");
            return;
            // }
        } else {
            greska = "Netocni podaci!";
        }
    }

    let stranicaNova = await ucitajStranicu("prijava", greska);
    odgovor.send(stranicaNova);
}

exports.ispisiUlogu = async function (zahtjev, odgovor) {
    odgovor.json({ status: 'ok', data: zahtjev.session.uloga_id });
}

exports.ispisiKorime = async function (zahtjev, odgovor) {
    odgovor.json({ status: 'ok', data: zahtjev.session.korime });
}

exports.profil = async function (zahtjev, odgovor) {
    let stranica = await ucitajStranicu("profil")
    odgovor.send(stranica);
}

exports.zanrovi = async function (zahtjev, odgovor) {
    let stranica = await ucitajStranicu("zanrovi")
    odgovor.send(stranica);
}

exports.filmoviPretrazivanje = async function (zahtjev, odgovor) {
    let stranica = await ucitajStranicu("filmovi_pretrazivanje");
    odgovor.send(stranica);
}


exports.film = async function (zahtjev, odgovor) {
    let stranica = await ucitajStranicu("film");
    odgovor.send(stranica);
}

exports.korisnici = async function (zahtjev, odgovor) {
    let stranica = await ucitajStranicu("korisnici");
    odgovor.send(stranica);
}

exports.slika = async function (zahtjev, odgovor) {
    let stranica = await ucitajStranicu("slika");
    odgovor.send(stranica);
}

exports.filmoviPrijedlozi = async function (zahtjev, odgovor) {
    let stranica = await ucitajStranicu("filmovi_prijedlozi");
    odgovor.send(stranica);
}

exports.galerija = async function (zahtjev, odgovor) {
    let stranica = await ucitajStranicu("galerija_slika");
    odgovor.send(stranica);
}

exports.filmoviPregled = async function (zahtjev, odgovor) {
    let stranica = await ucitajStranicu("filmovi_pregled");
    odgovor.send(stranica);
}

exports.dokumentacija = async function (zahtjev, odgovor) {
    let stranica = await ucitajStranicudokum("dokumentacija");
    odgovor.send(stranica);
}

async function ucitajStranicu(nazivStranice, poruka = "") {
    let stranice;
    if (trenutnaUloga == 1) {
        stranice = [ucitajHTML(nazivStranice), ucitajHTML("navigacija_admin")];
    } else if (trenutnaUloga == 2) {
        stranice = [ucitajHTML(nazivStranice), ucitajHTML("navigacija_korisnik")];
    } else {
        stranice = [ucitajHTML(nazivStranice), ucitajHTML("navigacija")];
    }

    let [stranica, nav] = await Promise.all(stranice);

    stranica = stranica.replace("#navigacija#", nav);
    stranica = stranica.replace("#poruka#", poruka);
    return stranica;
}

function ucitajHTML(htmlStranica) {
    return ds.readFile(__dirname + "/html/" + htmlStranica + ".html", "UTF-8");
}

async function ucitajStranicudokum(nazivStranice, poruka = "") {
    let stranice;

    if (trenutnaUloga == 1) {
        stranice = [ucitajHTMLdokum(nazivStranice), ucitajHTML("navigacija_admin")];
    } else if (trenutnaUloga == 2) {
        stranice = [ucitajHTMLdokum(nazivStranice), ucitajHTML("navigacija_korisnik")];
    } else {
        stranice = [ucitajHTMLdokum(nazivStranice), ucitajHTML("navigacija")];
    }

    let [stranica, nav] = await Promise.all(stranice);
    stranica = stranica.replace("#navigacija#", nav);
    stranica = stranica.replace("#poruka#", poruka)
    return stranica;
}

function ucitajHTMLdokum(htmlStranica) {
    return ds.readFile("./dokumentacija/" + htmlStranica + ".html", "UTF-8");
}