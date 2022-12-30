let url = "http://localhost:9000/api";

var tipSortiranja = null;
window.addEventListener("DOMContentLoaded", async () => {
  var podaciFilmaKontejner = document.querySelector(".podaci-filma-kontejner");
  var filterDropdown = document.getElementById("sort");
  dajMojeFilmove();

  async function dajMojeFilmove() {
    let odgovor = await fetch("http://localhost:9001/dajMojeFilmove");
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

