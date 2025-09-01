# 🎬 Movies Browser  
[![Vite](https://img.shields.io/badge/bundler-vite-646CFF?logo=vite&logoColor=fff)](https://vitejs.dev/)  
[![React](https://img.shields.io/badge/react-19-61DAFB?logo=react&logoColor=000)](https://react.dev/)  
[![TypeScript](https://img.shields.io/badge/typescript-5-3178C6?logo=typescript&logoColor=fff)](https://www.typescriptlang.org/)  
[![Vitest](https://img.shields.io/badge/tests-vitest-6E9F18?logo=vitest&logoColor=fff)](https://vitest.dev/)  
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

Frontend Engineer Technical Challenge – browse movies by categories, view details, and manage your wishlist.  
Built with **Vite + React 19 + TypeScript + SCSS**, powered by [TMDB API](https://www.themoviedb.org/documentation/api).

---

## ✨ Features
- 🎠 **Home Page** with 3 carousels: Popular, Top Rated, Upcoming  
- 📄 **Movie Detail Page** with description, poster, runtime & genres  
- ❤️ **Wishlist** persisted with Zustand + localStorage  
- 🎨 Category-based theming (fonts, colors, buttons)  
- 🧪 Fully tested with Vitest, Testing Library, and MSW  

---

## ⚙️ Quick Start
```bash
git clone https://github.com/YOUR_USERNAME/technical-challenge.git
cd technical-challenge
npm install
cp .env.example .env   # add your TMDB API key
npm run dev
```

---

## 🧪 Tests
```bash
npm run test         # run tests once
npm run test:watch   # watch mode
npm run test:coverage
```

---

## 📘 Tech Stack
- **Bundler:** Vite  
- **UI:** React 19 + TypeScript  
- **Styling:** SCSS (no Tailwind, no CSS Modules)  
- **State:** Zustand (wishlist persistence)  
- **Data:** TanStack Query + TMDB API  
- **Testing:** Vitest + Testing Library + MSW  

---

## 🚀 Roadmap
- [ ] Infinite scroll / pagination in carousels  
- [ ] Advanced filters (genres, release year)  
- [ ] Theme switcher (dark/light mode)  
- [ ] E2E tests with Playwright or Cypress  
