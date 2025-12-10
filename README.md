# Sistema de Reportes de Maestras con Google AI

Sistema automatizado para generar informes de actuación docente utilizando Google Apps Script y la IA de Google (Gemini).

## Características

- **Generación automática de informes** con plantillas personalizadas para Educación Inicial y Primaria
- **Integración con Google AI (Gemini)** con selector de modelos (Flash, Pro, Latest)
- **Carga automática de datos** desde archivos CSV en Google Drive
- **Interfaz minimalista y moderna** con configuración colapsable
- **Exportación a Google Docs** con formato profesional
- **Carpeta personalizada de Google Drive** para organizar tus informes
- **Historial de informes** generados en la sesión con enlaces directos
- **Generación continua** sin recargar la página

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

## Uso del Sistema

### Paso 1: Configurar el Sistema (Primera vez)

1. Abre la aplicación web
2. Haz clic en **"Configuración del Sistema"** para expandir la sección
3. **Configurar API Key de Gemini**:
   - Pega tu API Key en el campo correspondiente
   - Selecciona el modelo de IA deseado (recomendado: Gemini 2.5 Flash)
   - Haz clic en "Guardar Configuración"
   - Opcionalmente, haz clic en "Probar Conexión" para verificar
4. **Configurar Carpeta de Drive** (opcional):
   - Copia la URL de tu carpeta de Google Drive (ej: `https://drive.google.com/drive/folders/1abc...`)
   - Pégala en el campo "Carpeta de Google Drive"
   - Haz clic en "Guardar Carpeta"
   - Si no configuras esto, se usará la carpeta predeterminada

### Paso 2: Generar Informes (Uso continuo)

1. **Selecciona el nivel**: Educación Inicial o Primaria
2. **Selecciona el docente**: Se cargarán automáticamente desde el CSV
3. **Opcional**: Ingresa un grupo específico si es diferente al del CSV
4. **Completa los campos de evaluación**:
   - **Fortalezas**: Describe los puntos fuertes del docente
   - **Aspectos a mejorar**: Indica áreas de oportunidad
   - **Información adicional**: Cualquier contexto relevante
5. Haz clic en **"Generar Informe con IA"**
6. La IA generará 8 observaciones específicas (puede tardar 10-30 segundos)
7. El informe aparecerá en el **historial de informes** en la parte inferior
8. Los campos se limpiarán automáticamente para generar el siguiente informe

### Paso 3: Acceder a los Informes

- **Durante la sesión**: Usa el historial en la parte inferior para abrir cualquier informe generado
- **En Google Drive**: Los informes se guardan automáticamente en:
  ```
  [Tu Carpeta Configurada o "Informes de Actuación Docente"]/
  ├── Inicial/
  │   └── Informe - [Nombre] - inicial
  ├── Primaria/
  │   └── Informe - [Nombre] - primaria
  └── Plantillas/
      ├── Plantilla - Educación Inicial
      └── Plantilla - Primaria
  ```

## Personalización

### Modificar los ítems de evaluación

Edita las constantes `ITEMS_INICIAL` y `ITEMS_PRIMARIA` en `code.gs` (líneas 42-58) con los criterios específicos de tu institución.

### Cambiar el modelo de IA

Usa el selector de modelos en la interfaz web (sección "Configuración del Sistema"):
- **Gemini 2.5 Flash** (Recomendado): Rápido y eficiente, ideal para uso diario
- **Gemini 2.5 Pro**: Mayor calidad de razonamiento, más lento
- **Gemini Flash Latest**: Última versión estable rápida
- **Gemini Pro Latest**: Última versión estable de máxima calidad
- **Gemini 2.0 Flash**: Versión anterior rápida

### Ajustar los parámetros de generación

Modifica los valores en `generationConfig` en `code.gs` (líneas 436-441):
- `temperature`: Creatividad (0.0 - 1.0) - Valor actual: 0.7
- `topK` y `topP`: Control de variabilidad
- `maxOutputTokens`: Longitud máxima de respuesta - Valor actual: 2048

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

## Mejoras Futuras

- [x] Selector de modelos de IA
- [x] Carpeta personalizada de Google Drive
- [x] Historial de informes en la sesión
- [x] Generación continua sin recargar página
- [ ] Soporte para múltiples plantillas personalizadas
- [ ] Exportación a PDF
- [ ] Historial persistente de informes (más allá de la sesión)
- [ ] Comparación de informes entre periodos
- [ ] Integración con Google Sheets para análisis de datos
- [ ] Estadísticas de uso y generación

## 🤝 Contribuciones

Este proyecto fue desarrollado para facilitar la generación automatizada de informes de actuación docente. Las sugerencias y mejoras son bienvenidas.

## 📄 Licencia

Este proyecto es de uso interno educativo.
