let url = "http://spider.foi.hr:12238/api";
window.addEventListener("load", async () => {
    var profilIme = document.getElementById("profil-ime");
    var profilPrezime = document.getElementById("profil-prezime");
    var profilKorime = document.getElementById("profil-korime");
    var profilEmail = document.getElementById("profil-email");
    var btnOdustani = document.getElementById("btnOdustani");
    var btnSpremi = document.getElementById("btnSpremi");

    await fetchaj('http://spider.foi.hr:12204/profil/ispisiKorime', profilKorime);

    function fetchaj(url, varijabla) {
        var pom;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log("data.data-" + varijabla + " = " + data.data);
                varijabla.value = data.data;
                dajKorisnikovePodatke(varijabla.value);
            })
    }

    console.log("profilKorime.value = " + profilKorime.value);
    btnOdustani.addEventListener("click", () => {
        odustani();
    });

    btnSpremi.addEventListener("click", () => {
        spremi(profilKorime.value, profilIme.value, profilPrezime.value);
    });

    function prikaziKorisnikovePodatke(podaci) {
        let korisnici = JSON.parse(podaci);
        for (let i in korisnici) {
            if (korisnici[i].korime == profilKorime.value) {
                profilIme.value = korisnici[i].ime;
                profilPrezime.value = korisnici[i].prezime;
                profilEmail.value = korisnici[i].email;
            }
        }
    }

    function odustani() {
        location.href = "/pocetna";
    }

    function spremi(korime, novoIme, novoPrezime) {
        updateajKorisnika(korime, novoIme, novoPrezime)
    }

    async function updateajKorisnika(korime, novo_ime, novo_prezime) {
        let tijelo =
        {
            korime: korime,
            ime: novo_ime,
            prezime: novo_prezime,
        }

        let header = new Headers();
        header.set("Content-Type", "application/json");

        let parametri = {
            method: 'PUT',
            body: JSON.stringify(tijelo),
            headers: header
        }
        let podatki = await fetch("http://spider.foi.hr:12204/korisnikUpdate", parametri);
        await podatki.text();
    }

    async function dajKorisnikovePodatke(korimeValue) {
        let odgovor = await fetch("http://spider.foi.hr:12204/dajMojeKorisnike");
        if (odgovor.status == 200) {
            let podaci = await odgovor.text();
            console.log(podaci);
            prikaziKorisnikovePodatke(podaci);
        } else {
            alert("Problem kod preuzimanja podataka:\n" + odgovor.statusText);
        }
    }

});


