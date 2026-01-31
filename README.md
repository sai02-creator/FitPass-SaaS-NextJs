<!-- =========================================================
 FITPASS README — polished GitHub style
========================================================== -->

<div align="center">

# FitPass — Fitness Class Booking Platform 🏋️‍♂️🗺️🤖  
**Next.js 16 • Sanity • Clerk Billing • Vercel AI • Mapbox • Leaflet**

<p align="center">
  <a href="https://fitpass-saas-nextjs.vercel.app/"><strong>Live Demo</strong></a> •
  <a href="#-features"><strong>Features</strong></a> •
  <a href="#-tech-stack"><strong>Tech Stack</strong></a>
</p>

<!-- Badges -->
<p align="center">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-16-black" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-Ready-blue" />
  <img alt="License" src="https://img.shields.io/badge/License-CC%20BY--NC%204.0-orange" />
  <img alt="Vercel" src="https://img.shields.io/badge/Deployed%20on-Vercel-black" />
</p>

</div>

---

## ✨ Overview

FitPass is a **fitness class booking platform** where users can discover nearby sessions, view venues on a map, subscribe to a tier (Basic / Performance / Champion), and book classes instantly.

It includes:
- **Location-first discovery** (travel radius + map view)
- **Subscription tiers** with access rules
- **AI assistant** for class discovery (chat-based)
- **Admin dashboard** + **Sanity Studio**

---

## 🎯 Why I built this

I built FitPass to practice real-world SaaS patterns including subscription billing, geo-based search, AI-assisted discovery, and admin-driven content management — all within a single production-style Next.js application.

The focus was on clean architecture, scalability, and patterns transferable to real client and production projects.


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

This architecture mirrors real-world SaaS patterns used in production booking and marketplace platforms.

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
## 📸 Screenshots

### 🛠️ Admin – Activities Management
Manage class templates that can be scheduled across venues, with tier-based access and session visibility.
![Admin Activities Management](assets/admin-activities-management.png)
