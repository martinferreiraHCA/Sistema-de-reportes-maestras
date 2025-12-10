/*************************************************************
 * CONFIGURACIÓN GENERAL
 *************************************************************/

// Carpeta donde están tus CSV
const CSV_FOLDER_ID = '1Oed42nZH1pQZlQn5DDAZTrGqDljCNIjH';

// Nombres de carpetas automáticas
const ROOT_FOLDER_NAME = "Informes de Actuación Docente";
const INITIAL_FOLDER_NAME = "Inicial";
const PRIMARY_FOLDER_NAME = "Primaria";
const TEMPLATE_FOLDER_NAME = "Plantillas";

// Nombres de plantillas automáticas
const TEMPLATE_INITIAL_NAME = "Plantilla - Educación Inicial";
const TEMPLATE_PRIMARY_NAME = "Plantilla - Primaria";

/*************************************************************
 * ÍTEMS EXACTOS DESDE TUS DOCUMENTOS
 *************************************************************/

// PRIMARIA (8 ítems)
const ITEMS_PRIMARIA = [
  `Proyecto Curricular situado y coherente con el enfoque competencial en el MCN y de la EPC. Progresiones en las competencias y abordaje de contenidos programáticos centrados en los tópicos, Plan de Lectura y Escritura,JEL-K, Método Singapur, HCA FEELS. Planificación centrada en las metas y criterios de logro y secuenciación de los desempeños acorde al tópico. Integración de los Espacios Curriculares y definición de los contenidos a abordar de forma clara según el MCN. Desarrollo de clases abiertas, talleres, muestras.`,

  `Atención a la singularidad de los ritmos y formas de aprendizaje promoviendo ambientes que fomenten la autonomía y el espíritu colaborativo desde la perspectiva de los Principios Fundacionales de nuestro Colegio y la centralidad en el estudiante. Logros en los aprendizajes desde las progresiones propuestas por tramo y por Ciclo. Valoración continua centrada en la evolución de las comprensiones de los estudiantes realizando retroalimentaciones oportunas con herramientas específicas desde las pedagogías activas y la EPC.`,

  `Aprovechamiento de tiempos, espacios pedagógicos y recursos en la enseñanza con actitud crítica, colaborativa, creativa y receptiva ante las orientaciones y/o acuerdos realizados. Coordinaciones con el Equipo Psicopedagógico, responsabilidad en los procesos y mecanismos de derivación y comunicación de situaciones promoviendo la prevención y preservando las trayectorias.`,

  `Compromiso y responsabilidad con la institución, la comunidad educativa y los vínculos contribuyendo a un buen clima de trabajo. Responsabilidad con el bienestar de los estudiantes. Actitud en el aula y recreos.Acompañamiento familiar: instancias de intercambio con las familias.Cumplimiento del Estatuto del Funcionario Docente y las funciones inherentes al rol.`,

  `Participación activa en las instancias de formación profesional colectiva y de coordinaciones, realizando aportes actualizados y pertinentes: EBI, MCN,EPC, Planificaciones en el MCN que promueven la comprensión (tópicos generativos) y el desarrollo de competencias.`,

  `Registro y documentación con apertura a propuestas innovadoras (Pedagogías activas, Plataforma CREA, Rutinas de Pensamiento, TIC, ABP, tareas ancla, redes virtuales, valoración del pensamiento de los estudiantes). Pensamiento computacional:entornos de enseñanza y de aprendizaje: manejo de aulas virtuales, aula invertida y propuestas que favorecen la tecnología educativa en el marco de la ciudadanía y la alfabetización digital.`,

  `Gestión de lo administrativo (Corrección actualizada de propuestas en el marco de la retroalimentación formativa, Informe del Estudiante, CAF, fichas y documentación del estudiante, informes, evaluaciones, actualización de datos, GURÍ) Planificación administrativa y pedagógica de las salidas didácticas, recreativas y campamentos.`,

  `Asiduidad y Puntualidad.`
];

