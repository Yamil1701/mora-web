# 08 — Referencias

## UX / usabilidad

### Nielsen Norman Group — Animation for Attention and Comprehension
https://www.nngroup.com/articles/animation-usability/

Uso:
- motion atrae atención;
- debe tener objetivo, frecuencia y mecánica apropiados;
- animación gratuita puede molestar.

### Nielsen Norman Group — Progressive Disclosure
https://www.nngroup.com/articles/progressive-disclosure/

Uso:
- contenido principal primero;
- detalle especializado en segundo nivel;
- progresión debe tener information scent claro.

### Nielsen Norman Group — Scrolling and Attention
https://www.nngroup.com/articles/scrolling-and-attention/

Uso:
- atención concentrada en la parte alta;
- prioridad de contenido;
- señales para continuar scroll;
- evitar false floors.

### Nielsen Norman Group — How Users Read on the Web
https://www.nngroup.com/articles/how-users-read-on-the-web/

Uso:
- escaneo;
- jerarquía;
- contenido conciso y estructurado.

### Nielsen Norman Group — Usability Testing 101
https://www.nngroup.com/articles/usability-testing-101/

Uso:
- pruebas observacionales con tareas realistas;
- 5–8 participantes como recomendación práctica cualitativa.

---

## Accesibilidad

### WCAG 2.2 — Target Size (Minimum)
https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum

Uso:
- 24×24 CSS px o reglas de separación para AA.

### WCAG — reduced motion technique
https://www.w3.org/WAI/WCAG22/Techniques/client-side-script/SCR40

Uso:
- `prefers-reduced-motion` para animaciones JS.

---

## Performance

### web.dev — Core Web Vitals
https://web.dev/articles/vitals

Objetivos:
- LCP ≤ 2.5 s
- INP ≤ 200 ms
- CLS ≤ 0.1
- percentil 75.

### web.dev — Browser-level image lazy loading
https://web.dev/articles/browser-level-image-lazy-loading

Uso:
- lazy para offscreen;
- no lazy para LCP/viewport inicial.

### web.dev — Responsive images
https://web.dev/articles/responsive-images

Uso:
- `picture`;
- art direction;
- fuentes diferentes según viewport.

### web.dev — Video performance
https://web.dev/learn/performance/video-performance

Uso:
- poster;
- preload;
- autoplay deliberado;
- impacto de video como LCP.

---

## Plataforma

### Astro — View Transitions
https://docs.astro.build/en/guides/view-transitions/

Uso:
- cross-document transitions nativas;
- MPA por defecto;
- ClientRouter solo cuando haga falta;
- soporte de reduced motion.

### GSAP — matchMedia
https://gsap.com/docs/v3/GSAP/gsap.matchMedia%28%29/

Uso:
- condiciones desktop/mobile/reduced-motion;
- cleanup de animaciones.

---

## Casos creativos

### Exat
https://tympanus.net/codrops/2026/04/10/the-exat-microsite-pushing-a-typography-showcase-to-new-creative-extremes/

### Pell Mell
https://tympanus.net/codrops/2026/03/27/pell-mell-crafting-a-visual-exploration-platform-with-editorial-rhythm/

### Stefan Vitasović
https://tympanus.net/codrops/2025/03/05/case-study-stefan-vitasovic-portfolio-2025/

### Thibault Guignand
https://tympanus.net/codrops/2026/05/06/from-shader-uniforms-to-clip-path-wipes-how-gsap-drives-my-portfolio/

### More Than a Portfolio
https://tympanus.net/codrops/2026/04/28/more-than-a-portfolio-building-a-scroll-driven-3d-world-with-something-to-say/

### Pedro Ajo
https://pedroajo.com/
https://www.siteinspire.com/website/12869-pedro-ajo

### Buena Suerte
https://buena-suerte.studio/

### Monolith Studio
https://monolithstudio.com/
https://artemiilebedev.com/journal/bringing-tattoos-into-the-digital-era
https://artemiilebedev.com/work/monolith-studio

### La Tatuajería
https://latatuajeria.com/

### Bernice Bakery
https://casamedia.com/projects/bernice/
https://casamedia.com/web-design/bernice-bakery-a-website-you-can-practically-taste/

### Lamanna Bakery
https://www.lamannabakery.com/
https://godly.website/website/lamanna-bakery-11

### New Ground Coffee
https://www.siteinspire.com/website/12167-new-ground-coffee

### Postevand
https://postevand.com/
https://godly.website/website/postevand-883

### KÖPPEN
https://www.siteinspire.com/website/13452-koppen

### KAAIAA
https://www.halo-lab.com/project/kaaiaa

### Awwwards discovery references
Flatbone Tattoo / HYPE Tattoo:
https://www.awwwards.com/

---

## Sobre Awwwards / SiteInspire / Godly / Codrops

Se utilizan como:
- descubrimiento;
- exploración visual;
- casos de craft;
- referencias técnicas/creativas.

No se utilizan como prueba de:
- usabilidad;
- accesibilidad;
- performance real;
- conversión.

Un sitio premiado puede ser una referencia excelente y aun así contener patrones que no son adecuados para MORA.
