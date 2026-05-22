# Clean It - Pedidos de materiales

Web app estática para que supervisores armen pedidos estandarizados de materiales por consorcio o servicio.

## Qué incluye

- HTML, CSS y JavaScript puro.
- Sin backend y sin dependencias externas.
- Catálogo cerrado con los materiales aprobados del kit Clean It.
- Carga de múltiples pedidos en un mismo lote.
- Campos por servicio: supervisor, consorcio, frecuencia, observaciones, gimnasio y cochera.
- Carga automática del kit sugerido.
- Bolsas separadas por color y tamaño: negras o verdes en 45x60, 70x50 y 90x110.
- Edición y eliminación de ítems en la vista previa.
- Alertas cuando la cantidad supera la sugerida.
- Ítems excepcionales fuera del kit con motivo obligatorio.
- Alertas de estandarización para pedidos tipo Blem, limpiavidrios, Cif, Poett/Lysoform, etc.
- Copiar pedido activo, copiar todos, enviar por WhatsApp, enviar por mail y descargar TXT.
- Guardado local automático en el navegador con `localStorage`.

## Cómo subir a GitHub Pages

1. Crear un repositorio nuevo en GitHub.
2. Subir estos archivos a la raíz del repositorio:
   - `index.html`
   - `styles.css`
   - `app.js`
   - `README.md`
3. Ir a **Settings > Pages**.
4. En **Build and deployment**, seleccionar:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. Guardar y esperar que GitHub publique la URL.

## Uso operativo sugerido

1. El supervisor completa los datos del consorcio o servicio.
2. Marca si es gimnasio o si tiene cochera.
3. Usa **Cargar kit sugerido** como base.
4. Selecciona manualmente las bolsas según color y tamaño necesario.
5. Ajusta cantidades cuando corresponda.
6. Si necesita algo fuera del kit, lo carga como **ítem excepcional** y explica el motivo.
7. Copia el pedido o lo envía por WhatsApp/mail.

## Nota de gestión

La app no bloquea cantidades superiores a las sugeridas. Las registra como alerta. Esto evita fricción operativa, pero deja trazabilidad para revisar consumos inflados o pedidos mal copiados.


## Actualización bolsas v2

Las bolsas se cargan como ítems separados por color y tamaño:

- Bolsas de residuos negras 45x60
- Bolsas de residuos verdes 45x60
- Bolsas de residuos negras 70x50
- Bolsas de residuos verdes 70x50
- Bolsas de residuos negras 90x110
- Bolsas de residuos verdes 90x110

También se actualizó la clave de almacenamiento local para evitar que el navegador muestre pedidos viejos guardados con la versión anterior.
