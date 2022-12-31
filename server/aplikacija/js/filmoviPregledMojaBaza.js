/*const Konfiguracija = require("../../konfiguracija");

let konf = new Konfiguracija();
let jsonobjekt = konf.dajKonf();
let restport = jsonobjekt["rest.port"]
let appport = jsonobjekt["app.port"]*/
//let url = "http://localhost:" + restport;

let restport = 9000;
let appport = 9001;

let url = "http://localhost:" + restport + "/api"; // ni ne treba nam ovde...

var tipSortiranja = null;
window.addEventListener("DOMContentLoaded", async () => {
  var podaciFilmaKontejner = document.querySelector(".podaci-filma-kontejner");
  var filterDropdown = document.getElementById("sort");
  dajMojeFilmove();

  async function dajMojeFilmove() {
    let odgovor = await fetch("http://localhost:" + appport + "/dajMojeFilmove");
    if (odgovor.status == 200) {
      let podaci = await odgovor.text();
      prikaziMojeFilmove(podaci);
    } else {
      alert("Problem kod preuzimanja podataka:\n" + odgovor.statusText);
    }
  }

  function sortiranjePoNazivu(prvi, drugi) {
    if (prvi < drugi) {
      return -1;
    } else if (prvi > drugi) {
      return 1;
    } else {
      return 0;
    }
  }

  function prikaziMojeFilmove(podaci) {
    let filmovi = JSON.parse(podaci);
    filmovi.sort(function (prvi, drugi) {
      return sortiranjePoNazivu(prvi.title, drugi.title);
    })

    let prikaz = document.getElementById("moji-filmovi-kontejner");
    html = "<ol>";

    for (let i in filmovi) {
      if (filmovi[i].odobreno == 1) {
        html +=
          `<li class="moji-filmovi"> <a href = "/film?id=${filmovi[i].id}">--> ` +
          filmovi[i].title +
          "</a></li>"
      }
    }
    html += "</ol>";
    prikaz.innerHTML = html;
  }
});

