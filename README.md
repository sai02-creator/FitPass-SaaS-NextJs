<!-- =========================================================
 FITPASS README — polished GitHub style
========================================================== -->

<div align="center">

# FitPass — Fitness Class Booking Platform 🏋️‍♂️🗺️🤖  
**Next.js 16 • Sanity • Clerk Billing • Vercel AI • Mapbox • Leaflet**

<p align="center">
  <a href="YOUR_LIVE_DEMO_URL"><strong>Live Demo</strong></a> •
  <a href="#-features"><strong>Features</strong></a> •
  <a href="#-tech-stack"><strong>Tech Stack</strong></a> •
</p>

<!-- Badges -->
<p align="center">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-16-black" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-Ready-blue" />
  <img alt="License" src="https://img.shields.io/badge/License-CC%20BY--NC%204.0-orange" />
  <img alt="Vercel" src="https://img.shields.io/badge/Deployed%20on-Vercel-black" />
</p>

<!-- Hero image / banner -->
<img src="assets/cover.png" alt="FitPass cover" width="100%" />

</div>

---

## ✨ Overview

FitPass is a **fitness class booking platform** where users can discover nearby sessions, view venues on a map, subscribe to a tier (Basic / Performance / Champion), and book classes instantly.

It includes:
- **Location-first discovery** (travel radius + map view)
- **Subscription tiers** with access rules
- **AI assistant** for class discovery (chat-based)
- **Admin dashboard** + **Sanity Studio**

> ✅ Built by **YOU** (not a clone) — inspired by tutorial concepts, implemented and customised end-to-end.

---

## 🎬 Demo

> Add 1–3 short GIFs (best is 6–12 seconds each)

<div align="center">
  <img src="assets/demo-search.gif" width="32%" alt="Search classes" />
  <img src="assets/demo-booking.gif" width="32%" alt="Book a class" />
  <img src="assets/demo-admin.gif" width="32%" alt="Admin dashboard" />
</div>

**Try it:** YOUR_LIVE_DEMO_URL

---

## ✅ Features

### For Users
- 📍 **Location-based discovery** (radius + map)
- 🧾 **Subscriptions** (3 tiers + free trial support)
- 📅 **Easy booking flow** (browse → book → manage)
- 🗺️ **Interactive map** for venues and sessions
- 🤖 **AI class assistant** for recommendations

### For Admin
- 🧠 **Sanity Studio** content management
- 🧾 Manage activities, venues, sessions, tiers
- 📊 Simple dashboard metrics (users, bookings, trends)

---

## 🧠 How it works

### Geographic filtering (fast + accurate)
1) **Bounding box pre-filter** reduces the dataset (fast DB query)  
2) **Haversine distance** applies the final circular radius filter  

This keeps performance solid even with large datasets.

### Tier access control
- **Basic** → Basic-only activities  
- **Performance** → Basic + Performance  
- **Champion** → All tiers (VIP)

---

## 🧰 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Auth + Billing:** Clerk
- **CMS / Database:** Sanity (real-time SDK)
- **AI:** Vercel AI Gateway + AI SDK (tooling)
- **Maps:** Leaflet + Mapbox autocomplete
- **State:** Zustand
- **UI:** Tailwind + shadcn/ui
- **Validation:** Zod
- **Deployment:** Vercel

---

## 📸 Screenshots & GIFs

> Put images in `/assets` and keep filenames short.

| Feature | Preview |
|--------|---------|
| Home / Discovery | ![Discovery](assets/screenshot-discovery.png) |
| Map view | ![Map](assets/screenshot-map.png) |
| Booking flow | ![Booking](assets/screenshot-booking.png) |
| Admin dashboard | ![Admin](assets/screenshot-admin.png) |

---
