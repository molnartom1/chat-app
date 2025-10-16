# 🔒 Chat App — Cloudflare Edge Chat Application

Egy **privát, titkosított, valós idejű chat alkalmazás**, amely a **Cloudflare Pages + Workers** platformon fut, React frontendre és WebSocket-alapú kommunikációra építve.

---

## 🚀 Funkciók

- ⚡ **Valós idejű chat** WebSocket-en keresztül  
- 🔐 **Kliensoldali titkosítás (AES-GCM)**  
- ☁️ **Edge-native** (Cloudflare Workers + Pages)  
- 💬 **Egyszerű bejelentkezés** (demo mód)  
- 🤖 **Automatikus GitHub → Cloudflare deploy pipeline**

---

## 🧩 Projekt szerkezet

```txt
chat-app/
├── frontend/         # React + Tailwind + Vite (UI)
│   ├── src/components
│   ├── src/utils/crypto.js
│   ├── vite.config.js
│   └── package.json
│
├── backend/          # Cloudflare Worker (WebSocket server)
│   ├── worker.js
│   ├── wrangler.toml
│   └── package.json
│
└── .github/workflows/deploy.yml   # CI/CD pipeline
```

---

## ⚙️ Telepítés (lokális fejlesztéshez)

1. Klónozd a repót:
   ```bash
   git clone https://github.com/<felhasználóneved>/chat-app.git
   cd chat-app
   ```

2. Telepítsd a függőségeket:
   ```bash
   cd frontend
   npm install
   ```

3. Indítsd a fejlesztői szervert:
   ```bash
   npm run dev
   ```
   → Nyisd meg a böngészőben: `http://localhost:5173`

---

## ☁️ Deploy Cloudflare Pages + Workers-re

### 1️⃣ Cloudflare Pages (Frontend)

- Nyisd meg a [Cloudflare Dashboardot](https://dash.cloudflare.com)
- Menj a **Pages → Create a project → Connect to Git**
- Válaszd ki a `chat-app` repót
- Állítsd be:
  ```
  Build command: npm run build --prefix frontend
  Output directory: frontend/dist
  ```

### 2️⃣ Cloudflare Worker (Backend)

Telepítsd a Workert:
```bash
cd backend
npx wrangler deploy worker.js
```

Ekkor kapsz egy WebSocket URL-t, pl.:
```
wss://chat.pages.dev/ws
```

---

## 🔁 Automatikus GitHub Deploy

A `.github/workflows/deploy.yml` automatikusan deployolja a backend-et, ha új commit kerül a `main` ágba.

Beállítás GitHub-ban:

- `Settings → Secrets → Actions`  
  Add hozzá:
  - `CLOUDFLARE_API_TOKEN`
  - `CLOUDFLARE_ACCOUNT_ID`

---

## 🔐 Lokális használat (demo mód)

Az app egyszerű **local login**-t használ — csak add meg a neved, és már cseveghetsz.

Ha később szeretnéd bővíteni:
- GitHub OAuth login
- Cloudflare Access integráció
- Perzisztens chat storage (D1 Database)

---

## 🧠 Tech stack

| Technológia | Szerep |
|--------------|--------|
| **React (Vite)** | Frontend UI |
| **TailwindCSS** | Styling |
| **Cloudflare Pages** | Hosting |
| **Cloudflare Workers** | WebSocket backend |
| **Web Crypto API (AES-GCM)** | Titkosítás |
| **GitHub Actions** | CI/CD pipeline |

---

## 📜 Licenc

MIT License © 2025 — Készítette: *te és a Code GPT fejlesztőmotor*

---

> [Catch the Quantum Wave... Password: spinor](https://pulsr.co.uk/spinor.html)
