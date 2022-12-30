//let url = "http://spider.foi.hr:12238/api";
let url = "http://localhost:9001/api"
window.addEventListener("load", async () => {
    //let jsonobjekt = konf.dajKonf();
    //let restport = jsonobjekt["rest.port"]
    //console.log("RESTPORT " + restport);


    const inputPromjena = document.getElementById("inputPromjenaNaziva");
    const btnPromjena = document.getElementById("promijeniNaziv");
    btnPromjena.addEventListener("click", function () {
        promijeniNaziv()
    })
    const btnDajMojePodatke = document.getElementById("dajMojePodatke");
    btnDajMojePodatke.addEventListener("click", function () {
        dajMojePodatke()
    })
    const btnDajPodatke = document.getElementById("dajPodatke");
    btnDajPodatke.addEventListener("click", function () {
        dajPodatke()
    })
    const btnDodajTMDBPodatke = document.getElementById("dodajTMDBPodatke");
    btnDodajTMDBPodatke.addEventListener("click", function () {
        dodajTMDBPodatke()
    })
    const btnIzbrisiBezFilmova = document.getElementById("izbrisiBezFilmova");
    btnIzbrisiBezFilmova.addEventListener("click", function () {
        dajMojePodatkeBrisanje()
    })
});

function promijeniNaziv() {
    var oznaceniRadio = document.querySelector('input[name="moji-zanrovi"]:checked');
    var noviNaziv = document.querySelector("#inputPromjenaNaziva").value;
    updateajZanr(parseInt(oznaceniRadio.id), noviNaziv)
}

async function dajPodatke() {
    //let odgovor = await fetch("http://spider.foi.hr:12204/dajSveZanrove");
    let odgovor = await fetch("http://localhost:9001/dajSveZanrove");

    if (odgovor.status == 200) {
        let podaci = await odgovor.text();
        prikaziTMDBZanrove(podaci);
    } else {
        alert("Problem kod preuzimanja podataka:\n" + odgovor.statusText);
    }
}

async function dajMojePodatke() {
    let odgovor = await fetch("http://localhost:9001/dajMojeZanrove");
    if (odgovor.status == 200) {
        let podaci = await odgovor.text();
        prikaziMojeZanrove(podaci);
    } else {
        console.error();

        alert("Problem kod preuzimanja podataka:\n" + odgovor.statusText);
    }
}

async function dodajTMDBPodatke() {
    let odgovor = await fetch("http://localhost:9001/dajSveZanrove");
    if (odgovor.status == 200) {
        let podaci = await odgovor.text();
        dodajIzTMDBAuMojuBazu(podaci);
        dajMojePodatke();
    } else {
        alert("Problem kod preuzimanja podataka:\n" + odgovor.statusText);
    }
}

async function dajMojePodatkeBrisanje() {
    let odgovor = await fetch("http://localhost:9001/dajMojeZanrove");
    if (odgovor.status == 200) {
        let podaci = await odgovor.text();
        izbrisiBezFilmova(podaci);
    } else {
        alert("Problem kod preuzimanja podataka:\n" + odgovor.statusText);
    }
}


async function izbrisiBezFilmova(podaci) {
    let zanrovi_parse = JSON.parse(podaci);
    let tijelo =
    {
        zanrovi: zanrovi_parse
    }

    let header = new Headers();
    header.set("Content-Type", "application/json");

    let parametri = {
        method: 'DELETE',
        body: JSON.stringify(tijelo),
        headers: header
    }

    let podatki = await fetch("http://localhost:9001/zanroviDelete", parametri);
    await podatki.text();
}

function dodajIzTMDBAuMojuBazu(podaci) {
    let zanrovi = JSON.parse(podaci);
    var oznaceni = document.getElementsByName("tmdb-zanrovi");
    var informacijePrikaz = document.getElementById("informacije-zanrovi");

    html2 = "";
    for (var radio of oznaceni) {
        if (radio.checked) {
            if (provjeriJelVecPostojiUBazi(parseInt(radio.id)) == false) {
                dodajZanr(parseInt(radio.id), radio.value);
                radio.checked = false;
            } else {
                html2 +=
                    "<br>Zanr " + radio.value + " je vec dodan u bazi!";
                informacijePrikaz.innerHTML = html2;
            }

        }
    }
}

function dodajSveIzTMDBAuMojuBazu(podaci) {
    let zanrovi = JSON.parse(podaci);
    var oznaceni = document.getElementsByName("tmdb-zanrovi");
    var informacijePrikaz = document.getElementById("informacije-zanrovi");
    html2 = "";
    for (var radio of oznaceni) {
        if (provjeriJelVecPostojiUBazi(parseInt(radio.id)) == false) {
            dodajZanr(parseInt(radio.id), radio.value);
        } else {
            html2 += "<br>Zanr " + radio.value + " je vec dodan u bazi!";
            informacijePrikaz.innerHTML = html2;
        }
    }
}

function provjeriJelVecPostojiUBazi(novi_id) {
    var MOJI = document.getElementsByName("moji-zanrovi");
    for (var itemUBazi of MOJI) {
        if (itemUBazi.id == novi_id) {
            return true;
        }
    }
    return false;
}

async function dodajZanr(novi_id, naziv) {
    let tijelo =
    {
        id: parseInt(novi_id),
        name: naziv,
    }

    let header = new Headers();
    header.set("Content-Type", "application/json");

    let parametri = {
        method: 'POST',
        body: JSON.stringify(tijelo),
        headers: header
    }

    let podatki = await fetch("http://localhost:9001/zanroviDodaj", parametri);
    await podatki.text();
}

async function updateajZanr(id, novi_naziv) {
    let tijelo =
    {
        id: parseInt(id),
        name: novi_naziv,
    }
    let header = new Headers();
    header.set("Content-Type", "application/json");

    let parametri = {
        method: 'PUT',
        body: JSON.stringify(tijelo),
        headers: header
    }

    let podatki = await fetch("http://localhost:9001/zanroviUpdate", parametri);
    await podatki.text();
}

function prikaziMojeZanrove(podaci) {
    let zanrovi = JSON.parse(podaci);
    let prikaz = document.getElementById("zanrovi-container");
    html = "<ol>";
    for (let i in zanrovi) {
        html +=
            "<li>" +
            `<input type="radio" id=${zanrovi[i].id} name="moji-zanrovi" value=${zanrovi[i].name}>` + zanrovi[i].name + " " + zanrovi[i].id + "</li>"
    }
    html += "</ol>";
    prikaz.innerHTML = html;
}

function prikaziTMDBZanrove(podaci) {
    let zanrovi = JSON.parse(podaci);
    let prikaz = document.getElementById("zanrovi-container-moje");
    html = "<ol>";
    for (let i in zanrovi) {
        html +=
            "<li>" +
            `<input type="radio" id=${zanrovi[i].id} name="tmdb-zanrovi" value=${zanrovi[i].name}>` +
            zanrovi[i].name + " " + zanrovi[i].id +
            "</li>"
    }
    html += "</ol>";
    prikaz.innerHTML = html;
}