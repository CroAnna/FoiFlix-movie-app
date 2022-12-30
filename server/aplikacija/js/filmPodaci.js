var podaciFilmaKontejner, filmTitle, filmId, filmAdult, filmBackdropPath, filmBudget, filmHomepage, filmImdbId, filmOrigLang, filmOrigTitle, filmOverview, filmPopularity, filmPoster, filmReleaseDate, filmRevenue, filmRuntime, filmStatus, filmTagline, filmVideo, filmVoteAverage, filmVoteCount, filmDatumUnosa, filmOdobreno, filmKorisnikId, filmSlika;

const urlParams = new URLSearchParams(window.location.search);
const idFilmaIzUrla = urlParams.get("id");
console.log(idFilmaIzUrla);

window.addEventListener("DOMContentLoaded", async () => {
    podaciFilmaKontejner = document.querySelector(".podaci-filma-kontejner");
    filmTitle = document.getElementById("film-title");
    filmId = document.getElementById("film-id");
    filmAdult = document.getElementById("film-adult");
    filmBackdropPath = document.getElementById("film-backdroppath");
    filmBudget = document.getElementById("film-budget");
    filmHomepage = document.getElementById("film-homepage");
    filmImdbId = document.getElementById("film-imdb-id");
    filmOrigLang = document.getElementById("film-original-language");
    filmOrigTitle = document.getElementById("film-original-title");
    filmOverview = document.getElementById("film-overview");
    filmPopularity = document.getElementById("film-popularity");
    filmPoster = document.getElementById("film-poster-path");
    filmReleaseDate = document.getElementById("film-release-date");
    filmRevenue = document.getElementById("film-revenue");
    filmRuntime = document.getElementById("film-runtime");
    filmStatus = document.getElementById("film-status");
    filmTagline = document.getElementById("film-tagline");
    filmVideo = document.getElementById("film-video");
    filmVoteAverage = document.getElementById("film-vote-average");
    filmVoteCount = document.getElementById("film-vote-count");
    filmDatumUnosa = document.getElementById("film-datum-unosa");
    filmOdobreno = document.getElementById("film-odobreno");
    filmKorisnikId = document.getElementById("film-korisnik-id");

    filmSlika = document.getElementById("film-slika");

    dajPodatkeFilmova(idFilmaIzUrla);

});


async function dajPodatkeFilmova(idFilma) {
    let odgovor = await fetch("http://localhost:9001/dajMojeFilmove");
    if (odgovor.status == 200) {
        let podaci = await odgovor.text();
        console.log(podaci);
        prikaziPodatkeFilma(podaci, idFilma);
    } else {
        alert("Problem kod preuzimanja podataka:\n" + odgovor.statusText);
    }
}

function prikaziPodatkeFilma(podaci, idFilma) {
    let filmovi = JSON.parse(podaci);
    for (let i in filmovi) {
        if (filmovi[i].id == idFilma) {
            filmTitle.value = filmovi[i].title;
            filmId.value = filmovi[i].id;

            if (filmovi[i].adult == 0) {
                filmAdult.value = "no";
            } else {
                filmAdult.value = "yes";
            }

            filmBackdropPath.value = filmovi[i].backdrop_path;
            filmBudget.value = filmovi[i].budget;
            filmHomepage.value = filmovi[i].homepage;
            filmImdbId.value = filmovi[i].imdb_id;
            filmOrigLang.value = filmovi[i].original_language;
            filmOrigTitle.value = filmovi[i].original_title;
            filmOverview.value = filmovi[i].overview;
            filmPopularity.value = filmovi[i].popularity;
            filmSlika.innerHTML = `<img src='https://image.tmdb.org/t/p/w600_and_h900_bestv2/${filmovi[i].poster_path}' alt="slika-poster" id="slika-poster" />`
            filmReleaseDate.value = filmovi[i].release_date;
            filmRevenue.value = filmovi[i].revenue;
            filmRuntime.value = filmovi[i].runtime;
            filmStatus.value = filmovi[i].status;
            filmTagline.value = filmovi[i].tagline;

            if (filmovi[i].video == 0) {
                filmVideo.value = "no";
            } else {
                filmVideo.value = "yes";
            }

            filmVoteAverage.value = filmovi[i].vote_average;
            filmVoteCount.value = filmovi[i].vote_count;
            filmDatumUnosa.value = filmovi[i].datum_unosa;
            filmOdobreno.value = filmovi[i].odobreno;
            filmKorisnikId.value = filmovi[i].korisnik_id;
        }
    }
}
