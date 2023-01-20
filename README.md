# FoiFlix-movie-app

An web application made in Angular, using SQLite database. Angular application is connected with REST server and The Movie Database where it gets movie data using API TMDB (movies, genres, movie info etc.).
Navigation is role-based so on the login page is user data for admin and random default user.

Design is custom made using SCSS.

Features: login, registration (using SHA-256), view and update profile, search movies from TMDB, add movies to your own database. Those movies are added as suggestion, and admin has to confirm or delete them. Confirmed movies can be seen in Pregled filmova, and when clicked, details about the chosen movie are shown.
Also, user can add genres to his own database, change their names, delete the ones without movies and add all genres from TMDB to his own database at once. 

Default app port is 9001 and rest port is 9000.

Starting the project:

Go in \server\aplikacija and `npm start` and in \server\servis and `npm start`.

Then open the app in browser on localhost:9001/

<img src="https://github.com/CroAnna/FoiFlix-movie-app/blob/master/screenshots/screenshot_login.png" alt="login-screenshot"/>
<img src="https://github.com/CroAnna/FoiFlix-movie-app/blob/master/screenshots/screenshot_search_movies.png"/>
