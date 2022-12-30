let url = "http://localhost:9000/api";
let poruka = document.getElementById("poruka");

window.addEventListener("load", async () => {
    poruka = document.getElementById("poruka");
    dajFilmove(1);
    document.getElementById("filterPRCMAN").addEventListener("keyup", (event) => {
        dajFilmove(1);
    });
});

async function dajFilmove(str) {
    let parametri = { method: "POST" };
    let odgovor = await fetch(
        "/filmoviPretrazivanje?str=" + str + "&filter=" + dajFilter(),
        parametri
    );

    if (odgovor.status == 200) {
        let podaci = await odgovor.text();
        podaci = JSON.parse(podaci);
        prikaziFilmove(podaci.results);
        prikaziStranicenje(podaci.page, podaci.total_pages, "dajFilmove");
    }
}

function prikaziFilmove(filmovi) {
    console.log(filmovi);
    let glavna = document.getElementById("sadrzaj");
    let tablica = "<table border=1>";
    tablica +=
        "<tr><th>Id</th><th>Jezik</th><th>Naslov original</th><th>Naslov</th><th>Opis</th><th>Poster</th><th>Datum</th></tr>";
    for (let f of filmovi) {
        tablica += "<tr>";
        tablica += "<td>" + f.id + "</td>";
        tablica += "<td>" + f.original_language + "</td>";
        tablica += "<td>" + f.title + "</td>";
        tablica += "<td>" + f.original_title + "</td>";
        tablica += "<td>" + f.overview + "</td>";
        tablica +=
            "<td><img src='https://image.tmdb.org/t/p/w600_and_h900_bestv2/" +
            f.poster_path +
            "' width='100' alt='slika_" +
            f.title +
            "'/></td>";
        tablica += "<td>" + f.release_date + "</td>";
        tablica +=
            "<td><button onClick='dodajUbazu(" +
            f.id +
            ")'>Dodaj u bazu</button></td>";
        tablica += "</tr>";
    }
    tablica += "</table>";

    sessionStorage.dohvaceniFilmovi = JSON.stringify(filmovi);

    glavna.innerHTML = tablica;
}

async function dodajUbazu(idFilma) {
    let filmovi = JSON.parse(sessionStorage.dohvaceniFilmovi);
    for (let film of filmovi) {
        if (idFilma == film.id) {

            let header = new Headers();
            header.set("Content-Type", "application/json");


            let parametri = {
                method: "POST",
                body: JSON.stringify(film),
                headers: header
            };

            let odgovor = await fetch("/dodajFilm", parametri);
            if (odgovor.status == 200) {
                let podaci = await odgovor.text();
                console.log("FILM " + JSON.stringify(podaci));
                poruka.innerHTML = "Film dodan u bazu!";
            } else if (odgovor.status == 401) {
                poruka.innerHTML = "Neautorizirani pristup! Prijavite se!";
            } else {
                poruka.innerHTML = "Greška u dodavanju filmva!";
            }
            break;
        }
    }
}

function dajFilter() {
    return document.getElementById("filterPRCMAN").value;
}