// INICIAL (8 ítems)
const ITEMS_INICIAL = [
  `Proyecto Curricular situado y coherente con el enfoque competencial  en el MCN y de la EPC. Progresiones en el Proyecto Escondites , JEL-K, Nuestro Planeta,Método Singapur, HCA FEELS. Planificación centrada en las metas y criterios de logro y secuenciación de los desempeños acorde al tópico. Integración de los Espacios Curriculares y definición de los contenidos a abordar de forma clara según el MCN.  Desarrollo de clases abiertas, talleres, muestras.`,

  `Atención a la singularidad de los ritmos y formas de aprendizaje promoviendo ambientes que fomenten la autonomía y el espíritu colaborativo desde la perspectiva de los Principios Fundacionales de nuestro Colegio y la centralidad en el estudiante. Logros en los aprendizajes desde las progresiones propuestas por tramo y por nivel. Valoración continua centrada en la evolución de las comprensiones de los estudiantes realizando retroalimentaciones oportunas con herramientas específicas desde las pedagogías activas y la EPC.`,

  `Aprovechamiento de tiempos, espacios pedagógicos y recursos en la enseñanza con actitud crítica, colaborativa, creativa y receptiva ante las orientaciones y/o acuerdos realizados. Coordinaciones con el Equipo Psicopedagógico, responsabilidad en los procesos y mecanismos de derivación y comunicación de situaciones promoviendo la prevención y preservando las trayectorias.`,

  `Compromiso y responsabilidad con la institución, la comunidad educativa y los vínculos contribuyendo a un buen clima de trabajo. Responsabilidad con el bienestar de los estudiantes. Actitud en el aula y recreos.Acompañamiento familiar: instancias de intercambio con las familias.Cumplimiento del Estatuto del Funcionario Docente y las funciones inherentes al rol.`,

  `Participación activa en las instancias  de formación profesional colectiva y de coordinaciones, realizando aportes actualizados y pertinentes: EBI, MCN,EPC Planificaciones en el MCN que promueven la comprensión (tópicos generativos) y el desarrollo de competencias.`,

  `Registro y documentación con apertura a propuestas innovadoras (Pedagogías activas, Plataforma CREA, Rutinas de Pensamiento, TIC, ABP, tareas ancla, redes virtuales, valoración del pensamiento de los estudiantes). Pensamiento computacional:entornos de enseñanza y de aprendizaje: manejo de aulas virtuales, aula invertida y propuestas que favorecen la tecnología educativa en el marco de la ciudadanía y la alfabetización digital.`,

  `Gestión de lo administrativo (Corrección actualizada de propuestas en el marco de la retroalimentación formativa, Informe del Estudiante, CAF, fichas y documentación del estudiante, informes, evaluaciones, actualización de datos, GURÍ) Planificación administrativa y pedagógica de las salidas didácticas, recreativas y campamentos.`,

  `Asiduidad y Puntualidad.`
];

/*************************************************************
 * INICIALIZACIÓN COMPLETA AUTOMÁTICA
 *************************************************************/
function doGet() {
  inicializarSistema_();
  return HtmlService.createTemplateFromFile("index")
        .evaluate()
        .setTitle("Informe de Actuación Docente");
}

function inicializarSistema_() {
  const root = DriveApp.getRootFolder();
  const folderRoot = getOrCreateFolder_(root, ROOT_FOLDER_NAME);
  const folderTemplates = getOrCreateFolder_(folderRoot, TEMPLATE_FOLDER_NAME);

  if (!docExists_(folderTemplates, TEMPLATE_INITIAL_NAME)) {
    crearPlantilla_(folderTemplates, TEMPLATE_INITIAL_NAME, ITEMS_INICIAL);
  }
  if (!docExists_(folderTemplates, TEMPLATE_PRIMARY_NAME)) {
    crearPlantilla_(folderTemplates, TEMPLATE_PRIMARY_NAME, ITEMS_PRIMARIA);
  }

  // también aseguramos carpetas de salida
  getOrCreateFolder_(folderRoot, INITIAL_FOLDER_NAME);
  getOrCreateFolder_(folderRoot, PRIMARY_FOLDER_NAME);
}

function getOrCreateFolder_(parent, name) {
  const search = parent.getFoldersByName(name);
  if (search.hasNext()) return search.next();
  return parent.createFolder(name);
}

