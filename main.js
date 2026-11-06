const $ = (s) => document.querySelector(s);
const S = SITE;
$("#navName").textContent = S.name;
document.title = `${S.name} — Portfolio 2026`;

$("#app").innerHTML = `
<section class="hero"><div class="wrap">
  <p class="eyebrow">${S.role} · 2026</p>
  <h1>Hello, I’m <span class="grad">${S.name}</span>.<br><em>${S.tagline}</em></h1>
  <div class="liquidGL card hero-card"><div class="in">
    <img src="${S.photo}" alt="${S.name}">
    <div><p>${S.intro}</p>
    <div class="chips">${S.skills.map(s => `<span>${s}</span>`).join("")}</div></div>
  </div></div>
</div></section>

<section id="work" class="wrap">
${S.projects.map((p, i) => `
  <article class="project">
    <div class="ph"><span class="num">${i + 1}</span><div><h2>${p.title}</h2><p>${p.desc}</p></div></div>
    <div class="grid g${p.images.length}">${p.images.map(([src, cap]) =>
      `<figure><img src="${src}" alt="${cap}" loading="eager"><figcaption>${cap}</figcaption></figure>`).join("")}</div>
  </article>`).join("")}
</section>

<section id="about" class="wrap about">
  <div class="liquidGL card"><div class="in"><h3>Tools I’m fluent in</h3>
    <div class="chips">${S.tools.map(t => `<span>${t}</span>`).join("")}</div></div></div>
  <div class="liquidGL card"><div class="in"><h3>Where I’ve worked</h3>
    <ul class="exp">${S.experience.map(e => `<li><small>${e.year}</small><div><b>${e.company}</b><span>${e.role}</span></div></li>`).join("")}</ul></div></div>
</section>

<footer id="contact" class="wrap"><div class="liquidGL card contact"><div class="in">
  <h2>Let’s work together.</h2>
  <p><a href="mailto:${S.email}">${S.email}</a> · ${S.phone} · ${S.location}</p>
  <a class="btn" href="${S.behance}" target="_blank" rel="noopener">Lihat di Behance</a>
</div></div></footer>`;

window.addEventListener("load", () => {
  if (typeof liquidGL !== "function") { document.documentElement.classList.add("no-gl"); return; }
  liquidGL({ target: ".liquidGL", snapshot: "body", resolution: 2, zIndex: 10, reveal: "fade", ...S.glass });
});
