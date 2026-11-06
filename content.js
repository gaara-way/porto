/* ============ EDIT DI SINI AJA — semua isi web ada di file ini ============ */
const SITE = {
  name: "Bagus Anggara",
  role: "Graphic Designer",
  tagline: "From ideas to visuals.",
  intro: "Graphic designer yang fokus ke branding, key visual, konten digital, POSM, packaging, dan basic 3D. Gue suka ngubah ide jadi visual yang bersih, bermakna, dan engaging.",
  photo: "assets/profile.jpg",
  email: "bagus.anggara90@gmail.com",
  phone: "+62 851 5519 1196",
  location: "South Tangerang, Banten",
  behance: "https://www.behance.net/gallery/254817701/My-Portfolio-2026",
  skills: ["Branding", "Key Visual", "Digital Content", "POSM", "Packaging", "Layout", "Presentation", "Basic 3D"],
  tools: ["Photoshop", "Illustrator", "Premiere Pro", "Dimension", "CapCut", "Canva", "AI Tools"],
  experience: [
    { year: "2024 – 2026", company: "ASRI (Agung Sedayu Real Estat Indonesia)", role: "Graphic Designer Sr. Staff" },
    { year: "2022 – 2024", company: "PT. Dinasti Kreatif Indonesia", role: "Content Creator & Creative Designer" },
    { year: "2021 – 2022", company: "PT. Paku Jawa Konstruksi", role: "Digital Marketing & 3D Design" },
    { year: "2021", company: "PT. Galeri Alam Properti", role: "Marketing Executive" },
    { year: "2020 – 2021", company: "Ratu Pertiwi Residence", role: "Marketing Executive" },
    { year: "2019 – 2020", company: "PT. Sewu Segar Primatama (Re.Juve)", role: "Part Time Crew" }
  ],
  // Tambah/hapus project: cukup copy-paste satu blok. Gambar taruh di folder /assets
  projects: [
    { title: "KV Development", desc: "Key visual campaign dengan identitas yang kuat dan konsisten.",
      images: [["assets/kv-1.jpg", "Blossom Symphony"], ["assets/kv-2.jpg", "Winds of Wonders"], ["assets/kv-3.jpg", "Spark your Happiness"]] },
    { title: "Social Media Post", desc: "Konten feed Instagram yang rapi, berwarna, dan gampang dikenali.",
      images: [["assets/social-1.jpg", "Pakujawa Konstruksi"], ["assets/social-2.jpg", "Zhandoe Indonesia"], ["assets/social-3.jpg", "Bonju Indonesia"], ["assets/social-4.jpg", "Teguk Indonesia"]] },
    { title: "Product Photoshot & Packaging", desc: "Foto produk dan desain kemasan yang bikin lapar.",
      images: [["assets/photo-1.jpg", "Product Photoshot"], ["assets/photo-2.jpg", "Product Photoshot"], ["assets/pack-1.jpg", "Packaging"], ["assets/pack-2.jpg", "Packaging"], ["assets/pack-3.jpg", "Packaging"]] },
    { title: "3D Design", desc: "Eksplorasi interior, eksterior, dan render produk.",
      images: [["assets/3d-1.jpg", "Interior & Exterior"], ["assets/3d-2.jpg", "Facade Concept"], ["assets/3d-3.jpg", "Render Product"]] },
    { title: "AI Development", desc: "Karakter fiksi Marcella & Vanessa — eksplorasi identitas visual berbasis AI.",
      images: [["assets/ai-1.jpg", "Marcella"], ["assets/ai-2.jpg", "Vanessa"], ["assets/ai-3.jpg", "AI Character Explorations"]] }
  ],
  // Setelan liquid glass (opsi lengkap: github.com/naughtyduk/liquidGL)
  glass: { refraction: 0.012, bevelDepth: 0.07, bevelWidth: 0.18, frost: 1.5, specular: true, shadow: true, tint: "rgba(255,255,255,0.14)" }
};
