# WORK HANDOFF — MORA Prototype 01

## 0. Qué es este archivo

Este archivo es el punto de entrada operativo para cualquier agente que trabaje sobre el repositorio.

**No rediseñar el proyecto desde cero.** La estrategia, investigación UX y mapa narrativo ya fueron definidos. La tarea del Prototype 01 es convertir esas decisiones en una primera experiencia navegable y evaluable.

Si una decisión de este handoff necesita más detalle, consultar `/docs` en el orden indicado al final.

---

## 1. Producto

MORA es la marca personal/profesional de Sofía Agüero, conocida principalmente como Mora.

Posicionamiento aprobado:

> **MORA**  
> **Expresión en todas sus formas.**  
> **En la piel, en los sabores y en el movimiento.**

Tres áreas comerciales principales, en este orden de prioridad:

1. Tattoos
2. Pastelería
3. Sofit (entrenamiento)

Piercing pertenece a la subpágina `/tattoos` y **no debe competir con Tattoos en la Home**.

---

## 2. Objetivo de experiencia

La Home debe sentirse como una experiencia continua de **tres materias / tres actos**, no como hero + tres cards.

Macrorecorrido futuro:

```text
Hero
→ Tattoos
→ Pastelería
→ Sofit
→ Proyectos / recorrido
→ Sobre Mora
→ Contacto
```

Prototype 01 no implementa todo ese recorrido. Su objetivo es validar la gramática de la experiencia.

Nivel de experimentación deseado: **7–8/10**.

Debe sentirse:
- artística;
- profesional sin ser empresarial;
- energética;
- cercana;
- editorial;
- oscura pero viva;
- material/táctil;
- estructurada debajo de una superficie visual libre.

Evitar:
- SaaS/landing genérica;
- hero + cards como corazón del sitio;
- estética tattoo gótica automática;
- pastelería infantil/pastel;
- fitness neón/gym-bro;
- efectos seleccionados porque una librería los ofrece;
- exceso de texto autobiográfico;
- WebGL/Three.js sin una necesidad demostrable.

---

## 3. Alcance obligatorio del Prototype 01

Implementar en **desktop y mobile**:

1. Header / navegación base.
2. Hero.
3. Entrada al acto Tattoos.
4. Evidencia/galería editorial de Tattoos con placeholders honestos.
5. CTA Tattoos.
6. Transición Tattoos → Pastelería.
7. Entrada al acto Pastelería.
8. WhatsApp persistente placeholder.
9. `prefers-reduced-motion` con una alternativa cuidada.
10. Responsive real, no desktop apilado.

### Stretch goal
Solo si lo obligatorio está sólido y no se degrada la calidad:

- evidencia de Pastelería;
- CTA Pastelería;
- preparación conceptual/técnica de la transición hacia Sofit.

### Fuera de alcance

- Sofit completo;
- Proyectos;
- Sobre Mora final;
- Contacto final;
- subpáginas completas;
- piercing UI;
- CMS;
- Supabase/backend;
- analytics real;
- SEO completo;
- identidad/logo definitivos;
- producción de assets finales.

Las rutas placeholder pueden mantenerse.

---

## 4. Hero — requisitos de información

La experimentación no puede esconder la oferta.

En los primeros instantes / primer o segundo screenful debe quedar claro:

- MORA;
- “Expresión en todas sus formas.”;
- “En la piel, en los sabores y en el movimiento.”;
- Tattoos / Pastelería / Sofit;
- existe continuidad de scroll;
- existe una forma de contacto.

No usar un retrato de Mora como centro obligatorio del hero.

---

## 5. Acto Tattoos

Copy aprobado:

> **Tattoos**  
> **El arte de hacerlo propio.**

Idea de contenido:
- piel;
- línea;
- stencil;
- tinta;
- precisión;
- detalle;
- trabajo real.

El enfoque de Mora parte de la idea del cliente y aporta guía/criterio sin anularla.

CTA:
- principal: **Contame tu idea**;
- secundario: **Ver Tattoos**.

Debe existir mentalmente la distinción:
- usuario decidido;
- usuario que todavía necesita orientación.

No mostrar piercing como servicio equivalente en la Home.

---

## 6. Transición Tattoos → Pastelería

No hacer un morph literal “tinta que mágicamente se vuelve crema”.

Dirección preferida para assets finales:
**match cut de gesto/mano/precisión**.

Como todavía no existen los clips definitivos, el Prototype 01 puede simular la gramática mediante:
- máscaras;
- crops;
- geometría neutra;
- movimiento direccional;
- placeholders claramente identificados.

Lo importante es validar:
- timing;
- continuidad;
- cambio de materia;
- legibilidad;
- costo de scroll.

---

## 7. Entrada Pastelería

Copy aprobado:

> **Pastelería**  
> **El sabor también se comparte.**

Vocabulario material:
- capas;
- corte;
- relleno;
- manga;
- textura;
- cercanía.

La Home no debe parecer una segunda web.

Debe cambiar el ambiente manteniendo:
- grid;
- sistema tipográfico;
- navegación;
- acento MORA;
- gramática general.

---

## 8. Desktop y mobile

### Desktop
Es el espacio de mayor exploración artística.

