import { makeCard, openMovie, setupModal } from "./ui.js";

setupModal();

const all = [
    {
        title: "The Boys",
        rating: 8.7,
        release_year: 2019,
        content_type: "Series",
        language: "English",
        genre_id: 2,
        description: "A group of vigilantes takes on corrupt superheroes who abuse their powers.",
        poster_url: "https://image.tmdb.org/t/p/w500/stTEycfG9928HYGEISBFaG1ngjM.jpg",
        trailer_url: "https://www.youtube.com/watch?v=5SKP1_F7ReE"
    },
    {
        title: "Reacher",
        rating: 8.0,
        release_year: 2022,
        content_type: "Series",
        language: "English",
        genre_id: 2,
        description: "Jack Reacher investigates dangerous crimes and uncovers hidden conspiracies.",
        poster_url: "https://image.tmdb.org/t/p/w500/S6h8d4dY8uG9K8Z3qJ7X7w.jpg",
        trailer_url: "https://www.youtube.com/watch?v=gsTHxQJ3M6M"
    },
    {
        title: "Fallout",
        rating: 8.3,
        release_year: 2024,
        content_type: "Series",
        language: "English",
        genre_id: 8,
        description: "Survivors explore a strange post-apocalyptic world centuries after a nuclear disaster.",
        poster_url: "https://image.tmdb.org/t/p/w500/AnsWQ4j.jpg",
        trailer_url: "https://www.youtube.com/watch?v=V-mugKD2dD4"
    },
    {
        title: "The Family Man",
        rating: 8.7,
        release_year: 2019,
        content_type: "Series",
        language: "Hindi",
        genre_id: 2,
        description: "A middle-class man secretly works as an intelligence officer while balancing family life.",
        poster_url: "https://image.tmdb.org/t/p/w500/8u8YQ4.jpg",
        trailer_url: ""
    },
    {
        title: "Panchayat",
        rating: 9.0,
        release_year: 2020,
        content_type: "Series",
        language: "Hindi",
        genre_id: 4,
        description: "A young graduate becomes a secretary in a rural village and faces unexpected challenges.",
        poster_url: "https://image.tmdb.org/t/p/w500/7aW.jpg",
        trailer_url: ""
    },
    {
        title: "Mirzapur",
        rating: 8.5,
        release_year: 2018,
        content_type: "Series",
        language: "Hindi",
        genre_id: 2,
        description: "A crime drama involving power, revenge and rival families.",
        poster_url: "https://image.tmdb.org/t/p/w500/9G.jpg",
        trailer_url: ""
    },
    {
        title: "Jawan",
        rating: 7.6,
        release_year: 2023,
        content_type: "Movie",
        language: "Hindi",
        genre_id: 2,
        description: "An action-packed story about a man fighting corruption.",
        poster_url: "https://image.tmdb.org/t/p/w500/jawan.jpg",
        trailer_url: ""
    },
    {
        title: "RRR",
        rating: 8.0,
        release_year: 2022,
        content_type: "Movie",
        language: "Telugu",
        genre_id: 2,
        description: "Two legendary revolutionaries form an extraordinary friendship.",
        poster_url: "https://image.tmdb.org/t/p/w500/rrr.jpg",
        trailer_url: ""
    },
    {
        title: "Interstellar",
        rating: 8.7,
        release_year: 2014,
        content_type: "Movie",
        language: "English",
        genre_id: 8,
        description: "Explorers travel through space searching for a new home for humanity.",
        poster_url: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        trailer_url: ""
    },
    {
        title: "The Tomorrow War",
        rating: 6.5,
        release_year: 2021,
        content_type: "Movie",
        language: "English",
        genre_id: 8,
        description: "A group of soldiers travels into the future to fight an alien invasion.",
        poster_url: "https://image.tmdb.org/t/p/w500/34nDCQZwaEvsy4CFO5hkGRFDCVU.jpg",
        trailer_url: ""
    },
    {
        title: "John Wick",
        rating: 7.4,
        release_year: 2014,
        content_type: "Movie",
        language: "English",
        genre_id: 2,
        description: "A legendary assassin returns to action after a personal tragedy.",
        poster_url: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
        trailer_url: ""
    },
    {
        title: "The Dark Knight",
        rating: 9.0,
        release_year: 2008,
        content_type: "Movie",
        language: "English",
        genre_id: 2,
        description: "Batman faces a criminal mastermind who throws Gotham into chaos.",
        poster_url: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        trailer_url: ""
    }
];

const hero = all[0];

document.getElementById("heroTitle").textContent = hero.title;

document.getElementById("heroDesc").textContent =
    hero.description;

document.getElementById("heroMeta").innerHTML = `
    <span>IMDb ${hero.rating}</span>
    <span>${hero.release_year}</span>
    <span>${hero.content_type}</span>
    <span>${hero.language}</span>
`;

document.getElementById("heroWatch").onclick =
    () => openMovie(hero);

document.getElementById("heroMore").onclick =
    () => openMovie(hero);


function row(id, list) {

    const element = document.getElementById(id);

    element.innerHTML = "";

    list.slice(0, 12).forEach(movie => {

        element.appendChild(
            makeCard(movie, openMovie)
        );

    });
}


/* CONTINUE WATCHING */

row(
    "continue",
    all.filter((movie, index) => index % 2 === 0)
);


/* AMAZON ORIGINALS */

row(
    "originals",
    all.filter(movie =>
        [
            "The Boys",
            "Reacher",
            "Fallout",
            "The Family Man",
            "Panchayat",
            "Mirzapur"
        ].includes(movie.title)
    )
);


/* POPULAR MOVIES */

row(
    "movies",
    all.filter(movie =>
        movie.content_type === "Movie"
    )
);


/* POPULAR TV SHOWS */

row(
    "series",
    all.filter(movie =>
        movie.content_type === "Series"
    )
);


/* ACTION & ADVENTURE */

row(
    "action",
    all.filter(movie =>
        movie.genre_id === 2
    )
);


/* SCIENCE FICTION */

row(
    "scifi",
    all.filter(movie =>
        movie.genre_id === 8
    )
);


/* INDIAN CONTENT */

row(
    "india",
    all.filter(movie =>
        ["Hindi", "Telugu", "Tamil", "Kannada"]
            .includes(movie.language)
    )
);


/* TOP RATED */

row(
    "top",
    [...all].sort(
        (a, b) => b.rating - a.rating
    )
);


/* SEARCH */

document.getElementById("search").onkeydown = event => {

    if (event.key === "Enter") {

        const value =
            event.target.value.trim();

        if (value) {

            location.href =
                "movies.html?search=" +
                encodeURIComponent(value);

        }

    }

};
