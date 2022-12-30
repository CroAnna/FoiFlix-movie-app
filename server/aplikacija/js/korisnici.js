let url = "http://localhost:9000/api";
window.addEventListener("load", async () => {
    const btnPrikaziPopisKorisnika = document.getElementById("prikaziPopisKorisnika");
    const btnBlokiraj = document.getElementById("blokiraj");
    btnBlokiraj.addEventListener("click", function () {
        dohvatiKorisnika("blokiraj");
    })
    dohvatiKorisnike();
});


async function dohvatiKorisnike() {
    let odgovor = await fetch("http://localhost:9001/dajMojeKorisnike");
    if (odgovor.status == 200) {
        let podaci = await odgovor.text();
        prikaziKorisnike(podaci);
    } else {
        alert("Problem kod preuzimanja podataka:\n" + odgovor.statusText);
    }
}

function prikaziKorisnike(podaci) {
    let korisnici = JSON.parse(podaci);
    let prikaz = document.getElementById("korisnici-kontejner");
    html = "<ol>";
    for (let i in korisnici) {
        html +=
            "<li>" +
            `<input  type="radio" id=${korisnici[i].id} name="moji-korisnici" value=${korisnici[i].korime}>` +
            korisnici[i].korime + " " + korisnici[i].id +
            "</li>"
    }
    html += "</ol>";
    prikaz.innerHTML = html;
}

function dohvatiKorisnika(opcija) {
    var oznaceniRadio = document.querySelector('input[name="moji-korisnici"]:checked');
    if (opcija == "blokiraj") {
        blokirajKorisnika(oznaceniRadio.value)
    }
    else {
        console.log("odabrano updateanje");

    }
}

async function blokirajKorisnika(korime) {
    let tijelo =
    {
        korime: korime,
    }
    let header = new Headers();
    header.set("Content-Type", "application/json");

    let parametri = {
        method: 'PUT',
        body: JSON.stringify(tijelo),
        headers: header
    }

    let podatki = await fetch("http://localhost:9001/korisniciBlokiraj", parametri);
    await podatki.text();
}
