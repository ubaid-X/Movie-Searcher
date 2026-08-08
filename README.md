# 🎬 CineSearch – Movie Discovery Web App

CineSearch is a lightweight, responsive web application that lets users search for movies using The Movie Database (TMDB) API. It displays movie posters, titles, release years, and ratings in a clean card layout. The app also caches search results in the browser's localStorage to reduce API calls and improve performance, with a secure Node.js serverless backend that keeps the API key hidden from the client.

---

## 🔗 Live Demo

> **Live URL:** [https://movie-searcher-delta-ten.vercel.app/](https://movie-searcher-delta-ten.vercel.app/)

---

## 📋 Table of Contents

- Features
- Technologies Used
- How to Use
- Setup & Installation
- Project Structure
- Deployment
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
- **Secure** – API key stored server-side, never exposed to the client.

---

## 🛠️ Technologies Used

- **Frontend:** HTML5, CSS3 (custom properties, Flexbox, CSS Grid, media queries), Vanilla JavaScript (ES6), Font Awesome
- **Backend:** Node.js (Serverless function on Vercel)
- **API:** TMDB (The Movie Database)

---

## 📖 How to Use

1. Open the app in your browser.
2. Type a movie name (e.g., "superman", "Interstellar") into the search bar.
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
- [Node.js](https://nodejs.org/) installed
- [Vercel CLI](https://vercel.com/docs/cli) installed (`npm i -g vercel`)
- Internet connection for API calls

### Steps

1. **Clone the repository:**

```bash
git clone https://github.com/ubaid-X/Movie-Searcher.git
cd Movie-Searcher
```

2. **Install dependencies:**

```bash
npm install
```

3. **Get your TMDB API key**:
   - Visit [TMDB](https://www.themoviedb.org/) and create an account.
   - Go to your account settings and generate an API key.

4. **Create a `.env` file** in the root directory:

TMDB_API_KEY=your_api_key_here

> ⚠️ Never commit your `.env` file — it's already included in `.gitignore`.

5. **Run locally with Vercel CLI:**

```bash
vercel dev
```

6. Open `http://localhost:3000` in your browser.

---

## 📁 Project Structure
```
Movie-Searcher/
├── index.html
├── package.json
├── .env # local only – DO NOT COMMIT
├── .gitignore
├── api/
│ └── searcher.js # Serverless function – secures TMDB API key
└── assets/
├── css/
│ └── style.css
├── js/
│ └── script.js
└── images/
├── movie-searcher-favicon.png
└── movie-searcher-preview.png
```
---

## 🚀 Deployment

1. Push your code to GitHub.
2. Import the project on [Vercel](https://vercel.com/).
3. Add `TMDB_API_KEY` under Project Settings → Environment Variables.
4. Deploy.

> **Note:** This project requires a Node.js serverless runtime, so it must be deployed on Vercel (or a similar platform) rather than static hosts like GitHub Pages.

---

## 💡 Why This Project Was Made

This project was built as a practical exercise in:

- Working with REST APIs (TMDB)
- Securing API keys with a serverless backend
- Managing state with localStorage
- Building responsive layouts with CSS Grid and Flexbox
- Implementing dark/light themes with CSS variables
- Writing clean, maintainable JavaScript

It also serves as a portfolio piece demonstrating front-end development skills with real-world data integration and secure API handling.

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