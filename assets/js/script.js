let inputField = document.querySelector('#header__input');
let searchBtn = document.querySelector('.header__search');
let foundCount = document.querySelector('.main__p2');
let mainCard = document.querySelector('.main__cards');
let cardTemplate = document.querySelector('.main__cardTemplate')

//! main function to get data from local-storeage or API and print in organized way 
async function getData(keyword) {
    // const url = `https://api.themoviedb.org/3/search/movie?api_keyYOUR_API_KEY=&query=${encodeURIComponent(keyword)}`;
    
    const url = `/api/searcher?keyword=${keyword}`;   //sending the value to serverless function/backend
    try {
        inputField.value = "";
        mainCard.innerHTML = "";
        let data;
        let cacheKey = `movie_${keyword.toLowerCase()}`;
        let cacheData = localStorage.getItem(cacheKey);   // ! get movie data if in localStorage
        if (cacheData) {
            data = JSON.parse(cacheData);   // parsing the data to object
        } else {
            const res = await fetch(url);     // fetching data from API
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            data = await res.json();    // changing the data to object 
            console.log(data);
            localStorage.setItem(cacheKey, JSON.stringify(data));   //store the data in the local storage of first time loaded cards
        }


        if (data.results.length === 0) {                // if data is not available
            mainCard.innerText = "No results found";
        } else {
            foundCount.innerText = `${data.results.length} found`;
            data.results.forEach(movie => {
                let cardClone = document.importNode(cardTemplate.content, true);    //creating clone of the template
                cardClone.querySelector('.main__h1').innerText = movie.title;
                cardClone.querySelector('.movieDate').innerText = movie.release_date.split('-')[0] || "N/A";
                let rating = cardClone.querySelector('.main__cardRating');
                rating.innerText = `★ ${movie.vote_average.toFixed(1)}`;

                if (movie.vote_average > 8 && movie.vote_average <= 10) {       //! condition for rating color base on rating
                    rating.style.backgroundColor = "rgba(34, 197, 94, 0.12)";
                    rating.style.color = "#22C55E";
                } else if (movie.vote_average >= 6 && movie.vote_average <= 8) {
                    rating.style.color = "#f59e0b";
                    rating.style.backgroundColor = "rgba(245, 158, 11, 0.12)";
                } else if (movie.vote_average >= 0 && movie.vote_average < 6) {
                    rating.style.color = "#ef4444";
                    rating.style.backgroundColor = "rgba(239, 68, 68, 0.12)";
                } else {
                    rating.innerText = 'N/A';
                }

                cardClone.querySelector('.main__moviePoster').src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
                cardClone.querySelector('.main__moviePoster').alt = `No Poster available for ${movie.title} Movie.`;
                mainCard.appendChild(cardClone);
            })

        }
    } catch (e) {
        alert(e);
    }
}






inputField.addEventListener("keypress", (e) => {
    if (e.key === "enter" || e.key === "Enter") {
        let value = inputField.value;
        getData(value);
    }
})


searchBtn.addEventListener('click', () => {
    let value = inputField.value;
    getData(value);
});

// ! callling the function when the webpage is render
getData('batman');

// theme toggle
// ——— Theme Toggle ———
const toggleBtn = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Check saved preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light') {
    htmlElement.classList.add('light-theme');
    toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
} else {
    toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
}

toggleBtn.addEventListener('click', () => {
    htmlElement.classList.toggle('light-theme');       //! .toggle is used if there is 'light-theme' class added to document  in css it will remove if not added it will add

    if (htmlElement.classList.contains('light-theme')) {
        localStorage.setItem('theme', 'light');
        toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        localStorage.setItem('theme', 'dark');
        toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    }
});
