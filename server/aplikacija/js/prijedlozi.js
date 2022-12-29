let url = "http://spider.foi.hr:12238/api";
window.addEventListener("DOMContentLoaded", async () => {
    podaciFilmaKontejner = document.querySelector(".prijedlozi-kontejner");
    dajMojeFilmove();

    async function dajMojeFilmove() {
        let odgovor = await fetch("http://spider.foi.hr:12204/dajMojeFilmove");
        if (odgovor.status == 200) {
            let podaci = await odgovor.text();
            prikaziMojeFilmove(podaci);
        } else {
            alert("Problem kod preuzimanja podataka:\n" + odgovor.statusText);
        }
    }

    function prikaziMojeFilmove(podaci) {
        let filmovi = JSON.parse(podaci);
        let prikaz = document.getElementById("prijedlozi-kontejner");
        html = "<ol>";
        console.log("u prikaziMojeFilmove");
        for (let i in filmovi) {
            if (filmovi[i].odobreno == 0) {
                html +=
                    `<li class="moji-filmovi"> <a href = "/film?id=${filmovi[i].id}">--> ` +
                    filmovi[i].title +
                    "</a><button id='btnOdobri' onClick='odobriFilm(" +
                    filmovi[i].id +
                    ")'>Odobri</button><button id='btnOdbaci' onClick='odbaciFilm(" +
                    filmovi[i].id +
                    ")'>Odbaci</button></li>"
            }

        }
        html += "</ol>";
        prikaz.innerHTML = html;
    }
});

async function odobriFilm(id) {
    let tijelo =
    {
        id: parseInt(id),
    }
    let header = new Headers();
    header.set("Content-Type", "application/json");
    let parametri = {
        method: 'PUT',
        body: JSON.stringify(tijelo),
        headers: header
    }
    let podatki = await fetch("http://spider.foi.hr:12204/filmoviUpdate", parametri);
    await podatki.text();
}

async function odbaciFilm(id) {
    console.log("novo odbaciFilm " + id);
    let tijelo =
    {
        id: parseInt(id),
    }
    let header = new Headers();
    header.set("Content-Type", "application/json");
    let parametri = {
        method: 'DELETE',
        body: JSON.stringify(tijelo),
        headers: header
    }
    let podatki = await fetch("http://spider.foi.hr:12204/filmoviDelete", parametri);
    await podatki.text();
}