const ds = require("fs/promises");
const jwt = require("./moduli/jwt.js")
const totp = require("./moduli/totp.js")
const Autentifikacija = require("./autentifikacija.js")
let auth = new Autentifikacija();

exports.registracija = async function (zahtjev, odgovor) {
    let greska = "";
    console.log("zasal sam u registraciju,metoda = " + zahtjev.method);

    if (zahtjev.method == "POST") {
        console.log("ZAHTJEV BODY " + JSON.stringify(zahtjev.body));

        let uspjeh = await auth.dodajKorisnika(zahtjev.body);

        if (uspjeh) {
            return;
        } else {
            greska = "Dodavanje nije uspjelo provjerite podatke!";
        }
    }
}

exports.prijava = async function (zahtjev, odgovor) {
    if (zahtjev.method == "POST") {
        var korime = zahtjev.body.korime;
        var lozinka = zahtjev.body.lozinka;
        var korisnik = await auth.prijaviKorisnika(korime, lozinka);

        if (korisnik) {
            odgovor.send(JSON.parse(korisnik));
        } else {
            odgovor.send(false);
        }
    }
}