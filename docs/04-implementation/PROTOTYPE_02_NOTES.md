# MORA — Prototype 02: notas de implementación

## Alcance

Prototype 02 continúa la Home aprobada desde el cierre de Pastelería y agrega:

- transición Pastelería → Sofit por acumulación, compresión y liberación;
- Sofit como Acto 03 interno de la Home;
- dos momentos de Sofit —proceso y acompañamiento— más remate conversacional;
- salida por expansión y pérdida progresiva de energía;
- bloque MORA como firma humana, selector de contacto por intención y footer;
- navegación final de Home y contratos de rutas internas;
- slots preparados para integrar imagen o video reales sin cambiar la composición.

## Scroll

`home-scroll.ts` concentra el controlador de scroll y el magnetismo narrativo.

Lenis solo se activa cuando coinciden:

- viewport de al menos 768 px;
- `hover: hover`;
- `pointer: fine`;
- dispositivo sin entrada touch detectada;
- `prefers-reduced-motion: no-preference`.

En touch, mobile y reduced motion se conserva scroll nativo. Lenis usa un único callback en `gsap.ticker`; su evento `scroll` actualiza `ScrollTrigger`. Los anchors internos y los narrative magnets llaman a la misma abstracción `scrollToPosition`, por lo que no conviven dos motores de smooth scroll.

El controlador reacciona a cambios del media query, elimina listeners/ticker y destruye Lenis durante cleanup.

## Motion de Sofit

`sofit-motion.ts` contiene solamente la coreografía nueva. Desktop usa scrub moderado para comprimir capas, dibujar las trayectorias y expandir la salida. Mobile usa secuencias breves one-shot, sin pin prolongado ni scroll suavizado.

La intensidad máxima ocurre en la liberación y Sofit. Desde el remate hacia MORA, contacto y footer disminuyen cantidad, amplitud y frecuencia de movimiento.

Reduced motion conserva la composición final, el contenido, las trayectorias estáticas y todos los CTA; desactiva scrub, Lenis y magnets.

## Contrato media-ready

`MediaSlot.astro` acepta:

- `type`: imagen o video;
- `src` desktop y `mobileSrc` opcional;
- `poster` para video;
- `alt` y estado decorativo;
- `objectPosition` como punto focal;
- carga `eager` o `lazy`.

Sin `src`, el componente conserva el placeholder abstracto y su leyenda explícita. Los nuevos slots de Sofit identifican movimiento principal, detalle corporal y acompañamiento; no simulan trabajos ni resultados reales.

## Pendientes deliberados

Quedan para la fase de media real: archivos finales, crops, focal points, color grading, ejercicio/gesto exacto, loops, retrato opcional de Mora y ajuste fino de timing con el peso real de assets.
