const form = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const result = document.getElementById("result");
const apikey = "735251c4ad24c3ea41e31a91464d543b";
let movies = [];
let search = "";

const fetchMovies = async () => {
  movies = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${search}&language=fr`
  ).then((res) => res.json());
  console.log(movies);
};

const moviesDisplay = async () => {
  await fetchMovies();

  movies.results.length = 12;

  result.innerHTML = movies.results
    .map(
      (movie) =>
        `
        <li>
            <h2>${movie.original_title}</h2>    
            <div class="card-content">
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"></img>
                <div class=infos">
                    <p>${movie.overview}</p>
                    <p>Popularité : ${movie.popularity} ⭐</p>
                </div>
            </div>
        </li>   
    `
    )
    .join("");
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  search = searchInput.value;
  moviesDisplay();
});