Puede probar:
- composición asimétrica;
- superposición;
- pinning parcial;
- cambios de escala;
- masks;
- media amplia;
- secuencia narrativa.

### Mobile
Mobile-first en usabilidad.

No copiar la coreografía desktop.

Debe conservar:
- emoción;
- identidad;
- materia;
- claridad;
- CTA;
- ritmo.

Reducir:
- pinning largo;
- capas simultáneas;
- scroll horizontal;
- media pesada;
- efectos costosos.

Prohibido que una interacción crítica sea hover-only.

---

## 9. Motion

Base:
- GSAP;
- ScrollTrigger;
- CSS para microinteracciones simples.

Reglas:
- scroll nativo por defecto;
- no Lenis/smooth scroll global salvo necesidad demostrada;
- no animar por animar;
- no más de 1–2 ideas fuertes simultáneas;
- contenido importante visible aunque una animación no corra;
- pausas entre momentos intensos;
- reduced motion diseñado, no simplemente “desactivar todo”.

Usar `gsap.matchMedia()` o una estrategia equivalente limpia para:
- desktop;
- mobile/touch;
- reduced motion.

---

## 10. Assets

Todavía no están disponibles los assets finales.

Usar placeholders deliberados y honestos.

No:
- generar tattoos falsos de Mora;
- inventar pastelería;
- usar trabajos ajenos como si fueran propios;
- diseñar alrededor de stock que luego obligue a rehacer la dirección.

Construir slots/ratios/crops sustituibles.

Assets futuros se producirán específicamente para la web con teléfono y edición posterior.

---

## 11. Visual — todavía NO cerrar

Aprobado como dirección:
- oscuro, no apagado;
- fucsia como acento futuro/principal;
- texturas reales;
- editorial;
- alto contraste;
- no empresarial;
- no infantil.

No elegir como definitivos todavía:
- tipografías;
- paleta exacta;
- logo/isotipo;
- textura final;
- estilo de fotografía final.

El Prototype 01 puede usar un sistema visual provisional sobrio que permita evaluar composición y motion sin presentarlo como branding aprobado.

---

## 12. UX no negociable

1. Sorprender sin desorientar.
2. La oferta se entiende pronto.
3. La navegación es recuperable siempre.
4. WhatsApp está disponible sin secuestrar atención.
5. Cada efecto tiene función.
6. El contenido real será protagonista cuando lleguen los assets.
7. La Home debe funcionar aun con reduced motion.
8. El usuario decidido recibe velocidad.
9. El exploratorio recibe una puerta para conversar.
10. Mobile debe sentirse diseñado.
11. No false floor.
12. No scroll-jacking frustrante.

---

## 13. Accesibilidad y performance

Tomar como restricciones de diseño, no como cleanup final.

Objetivos de referencia en campo:
- LCP ≤ 2.5 s;
- INP ≤ 200 ms;
- CLS ≤ 0.1;
- p75.

Evitar cargar media de actos futuros en el arranque.

Targets táctiles importantes deben ser generosos.

Respetar `prefers-reduced-motion`.

HTML semántico y foco visible.

---

## 14. Stack y arquitectura

Baseline:
- Astro 7;
- TypeScript;
- GSAP 3;
- sitio estático;
- sin backend;
- sin CMS.

No introducir React salvo que resuelva un problema real de interactividad/estado.

No introducir Tailwind automáticamente. CSS propio es válido y probablemente preferible durante el prototipo si permite control preciso.

Mantener la base simple y refactorizable.

---

## 15. Entregable esperado

El trabajo debe terminar con:

- código ejecutable;
- build exitoso;
- desktop + mobile;
- reduced-motion;
- README/nota técnica con decisiones;
- lista de supuestos/placeholders;
- lista de problemas abiertos;
- screenshots si la herramienta/entorno lo permite;
- sin afirmar que el diseño es final.

El objetivo no es “terminar la Home”.

El objetivo es responder:

> **¿La gramática de MORA funciona en navegador?**

---

## 16. Orden de documentación

Leer primero:

1. `WORK_HANDOFF.md` — este archivo.
2. `docs/03-experience/00_DECISION_EJECUTIVA.md`
3. `docs/03-experience/01_MAPA_EXPERIENCIA_HOME.md`
4. `docs/03-experience/02_WIREFRAME_NARRATIVO_DESKTOP.md`
5. `docs/03-experience/03_WIREFRAME_NARRATIVO_MOBILE.md`
6. `docs/03-experience/05_COREOGRAFIA_MOTION.md`
7. `docs/03-experience/07_ALCANCE_PROTOTIPO_01.md`
8. `docs/03-experience/08_CRITERIOS_APROBACION.md`
9. `docs/02-research/01_PRINCIPIOS_UX_MORA.md`
10. `docs/01-brief/00_MASTER_BRIEF.md`

Consultar el resto solo cuando haga falta profundizar.

---

## 17. Regla ante contradicciones

Prioridad:
1. instrucciones explícitas del prompt de Work;
2. `WORK_HANDOFF.md`;
3. documentos de `/docs/03-experience`;
4. investigación `/docs/02-research`;
5. brief `/docs/01-brief`.

No inventar decisiones faltantes que deberían validarse después.
