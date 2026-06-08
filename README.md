# 🎬 MovieWala

A sleek movie discovery app built with React + Vite, powered by the TMDB API and Appwrite. Search for any movie, explore trending picks, and let the app track what everyone's searching for — all in real time.

> 📚 **Learning Project** — Built while following a React tutorial to practice core React concepts like hooks, state management, side effects, and component composition. This was my hands-on way of learning React by building something real.

---

## ✨ Features

- 🔍 **Movie Search** — Search any movie with a debounced input for smooth, efficient API calls
- 🎞️ **Discover Movies** — Browse popular movies when no search query is entered
- 🔥 **Trending Section** — Tracks the most-searched movies across all users via Appwrite, updated in real time
- 🃏 **Movie Cards** — Displays poster, title, rating, language, and release year
- ⚡ **Debounced Search** — Uses `@react-awesome/use-debounce` to minimize unnecessary API calls
- 📱 **Responsive Design** — Fully responsive across mobile, tablet, and desktop

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + Vite |
| Styling | Tailwind CSS v4 |
| Movie Data | TMDB API |
| Backend/DB | Appwrite (Cloud) |
| Fonts | DM Sans, Bebas Neue |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Search.jsx       # Search input component
│   ├── MovieCard.jsx    # Individual movie card
│   └── Spinner.jsx      # Loading indicator
├── App.jsx              # Main app component
├── App.css              # Component-level styles
├── appwrite.js          # Appwrite client & database functions
├── index.css            # Global styles & Tailwind config
└── main.jsx             # App entry point
public/
├── hero-img.png
└── BG.png
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- A [TMDB](https://www.themoviedb.org/) account and API key
- An [Appwrite](https://appwrite.io/) project with a database and collection set up

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/moviewala.git
   cd moviewala
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:
   ```env
   VITE_TMDB_API_KEY=your_tmdb_bearer_token
   VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
   VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
   VITE_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

---

## 🗄️ Appwrite Collection Schema

Create a collection in your Appwrite database with the following attributes:

| Attribute | Type | Notes |
|---|---|---|
| `searchTerm` | String | The searched movie title |
| `count` | Integer | Number of times searched |
| `movie_id` | Integer | TMDB movie ID |
| `poster_url` | String | Full TMDB poster URL |

---

## 🔧 How the Trending Feature Works

Every time a user searches for a movie:
1. The app checks if that search term already exists in the Appwrite collection.
2. If yes — it increments the `count`.
3. If no — it creates a new document with `count: 1`.

The **Trending Movies** section fetches the top 5 documents ordered by `count` descending, giving a real-time view of what everyone is watching.

---

## 📦 Key Dependencies

```json
{
  "react": "^18",
  "appwrite": "^16",
  "@react-awesome/use-debounce": "latest",
  "tailwindcss": "^4"
}
```

---

## 🌐 Environment Variables Reference

| Variable | Description |
|---|---|
| `VITE_TMDB_API_KEY` | TMDB API Bearer Token (from developer settings) |
| `VITE_APPWRITE_PROJECT_ID` | Your Appwrite project ID |
| `VITE_APPWRITE_DATABASE_ID` | Your Appwrite database ID |
| `VITE_APPWRITE_COLLECTION_ID` | Your Appwrite collection ID |

---

## 🙏 Acknowledgements

- [TMDB](https://www.themoviedb.org/) for the movie data API
- [Appwrite](https://appwrite.io/) for the backend-as-a-service
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling

---

> Built with ❤️ by [Asha](https://github.com/your-username)