function docExists_(folder, name) {
  return folder.getFilesByName(name).hasNext();
}

/*************************************************************
 * CREACIÓN AUTOMÁTICA DE PLANTILLA (con tabla)
 *************************************************************/
function crearPlantilla_(folder, nombre, itemsArray) {
  const doc = DocumentApp.create(nombre);
  const file = DriveApp.getFileById(doc.getId());
  folder.addFile(file);

  const body = doc.getBody();
  body.appendParagraph("INFORME DE ACTUACIÓN DOCENTE").setHeading(DocumentApp.ParagraphHeading.HEADING1);

  body.appendParagraph("Fecha: {{DIA}}/{{MES}}/{{ANIO}}");
  body.appendParagraph("Docente: {{DOCENTE}}");
  body.appendParagraph("Clase: {{CLASE}}");
  body.appendParagraph("Carácter del cargo: {{CARACTER_CARGO}}");
  body.appendParagraph("Antigüedad: {{ANTIGÜEDAD}}");
  body.appendParagraph("Inasistencias: {{INASISTENCIAS}}");

  body.appendParagraph("\n");

  const table = body.appendTable();
  const header = table.appendTableRow();
  header.appendTableCell("Ítems");
  header.appendTableCell("Observaciones");

  itemsArray.forEach((item, i) => {
    const row = table.appendTableRow();
    row.appendTableCell(item);
    row.appendTableCell(`{{OBS${i+1}}}`);
  });

  body.appendParagraph("\nFirma del Docente: ____________________");
  body.appendParagraph("Firma de Dirección: ____________________");

  doc.saveAndClose();
}

/*************************************************************
 * DETECTAR CSV AUTOMÁTICAMENTE
 *************************************************************/
function getCsvFileId_(nivel) {
  const folder = DriveApp.getFolderById(CSV_FOLDER_ID);
  const files = folder.getFiles();

  const target = nivel === "inicial" ? "inicial" : "primaria";

  while (files.hasNext()) {
    const f = files.next();
    if (f.getName().toLowerCase().includes(target) && f.getName().endsWith(".csv")) {
      return f.getId();
    }
  }
  throw new Error("No se encontró CSV para: " + nivel);
}

/*************************************************************
 * CARGAR DOCENTES
 *************************************************************/
function getDocentes(nivel) {
  const fileId = getCsvFileId_(nivel);
  const text = DriveApp.getFileById(fileId).getBlob().getDataAsString("UTF-8");
  const rows = Utilities.parseCsv(text);

  return rows.slice(1)
    .filter(r => r.join("").trim() !== "")
    .map(r => ({
      nombre: r[0].trim(),
      clase: r[1].trim(),
      caracterCargo: r[2].trim(),
      antiguedad: r[3].trim(),
      inasistencias: r[4].trim()
    }));
}

/*************************************************************
 * GENERAR INFORME COMPLETO
 *************************************************************/
