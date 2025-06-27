# 🎨 Pixel Art Color-By-Number App

This is a personal project that lets users upload images and convert them into pixelated color-by-number artwork. The frontend is built using **React**, **Vite**, and **Mantine**, with optional **PWA support** so it can be installed on devices like an iPad.

---

## 📁 Project Structure

pixel-art-app/  
├─ client/ # React + Vite frontend  
└─ server/ # Node backend

> All frontend-related commands are run inside the `client/` folder.

---

## 🛠 Development (Live Reload)

To work on the app locally (with live reloading):

```bash
cd client # if you want to run only the frontend
npm run dev
```

Then open your browser at:
http://localhost:5173

If you want to test the app on another device (like an iPad):

```bash
npm run dev -- --host
```

Then on your device, visit: `http://<your-computer-ip>:5173`

(Find your local IP with: `ipconfig getifaddr en0` on macOS.)

---

## 📦 Build & Preview (PWA Test)

To test the production version of the app with PWA functionality (for install, offline use, etc):

```bash
cd client
npm run build
npm run preview -- --host
```

Visit the printed `http://<your-ip>:4173` on your device or browser.

### **To install as a PWA:**

- Open in **Safari**
- Tap the **Share button**
- Choose **Add to Home Screen**

---

## 🧼 Refreshing the PWA on iPad

If you've added the app to your Home Screen and it doesn’t update:

- Open Safari and go to `http://<your-ip>:4173`
- Refresh the page to get the new version
- Re-add it to the Home Screen if needed

If stuck, clear cache via:
**Settings** > **Safari** > **Advanced** > **Website Data**

---

## ✅ Coming Soon

- Backend image processing API

- Save/export colored artwork

- Save progress to local storage

## 📦 Dependencies

- React + Vite

- Mantine UI

- vite-plugin-pwa

- TypeScript

---

Last updated: June 2025

---
