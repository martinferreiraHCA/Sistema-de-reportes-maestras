# 🎓 Sistema de Reportes de Maestras con Google AI

Sistema automatizado para generar informes de actuación docente utilizando Google Apps Script y la IA de Google (Gemini).

## ✨ Características

- 📝 **Generación automática de informes** con plantillas personalizadas para Educación Inicial y Primaria
- 🤖 **Integración con Google AI (Gemini)** para generar observaciones contextualizadas
- 📊 **Carga automática de datos** desde archivos CSV en Google Drive
- 🎨 **Interfaz moderna y fácil de usar**
- 📄 **Exportación a Google Docs** con formato profesional

## 🚀 Configuración Inicial

### 1. Obtener API Key de Google AI

1. Visita [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Inicia sesión con tu cuenta de Google
3. Haz clic en "Create API Key"
4. Copia la API Key generada

### 2. Configurar el proyecto en Google Apps Script

1. Abre tu proyecto en [Google Apps Script](https://script.google.com)
2. Crea un nuevo proyecto o abre uno existente
3. Copia los archivos `code.gs` e `index.html` al proyecto
4. Modifica la constante `CSV_FOLDER_ID` en `code.gs` con el ID de tu carpeta de Google Drive que contiene los archivos CSV

### 3. Configurar los archivos CSV

Crea dos archivos CSV en la carpeta especificada:

**Para Educación Inicial** (nombre del archivo debe contener "inicial"):
```csv
Nombre,Clase,Carácter del Cargo,Antigüedad,Inasistencias
María González,Nivel 4,Efectivo,10 años,2
```

**Para Primaria** (nombre del archivo debe contener "primaria"):
```csv
Nombre,Clase,Carácter del Cargo,Antigüedad,Inasistencias
Juan Pérez,5° A,Efectivo,8 años,1
```

### 4. Desplegar como Web App

1. En Google Apps Script, haz clic en "Implementar" → "Nueva implementación"
2. Selecciona "Aplicación web"
3. Configura:
   - **Ejecutar como**: Tu cuenta
   - **Quién tiene acceso**: Según tus necesidades (solo yo / cualquiera)
4. Haz clic en "Implementar"
5. Copia la URL de la aplicación web

## 📖 Uso del Sistema

### Paso 1: Configurar la API Key

1. Abre la aplicación web
2. En la sección "Configuración de Google AI (Gemini)":
   - Pega tu API Key en el campo correspondiente
   - Haz clic en "Guardar API Key"
   - Opcionalmente, haz clic en "Probar Conexión" para verificar que funciona

### Paso 2: Generar un Informe

1. **Selecciona el nivel**: Educación Inicial o Primaria
2. **Selecciona el docente**: Se cargarán automáticamente desde el CSV
3. **Opcional**: Ingresa un grupo específico si es diferente al del CSV
4. **Completa los campos de evaluación**:
   - **Fortalezas**: Describe los puntos fuertes del docente
   - **Aspectos a mejorar**: Indica áreas de oportunidad
   - **Información adicional**: Cualquier contexto relevante
5. Haz clic en "✨ Generar Informe con IA"

La IA generará 8 observaciones específicas relacionadas con cada ítem del informe.

### Paso 3: Revisar el Informe

1. Espera a que se complete la generación (puede tardar 10-30 segundos)
2. Haz clic en el enlace "Abrir informe en Google Docs"
3. Revisa y ajusta las observaciones generadas según sea necesario
4. El documento se guardará automáticamente en Google Drive en la estructura:
   ```
   Informes de Actuación Docente/
   ├── Inicial/
   │   └── Informe - [Nombre] - inicial.docx
   ├── Primaria/
   │   └── Informe - [Nombre] - primaria.docx
   └── Plantillas/
       ├── Plantilla - Educación Inicial
       └── Plantilla - Primaria
   ```

## 🔧 Personalización

### Modificar los ítems de evaluación

Edita las constantes `ITEMS_INICIAL` y `ITEMS_PRIMARIA` en `code.gs` (líneas 42-58) con los criterios específicos de tu institución.

### Cambiar el modelo de IA

Por defecto se usa `gemini-1.5-flash` (rápido y eficiente). Para mayor calidad, puedes cambiar a `gemini-1.5-pro` en la línea 245 de `code.gs`:

```javascript
const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${apiKey}`;
```

### Ajustar los parámetros de generación

Modifica los valores en `generationConfig` (líneas 299-303) en `code.gs`:
- `temperature`: Creatividad (0.0 - 1.0)
- `topK` y `topP`: Control de variabilidad
- `maxOutputTokens`: Longitud máxima de respuesta

## 🛠️ Solución de Problemas

### Error: "No se ha configurado la API Key"
- Asegúrate de haber guardado la API Key en la interfaz
- Verifica que la API Key sea válida

### Error de API 403 o 429
- **403**: API Key inválida o sin permisos
- **429**: Has excedido el límite de solicitudes (espera unos minutos)

### Los docentes no se cargan
- Verifica que el ID de la carpeta CSV sea correcto
- Asegúrate de que los archivos CSV tengan los nombres correctos (con "inicial" o "primaria")
- Verifica el formato del CSV (5 columnas)

### Las observaciones no son relevantes
- Proporciona más detalles en los campos de fortalezas y aspectos a mejorar
- Agrega información adicional específica sobre el contexto

## 📊 Estructura del Proyecto

```
Sistema-de-reportes-maestras/
├── code.gs           # Lógica del servidor (Google Apps Script)
├── index.html        # Interfaz de usuario
└── README.md         # Esta documentación
```

## 🔐 Seguridad

- La API Key se almacena de forma segura en las propiedades del script
- No se comparte con el cliente (navegador)
- Solo es accesible por el código del servidor

## 📝 Mejoras Futuras

- [ ] Soporte para múltiples plantillas personalizadas
- [ ] Exportación a PDF
- [ ] Historial de informes generados
- [ ] Comparación de informes entre periodos
- [ ] Integración con Google Sheets para análisis de datos

## 🤝 Contribuciones

Este proyecto fue desarrollado para facilitar la generación automatizada de informes de actuación docente. Las sugerencias y mejoras son bienvenidas.

## 📄 Licencia

Este proyecto es de uso interno educativo.