function generarInforme(params) {

  inicializarSistema_();

  const nivel = params.nivel;
  const docentes = getDocentes(nivel);
  const docente = docentes.find(d => d.nombre === params.nombreDocente);
  if (!docente) throw new Error("Docente no encontrado en CSV");

  // Fecha
  const today = new Date();
  const FECHA = {
    DIA: Utilities.formatDate(today, Session.getScriptTimeZone(),"dd"),
    MES: Utilities.formatDate(today, Session.getScriptTimeZone(),"MM"),
    ANIO: Utilities.formatDate(today, Session.getScriptTimeZone(),"yyyy")
  };

  // Obtener observaciones IA
  const observaciones = generarObservacionesConIA_(
    nivel,
    docente,
    params.grupo,
    params.fortalezas,
    params.mejoras,
    params.infoExtra
  );

  const root = DriveApp.getRootFolder();
  const folderRoot = getOrCreateFolder_(root, ROOT_FOLDER_NAME);
  const outFolder = nivel === "inicial"
    ? getOrCreateFolder_(folderRoot, INITIAL_FOLDER_NAME)
    : getOrCreateFolder_(folderRoot, PRIMARY_FOLDER_NAME);

  // Plantilla correcta
  const templateFolder = getOrCreateFolder_(folderRoot, TEMPLATE_FOLDER_NAME);
  const plantName = nivel === "inicial" ? TEMPLATE_INITIAL_NAME : TEMPLATE_PRIMARY_NAME;
  const plantilla = templateFolder.getFilesByName(plantName).next();

  const newFile = plantilla.makeCopy(`Informe - ${docente.nombre} - ${nivel}`, outFolder);
  const doc = DocumentApp.openById(newFile.getId());
  const body = doc.getBody();

  // Reemplazos
  body.replaceText('{{DIA}}', FECHA.DIA);
  body.replaceText('{{MES}}', FECHA.MES);
  body.replaceText('{{ANIO}}', FECHA.ANIO);
  body.replaceText('{{DOCENTE}}', docente.nombre);
  body.replaceText('{{CLASE}}', docente.clase || params.grupo);
  body.replaceText('{{CARACTER_CARGO}}', docente.caracterCargo);
  body.replaceText('{{ANTIGÜEDAD}}', docente.antiguedad);
  body.replaceText('{{INASISTENCIAS}}', docente.inasistencias);

  observaciones.forEach((obs, i) =>
    body.replaceText(`{{OBS${i + 1}}}`, obs)
  );

  doc.saveAndClose();
  return { url: doc.getUrl() };
}

/*************************************************************
 * CONFIGURACIÓN DE API KEY
 *************************************************************/

// Guardar API Key de Gemini
function guardarApiKey(apiKey) {
  if (!apiKey || apiKey.trim() === "") {
    throw new Error("La API Key no puede estar vacía");
  }

  try {
    PropertiesService.getScriptProperties().setProperty("GEMINI_API_KEY", apiKey.trim());
    return { success: true, message: "API Key guardada correctamente" };
  } catch (e) {
    throw new Error("Error al guardar la API Key: " + e.message);
  }
}

// Verificar si la API Key está configurada
function verificarApiKey() {
  const apiKey = PropertiesService.getScriptProperties().getProperty("GEMINI_API_KEY");
  return {
    configurada: !!apiKey,
    keyParcial: apiKey ? "..." + apiKey.slice(-8) : null
  };
}

