const Baza = require("./baza.js");

class FilmDAO {
    constructor() {
        this.baza = new Baza();
    }

    dajSve = async function () {
        this.baza.spojiSeNaBazu();
        let sql = "SELECT * FROM film;";
        var podaci = await this.baza.izvrsiUpit(sql, []);
        this.baza.zatvoriVezu();
        return podaci;
    };

    daj = async function (id) {
        this.baza.spojiSeNaBazu();
        let sql = "SELECT * FROM film WHERE id=?;";
        var podaci = await this.baza.izvrsiUpit(sql, [id]);
        this.baza.zatvoriVezu();
        if (podaci.length == 1) return podaci[0];
        else return null;
    };

    brisi = async function (id, film) {
        console.log("BRISI DAO " + id + " " + film.id);

        this.baza.spojiSeNaBazu();
        let sql = "DELETE FROM film WHERE id=?;";
        var podaci = await this.baza.izvrsiUpit(sql, [film.id]);
        this.baza.zatvoriVezu();
        console.log("izbrisan je film s id " + id);
        return true;
    };

    azuriraj = async function (id, film) {
        console.log("u filmdao azuriraj " + id + " " + film.id);

        let sql = `UPDATE film SET odobreno=? WHERE id=?`;
        let podaci = [
            1,
            film.id,
        ];
        await this.baza.izvrsiUpit(sql, podaci);
        return true;
    };

    dodaj = async function (film
    ) {
        console.log("FILM " + film);

        let sql = `INSERT INTO film (id, adult, backdrop_path,original_language , original_title, overview, popularity, poster_path, release_date, title, video, vote_average, vote_count, budget, odobreno, status, homepage, tagline,imdb_id ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

        let podaci = [
            film.id,
            film.adult,
            film.backdrop_path,
            film.original_language,
            film.original_title,
            film.overview,
            film.popularity,
            film.poster_path,
            film.release_date,
            film.title,
            film.video,
            film.vote_average,
            film.vote_count,
            film.budget,
            0,
            "Released",
            film.backdrop_path,
            film.title,
            film.id,
        ];

        let sql2 = `INSERT INTO film_zanr (film_id, zanr_id) VALUES (?,?)`;
        var zanrString = (film.genre_ids).toString();
        const poljeZanrova = zanrString.split(",");
        for (let i = 0; i < poljeZanrova.length; i++) {
            console.log("\nzanr " + i + " " + poljeZanrova[i]);
        }

        try {
            await this.baza.izvrsiUpit(sql, podaci);
            try {
                for (let j = 0; j < poljeZanrova.length; j++) {
                    await this.baza.izvrsiUpit(sql2, [
                        film.id,
                        poljeZanrova[j]
                    ]);
                }
            } catch (error) {
                console.log("Neispravno je nekaj - insert zanr - " + error)
                return false;
            }
        } catch (error) {
            console.log("Neispravno je nekaj - insert film - " + error)
            return false;
        }
        return true;
    };
}

module.exports = FilmDAO;