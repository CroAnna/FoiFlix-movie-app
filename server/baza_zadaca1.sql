-- -----------------------------------------------------
-- Table `RWA2022askarica20`.`uloga`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `RWA2022askarica20`.`uloga` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `naziv` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `RWA2022askarica20`.`korisnik`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `RWA2022askarica20`.`korisnik` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `korime` VARCHAR(45) NOT NULL,
  `lozinka` VARCHAR(64) NOT NULL,
  `ime` VARCHAR(45) NOT NULL,
  `prezime` VARCHAR(45) NOT NULL,
  `email` VARCHAR(80) NOT NULL,
  `token` CHAR(8) NULL,
  `sol` CHAR(50) NULL,
  `tajniTOTPkljuc` VARCHAR(150) NULL,
  `aktiviran` TINYINT NULL,
  `blokiran` TINYINT NULL,
  `uloga_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_korisnik_uloga1_idx` (`uloga_id` ASC) VISIBLE,
  UNIQUE INDEX `korime_UNIQUE` (`korime` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  CONSTRAINT `fk_korisnik_uloga1`
    FOREIGN KEY (`uloga_id`)
    REFERENCES `RWA2022askarica20`.`uloga` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `RWA2022askarica20`.`film`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `RWA2022askarica20`.`film` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `adult` TINYINT NOT NULL,
  `backdrop_path` VARCHAR(200) NULL,
  `budget` INT NULL,
  `homepage` VARCHAR(45) NULL,
  `imdb_id` CHAR(9) NULL,
  `original_language` VARCHAR(45) NOT NULL,
  `original_title` VARCHAR(45) NOT NULL,
  `overview` VARCHAR(900) NULL,
  `popularity` FLOAT NOT NULL,
  `poster_path` VARCHAR(100) NULL,
  `release_date` VARCHAR(45) NOT NULL,
  `revenue` INT NULL,
  `runtime` INT NULL,
  `status` VARCHAR(45) NULL,
  `tagline` VARCHAR(45) NULL,
  `title` VARCHAR(80) NOT NULL,
  `video` TINYINT NOT NULL,
  `vote_average` FLOAT NULL,
  `vote_count` INT NOT NULL,
  `datum_unosa` DATETIME NULL,
  `odobreno` TINYINT NULL,
  `korisnik_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_film_korisnik1_idx` (`korisnik_id` ASC) VISIBLE,
  CONSTRAINT `fk_film_korisnik1`
    FOREIGN KEY (`korisnik_id`)
    REFERENCES `RWA2022askarica20`.`korisnik` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `RWA2022askarica20`.`zanr`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `RWA2022askarica20`.`zanr` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `RWA2022askarica20`.`film_zanr`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `RWA2022askarica20`.`film_zanr` (
  `zanr_id` INT NOT NULL,
  `film_id` INT NOT NULL,
  INDEX `fk_zanr_has_film_film1_idx` (`film_id` ASC) VISIBLE,
  INDEX `fk_zanr_has_film_zanr1_idx` (`zanr_id` ASC) VISIBLE,
  CONSTRAINT `fk_zanr_has_film_zanr1`
    FOREIGN KEY (`zanr_id`)
    REFERENCES `RWA2022askarica20`.`zanr` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_zanr_has_film_film1`
    FOREIGN KEY (`film_id`)
    REFERENCES `RWA2022askarica20`.`film` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


INSERT INTO `zanr` (`id`, `name`) VALUES
(35, 'Comedy'),
(53, 'Thriller')


