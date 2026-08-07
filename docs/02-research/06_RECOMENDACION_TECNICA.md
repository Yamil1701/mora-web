# 06 — Recomendación técnica posterior a investigación

## 1. Base

### Astro + TypeScript
Se mantiene como elección adecuada.

Razones:
- sitio principalmente de contenido;
- páginas independientes;
- generación estática;
- bajo JS por defecto;
- posibilidad de islas puntuales;
- buen encaje con SEO y performance.

---

## 2. Navegación entre páginas

### Primera opción
**MPA normal + View Transitions nativas cross-document** cuando aporten continuidad.

La documentación actual de Astro señala que las view transitions nativas entre documentos:
- pueden animar navegación MPA;
- no cambian el núcleo MPA;
- no añaden JS por sí mismas.

### ClientRouter
No introducir desde el día uno.

Usarlo si el prototipo demuestra que necesitamos:
- persistencia compleja;
- transición compartida no resuelta por la API nativa;
- navegación SPA controlada.

Tiene coste:
- scripts/estado pueden requerir reinicialización;
- mayor complejidad.

---

## 3. GSAP

### Dentro de páginas
GSAP + ScrollTrigger:
- escenas;
- reveals;
- pinning puntual;
- scrub puntual;
- cambios de material;
- timelines.

### Política responsive
Centralizar en `gsap.matchMedia()`:
- desktop;
- tablet/mobile;
- reduced-motion.

Esto permite declarar coreografías diferentes y limpiar correctamente los efectos al cambiar condiciones.

---

## 4. Scroll

### Base
scroll nativo.

ScrollTrigger no requiere reemplazar el scroll del navegador.

### Smooth scroll
Solo si una prueba demuestra que:
- mejora una escena;
- no perjudica touch;
- no crea desfase;
- no rompe accesibilidad/performance.

No instalar Lenis “porque los sitios creativos lo usan”.

---

## 5. Efectos

Orden de preferencia:

1. HTML/CSS.
2. SVG.
3. `clip-path` / masks.
4. CSS filters con moderación.
5. video corto.
6. Canvas.
7. WebGL/Three.js solo con necesidad probada.

El objetivo es reservar complejidad para la idea que realmente la necesite.

---

## 6. Media

### Imágenes
- producir crops diferentes para mobile/desktop;
- usar `picture` cuando haya art direction;
- AVIF/WebP cuando corresponda;
- dimensiones explícitas;
- no lazy-load del recurso LCP/inicial;
- lazy load offscreen.

### Video
- loops cortos;
- muted/playsinline si autoplay tiene sentido;
- `poster`;
- preload deliberado;
- pausar fuera de viewport;
- no descargar todos los videos de las tres áreas al cargar Home.

---

## 7. Performance targets

En producción/field data:
- LCP ≤ 2.5 s;
- INP ≤ 200 ms;
- CLS ≤ 0.1;
- p75;
- medir mobile y desktop por separado.

Durante desarrollo:
- Lighthouse/DevTools para diagnóstico;
- no confundir lab con experiencia real en campo.

---

## 8. Presupuesto de performance propuesto para V1

No es un estándar externo; es un objetivo interno inicial que debe validarse con prototipos.

### Home mobile inicial
- JS propio/hidratado: mantenerlo deliberadamente bajo.
- Solo un recurso visual prioritario en primera escena.
- Videos de actos posteriores diferidos.
- Evitar varias familias tipográficas/pesos innecesarios.

### Regla
Si un efecto requiere descargar varios MB antes de poder entender el hero, se rediseña.

---

## 9. Accesibilidad de motion

Reduced motion debe:
- eliminar parallax problemático;
- evitar scrub intenso;
- cambiar grandes desplazamientos por fades/cortes;
- mantener contenido y orden;
- no ocultar información.

---

## 10. Targets touch

Norma mínima WCAG AA:
24×24 CSS px o separación permitida.

Objetivo práctico para controles relevantes:
áreas táctiles generosas, aproximadamente 44×44 cuando sea viable, especialmente WhatsApp, navegación y CTA.

---

## 11. CMS

Mantener contenido estructurado:
- colecciones;
- objetos;
- metadata;
- rutas.

No implementar CMS V1.

La arquitectura editorial propuesta favorece una migración futura sin comprometer el diseño actual.

---

## 12. ReactBits / Tailark / bibliotecas

Proceso correcto:
1. surge una necesidad;
2. se busca patrón;
3. se evalúa;
4. se desmonta/adapta;
5. debe obedecer al sistema MORA.

Proceso incorrecto:
1. recorrer componentes;
2. elegir efectos lindos;
3. construir la identidad alrededor.
