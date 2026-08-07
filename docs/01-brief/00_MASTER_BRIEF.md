# MORA — Master Brief

## 1. Visión

MORA será una presencia digital personal y profesional para Sofía Agüero, conocida principalmente como **Mora**.

La web no debe presentarla como una persona que "hace muchas cosas sin relación", sino como una identidad versátil que trabaja en diferentes medios y con una forma reconocible de relacionarse con las personas.

La experiencia debe ser:
- artística;
- profesional;
- energética;
- cercana;
- flexible;
- estructurada sin sentirse corporativa;
- experimental sin sacrificar usabilidad.

Se busca una web memorable, no una landing genérica basada en la secuencia hero + cards + testimonios + CTA.

## 2. Posicionamiento aprobado

### Marca
**MORA**

### Posicionamiento central
**Expresión en todas sus formas.**

### Refuerzo
**En la piel, en los sabores y en el movimiento.**

"Sin etiquetas" se conserva como concepto narrativo interno, no como texto obligatorio de interfaz.

## 3. Áreas principales

Prioridad:
1. **Tattoos**
2. **Pastelería**
3. **Sofit** — entrenamiento

Nails queda fuera de la oferta pública V1 porque Mora no desea impulsarlo como servicio. Puede formar parte de su recorrido personal.

## 4. Áreas secundarias / historia

Pueden aparecer en "Sobre Mora" o "Proyectos":
- Psicopedagogía, con protagonismo relevante como formación en curso/avanzada, sin presentarla como profesional habilitada si todavía no corresponde.
- Mora Vinería, como emprendimiento/proyecto.
- Experiencias previas: uñas, piercing.
- Clases de violín y canto, en menor medida.
- Historia de cómo fue incorporando disciplinas.

## 5. Idea rectora

Las disciplinas se unen por cuatro ejes:

### Expresión
Los trabajos parten de la persona, su idea, necesidad u objetivo.

### Transformación
Una idea se vuelve pieza; una ocasión se vuelve experiencia; un objetivo se vuelve proceso.

### Acompañamiento
Mora escucha, adapta, explica y guía sin anular la identidad del cliente.

### Criterio
La cercanía no significa improvisación. Existen límites, conocimiento, valores y decisiones profesionales.

## 6. Personalidad de marca

Debe comunicar:
- compromiso;
- responsabilidad;
- dedicación;
- creatividad;
- paciencia;
- escucha;
- adaptación;
- seguridad;
- conocimiento aplicado;
- interés genuino por lo que hace.

Debe evitar transmitir:
- precariedad;
- desorganización;
- incumplimiento;
- desinterés;
- amateurismo;
- rigidez corporativa;
- infantilización.

## 7. Arquitectura general

Solución híbrida:

```text
/
├── Home narrativa
│   ├── Hero
│   ├── Preview Tattoos
│   ├── Preview Pastelería
│   ├── Preview Sofit
│   ├── Proyectos / recorrido
│   ├── Sobre Mora breve
│   └── Contacto
├── /tattoos
├── /pasteleria
├── /sofit
├── /sobre-mora
└── /contacto
```

Cada preview de la Home debe ser una experiencia en sí misma: generar curiosidad y emoción suficiente para querer entrar en la subpágina.

## 8. Contacto y conversión

Canal principal: **WhatsApp Business**.  
Canal secundario: **Instagram profesional**.

Estado inicial:
- usar número genérico/fallback hasta definir el número Business;
- usar `@mora` como placeholder de Instagram.

La web tendrá:
- WhatsApp persistente;
- contacto integrado en cada página;
- página `/contacto`;
- mensajes prearmados distintos según servicio;
- sin formularios en V1;
- CTA diferenciados para quien ya sabe lo que quiere y quien todavía necesita guía.

Ejemplos de intención:
- "Contame tu idea."
- "Consultar."
- "Todavía no sé bien qué quiero."
- "Ya tengo una idea."

## 9. Dispositivos

