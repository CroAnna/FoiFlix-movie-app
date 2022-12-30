window.addEventListener("load", async () => {
    let obrReg = document.getElementById("obrazacRegistracija");
    var btnRegistriraj = document.getElementById("btnRegistriraj");
    btnRegistriraj.addEventListener("click", (event) => {
        event.preventDefault();
        dohvatiKorisnikee();

        let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (regexEmail.test(obrReg.email.value)) {
            console.log("obrReg.korime.value " + obrReg.korime.value);
            dodajKorisnika(obrReg);
        } else {
            alert("E-mail nije u ispravnom obliku");
        }
    });

    async function dodajKorisnika(obrazac) {
        let tijelo =
        {
            korime: obrazac.korime.value,
            lozinka: obrazac.lozinka.value,
            ime: obrazac.ime.value,
            prezime: obrazac.prezime.value,
            email: obrazac.email.value
        }

        let header = new Headers();
        header.set("Content-Type", "application/json");

        let parametri = {
            method: 'POST',
            body: JSON.stringify(tijelo),
            headers: header
        }

        //let podaci = await fetch("http://spider.foi.hr:12204/registracija", parametri);
        let podaci = await fetch("http://localhost:9000/registracija", parametri);

        await podaci.text();
    }
})

async function dohvatiKorisnikee() {
    // let odgovor = await fetch("http://spider.foi.hr:12204/dajMojeKorisnike");
    let odgovor = await fetch("http://localhost:9001/dajMojeKorisnike");
    if (odgovor.status == 200) {
        let podaci = await odgovor.text();
        return podaci;
    } else {
        alert("Problem kod preuzimanja podataka:\n" + odgovor.statusText);
    }
}