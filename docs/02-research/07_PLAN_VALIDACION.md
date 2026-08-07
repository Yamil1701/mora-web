# 07 — Plan de validación

## Fase 1 — Wireframe narrativo

Antes de alta fidelidad, documentar cada tramo:

| Tramo | Qué ve | Qué entiende | Qué siente | Motion | Acción |
|---|---|---|---|---|---|
| Hero | ... | ... | ... | ... | ... |
| Tattoos | ... | ... | ... | ... | ... |
| Pastelería | ... | ... | ... | ... | ... |
| Sofit | ... | ... | ... | ... | ... |
| About | ... | ... | ... | ... | ... |
| Contacto | ... | ... | ... | ... | ... |

Crear desktop y mobile de forma paralela.

---

## Fase 2 — Prototipo del riesgo mayor

No prototipar toda la web primero.

Probar:
1. hero;
2. transición hacia Tattoos;
3. un acto completo;
4. transición a siguiente disciplina;
5. navegación/CTA;
6. versión mobile equivalente.

Objetivo:
comprobar la gramática de la experiencia.

---

## Fase 3 — Usability test cualitativo

NN/g recomienda 5–8 participantes como regla práctica para tests cualitativos.

Para MORA:
**5–7 personas por ronda** es suficiente como punto de partida.

No hace falta que conozcan a Mora.

### Tareas

1. “Entraste por un link de Instagram. ¿Qué hace esta persona?”
2. “Querés hacerte un tattoo pero todavía no sabés exactamente el diseño. ¿Qué harías?”
3. “Ya tenés el diseño bastante claro. ¿Cómo consultarías?”
4. “Querés saber cómo trabaja con entrenamiento. Encontrá esa información.”
5. “¿Dónde trabaja o qué zona cubre?”
6. “Volvé a la página principal.”
7. “Contactala por el servicio que más te interesó.”

### Observar
- dudas;
- scroll hacia atrás;
- taps erróneos;
- CTA ignorados;
- elementos confundidos con controles;
- pausas;
- si entiende que existen subpáginas;
- si WhatsApp está disponible sin romper exploración.

---

## Fase 4 — Evaluación emocional

Al finalizar tareas, preguntar sin sugerir adjetivos:

- ¿Cómo describirías esta página con 3 palabras?
- ¿Qué impresión te dio Mora?
- ¿Qué parte recordás más?
- ¿Qué servicio recordás?
- ¿Hubo algo que se sintiera fuera de lugar?
- ¿Qué parte te dio ganas de seguir?
- ¿Algo te pareció lento o cansador?

Buscamos que emerjan de forma espontánea conceptos cercanos a:
- artística;
- confiable;
- cercana;
- creativa;
- cuidada;
- distinta.

No necesitamos que repitan exactamente esas palabras.

---

## Fase 5 — Performance

### Lab
- Chrome DevTools;
- Lighthouse;
- throttling mobile;
- CPU slowdown;
- redes lentas;
- dispositivos reales.

### Campo después de publicar
- Core Web Vitals reales;
- clics CTA;
- tasa de entrada a subpáginas;
- porcentaje de usuarios que llegan a About/contacto;
- diferencias mobile/desktop.

---

## Fase 6 — Heurística interna

Checklist:
- navegación visible;
- control del usuario;
- estados claros;
- no hover-only;
- no información solo por animación;
- reduced motion;
- keyboard;
- foco;
- targets;
- contraste;
- alt;
- no false floor;
- CTA;
- back funciona correctamente.

---

## Criterio para pasar a alta fidelidad

No avanzar por “se ve increíble”.

Avanzar cuando:
- 5–7 usuarios entienden la oferta sin explicación;
- encuentran las tres áreas;
- pueden contactar;
- la coreografía no produce confusión evidente;
- mobile funciona como experiencia propia;
- no hay un problema técnico/performance estructural.
