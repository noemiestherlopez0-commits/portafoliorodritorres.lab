---
name: proporciones-web
description: Revisa y corrige que una página web encaje bien en todas las pantallas (celular, tablet, notebook, monitor y pantallas bajas con zoom de Windows). Usala siempre que se cree, rediseñe o publique una web o landing, cuando el usuario diga que algo "no encastra", "se ve cortado", "queda chico/grande", "no entra en mi pantalla" o pida mejorar la versión de celular o de PC.
---

# Proporciones web: que todo encaje en cualquier pantalla

Esta skill nació del portafolio de Rodrigo (rodritorres.lab). En su PC (pantalla
ancha, zoom de Windows al 150 % y barra de tareas) la ventana útil queda en unos
**1280 × 547 px**: el inicio se veía enorme y los botones quedaban cortados. La
lección: **una web tiene que adaptarse al ancho Y al alto de la ventana**.

## Cuándo usarla

- Antes de publicar cualquier web o cambio visual.
- Cuando el usuario manda una captura con algo cortado o desproporcionado.
- Cuando se pide "optimizar para celular y PC".

## Reglas (no negociables)

1. **Nada se pierde ni se reescribe.** Se ajusta tamaño, espacio y orden visual; los
   textos, secciones y datos quedan iguales salvo que el usuario pida otra cosa.
2. **El inicio entra completo en la primera pantalla** en computadoras: saludo,
   título, texto, botones principales y el aviso de disponibilidad, incluso en
   ventanas bajas (≥ 540 px de alto).
3. **Cero desplazamiento hacia los costados** en todas las medidas.
4. **Todo lo tocable mide al menos 44 × 44 px** en celular (botones, enlaces, menú).
5. **Hay forma de navegar en celular** (menú) y un camino corto al contacto.
6. **Todas las imágenes cargan** y no hay errores en la consola.
7. **Modo claro y oscuro** se ven bien (contraste y bordes).

## Medidas que siempre se prueban

| Nombre | Ancho × alto | Por qué |
|---|---|---|
| celular-chico | 360 × 740 | Android económicos |
| celular | 390 × 844 | iPhone 13/14 |
| tablet | 820 × 1180 | iPad vertical |
| notebook-baja | 1366 × 650 | Notebook común con barra del navegador |
| pc-zoom-150 | 1280 × 547 | PC de Rodrigo: 1920 px con zoom 150 % |
| pc-zoom-125 | 1536 × 700 | PC con zoom 125 % |
| monitor | 1920 × 950 | Monitor grande |

## Cómo trabajar

1. **Medir antes de tocar.** Levantar la web (o usar la URL publicada) y correr:

   ```bash
   node .claude/skills/proporciones-web/medir.cjs http://localhost:4173 --hero ".presentacion .acciones" --capturas /tmp/medidas
   ```

   - `--hero` es el último elemento que debe verse en la primera pantalla (por
     ejemplo los botones del inicio). Se pueden pasar varios separados por coma.
   - Devuelve una tabla con OK/FALLA por medida y guarda capturas.

2. **Mirar las capturas** de las medidas que fallan (y siempre la de 1280 × 547).

3. **Corregir con estas técnicas**, en este orden:
   - Tamaños que dependen del ancho y del alto:
     `font-size: clamp(2.1rem, min(4.2vw, 7.4vh), 3.6rem);`
   - Espacios verticales con `vh`: `padding-top: clamp(1.5rem, 6vh, 5.5rem);`
   - Fotos e ilustraciones con alto máximo: `width: clamp(10rem, 36vh, 17rem);`
   - Columnas que aprovechen el ancho en PC (`grid-template-columns`) y una sola
     columna en celular.
   - Textos largos con ancho de lectura cómodo: `max-width: 60–70ch`.
   - Títulos con `text-wrap: balance` para que no queden palabras sueltas.
   - En celular: menú desplegable, botones a todo el ancho donde ayude, y áreas
     táctiles de 44 px.
   - Poner los ajustes nuevos en un archivo CSS aparte (por ejemplo `ux-alto.css`)
     para no reescribir lo que ya funciona.

4. **Volver a medir** hasta que todas las medidas den OK.

5. **Probar lo interactivo** en celular: abrir y cerrar el menú, ir a una sección,
   ver que el botón flotante (si existe) aparezca y se esconda donde corresponde.

6. **Recién ahí publicar**, y repetir la medición sobre la URL publicada.

## Cómo contarle el resultado al usuario

Rodrigo es principiante y habla español: explicar en palabras simples qué estaba
mal, qué se cambió y qué se comprobó, con una tabla corta de medidas (✅/❌) y una
captura de cómo se ve en su ventana (1280 × 547). Nunca decir que algo funciona
sin haberlo medido.
