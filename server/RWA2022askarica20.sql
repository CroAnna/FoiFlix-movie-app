-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 29, 2022 at 02:47 PM
-- Server version: 8.0.31-0ubuntu0.20.04.1
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `RWA2022askarica20`
--

-- --------------------------------------------------------

--
-- Table structure for table `film`
--

CREATE TABLE `film` (
  `id` int NOT NULL,
  `adult` tinyint NOT NULL,
  `backdrop_path` varchar(200) DEFAULT NULL,
  `budget` int DEFAULT NULL,
  `homepage` varchar(45) DEFAULT NULL,
  `imdb_id` char(9) DEFAULT NULL,
  `original_language` varchar(45) NOT NULL,
  `original_title` varchar(45) NOT NULL,
  `overview` varchar(900) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `popularity` float NOT NULL,
  `poster_path` varchar(100) DEFAULT NULL,
  `release_date` varchar(45) NOT NULL,
  `revenue` int DEFAULT NULL,
  `runtime` int DEFAULT NULL,
  `status` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `tagline` varchar(45) DEFAULT NULL,
  `title` varchar(80) NOT NULL,
  `video` tinyint NOT NULL,
  `vote_average` float DEFAULT NULL,
  `vote_count` int NOT NULL,
  `datum_unosa` datetime DEFAULT CURRENT_TIMESTAMP,
  `odobreno` tinyint DEFAULT '0',
  `korisnik_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `film`
--

INSERT INTO `film` (`id`, `adult`, `backdrop_path`, `budget`, `homepage`, `imdb_id`, `original_language`, `original_title`, `overview`, `popularity`, `poster_path`, `release_date`, `revenue`, `runtime`, `status`, `tagline`, `title`, `video`, `vote_average`, `vote_count`, `datum_unosa`, `odobreno`, `korisnik_id`) VALUES
(3, 0, NULL, 5, '5', '5', '5', '5', NULL, 5, NULL, '5', 5, NULL, '5', NULL, '5', 5, 5, 5, '2022-11-23 23:49:47', NULL, 9),
(671, 0, '/t3LicFpYHeYpwqm7L5wDpd22hL5.jpg', 500000, '/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg', '671', 'en', 'Harry Potter and the Philosopher\'s Stone', 'Harry Potter has lived under the stairs at his aunt and uncle\'s house his whole life. But on his 11th birthday, he learns he\'s a powerful wizard—with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry. As he learns to harness his newfound powers with the help of the school\'s kindly headmaster, Harry uncovers the truth about his parents\' deaths—and about the villain who\'s to blame.', 233.744, '/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg', '2001-11-16', 1500, 120, 'movie', 'Harry Potter and the Philosopher\'s Stone', 'Harry Potter and the Philosopher\'s Stone', 0, 7.9, 23505, '2022-11-10 02:26:32', 1, 9),
(674, 0, '/5rrGVmRUuCKVbqUu41XIWTXJmNA.jpg', 230000, '/5rrGVmRUuCKVbqUu41XIWTXJmNA.jpg', '674', 'en', 'Harry Potter and the Goblet of Fire', 'When Harry Potter\'s name emerges from the Goblet of Fire, he becomes a competitor in a grueling battle for glory among three wizarding schools—the Triwizard Tournament. But since Harry never submitted his name for the Tournament, who did? Now Harry must confront a deadly dragon, fierce water demons and an enchanted maze only to find himself in the cruel grasp of He Who Must Not Be Named.', 296.13, '/fECBtHlr0RB3foNHDiCBXeg9Bv9.jpg', '2005-11-16', 600000, 153, 'Released', 'Harry Potter and the Goblet of Fire', 'Harry Potter and the Goblet of Fire', 0, 7.8, 17874, '2022-11-08 18:46:04', 1, 9),
(36972, 0, '/bZ7UfV85En1sbMpw6dZMzX74Z6w.jpg', 210000, '/bZ7UfV85En1sbMpw6dZMzX74Z6w.jpg', '36972', 'en', 'Scooby Goes Hollywood', 'The gang goes to Hollywood as Scooby-Doo stars in his first film. When a creepy creature wants to put a stop to the film, Scooby-Doo must solve the mystery to ensure his star status remains intact.', 10.235, '/6PoZRwBmxFhLT06pmEVDXfEYdKq.jpg', '1980-01-01', 50000, 111, 'Released', 'Scooby Goes Hollywood', 'Scooby Goes Hollywood', 0, 7.7, 120, '2022-11-09 21:17:10', 1, 9),
(51786, 0, '/vkyiRXgIAKFNVBYmauTF1a7u4wj.jpg', 23400, '/vkyiRXgIAKFNVBYmauTF1a7u4wj.jpg', '51786', 'en', 'Kim Possible: A Sitch In Time', 'Kim and Ron start out a new school year, only to find out that Ron\'s family is moving to Norway. This puts a strain on their partnership, just as Dr. Drakken, Monkey Fist, and Duff Killigan team up to find and use an ancient time travel device to rule the world. Attacking Kim in the past, present, and future, can these villians succeed? Or will an unforeseen force be more destructive?', 9.172, '/3XAMrWxsqqQI5HNJfegbUXtXiEG.jpg', '2003-11-28', 40000, 98, 'Released', 'Kim Possible: A Sitch In Time', 'Kim Possible: A Sitch In Time', 0, 6.7, 154, '2022-11-10 02:17:42', 1, 9),
(260513, 0, '/mabuNsGJgRuCTuGqjFkWe1xdu19.jpg', 400000, '/mabuNsGJgRuCTuGqjFkWe1xdu19.jpg', '260513', 'en', 'Incredibles 2', 'Elastigirl springs into action to save the day, while Mr. Incredible faces his greatest challenge yet – taking care of the problems of his three children.', 88.298, '/aTbRJHCrQwceSS5b8LYj7hC654I.jpg', '2018-06-14', 500000, 135, 'Released', 'Incredibles 2', 'Incredibles 2', 0, 7.5, 11312, '2022-11-09 19:26:25', 1, 9),
(337404, 0, '/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg', 680000, '/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg', '337404', 'en', 'Cruella', 'In 1970s London amidst the punk rock revolution, a young grifter named Estella is determined to make a name for herself with her designs. She befriends a pair of young thieves who appreciate her appetite for mischief, and together they are able to build a life for themselves on the London streets. One day, Estella’s flair for fashion catches the eye of the Baroness von Hellman, a fashion legend who is devastatingly chic and terrifyingly haute. But their relationship sets in motion a course of events and revelations that will cause Estella to embrace her wicked side and become the raucous, fashionable and revenge-bent Cruella.', 285.28, '/wToO8opxkGwKgSfJ1JK8tGvkG6U.jpg', '2021-05-26', 1200000, 143, 'Released', 'Cruella', 'Cruella', 0, 8.1, 7645, '2022-11-09 20:35:21', 1, 9),
(338953, 0, '/zGLHX92Gk96O1DJvLil7ObJTbaL.jpg', 320000, '/zGLHX92Gk96O1DJvLil7ObJTbaL.jpg', '338953', 'en', 'Fantastic Beasts: The Secrets of Dumbledore', 'Professor Albus Dumbledore knows the powerful, dark wizard Gellert Grindelwald is moving to seize control of the wizarding world. Unable to stop him alone, he entrusts magizoologist Newt Scamander to lead an intrepid team of wizards and witches. They soon encounter an array of old and new beasts as they clash with Grindelwald\'s growing legion of followers.', 466.687, '/3c5GNLB4yRSLBby0trHoA1DSQxQ.jpg', '2022-04-06', 4000000, 161, 'Released', 'Fantastic Beasts: The Secrets of Dumbledore', 'Fantastic Beasts: The Secrets of Dumbledore', 0, 6.8, 2929, '2022-11-08 18:45:48', 1, 9),
(361743, 0, '/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg', 125540, '/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg', '361743', 'en', 'Top Gun: Maverick', 'After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.', 1128.55, '/62HCnUTziyWcpDaBO2i1DX17ljH.jpg', '2022-05-24', 1540000, 140, 'Released', 'Top Gun: Maverick', 'Top Gun: Maverick', 0, 8.3, 4643, '2022-11-10 08:46:15', 0, 9),
(370172, 0, '/r2GAjd4rNOHJh6i6Y0FntmYuPQW.jpg', 1400000, '/r2GAjd4rNOHJh6i6Y0FntmYuPQW.jpg', '370000', 'en', 'No Time to Die', 'Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help. The mission to rescue a kidnapped scientist turns out to be far more treacherous than expected, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.', 142.402, '/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg', '2021-09-29', 200000, 210, 'Released', 'No Time to Die', 'No Time to Die', 0, 7.4, 4716, '2022-11-09 22:34:04', 1, 9),
(436270, 0, '/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg', 120000, '/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg', '436270', 'en', 'Black Adam', 'Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.', 2965.68, '/3zXceNTtyj5FLjwQXuPvLYK5YYL.jpg', '2022-10-19', 2150010, 1700, 'Released', 'Black Adam', 'Black Adam', 0, 6.8, 977, '2022-11-10 08:35:14', 0, 9),
(575322, 0, '/etP5jwlwvkNhwe7jnI2AyA6ZKrR.jpg', 120001, '/etP5jwlwvkNhwe7jnI2AyA6ZKrR.jpg', '575322', 'en', 'Звёздный разум', 'After depleting Earth\'s resources for centuries, humankind\'s survival requires an exodus to outer space. An international expedition is quickly formed to find a suitable new planet, but when plans go awry, the crew is suddenly stranded without power on a strange planet, where something unimaginable lies in wait.', 1279.26, '/rFljUdOozFEv6HDHIFpFvcYW0ec.jpg', '2022-01-06', 343444, 121, 'Released', 'Project Gemini', 'Project Gemini', 0, 5.6, 158, '2022-11-10 08:42:59', 0, 9),
(642885, 0, '/iS9U3VHpPEjTWnwmW56CrBlpgLj.jpg', 123354, '/iS9U3VHpPEjTWnwmW56CrBlpgLj.jpg', '642885', 'en', 'Hocus Pocus 2', '29 years since the Black Flame Candle was last lit, the 17th-century Sanderson sisters are resurrected, and they are looking for revenge. Now it\'s up to three high school students to stop the ravenous witches from wreaking a new kind of havoc on Salem before dawn on All Hallow\'s Eve.', 1169.36, '/7ze7YNmUaX81ufctGqt0AgHxRtL.jpg', '2022-09-27', 1210000, 230, 'Released', 'Hocus Pocus 2', 'Hocus Pocus 2', 0, 7.6, 1063, '2022-11-10 08:43:02', 0, 9),
(663712, 0, '/y5Z0WesTjvn59jP6yo459eUsbli.jpg', 6044100, '/y5Z0WesTjvn59jP6yo459eUsbli.jpg', '663712', 'en', 'Terrifier 2', 'After being resurrected by a sinister entity, Art the Clown returns to Miles County where he must hunt down and destroy a teenage girl and her younger brother on Halloween night.  As the body count rises, the siblings fight to stay alive while uncovering the true nature of Art\'s evil intent.', 4139.73, '/wRKHUqYGrp3PO91mZVQ18xlwYzW.jpg', '2022-10-06', 201100, 127, 'Released', 'Terrifier 2', 'Terrifier 2', 0, 7, 517, '2022-11-10 08:40:32', 0, 9),
(675054, 0, '/b2FxWOxe9K7ZZ1uaPOze2RJ1ajq.jpg', 200010, '/b2FxWOxe9K7ZZ1uaPOze2RJ1ajq.jpg', '675054', 'es', 'MexZombies', 'A group of teenagers must face a zombie apocalypse, and help reestablish order.', 2787.16, '/pTxw4GFE3ZfzJfvuUsPyD5njAuI.jpg', '2022-10-26', 120110, 70, 'Released', 'MexZombies', 'MexZombies', 0, 7.4, 56, '2022-11-10 09:01:48', 0, 9),
(676701, 0, '/tUBN1paMQ1tmVA5Sjy1ZjPWVsiF.jpg', NULL, '/tUBN1paMQ1tmVA5Sjy1ZjPWVsiF.jpg', '676701', 'es', 'Tadeo Jones 3: La Tabla Esmeralda', 'Tad would love for his archeologist colleagues to accept him as one of their own, but he always messes everything up. Tad accidentally destroys a sarcophagus and unleashes an ancient spell endangering the lives of his friends: Mummy, Jeff and Belzoni. With everyone against him and only helped by Sara, he sets off on an adventure that will take him from Mexico to Chicago and from Paris to Egypt, in order to put an end to the curse of the Mummy.', 1979.81, '/jvIVl8zdNSOAJImw1elQEzxStMN.jpg', '2022-08-24', NULL, NULL, 'Released', 'Tad the Lost Explorer and the Emerald Tablet', 'Tad the Lost Explorer and the Emerald Tablet', 0, 7.9, 86, '2022-11-19 12:02:03', 0, NULL),
(718930, 0, '/zt6sKnx9dEiRCb7oVMlfmmMGJMO.jpg', 30000, '/zt6sKnx9dEiRCb7oVMlfmmMGJMO.jpg', '718930', 'en', 'Bullet Train', 'Unlucky assassin Ladybug is determined to do his job peacefully after one too many gigs gone off the rails. Fate, however, may have other plans, as Ladybug\'s latest mission puts him on a collision course with lethal adversaries from around the globe—all with connected, yet conflicting, objectives—on the world\'s fastest train.', 1024.81, '/tVxDe01Zy3kZqaZRNiXFGDICdZk.jpg', '2022-07-03', 321000, 98, 'Released', 'Bullet Train', 'Bullet Train', 0, 7.5, 2245, '2022-11-10 08:57:28', 0, 9),
(882598, 0, '/olPXihyFeeNvnaD6IOBltgIV1FU.jpg', NULL, '/olPXihyFeeNvnaD6IOBltgIV1FU.jpg', '882598', 'en', 'Smile', 'After witnessing a bizarre, traumatic incident involving a patient, Dr. Rose Cotter starts experiencing frightening occurrences that she can\'t explain. As an overwhelming terror begins taking over her life, Rose must confront her troubling past in order to survive and escape her horrifying new reality.', 3871.7, '/aPqcQwu4VGEewPhagWNncDbJ9Xp.jpg', '2022-09-23', NULL, NULL, 'Released', 'Smile', 'Smile', 0, 6.8, 638, '2022-11-19 12:01:55', 1, NULL),
(960704, 0, '/5hoS3nEkGGXUfmnu39yw1k52JX5.jpg', 60000, '/5hoS3nEkGGXUfmnu39yw1k52JX5.jpg', '960704', 'ja', '鋼の錬金術師 完結編 最後の錬成', 'The Elric brothers’ long and winding journey comes to a close in this epic finale, where they must face off against an unworldly, nationwide threat.', 1065.14, '/AeyiuQUUs78bPkz18FY3AzNFF8b.jpg', '2022-06-24', 605700, 144, 'Released', 'Fullmetal Alchemist: The Final Alchemy', 'Fullmetal Alchemist: The Final Alchemy', 0, 6.3, 116, '2022-11-10 08:57:49', 0, 7);

-- --------------------------------------------------------

--
-- Table structure for table `film_zanr`
--

CREATE TABLE `film_zanr` (
  `zanr_id` int NOT NULL,
  `film_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `film_zanr`
--

INSERT INTO `film_zanr` (`zanr_id`, `film_id`) VALUES
(80, 3),
(28, 718930),
(35, 718930),
(53, 718930),
(28, 960704),
(27, 882598),
(9648, 882598),
(53, 882598);

-- --------------------------------------------------------

--
-- Table structure for table `korisnik`
--

CREATE TABLE `korisnik` (
  `id` int NOT NULL,
  `korime` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `lozinka` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ime` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `prezime` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `token` char(8) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `sol` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `uloga_id` int NOT NULL,
  `aktiviran` tinyint DEFAULT NULL,
  `blokiran` tinyint DEFAULT NULL,
  `tajniTOTPkljuc` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `korisnik`
--

INSERT INTO `korisnik` (`id`, `korime`, `lozinka`, `ime`, `prezime`, `email`, `token`, `sol`, `uloga_id`, `aktiviran`, `blokiran`, `tajniTOTPkljuc`) VALUES
(3, 'a', '3f5d173d7b5bc56590f5f6793ac07d278f5a6e088f72b66c0ca9cda1039dbccc', 'a', 'a', 'aaa@gmail.com', NULL, NULL, 1, NULL, 1, NULL),
(7, 'proba', 'c819143971b0250d7076b538aaa3a01609e9891d7a2f87c0c4cf07d7c17a2297', 'pro', 'ba', 'proba@gmail.com', NULL, NULL, 1, NULL, 1, NULL),
(8, 'ko', 'a59aadba2213c8f63c925c35b6b5f836984814d64ef7ffaa3b44f0e91f2e4168', 'koime', 'koprezime', 'tks90958@xcoxc.com', NULL, NULL, 1, NULL, NULL, NULL),
(9, 'u', 'a71d77022b455f5e1721126506d7b950adcbf3cfdb5adb6f29259a75ea822116', 'PIKI', 'PACKOSLAV', 'askarica20@student.foi.hr', NULL, NULL, 1, 1, NULL, 'AACRCAAIAAERAAAHAAAAGAAAAADRGAAAAEAARAAFAADRABAEBAAAGAZAAABAAAAAAAAAAARAAMAAOBIAAAEARBRJARERACIAAAAAGAI'),
(38, 'T', 'cc60df1fc102e1532a274cbd0217399fcb6a2f7bcd5b5ba66e6151a5e903dfc0', 'T', 'T', 'nonevos689@ktasy.com', NULL, NULL, 2, NULL, NULL, 'AAAAOARAAZEAAAAIAEARKCAAAMAAMAACAEDAABAAAMDARBAEAACRCAAAAABAABACBEBATAAGAMAAAAAAAREAOCIIAAAAMAZHAIAAOAA'),
(40, 'gd', 'ff136cc2dd65c11bdc2be53283c69112f5188dadb84e911ae59d7bdc9219e8d7', 'gfd', 'fgd', 'gfd', NULL, NULL, 2, NULL, NULL, 'AMERIBRAAZARTAAIAAAAAAAIAAAAAAAGAAAAMBIFAICAABZAAAERIAIAAABRRAABA5ARTAAAAADRAAAABEBRAAAAAAAAGBACARBAGAR'),
(41, 'uiol', '53ed148fca0ea323c0f4ec9c923550aa4ad6e36670cd92eac24a590fa413baa4', 'luig', 'lgui', 'lgu', NULL, NULL, 2, NULL, NULL, 'AADACBIAAICREAAAAABARAREAADRRAIBAZCAACAEAACRCAAAARERAAAAAACRRBRBAADRRBIIA5AATBIAAZCARCIGAAEAMAAAAMAAACA'),
(68, 'KB', '4ce866fede875349b86055378e4a7fc53d83c5b09cecb0477c58666badf32497', 'HBMVM', 'BHNM', 'tifini2827@ktasy.com', NULL, NULL, 2, NULL, NULL, 'AMBARBZAAAERTCIAAADRABRAARAAMBIIAADAOCAFARBAIBAAARCRGBRIAMAAAAZAAMBAABAGA5DAAAACARDAGBAAAACAAAAGAZEAECI'),
(84, 'obican', '2317c5cc4e67b0cb5f55b26fdcf5fe0a24012503ae99d22b26f3c866d281be2b', 'ob', 'ican', 'lixokik294@lance7.com', NULL, NULL, 2, 1, NULL, 'AACAAAIFAAAATAAFAAERCAAFAABAAAAGARAACAZAA5AAACIABAAAAAZDBACRAAAAAADRAAAAAADRAAAFAEAAMARAARDRTAADAABAIAA'),
(85, 'administrator', '2317c5cc4e67b0cb5f55b26fdcf5fe0a24012503ae99d22b26f3c866d281be2b', 'admin', 'istrator', 'oday.khiree@minutestep.com', NULL, NULL, 1, 1, NULL, 'BECRAAAAAAAACBRBAAAAABRAAADRAAAJAAAAKAAAAIAAABAEAAAAMARABEDRABZAAAAARAAEAZAARAZFA5DACAAAAACAAAAHAABRABA'),
(87, 'HFG', '1dc20efa96162e53d65f998bbb94a7cd7d5e4e9262b157e4340c610a2d329aba', 'FG', 'HFG', 'fivalac250@lidely.com', NULL, NULL, 2, 1, NULL, 'ARARACIABAAAAAZBA5AAOAAAARAAABRIAAAREAABBAARAAAAAAERABRHAAAAMCIJAAAAAAAJAZDAABAAAIAAGBICAAAAABRGAADAKBA'),
(88, 'abc', '7a3bf078509c9794d7b522a0e07e160cc44dd1462cc7f1761a05598007ebb605', 'abc', 'abc', 'asar.khang@minutestep.com', NULL, NULL, 2, 1, 1, 'BAAAMAAAAABAEAAAAABAKBZFARAAAAAGAADRAAZBAAAAOAAIAABRRCAEBAAATAACAAAAGAADAIDRAAACAZERAAAAARDRKAAHAADAGBZ'),
(90, 'final', 'b01a7980eca78bd141d43cdace31ad904068c198eac3b742611850e42e8dce70', 'final', 'alka', 'sanofin366@lance7.com', NULL, NULL, 2, 1, 1, 'AAAAOCAEBADRAAABARERAAZABEAAIAAAAZBRACAAAIARAAZAAAAARAABAACREBZIAIARTARFARARAAZDARBRAAAAAAAAABAFAADRRCA'),
(91, 'i', 'a7513daa42c78e8a1bf2a5444790c4d932194bd14a26c1f577f28ada634390a4', 'Ivica', 'Olic', 'tefayig186@invodua.com', NULL, NULL, 2, 1, NULL, 'ARDAACABA5DRTBIAARARAAACAEDAKAAFAAEAAAAABEERAAADAIDRIAAHBEBACBIHAZEAAAAAAAAATAAJAZAAAARFBAAAGAAHAADAAAA');

-- --------------------------------------------------------

--
-- Table structure for table `uloga`
--

CREATE TABLE `uloga` (
  `id` int NOT NULL,
  `naziv` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `uloga`
--

INSERT INTO `uloga` (`id`, `naziv`) VALUES
(1, 'admin'),
(2, 'registrirani korisnik'),
(3, 'gost');

-- --------------------------------------------------------

--
-- Table structure for table `zanr`
--

CREATE TABLE `zanr` (
  `id` int NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `zanr`
--

INSERT INTO `zanr` (`id`, `name`) VALUES
(27, 'hg'),
(28, 'Action'),
(35, 'Comedy'),
(53, 'Thriller'),
(80, 'Crime'),
(9648, 'Mystery');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `film`
--
ALTER TABLE `film`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_film_korisnik1_idx` (`korisnik_id`);

--
-- Indexes for table `film_zanr`
--
ALTER TABLE `film_zanr`
  ADD KEY `fk_zanr_has_film_film1_idx` (`film_id`),
  ADD KEY `fk_zanr_has_film_zanr1_idx` (`zanr_id`);

--
-- Indexes for table `korisnik`
--
ALTER TABLE `korisnik`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `korime_UNIQUE` (`korime`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `fk_korisnik_uloga1_idx` (`uloga_id`);

--
-- Indexes for table `uloga`
--
ALTER TABLE `uloga`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `zanr`
--
ALTER TABLE `zanr`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `film`
--
ALTER TABLE `film`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1007402;

--
-- AUTO_INCREMENT for table `korisnik`
--
ALTER TABLE `korisnik`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=94;

--
-- AUTO_INCREMENT for table `uloga`
--
ALTER TABLE `uloga`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `zanr`
--
ALTER TABLE `zanr`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10771;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `film`
--
ALTER TABLE `film`
  ADD CONSTRAINT `fk_film_korisnik1` FOREIGN KEY (`korisnik_id`) REFERENCES `korisnik` (`id`);

--
-- Constraints for table `film_zanr`
--
ALTER TABLE `film_zanr`
  ADD CONSTRAINT `fk_zanr_has_film_film1` FOREIGN KEY (`film_id`) REFERENCES `film` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_zanr_has_film_zanr1` FOREIGN KEY (`zanr_id`) REFERENCES `zanr` (`id`);

--
-- Constraints for table `korisnik`
--
ALTER TABLE `korisnik`
  ADD CONSTRAINT `fk_korisnik_uloga1` FOREIGN KEY (`uloga_id`) REFERENCES `uloga` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
