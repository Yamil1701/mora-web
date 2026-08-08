# MORA — Prototype 01: notas de implementación

## 1. Qué se implementó

- Header persistente con navegación por actos y rutas previstas.
- Hero que presenta MORA, el posicionamiento y las tres áreas en el primer viewport.
- Entrada editorial al acto Tattoos.
- Galería provisional con una pieza dominante y dos detalles.
- CTA doble para la persona decidida y la que necesita orientación.
- Transición Tattoos → Pastelería basada en un gesto direccional compartido.
- Entrada, evidencia breve y CTA de Pastelería.
- Anticipo técnico del próximo acto Sofit, sin desarrollar su escena.
- Contacto persistente preparado para WhatsApp.

## 2. Decisiones de implementación

El prototipo usa Astro, CSS propio y GSAP/ScrollTrigger. La estructura visual evita cards de servicios y se organiza como una secuencia continua de materias. Se mantiene scroll nativo y el motion se concentra en dos gestos: el trazo de precisión y el cambio de plano material.

## 3. Qué es provisional

- Tipografías del sistema, proporciones y color exacto.
- Texturas abstractas y toda la dirección de fotografía.
- Fucsia, carbón y tonos de piel/sabor como sistema cromático de prueba.
- Copy descriptivo breve no marcado como claim profesional.

Nada de esto debe interpretarse como identidad final.

## 4. Placeholders

Todos los espacios de media muestran una etiqueta explícita. No incluyen tattoos, productos ni trabajos ficticios. Los slots están preparados para sustituirse por:

1. Tattoo dominante vertical.
2. Macro de línea/sombreado.
3. Tattoo en contexto o proceso.
4. Minitorta principal.
5. Corte/relleno.
6. Clips equivalentes de manos para el match cut.

## 5. Motion

- Entrada breve del Hero para ordenar lectura, sin loader.
- Parallax moderado en dos materias abstractas del Hero.
- Dibujo de una línea SVG durante la entrada de Tattoos.
- Reveals puntuales de contenido, ejecutados una sola vez.
- Transición con scrub corto: la piel sale, la capa entra y una guía conserva el gesto.
- Desfase mínimo entre capas de Pastelería.

Se usa `gsap.matchMedia()` y cada contexto se revierte al abandonar la página.

## 6. Desktop y mobile

Desktop aprovecha asimetría, superposición y una transición sticky. Mobile cambia el orden de lectura, apila la evidencia con jerarquías distintas, elimina el sticky largo y presenta ambas materias de la transición en un corte simultáneo. No hay interacción crítica por hover ni recorrido horizontal obligatorio.

## 7. Reduced motion

`prefers-reduced-motion: reduce` mantiene el estado final del contenido, elimina scrub y desplazamientos amplios, y convierte la transición en un corte compositivo estático entre las dos materias. Los anchors vuelven a scroll inmediato.

## 8. Limitaciones conocidas

- Falta validar el ritmo con media real y ajustar contraste después de la producción.
- El enlace de WhatsApp llega a `/contacto` hasta definir el número Business.
- Las páginas internas siguen siendo placeholders.
- Métricas de campo y Lighthouse definitivo dependen de los assets finales y del hosting.

## 9. Qué debería validar una persona

- Si la oferta se entiende antes de hacer scroll.
- Si Tattoos se siente protagonista sin convertir toda la marca en una web tattoo.
- Si la transición se percibe como continuidad de criterio y no como efecto decorativo.
- Si Pastelería cambia de atmósfera sin parecer otra marca.
- Si la longitud y densidad funcionan en un Android real.
- Si los CTA aparecen en el momento correcto para ambos estados de decisión.

## 10. Próximo paso propuesto

Producir un shot test mínimo —un gesto Tattoo, su gesto equivalente de Pastelería y una pieza real de cada área— y sustituir solo esos slots. Con esa prueba se debería cerrar timing, crop, contraste y costo de carga antes de extender el recorrido a Sofit.

## Refinement Pass 01

- **Scroll:** se mantiene el scroll nativo y no se agrega Lenis. Los anchors conservan desplazamiento suave cuando hay motion habilitado y vuelven a ser inmediatos con `prefers-reduced-motion`. Esto evita introducir latencia o interferencias con wheel, trackpad, teclado, Back y navegación.
- **Magnetismo:** se incorporan solo tres zonas de proximidad —entrada de Tattoos, transición y entrada de Pastelería—. El ajuste se evalúa después de que termina un gesto de wheel o touch, exige baja velocidad y una distancia corta, y usa un umbral todavía menor en mobile. No actúa con teclado, scroll programático ni reduced motion.
- **Respiración mobile:** se amplía de forma selectiva el espacio entre visual principal, copy, evidencia, CTA y transición. También se da más altura a los visuales protagonistas para que la siguiente escena no compita mientras ocupan el centro del viewport.
- **Motion mobile recuperado:** el trazo de Tattoos se dibuja una sola vez con recorrido y duración breves. La transición Piel → Sabor usa una apertura corta de máscaras, avance de la nueva materia y extensión del gesto compartido, sin sticky prolongado.
- **Entrada de MORA:** las cuatro letras comparten easing y una ventana temporal compacta, pero llegan con gestos distintos. La R incorpora una rotación editorial más visible; en mobile la amplitud se mantiene contenida y con reduced motion la palabra aparece en su estado final.
- **Entrada inicial de materias:** piel, movimiento y sabor entran de forma asíncrona y solapada con las letras mediante combinaciones distintas de desplazamiento, escala, rotación y máscara. El timeline termina en el mismo estado CSS que consumen los ScrollTriggers de parallax.
- **Tradeoffs:** se priorizó fluidez percibida sin amortiguar todo el documento. El magnetismo es deliberadamente conservador y puede no activarse en un scroll rápido; esa ausencia es preferible a secuestrar el gesto del usuario. Los reveals globales excluyen ahora los copies con animación específica para evitar transforms duplicados al cambiar de breakpoint.