// Probar conexión con Gemini
function probarConexionGemini() {
  const apiKey = PropertiesService.getScriptProperties().getProperty("GEMINI_API_KEY");

  if (!apiKey) {
    throw new Error("No se ha configurado la API Key de Gemini");
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

  const payload = {
    contents: [{
      parts: [{ text: "Di 'Conexión exitosa' en una palabra." }]
    }]
  };

  try {
    const resp = UrlFetchApp.fetch(url, {
      method: "post",
      contentType: "application/json",
      payload: JSON.stringify(payload),
      muteHttpExceptions: true
    });

    const statusCode = resp.getResponseCode();

    if (statusCode === 200) {
      return { success: true, message: "Conexión exitosa con Gemini API" };
    } else {
      const error = resp.getContentText();
      throw new Error(`Error ${statusCode}: ${error.substring(0, 200)}`);
    }
  } catch (e) {
    throw new Error("Error al conectar con Gemini: " + e.message);
  }
}

/*************************************************************
 * IA – GEMINI GENERA OBSERVACIONES CONTEXTUALIZADAS
 *************************************************************/
function generarObservacionesConIA_(nivel, docente, grupo, fortalezas, mejoras, infoExtra) {
  const apiKey = PropertiesService.getScriptProperties().getProperty("GEMINI_API_KEY");

  if (!apiKey) {
    throw new Error("No se ha configurado la API Key de Gemini. Configure GEMINI_API_KEY en las propiedades del script.");
  }

  // Usar modelo más reciente y eficiente
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

  // Obtener los ítems según el nivel
  const items = nivel === "inicial" ? ITEMS_INICIAL : ITEMS_PRIMARIA;

  // Prompt mejorado con contexto de cada ítem
  const prompt = `Eres un asistente especializado en educación que genera informes de actuación docente profesionales.

CONTEXTO DEL DOCENTE:
- Nombre: ${docente.nombre}
- Nivel: ${nivel === "inicial" ? "Educación Inicial" : "Primaria"}
- Grupo/Clase: ${grupo || docente.clase}
- Carácter del cargo: ${docente.caracterCargo}
- Antigüedad: ${docente.antiguedad}

FORTALEZAS OBSERVADAS:
${fortalezas || "No se especificaron fortalezas particulares."}

ASPECTOS A MEJORAR:
${mejoras || "No se especificaron aspectos a mejorar."}

INFORMACIÓN ADICIONAL:
${infoExtra || "No se proporcionó información adicional."}

ÍTEMS DEL INFORME:
${items.map((item, i) => `\n${i+1}. ${item}`).join('\n')}

TAREA:
Genera exactamente 8 observaciones profesionales y específicas, una por cada ítem listado arriba.
Cada observación debe:
- Relacionarse directamente con el ítem correspondiente
- Integrar las fortalezas y aspectos a mejorar mencionados cuando sea relevante
- Ser concisa pero informativa (2-4 oraciones)
- Usar un tono profesional y constructivo
- Incluir ejemplos concretos cuando sea posible

FORMATO DE RESPUESTA (JSON estricto):
{
  "observaciones": [
    "Observación para el ítem 1...",
    "Observación para el ítem 2...",
    "Observación para el ítem 3...",
    "Observación para el ítem 4...",
    "Observación para el ítem 5...",
    "Observación para el ítem 6...",
    "Observación para el ítem 7...",
    "Observación para el ítem 8..."
  ]
}`;

  const payload = {
    contents: [{
      parts: [{ text: prompt }]
    }],
    generationConfig: {
      temperature: 0.7,
      topK: 40,
      topP: 0.95,
      maxOutputTokens: 2048,
    }
  };

  try {
    const resp = UrlFetchApp.fetch(url, {
      method: "post",
      contentType: "application/json",
      payload: JSON.stringify(payload),
      muteHttpExceptions: true
    });

    const statusCode = resp.getResponseCode();
    const raw = resp.getContentText();

    if (statusCode !== 200) {
      Logger.log("Error de API Gemini: " + raw);
      throw new Error(`Error de API (${statusCode}): ${raw.substring(0, 200)}`);
    }

    // Extraer texto de la respuesta
    const responseData = JSON.parse(raw);

    // Verificar si hay errores de seguridad o bloqueos
    if (responseData.promptFeedback?.blockReason) {
      throw new Error("La IA bloqueó la generación: " + responseData.promptFeedback.blockReason);
    }

    const textContent = responseData.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!textContent) {
      Logger.log("Respuesta completa de Gemini: " + raw);
      throw new Error("La IA no devolvió texto. Revise los logs para más detalles.");
    }

    // Limpiar el texto (a veces viene con ```json ... ```)
    let cleanText = textContent.trim();
    if (cleanText.startsWith("```json")) {
      cleanText = cleanText.replace(/```json\n?/, "").replace(/```\s*$/, "");
    } else if (cleanText.startsWith("```")) {
      cleanText = cleanText.replace(/```\n?/, "").replace(/```\s*$/, "");
    }

    // Parsear JSON
    const jsonData = JSON.parse(cleanText);

    if (!jsonData.observaciones || !Array.isArray(jsonData.observaciones)) {
      throw new Error("El formato de respuesta no incluye el array 'observaciones'");
    }

    if (jsonData.observaciones.length !== 8) {
      throw new Error(`Se esperaban 8 observaciones, pero se recibieron ${jsonData.observaciones.length}`);
    }

    // Validar que todas las observaciones tengan contenido
    const observacionesValidas = jsonData.observaciones.every(obs =>
      typeof obs === 'string' && obs.trim().length > 10
    );

    if (!observacionesValidas) {
      throw new Error("Algunas observaciones están vacías o son muy cortas");
    }

    return jsonData.observaciones;

  } catch (e) {
    Logger.log("Error en generarObservacionesConIA_: " + e.toString());
    throw new Error("Error al generar observaciones con IA: " + e.message);
  }
}
