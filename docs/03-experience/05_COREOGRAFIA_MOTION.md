# 05 — Coreografía de motion

## Motivo maestro
Trazo/guía: revelado, borde, ruta, subrayado o máscara. Frecuencia baja; nunca animación permanente.

## Tattoos
**Vocabulario:** precisión, inicio/parada, línea, relleno, enfoque.  
**Técnicas:** SVG stroke controlado, clip-path, mask, scale de macro, parallax leve, pin parcial.  
**Evitar:** salpicaduras constantes, partículas negras genéricas, shake, glitches.

## Pastelería
**Vocabulario:** capa, presión, volumen, corte, deslizamiento, suavidad.  
**Técnicas:** mask orgánica, wipe, clip-path, video macro, escala leve, superposición.  
**Evitar:** sprinkles por pantalla, bounce infantil, elastic excesivo.

## Sofit
**Vocabulario:** repetición, tensión, descanso, alineación, progresión, timing.  
**Técnicas:** loop corto, stagger estructurado, líneas de guía, secuencia por pasos, progress local.  
**Evitar:** calorías ficticias, anillos fitness, UI deportiva falsa, speed ramps agresivos.

## Transiciones
Tattoo → Pastelería: match cut de mano/gesto; fallback mask direccional.  
Pastelería → Sofit: presión/control → agarre/control; fallback corte rítmico.

## ScrollTrigger
Justificado para pin parcial, scrub de reveal, progress local, activación de media y sincronización. No para fijar todo el sitio ni obligar a scroll horizontal.

## Reduced motion
- Hero: fade/reveal simple.
- Tattoos: pieza final sin dibujado largo.
- Pastelería: cortes/fades.
- Sofit: evitar scrub; video solo si no problemático.
- Transiciones: crossfade/cut.

## Performance
Priorizar transform/opacity, pausar media fuera de viewport, no loops simultáneos, limpiar triggers y usar `gsap.matchMedia()`.