### Desktop
Será el espacio principal para descargar el potencial artístico y experimental.

### Mobile
Mobile-first en usabilidad. No debe ser una versión mutilada de desktop: necesita una coreografía propia que conserve sensación, ritmo y personalidad aunque reduzca complejidad visual.

Nivel de experimentación deseado: **7–8 / 10**.

## 10. Dirección visual preliminar

Confirmado:
- oscuro, pero no apagado;
- artístico;
- energético;
- editorial;
- profundidad y contraste;
- texturas reales;
- no empresarial;
- no infantil;
- no gótico por defecto;
- no estética fitness genérica;
- no pastelería pastel estereotipada.

Color:
- fucsia como acento principal aprobado;
- negro/carbón y blanco como base probable;
- bordó, verdes y marrón oscuro disponibles para explorar;
- evitar fluor como tratamiento general;
- evitar amarillo y naranja chillón;
- evitar crema como dominante.

Se permiten cambios ambientales entre áreas sin romper la identidad madre.

## 11. Dirección fotográfica

La web no comienza con un retrato obligatorio.

Mora acepta producir material específico:
- trabajando;
- manos;
- perfil;
- cuerpo entrenando;
- rostro completo en poca cantidad;
- planos de proceso;
- poses preparadas;
- mirar a cámara solo de manera controlada;
- evitar hablar a cámara.

La producción se hará principalmente con celular (Samsung A55 disponible), con edición posterior.

## 12. Motion

Stack de motion previsto:
- GSAP;
- ScrollTrigger;
- CSS para microinteracciones simples.

Reglas:
- motion con propósito;
- no bloquear contenido;
- no secuestrar scroll sin justificación;
- no depender de una animación para entender la oferta;
- respetar `prefers-reduced-motion`;
- mobile con adaptación específica;
- efectos artísticos puntuales, no saturación.

## 13. Sistema verbal aprobado

General:

**MORA**  
**Expresión en todas sus formas.**  
**En la piel, en los sabores y en el movimiento.**

Tattoos:
**El arte de hacerlo propio.**

Pastelería:
**El sabor también se comparte.**

Sofit:
frase secundaria todavía abierta.  
Descartado: "Transformarte también se entrena."

La palabra "arte" puede tener tratamientos visuales puntuales, pero no se convertirá en una colección forzada de juegos como CreArte / MoldeArte / DisciplinArte en cada sección.

## 14. Voz

La página debe sentirse como si Mora le hablara al visitante, pero no como un relato autobiográfico constante.

Idioma:
- español;
- voseo;
- inglés solo cuando aporte (Tattoos, Sofit, nombres puntuales).

Tono:
- cercano;
- seguro;
- explicativo;
- flexible;
- con humor puntual;
- profesional sin sonar empresarial.

## 15. Tecnología base

Preferencia:
- Astro;
- TypeScript;
- GSAP + ScrollTrigger;
- React solo cuando aporte;
- contenido estructurado para facilitar CMS futuro sin introducir fricción ahora;
- sin backend V1 salvo necesidad concreta;
- Supabase solo si aparece un caso real;
- GitHub privado;
- hosting gratuito al inicio;
- dominio propio más adelante.

ReactBits, Tailark y otras bibliotecas pueden usarse como referencia o fuente puntual de patrones/componentes, nunca como identidad del sitio.

## 16. Analítica y SEO

Objetivos:
- SEO local en Salta;
- visitas;
- páginas vistas;
- clics de WhatsApp;
- interés por área;
- tracking mínimo;
- sin formularios;
- enfoque respetuoso de privacidad.

## 17. Próxima fase

Antes de wireframes finales:
1. investigación UX;
2. benchmark creativo;
3. biblioteca de patrones;
4. principios UX propios;
5. moodboard funcional;
6. concepto de interacción;
7. wireframe narrativo;
8. prototipo;
9. pruebas breves con usuarios;
10. identidad visual final;
11. desarrollo.
