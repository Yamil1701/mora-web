# 04 — Navegación y orientación

> Cuanto más libre sea el contenido, más estable debe ser la orientación.

## Desktop
Header persistente: MORA / Tattoos / Pastelería / Sofit / Sobre / WhatsApp.

En Home, los nombres del header hacen scroll al acto. El CTA “Ver…” abre la subpágina.

## Indicador de acto
Hipótesis a probar: `01/03` o `01 PIEL / 02 SABOR / 03 MOVIMIENTO`. Si se siente demasiado museo/portfolio, se elimina.

## WhatsApp persistente
Desktop: pill fijo o integrado al header.  
Mobile: botón fijo con safe area y reposicionamiento si tapa CTA.  
Desde un acto abre mensaje contextual; desde zonas neutrales puede pedir servicio antes de abrir el link.

## Scroll / Back
- scroll nativo;
- URLs reales;
- Back del navegador predecible;
- sin fake routing;
- View Transitions no alteran semántica.

## `/tattoos` con Piercing

```text
/tattoos
├── Hero Tattoos
├── Trabajos
├── Cómo trabajo
├── Proceso / turno
├── Piercing
├── Cuidados
├── FAQ
└── Contacto
```

Piercing se incorpora después de establecer el universo Tattoo y con menor jerarquía. No se renombra necesariamente la navegación a “Tattoos & Piercing”.

## Transición Home → subpágina
Probar continuidad de imagen/título/recorte usando View Transitions nativas antes de añadir router SPA.
