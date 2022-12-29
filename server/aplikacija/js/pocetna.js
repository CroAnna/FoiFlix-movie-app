//let url = "http://spider.foi.hr:12204";
let url = "http://localhost:9000"; // TODO promijeni u rest port da se odnekud uzme

window.addEventListener("load", async () => {
  let main = document.querySelector(".generirani-kontejner");
  let prikaz = "<ol>";
  for (let p of await dohvatiZanroveIzMojeBaze()) {
    prikaz += "<li>" + p.name;
    let filmovi = await dohvatiFilmove(p.name);
    prikaz += "<ul>";
    prikaz += "<li>" + filmovi[0]["original_title"] + "</li>";
    prikaz += "<li>" + filmovi[1]["original_title"] + "</li>";
    prikaz += "</ul></li>";
  }
  main.innerHTML = prikaz + "</ol>";
});

async function dohvatiZanrove() {
  let odgovor = await fetch(url + "/dajSveZanrove");
  let podaci = await odgovor.text();
  console.log(podaci);
  let zanrovi = JSON.parse(podaci);
  return zanrovi;
}

async function dohvatiZanroveIzMojeBaze() {
  let odgovor = await fetch(url + "/dajMojeZanrove");
  let podaci = await odgovor.text();
  console.log(podaci);
  let zanrovi = JSON.parse(podaci);
  return zanrovi;
}

async function dohvatiFilmove(zanr) {
  let odgovor = await fetch(url + "/dajDvaFilma?zanr=" + zanr);
  let podaci = await odgovor.text();
  let filmovi = JSON.parse(podaci);
  return filmovi;
}

async function dohvatiMojeFilmove(zanr) {
  let odgovor = await fetch(url + "/dajDvaFilma?zanr=" + zanr);
  let podaci = await odgovor.text();
  let filmovi = JSON.parse(podaci);
  return filmovi;
}
