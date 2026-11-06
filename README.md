# Portfolio — Bagus Anggara (liquidGL + Vercel)

## Setup (2 menit)
1. Download `liquidGL.js` dari https://github.com/naughtyduk/liquidGL (folder `scripts/`) → taruh di `scripts/liquidGL.js`.
2. Edit isi web di `content.js` (teks, project, setelan glass). Ganti gambar di `assets/`.
3. Tes lokal: `npx serve .` (jangan buka file langsung, efek glass butuh server).

## Deploy ke Vercel
- Push folder ini ke GitHub → vercel.com → Add New Project → Import → Deploy. (Framework: Other, tanpa build command.)
- Atau: `npx vercel --prod` dari dalam folder.

Kalau liquidGL.js belum ada / browser nggak support, web otomatis pakai glass CSS (backdrop-filter).
