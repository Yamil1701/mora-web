# Technical Readiness 01

## Alcance auditado

Esta pasada revisó la reproducibilidad de dependencias, scripts de npm, CI, deploy de GitHub Pages, configuración `site`/`base`, rutas y anchors, lifecycle de GSAP, accesibilidad estructural y problemas evidentes de runtime o performance. No se modificaron el diseño, el layout, el copy visible, la paleta, la jerarquía, el Hero ni el timing aprobado.

## Problemas encontrados y corregidos

- El repositorio no tenía `package-lock.json`. Se generó un lockfile v3 sin cambiar los rangos declarados en `package.json`; `npm ci` quedó validado desde un checkout sin `node_modules`.
- Faltaba un comando explícito de typecheck. Se agregó `npm run typecheck` con `tsc --noEmit` y la referencia a `astro/client` necesaria para tipar `import.meta.env` en un checkout limpio.
- No había un workflow de CI independiente del deploy. Se agregó `.github/workflows/ci.yml` para PRs hacia `main` y pushes a `main`.
- Pages instalaba con `npm install` y no podía usar caché npm porque faltaba el lockfile. El workflow ahora usa caché y `npm ci`.
- El skip link global apuntaba a `#contenido`, pero las cinco rutas placeholder no tenían ese destino. Se agregó el `id` a sus elementos `main`.
- El `summary` del menú mobile tenía el nombre accesible fijo “Abrir navegación”, incorrecto cuando el menú estaba abierto. Ahora usa su texto visible y el estado expandido nativo de `details`.
- Los listeners agregados a los enlaces del menú mobile no tenían cleanup. Ahora usan handlers nombrados, se eliminan al abandonar la página y el menú también puede cerrarse con `Escape`, devolviendo el foco al `summary`.

## CI

El job `validate` usa Node 22, caché npm basada en `package-lock.json`, `npm ci`, `npm run typecheck` y `npm run build`. Tiene permisos de solo lectura y no contiene pasos de deploy.

`@astrojs/check` no se agregó: la versión oficial disponible declara compatibilidad con TypeScript 5 o 6, mientras el proyecto ya usa TypeScript 7. Forzarla o cambiar la versión mayor de TypeScript ampliaría el alcance. Por eso el typecheck actual cubre TypeScript y tipos de Astro; la compilación de los templates `.astro` queda validada por `astro build`.

## Estado de GitHub Pages

La configuración sigue siendo específica del preview:

- con `GITHUB_PAGES=true`: `site` usa `https://Yamil1701.github.io` y `base` usa `/mora-web`;
- sin esa variable: el proyecto conserva `base: '/'` para desarrollo y hosting futuro;
- los enlaces internos de páginas usan `withBase`; los anchors de la Home permanecen relativos al documento;
- los assets generados por Astro respetan `BASE_URL`.

Se verificó un build Pages desde instalación limpia. Las seis rutas se generaron, no quedaron enlaces root-relative fuera de `/mora-web/`, todos los anchors de la Home tienen destino y el preview local respondió `200` para páginas, CTA y assets. El preview público `https://yamil1701.github.io/mora-web/` también respondió `200` para Home y las cinco rutas estáticas al momento de la auditoría.

## Runtime, accesibilidad y performance

`gsap.matchMedia()` mantiene separados desktop, mobile y reduced motion, y revierte las animaciones/ScrollTriggers creados en cada contexto cuando cambia el breakpoint. Los tweens de materia creados al completar la intro tienen cleanup explícito; la timeline de intro, el magnetismo, sus timers y listeners también se liberan. No se cambiaron duraciones, curvas, transforms ni amplitudes.

La Home conserva landmarks, un único `h1`, jerarquía `h2`/`h3`, focus visible, skip link, navegación por teclado y reduced motion. No se detectó un problema de contraste estructural que justificara alterar la paleta aprobada.

No se encontraron rutas absolutas rotas, ScrollTriggers redundantes evidentes, JS cargado en rutas que no usan motion ni assets inline que requieran intervención inmediata. Los elementos fixed y los filtros existentes pertenecen al diseño aprobado; se preservaron.

## Deuda deliberadamente pendiente

- Auditoría WCAG completa, métricas Lighthouse y pruebas visuales automatizadas quedan fuera de esta pasada.
- El entorno permitió smoke tests HTTP, pero no una revisión en navegador gráfico de desktop, mobile y reduced motion.
- `astro check` debe reevaluarse cuando soporte TypeScript 7 o en una pasada autorizada de compatibilidad de toolchain.
- La estrategia final de caché, CDN, formatos y presupuestos de peso para imágenes/video debe definirse cuando exista media real.
- Si Prototype 02 introduce view transitions o navegación cliente, habrá que adaptar el lifecycle de `initHomeMotion` a esos eventos; hoy la navegación es estática y usa `pagehide`.

## Recomendaciones para Prototype 02

1. Mantener `withBase` o una abstracción equivalente para toda ruta interna mientras Pages siga siendo el preview.
2. Integrar media con dimensiones/aspect ratio explícitos, variantes responsive y carga diferida salvo el recurso crítico del Hero; definir presupuestos con archivos reales, no antes.
3. Repetir los builds local y Pages, el crawler de rutas/anchors y una prueba visual real en desktop, mobile y reduced motion después de reemplazar placeholders.
4. Conservar CI y deploy separados: el hosting final no debe heredar `/mora-web/` ni decisiones exclusivas de GitHub Pages.
