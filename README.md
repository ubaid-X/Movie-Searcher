# 🎬 CineSearch – Movie Discovery Web App

CineSearch is a lightweight, responsive web application that lets users search for movies using The Movie Database (TMDB) API. It displays movie posters, titles, release years, and ratings in a clean card layout. The app also caches search results in the browser's localStorage to reduce API calls and improve performance.

---

## 🔗 Live Demo

> **Live URL:** [https://ubaid-x.github.io/Movie-Searcher/](https://ubaid-x.github.io/Movie-Searcher/)

---

## 📋 Table of Contents

- Features
- Technologies Used
- How to Use
- Setup & Installation
- Project Structure
- Why This Project Was Made
- Screenshots
- About the Author
- License
- Acknowledgments

---

## ✨ Features

- **Movie Search** – Search any movie by title or director.
- **Dynamic Results** – Displays movie posters, title, release year, and average rating.
- **Rating Color Coding**:
  - Green (8.0–10.0) – Excellent
  - Yellow (6.0–7.9) – Good
  - Red (0–5.9) – Below Average
- **Local Caching** – Results are stored in localStorage to reduce repeated API calls.
- **Dark/Light Theme Toggle** – Switch between dark and light modes; preference is saved.
- **Fully Responsive** – Optimized for mobile, tablet, and desktop screens.
- **Clean UI** – Minimal design with smooth hover effects and accessibility in mind.

---

## 🛠️ Technologies Used

- **HTML5** – Semantic structure
- **CSS3** – Custom properties (variables), Flexbox, CSS Grid, media queries
- **JavaScript (ES6)** – Fetch API, DOM manipulation, localStorage, async/await
- **Font Awesome** – Icons for theme toggle and ratings
- **TMDB API** – Movie database source

---

## 📖 How to Use

1. Open the app in your browser.
2. Type a movie name (e.g., "Inception", "Interstellar") into the search bar.
3. Press Enter or click the **Search** button.
4. Results will appear as cards showing:
   - Movie poster
   - Title
   - Release year
   - Rating (with color-coded badge)
5. Toggle dark/light mode using the moon/sun icon in the top-right corner.

---

## ⚙️ Setup & Installation

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari)
- Internet connection for API calls

### Steps

1. **Clone or download** this repository:

```bash
git clone https://github.com/ubaid-X/Movie-Searcher.git
```

2. **Navigate to the project folder** and open `index.html` in your browser.

3. **(Optional) Get your own TMDB API key**:
   - Visit [TMDB](https://www.themoviedb.org/) and create an account.
   - Go to your account settings and generate an API key.
   - Replace `API_KEY` in `script.js` with your key.

```js
let API_KEY = 'your_api_key_here';
```

4. **Run locally** – No build tools or servers required. Just open `index.html`.

---

## 📁 Project Structure

```
Movie-Searcher/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── images/
│       ├── movie-searcher-favicon.png
│       └── movie-searcher-preview.png
└── README.md
```

---

## 💡 Why This Project Was Made

This project was built as a practical exercise in:

- Working with REST APIs (TMDB)
- Managing state with localStorage
- Building responsive layouts with CSS Grid and Flexbox
- Implementing dark/light themes with CSS variables
- Writing clean, maintainable JavaScript

It also serves as a portfolio piece demonstrating front-end development skills with real-world data integration.

---

## 📷 Screenshots

### Dark Theme (Default)
- Search bar and hero section with gradient accents.
- Movie cards with rating badges and hover effects.

### Light Theme
- Clean white/light gray background with soft shadows.
- Same card layout with improved contrast for light environments.

*(Screenshots can be added here if needed)*

---

## 👤 About the Author

**Ubaidullah**

I am a passionate front-end developer and data enthusiast with a strong interest in building user-friendly web applications that solve real problems. I enjoy working with APIs, crafting responsive designs, and continuously improving my skills in JavaScript, HTML, and CSS.

- **Email**: [ai.bussiness.student0@gmail.com](mailto:ai.bussiness.student0@gmail.com)
- **GitHub**: [github.com/ubaid-X/](https://github.com/ubaid-X/)
- **LinkedIn**: [linkedin.com/in/ubaid-ullah-634563373/](https://www.linkedin.com/in/ubaid-ullah-634563373/)
- **Kaggle**: [kaggle.com/ubaidullah01](https://www.kaggle.com/ubaidullah01)

---

## 📄 License

This project is open-source and available under the **MIT License**. Feel free to use, modify, and distribute it with proper attribution.

---

## 🙏 Acknowledgments

- [TMDB](https://www.themoviedb.org/) for providing the movie database API.
- [Font Awesome](https://fontawesome.com/) for the icon library.
- The open-source community for continuous inspiration and learning resources.

---

> Made with ❤️ by Ubaidullah.