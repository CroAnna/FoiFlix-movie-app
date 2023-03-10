CREATE TABLE IF NOT EXISTS `uloga` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT,
  `naziv` VARCHAR(45) NULL
);

INSERT INTO `uloga` (`id`, `naziv`) VALUES
(1, 'admin'),
(2, 'registrirani korisnik'),
(3, 'gost');

CREATE TABLE IF NOT EXISTS `korisnik` (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  korime TEXT NOT NULL,
  lozinka TEXT NOT NULL,
  ime TEXT NOT NULL,
  prezime TEXT NOT NULL,
  email TEXT NOT NULL,
  token CHAR(8) DEFAULT NULL,
  sol TEXT DEFAULT NULL,
  uloga_id INTEGER NOT NULL,
  aktiviran INTEGER DEFAULT NULL,
  blokiran INTEGER DEFAULT NULL,
  tajniTOTPkljuc TEXT DEFAULT NULL
);


CREATE TABLE IF NOT EXISTS `slike` (
id INTEGER PRIMARY KEY AUTOINCREMENT,
putanja TEXT NOT NULL,
korisnik_korime TEXT NOT NULL,
film_id INTEGER NOT NULL,
FOREIGN KEY (`korisnik_korime`) REFERENCES `korisnik` (`korime`)
FOREIGN KEY (`film_id`) REFERENCES `film` (`id`)
);

SELECT * FROM `slike`;
INSERT INTO `slike` (`id`, `putanja`, `korisnik_korime`, `film_id`) VALUES (1, 'https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg', 'administrator', 293660);

DROP TABLE `korisnik`;

INSERT INTO `korisnik` (`id`, `korime`, `lozinka`, `ime`, `prezime`, `email`, `token`, `sol`, `uloga_id`, `aktiviran`, `blokiran`, `tajniTOTPkljuc`) VALUES
(3, 'a', '3f5d173d7b5bc56590f5f6793ac07d278f5a6e088f72b66c0ca9cda1039dbccc', 'a', 'a', 'aaa@gmail.com', NULL, NULL, 1, NULL, 1, NULL);

INSERT INTO `korisnik` (`id`, `korime`, `lozinka`, `ime`, `prezime`, `email`, `token`, `sol`, `uloga_id`, `aktiviran`, `blokiran`, `tajniTOTPkljuc`) VALUES
(85, 'administrator', '2317c5cc4e67b0cb5f55b26fdcf5fe0a24012503ae99d22b26f3c866d281be2b', 'admin', 'istrator', 'oday.khiree@minutestep.com', NULL, NULL, 1, 1, NULL, 'BECRAAAAAAAACBRBAAAAABRAAADRAAAJAAAAKAAAAIAAABAEAAAAMARABEDRABZAAAAARAAEAZAARAZFA5DACAAAAACAAAAHAABRABA');

SELECT * FROM korisnik;
SELECT * FROM `film_zanr`;

DELETE FROM `film_zanr`;
DELETE FROM `film`;
DELETE FROM `zanr`;

SELECT * FROM `film`;

CREATE TABLE IF NOT EXISTS `zanr` (
id INTEGER PRIMARY KEY AUTOINCREMENT,
name VARCHAR(50) NOT NULL
);


INSERT INTO `zanr` (`id`, `name`) VALUES
(35, 'Comedy'),
(53, 'Thriller')

INSERT INTO `zanr` (`id`, `name`) VALUES (?,?) 28,Action;

SELECT * FROM zanr;


INSERT INTO `film_zanr` (`zanr_id`, `film_id`)
VALUES (10402, 65),
  (28, 809183),
  (12, 19995),
  (16, 4523);




CREATE TABLE IF NOT EXISTS `film` (
  id INTEGER UNIQUE NOT NULL,
  adult INTEGER NOT NULL,
  backdrop_path TEXT DEFAULT NULL,
  budget INTEGER DEFAULT NULL,
  homepage TEXT DEFAULT NULL,
  imdb_id CHAR(9) DEFAULT NULL,
  original_language TEXT NOT NULL,
  original_title TEXT NOT NULL,
  overview TEXT DEFAULT NULL,
  popularity REAL NOT NULL,
  poster_path TEXT DEFAULT NULL,
  release_date TEXT NOT NULL, 
  revenue INTEGER DEFAULT NULL,
  runtime INTEGER DEFAULT NULL,
  status TEXT DEFAULT NULL,
  tagline TEXT DEFAULT NULL,
  title TEXT NOT NULL,
  video INTEGER NOT NULL,
  vote_average REAL DEFAULT NULL,
  vote_count INTEGER NOT NULL,
  datum_unosa DATETIME DEFAULT CURRENT_TIMESTAMP,
  odobreno INTEGER DEFAULT 0,
  korisnik_id INTEGER DEFAULT NULL,
  FOREIGN KEY (`korisnik_id`) REFERENCES `korisnik` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
);



SELECT * FROM `film`;
SELECT * FROM `film_zanr`;
SELECT * FROM `film` WHERE `id`=555604;
SELECT * FROM `film` WHERE `id` IN (SELECT film_id FROM film_zanr WHERE zanr_id=14);
SELECT film_id FROM film_zanr WHERE zanr_id=14;
SELECT * FROM `film` WHERE `id` JOIN `film_zanr` ON `film_id`

DROP TABLE `film`;

DELETE FROM `film_zanr` WHERE `film_id`=315162;

INSERT INTO `film` (`id`, `adult`, `backdrop_path`, `budget`, `homepage`, `imdb_id`, `original_language`, `original_title`, `overview`, `popularity`, `poster_path`, `release_date`, `revenue`, `runtime`, `status`, `tagline`, `title`, `video`, `vote_average`, `vote_count`, `datum_unosa`, `odobreno`, `korisnik_id`) VALUES
(3, 0, NULL, 5, '5', '5', '5', '5', NULL, 5, NULL, '5', 5, NULL, '5', NULL, '5', 5, 5, 5, '2022-11-23 23:49:47', NULL, 9);






/*
CREATE TABLE IF NOT EXISTS `film_zanr` (
  zanr_id INT NOT NULL,
  film_id INT NOT NULL,
  FOREIGN KEY (`zanr_id`) REFERENCES `zanr` (id) ON DELETE SET DEFAULT ON UPDATE SET DEFAULT,
  FOREIGN KEY (`film_id`) REFERENCES `film` (id) ON DELETE SET DEFAULT ON UPDATE SET DEFAULT
);*/


/* mislim da tu vanjski kljucevi trebaju ic nekak drukcije da crasha ak taj zanr id ne postoji */
CREATE TABLE `film_zanr` (
  `zanr_id` NOT NULL,
  `film_id` NOT NULL,
  PRIMARY KEY (zanr_id, film_id)
  FOREIGN KEY (film_id) REFERENCES `film`(id) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (zanr_id) REFERENCES `zanr`(id) ON DELETE RESTRICT ON UPDATE RESTRICT
);

INSERT INTO `film_zanr` (`zanr_id`, `film_id`) VALUES
(80, 3);

SELECT * FROM zanr;
SELECT * FROM film;
SELECT * FROM film_zanr;
SELECT * FROM film_zanr WHERE zanr_id=16;

DROP TABLE `film_zanr`;
DELETE FROM `film_zanr` WHERE `film_id`=459151;

SELECT * FROM `film_zanr`;

INSERT INTO `film_zanr` (`zanr_id`, `film_id`) VALUES
(12, 19995);

