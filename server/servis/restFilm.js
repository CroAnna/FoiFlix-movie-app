const FilmDAO = require("./filmDAO.js");


exports.getFilmovi = function (zahtjev, odgovor) {
    odgovor.type("application/json");
    let fdao = new FilmDAO();
    fdao.dajSve().then((filmovi) => {
        console.log(filmovi);
        odgovor.send(JSON.stringify(filmovi));
    });
};

exports.getFilmoviPoZanru = function (zahtjev, odgovor) {
    console.log("u getFilmoviPoZanru!!");

    odgovor.type("application/json");
    let fdao = new FilmDAO();
    let id = zahtjev.params.id;
    fdao.dajPoZanru(id).then((filmovi) => {
        console.log("zanr" + id + " = " + filmovi + JSON.stringify(filmovi) + "!");
        odgovor.send(JSON.stringify(filmovi));
    });
};

exports.getFilmoviOdobreni = function (zahtjev, odgovor) {
    odgovor.type("application/json");
    let fdao = new FilmDAO();
    fdao.dajOdobrene().then((filmovi) => {
        console.log(filmovi);
        odgovor.send(JSON.stringify(filmovi));
    });
};

exports.putFilmovi = function (zahtjev, odgovor) {
    odgovor.type("application/json");
    odgovor.status(501);
    let poruka = { greska: "metoda nije implementirana 501" };
    odgovor.send(JSON.stringify(poruka));
};

exports.deleteFilmovi = function (zahtjev, odgovor) {
    odgovor.type("application/json");
    odgovor.status(501);
    let poruka = { greska: "metoda nije implementirana 501" };
    odgovor.send(JSON.stringify(poruka));
};

exports.postFilmovi = function (zahtjev, odgovor) {
    odgovor.type("application/json");
    console.log("U POST FILMOVI U RESTFILM");

    let podaci = zahtjev.body;
    let fdao = new FilmDAO();
    fdao.dodaj(podaci).then((poruka) => {
        odgovor.send(JSON.stringify({ greska: "Neuspjesan unos, provjeri jesu li svi zanrovi za taj film dodani u bazu" }));
    });
};

exports.getFilm = function (zahtjev, odgovor) {
    odgovor.type("application/json");
    let fdao = new FilmDAO();
    let id = zahtjev.params.id;
    fdao.daj(id).then((film) => {
        console.log(film);
        odgovor.send(JSON.stringify(film));
    });
};

exports.postFilm = function (zahtjev, odgovor) {
    odgovor.type("application/json");
    odgovor.status(405);
    let poruka = { greska: "Metoda nije dopustena! 405" };
    odgovor.send(JSON.stringify(poruka));
}

exports.putFilm = function (zahtjev, odgovor) {
    odgovor.type("application/json");
    let id = zahtjev.params.id;
    let podaci = zahtjev.body;
    let fdao = new FilmDAO();
    fdao.azuriraj(id, podaci).then((poruka) => {
        odgovor.send(JSON.stringify(poruka));
    });
};

exports.deleteFilm = function (zahtjev, odgovor) {
    odgovor.type("application/json");
    let fdao = new FilmDAO();
    let id = zahtjev.params.id;
    console.log("ZHTJEV PARAMNS " + zahtjev.params.id);

    let podaci = zahtjev.body;
    fdao.brisi(id, podaci).then((film) => {
        odgovor.send(JSON.stringify(film));
    });


}
