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
 * CONFIGURACIÓN MULTI-PROVEEDOR IA
 *************************************************************/

// Guardar proveedor seleccionado
function guardarProveedor(proveedor) {
  PropertiesService.getScriptProperties().setProperty("AI_PROVIDER", proveedor);
  return { success: true };
}

// Obtener proveedor actual
function obtenerProveedor() {
  return PropertiesService.getScriptProperties().getProperty("AI_PROVIDER") || "gemini";
}

// Guardar API Key
function guardarApiKey(apiKey) {
  if (!apiKey || apiKey.trim() === "") {
    throw new Error("La API Key no puede estar vacía");
  }

  const proveedor = obtenerProveedor();
  PropertiesService.getScriptProperties().setProperty(`API_KEY_${proveedor.toUpperCase()}`, apiKey.trim());
  return { success: true, message: "API Key guardada correctamente" };
}

// Verificar API Key
function verificarApiKey() {
  const proveedor = obtenerProveedor();
  const apiKey = PropertiesService.getScriptProperties().getProperty(`API_KEY_${proveedor.toUpperCase()}`);
  return {
    configurada: !!apiKey,
    proveedor: proveedor,
    keyParcial: apiKey ? "..." + apiKey.slice(-8) : null
  };
}

// Guardar modelo
function guardarModelo(modelo) {
  PropertiesService.getScriptProperties().setProperty("AI_MODEL", modelo);
  return { success: true };
}

// Obtener modelo
function obtenerModelo() {
  const proveedor = obtenerProveedor();
  const modelo = PropertiesService.getScriptProperties().getProperty("AI_MODEL");

  // Modelos por defecto según proveedor
  if (!modelo) {
    const defaults = {
      "gemini": "gemini-1.5-pro-latest",
      "openai": "gpt-4o-mini",
      "claude": "claude-3-5-sonnet-20241022",
      "deepseek": "deepseek-chat",
      "groq": "llama-3.1-70b-versatile"
    };
    return defaults[proveedor] || defaults["gemini"];
  }

  return modelo;
}

/*************************************************************
 * GENERACIÓN CON IA - MULTI-PROVEEDOR
 *************************************************************/
function generarObservacionesConIA_(nivel, docente, grupo, fortalezas, mejoras, infoExtra) {
  const proveedor = obtenerProveedor();
  const items = nivel === "inicial" ? ITEMS_INICIAL : ITEMS_PRIMARIA;

  const prompt = crearPrompt_(nivel, docente, grupo, fortalezas, mejoras, infoExtra, items);

  let observaciones = [];

  try {
    switch(proveedor) {
      case "gemini":
        observaciones = generarConGemini_(prompt);
        break;
      case "openai":
        observaciones = generarConOpenAI_(prompt);
        break;
      case "claude":
        observaciones = generarConClaude_(prompt);
        break;
      case "deepseek":
        observaciones = generarConDeepSeek_(prompt);
        break;
      case "groq":
        observaciones = generarConGroq_(prompt);
        break;
      default:
        throw new Error("Proveedor no soportado: " + proveedor);
    }

    if (observaciones.length !== 8) {
      throw new Error(`Se esperaban 8 observaciones, se recibieron ${observaciones.length}`);
    }

    return observaciones;

  } catch (e) {
    Logger.log("Error generando observaciones: " + e.toString());
    throw new Error("Error al generar observaciones: " + e.message);
  }
}

/*************************************************************
 * CREAR PROMPT UNIVERSAL
 *************************************************************/
function crearPrompt_(nivel, docente, grupo, fortalezas, mejoras, infoExtra, items) {
  return `Genera 8 observaciones profesionales para un informe de actuación docente.

DATOS DEL DOCENTE:
- Nombre: ${docente.nombre}
- Nivel: ${nivel === "inicial" ? "Educación Inicial" : "Primaria"}
- Clase: ${grupo || docente.clase}
- Fortalezas: ${fortalezas || "No especificadas"}
- Aspectos a mejorar: ${mejoras || "No especificadas"}
- Información adicional: ${infoExtra || "Ninguna"}

CRITERIOS DE EVALUACIÓN:
${items.map((item, i) => `${i+1}. ${item}`).join('\n\n')}

INSTRUCCIONES:
Genera EXACTAMENTE 8 observaciones profesionales (2-3 oraciones cada una), una para cada criterio listado arriba.
Cada observación debe ser específica, constructiva y relacionada directamente con su criterio correspondiente.

FORMATO DE RESPUESTA (JSON):
{
  "observaciones": [
    "Observación 1 aquí",
    "Observación 2 aquí",
    "Observación 3 aquí",
    "Observación 4 aquí",
    "Observación 5 aquí",
    "Observación 6 aquí",
    "Observación 7 aquí",
    "Observación 8 aquí"
  ]
}

Responde SOLO con el JSON, sin texto adicional.`;
}

/*************************************************************
 * GOOGLE GEMINI
 *************************************************************/
function generarConGemini_(prompt) {
  const apiKey = PropertiesService.getScriptProperties().getProperty("API_KEY_GEMINI");
  if (!apiKey) throw new Error("API Key de Gemini no configurada");

  const modelo = obtenerModelo();
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelo}:generateContent?key=${apiKey}`;

  const payload = {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: {
      temperature: 0.7,
      maxOutputTokens: 2048,
    }
  };

  const resp = UrlFetchApp.fetch(url, {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  });

  const statusCode = resp.getResponseCode();
  if (statusCode !== 200) {
    throw new Error(`Error Gemini ${statusCode}: ${resp.getContentText().substring(0, 200)}`);
  }

  const data = JSON.parse(resp.getContentText());
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!text) throw new Error("Gemini no devolvió texto");

  return parsearJSON_(text);
}

/*************************************************************
 * OPENAI (GPT)
 *************************************************************/
function generarConOpenAI_(prompt) {
  const apiKey = PropertiesService.getScriptProperties().getProperty("API_KEY_OPENAI");
  if (!apiKey) throw new Error("API Key de OpenAI no configurada");

  const modelo = obtenerModelo();
  const url = "https://api.openai.com/v1/chat/completions";

  const payload = {
    model: modelo,
    messages: [
      { role: "system", content: "Eres un experto en educación que genera informes profesionales." },
      { role: "user", content: prompt }
    ],
    temperature: 0.7,
    max_tokens: 2048
  };

  const resp = UrlFetchApp.fetch(url, {
    method: "post",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  });

  const statusCode = resp.getResponseCode();
  if (statusCode !== 200) {
    throw new Error(`Error OpenAI ${statusCode}: ${resp.getContentText().substring(0, 200)}`);
  }

  const data = JSON.parse(resp.getContentText());
  const text = data.choices?.[0]?.message?.content;

  if (!text) throw new Error("OpenAI no devolvió texto");

  return parsearJSON_(text);
}

/*************************************************************
 * ANTHROPIC CLAUDE
 *************************************************************/
function generarConClaude_(prompt) {
  const apiKey = PropertiesService.getScriptProperties().getProperty("API_KEY_CLAUDE");
  if (!apiKey) throw new Error("API Key de Claude no configurada");

  const modelo = obtenerModelo();
  const url = "https://api.anthropic.com/v1/messages";

  const payload = {
    model: modelo,
    max_tokens: 2048,
    messages: [
      { role: "user", content: prompt }
    ]
  };

  const resp = UrlFetchApp.fetch(url, {
    method: "post",
    headers: {
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json"
    },
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  });

  const statusCode = resp.getResponseCode();
  if (statusCode !== 200) {
    throw new Error(`Error Claude ${statusCode}: ${resp.getContentText().substring(0, 200)}`);
  }

  const data = JSON.parse(resp.getContentText());
  const text = data.content?.[0]?.text;

  if (!text) throw new Error("Claude no devolvió texto");

  return parsearJSON_(text);
}

/*************************************************************
 * DEEPSEEK
 *************************************************************/
function generarConDeepSeek_(prompt) {
  const apiKey = PropertiesService.getScriptProperties().getProperty("API_KEY_DEEPSEEK");
  if (!apiKey) throw new Error("API Key de DeepSeek no configurada");

  const modelo = obtenerModelo();
  const url = "https://api.deepseek.com/v1/chat/completions";

  const payload = {
    model: modelo,
    messages: [
      { role: "system", content: "Eres un experto en educación que genera informes profesionales." },
      { role: "user", content: prompt }
    ],
    temperature: 0.7,
    max_tokens: 2048
  };

  const resp = UrlFetchApp.fetch(url, {
    method: "post",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  });

  const statusCode = resp.getResponseCode();
  if (statusCode !== 200) {
    throw new Error(`Error DeepSeek ${statusCode}: ${resp.getContentText().substring(0, 200)}`);
  }

  const data = JSON.parse(resp.getContentText());
  const text = data.choices?.[0]?.message?.content;

  if (!text) throw new Error("DeepSeek no devolvió texto");

  return parsearJSON_(text);
}

/*************************************************************
 * GROQ (Ultra-rápido y gratuito)
 *************************************************************/
function generarConGroq_(prompt) {
  const apiKey = PropertiesService.getScriptProperties().getProperty("API_KEY_GROQ");
  if (!apiKey) throw new Error("API Key de Groq no configurada");

  const modelo = obtenerModelo();
  const url = "https://api.groq.com/openai/v1/chat/completions";

  // Prompt específico para Groq - más directo
  const promptMejorado = prompt + "\n\nREQUISITO CRÍTICO: Responde SOLO con el objeto JSON exacto solicitado. NO agregues explicaciones, comentarios, ni texto antes o después del JSON. El JSON debe comenzar con { y terminar con }.";

  const payload = {
    model: modelo,
    messages: [
      { role: "system", content: "Eres un asistente que responde exclusivamente en formato JSON válido. No agregas texto, explicaciones ni comentarios fuera del JSON." },
      { role: "user", content: promptMejorado }
    ],
    temperature: 0.7,
    max_tokens: 4096
  };

  const resp = UrlFetchApp.fetch(url, {
    method: "post",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  });

  const statusCode = resp.getResponseCode();
  if (statusCode !== 200) {
    throw new Error(`Error Groq ${statusCode}: ${resp.getContentText().substring(0, 200)}`);
  }

  const data = JSON.parse(resp.getContentText());
  const text = data.choices?.[0]?.message?.content;

  if (!text) throw new Error("Groq no devolvió texto");

  // Logging detallado para debug
  Logger.log("=== RESPUESTA DE GROQ ===");
  Logger.log("Modelo: " + modelo);
  Logger.log("Longitud respuesta: " + text.length + " caracteres");
  Logger.log("Primeros 1000 caracteres: " + text.substring(0, 1000));
  Logger.log("Últimos 500 caracteres: " + text.substring(Math.max(0, text.length - 500)));

  try {
    return parsearJSON_(text);
  } catch (e) {
    Logger.log("ERROR AL PARSEAR - Texto completo:");
    Logger.log(text);
    throw e;
  }
}

/*************************************************************
 * PARSEAR JSON ROBUSTO
 *************************************************************/
function parsearJSON_(text) {
  let cleanText = text.trim();

  // Remover bloques de código markdown
  if (cleanText.includes("```")) {
    cleanText = cleanText.replace(/```json\n?/gi, "").replace(/```\n?/g, "");
  }

  // Intentar extraer JSON si hay texto adicional
  // Buscar el primer { y el último }
  const firstBrace = cleanText.indexOf('{');
  const lastBrace = cleanText.lastIndexOf('}');

  if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
    cleanText = cleanText.substring(firstBrace, lastBrace + 1);
  }

  try {
    const data = JSON.parse(cleanText);

    // Buscar el array de observaciones en diferentes ubicaciones posibles
    let observaciones = null;

    if (data.observaciones && Array.isArray(data.observaciones)) {
      observaciones = data.observaciones;
    } else if (data.observations && Array.isArray(data.observations)) {
      observaciones = data.observations;
    } else if (data.items && Array.isArray(data.items)) {
      observaciones = data.items;
    } else if (data.responses && Array.isArray(data.responses)) {
      observaciones = data.responses;
    } else if (Array.isArray(data)) {
      observaciones = data;
    } else {
      // Buscar cualquier array en el objeto
      for (let key in data) {
        if (Array.isArray(data[key]) && data[key].length >= 8) {
          observaciones = data[key];
          break;
        }
      }
    }

    if (!observaciones || !Array.isArray(observaciones)) {
      Logger.log("JSON parseado: " + JSON.stringify(data).substring(0, 300));
      throw new Error("Formato inválido: no se encontró array de observaciones");
    }

    const obs = observaciones.filter(o => typeof o === 'string' && o.trim().length > 10);

    if (obs.length < 8) {
      Logger.log("Observaciones encontradas: " + obs.length);
      Logger.log("Contenido: " + JSON.stringify(observaciones).substring(0, 300));
      throw new Error(`Se esperaban al menos 8 observaciones, se encontraron ${obs.length}. Intenta de nuevo.`);
    }

    // Si hay más de 8, tomar solo las primeras 8
    return obs.slice(0, 8);

  } catch (e) {
    Logger.log("Error parseando JSON: " + e.toString());
    Logger.log("Texto recibido: " + text.substring(0, 500));
    throw new Error("La IA no generó el formato correcto. Error: " + e.message);
  }
}

/*************************************************************
 * PROBAR CONEXIÓN
 *************************************************************/
function probarConexion() {
  const proveedor = obtenerProveedor();
  const modelo = obtenerModelo();

  try {
    let apiKey, url, payload, headers, resp;

    switch(proveedor) {
      case "gemini":
        apiKey = PropertiesService.getScriptProperties().getProperty("API_KEY_GEMINI");
        if (!apiKey) throw new Error("API Key no configurada");
        url = `https://generativelanguage.googleapis.com/v1beta/models/${modelo}:generateContent?key=${apiKey}`;
        payload = { contents: [{ parts: [{ text: "Di hola" }] }] };
        resp = UrlFetchApp.fetch(url, {
          method: "post",
          contentType: "application/json",
          payload: JSON.stringify(payload),
          muteHttpExceptions: true
        });
        break;

      case "openai":
        apiKey = PropertiesService.getScriptProperties().getProperty("API_KEY_OPENAI");
        if (!apiKey) throw new Error("API Key no configurada");
        url = "https://api.openai.com/v1/chat/completions";
        payload = { model: modelo, messages: [{ role: "user", content: "Di hola" }], max_tokens: 10 };
        resp = UrlFetchApp.fetch(url, {
          method: "post",
          headers: { "Authorization": `Bearer ${apiKey}`, "Content-Type": "application/json" },
          payload: JSON.stringify(payload),
          muteHttpExceptions: true
        });
        break;

      case "claude":
        apiKey = PropertiesService.getScriptProperties().getProperty("API_KEY_CLAUDE");
        if (!apiKey) throw new Error("API Key no configurada");
        url = "https://api.anthropic.com/v1/messages";
        payload = { model: modelo, max_tokens: 10, messages: [{ role: "user", content: "Di hola" }] };
        resp = UrlFetchApp.fetch(url, {
          method: "post",
          headers: {
            "x-api-key": apiKey,
            "anthropic-version": "2023-06-01",
            "content-type": "application/json"
          },
          payload: JSON.stringify(payload),
          muteHttpExceptions: true
        });
        break;

      case "deepseek":
        apiKey = PropertiesService.getScriptProperties().getProperty("API_KEY_DEEPSEEK");
        if (!apiKey) throw new Error("API Key no configurada");
        url = "https://api.deepseek.com/v1/chat/completions";
        payload = { model: modelo, messages: [{ role: "user", content: "Di hola" }], max_tokens: 10 };
        resp = UrlFetchApp.fetch(url, {
          method: "post",
          headers: { "Authorization": `Bearer ${apiKey}`, "Content-Type": "application/json" },
          payload: JSON.stringify(payload),
          muteHttpExceptions: true
        });
        break;

      case "groq":
        apiKey = PropertiesService.getScriptProperties().getProperty("API_KEY_GROQ");
        if (!apiKey) throw new Error("API Key no configurada");
        url = "https://api.groq.com/openai/v1/chat/completions";
        payload = { model: modelo, messages: [{ role: "user", content: "Di hola" }], max_tokens: 10 };
        resp = UrlFetchApp.fetch(url, {
          method: "post",
          headers: { "Authorization": `Bearer ${apiKey}`, "Content-Type": "application/json" },
          payload: JSON.stringify(payload),
          muteHttpExceptions: true
        });
        break;

      default:
        throw new Error("Proveedor no soportado");
    }

    const statusCode = resp.getResponseCode();
    if (statusCode !== 200) {
      throw new Error(`Error ${statusCode}: ${resp.getContentText().substring(0, 200)}`);
    }

    return {
      success: true,
      message: `✅ Conexión exitosa con ${proveedor} (${modelo})`
    };

  } catch (e) {
    throw new Error(`Error conectando con ${proveedor}: ${e.message}`);
  }
}

/*************************************************************
 * LISTAR MODELOS DISPONIBLES POR PROVEEDOR
 *************************************************************/

// Listar modelos disponibles de Gemini
function listarModelosGemini() {
  const apiKey = PropertiesService.getScriptProperties().getProperty("API_KEY_GEMINI");
  if (!apiKey) throw new Error("API Key de Gemini no configurada");

  const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;

  try {
    const resp = UrlFetchApp.fetch(url, {
      method: "get",
      muteHttpExceptions: true
    });

    if (resp.getResponseCode() !== 200) {
      throw new Error(`Error ${resp.getResponseCode()}: ${resp.getContentText().substring(0, 200)}`);
    }

    const data = JSON.parse(resp.getContentText());
    const modelos = data.models
      .filter(m => m.supportedGenerationMethods && m.supportedGenerationMethods.includes("generateContent"))
      .map(m => ({
        id: m.name.replace("models/", ""),
        nombre: m.displayName || m.name.replace("models/", "")
      }))
      .sort((a, b) => a.nombre.localeCompare(b.nombre));

    return { success: true, modelos: modelos };

  } catch (e) {
    throw new Error("Error listando modelos de Gemini: " + e.message);
  }
}

// Listar modelos disponibles de OpenAI
function listarModelosOpenAI() {
  const apiKey = PropertiesService.getScriptProperties().getProperty("API_KEY_OPENAI");
  if (!apiKey) throw new Error("API Key de OpenAI no configurada");

  const url = "https://api.openai.com/v1/models";

  try {
    const resp = UrlFetchApp.fetch(url, {
      method: "get",
      headers: {
        "Authorization": `Bearer ${apiKey}`
      },
      muteHttpExceptions: true
    });

    if (resp.getResponseCode() !== 200) {
      throw new Error(`Error ${resp.getResponseCode()}: ${resp.getContentText().substring(0, 200)}`);
    }

    const data = JSON.parse(resp.getContentText());

    // Filtrar solo modelos GPT útiles para chat
    const modelos = data.data
      .filter(m => {
        const id = m.id.toLowerCase();
        return (id.includes('gpt-4') || id.includes('gpt-3.5')) &&
               !id.includes('instruct') &&
               !id.includes('vision') &&
               !id.includes('realtime');
      })
      .map(m => ({
        id: m.id,
        nombre: m.id
      }))
      .sort((a, b) => {
        // Ordenar: GPT-4 primero, luego GPT-3.5
        if (a.nombre.includes('gpt-4') && !b.nombre.includes('gpt-4')) return -1;
        if (!a.nombre.includes('gpt-4') && b.nombre.includes('gpt-4')) return 1;
        return a.nombre.localeCompare(b.nombre);
      });

    return { success: true, modelos: modelos };

  } catch (e) {
    throw new Error("Error listando modelos de OpenAI: " + e.message);
  }
}

// Listar modelos disponibles de Claude
function listarModelosClaude() {
  const apiKey = PropertiesService.getScriptProperties().getProperty("API_KEY_CLAUDE");
  if (!apiKey) throw new Error("API Key de Claude no configurada");

  // Anthropic no tiene endpoint público de modelos, retornar lista conocida
  const modelosConocidos = [
    { id: "claude-3-5-sonnet-20241022", nombre: "Claude 3.5 Sonnet (20241022)" },
    { id: "claude-3-5-haiku-20241022", nombre: "Claude 3.5 Haiku (20241022)" },
    { id: "claude-3-opus-20240229", nombre: "Claude 3 Opus (20240229)" },
    { id: "claude-3-sonnet-20240229", nombre: "Claude 3 Sonnet (20240229)" },
    { id: "claude-3-haiku-20240307", nombre: "Claude 3 Haiku (20240307)" }
  ];

  return {
    success: true,
    modelos: modelosConocidos,
    nota: "Lista de modelos conocidos de Claude (no hay API pública de listado)"
  };
}

// Listar modelos disponibles de DeepSeek
function listarModelosDeepSeek() {
  const apiKey = PropertiesService.getScriptProperties().getProperty("API_KEY_DEEPSEEK");
  if (!apiKey) throw new Error("API Key de DeepSeek no configurada");

  const url = "https://api.deepseek.com/v1/models";

  try {
    const resp = UrlFetchApp.fetch(url, {
      method: "get",
      headers: {
        "Authorization": `Bearer ${apiKey}`
      },
      muteHttpExceptions: true
    });

    if (resp.getResponseCode() !== 200) {
      throw new Error(`Error ${resp.getResponseCode()}: ${resp.getContentText().substring(0, 200)}`);
    }

    const data = JSON.parse(resp.getContentText());
    const modelos = data.data
      .filter(m => {
        const id = m.id.toLowerCase();
        return id.includes('deepseek');
      })
      .map(m => ({ id: m.id, nombre: m.id }))
      .sort((a, b) => a.nombre.localeCompare(b.nombre));

    return { success: true, modelos: modelos };

  } catch (e) {
    throw new Error("Error listando modelos de DeepSeek: " + e.message);
  }
}

// Listar modelos disponibles de Groq
function listarModelosGroq() {
  const apiKey = PropertiesService.getScriptProperties().getProperty("API_KEY_GROQ");
  if (!apiKey) throw new Error("API Key de Groq no configurada");

  const url = "https://api.groq.com/openai/v1/models";

  try {
    const resp = UrlFetchApp.fetch(url, {
      method: "get",
      headers: {
        "Authorization": `Bearer ${apiKey}`
      },
      muteHttpExceptions: true
    });

    if (resp.getResponseCode() !== 200) {
      throw new Error(`Error ${resp.getResponseCode()}: ${resp.getContentText().substring(0, 200)}`);
    }

    const data = JSON.parse(resp.getContentText());
    const modelos = data.data
      .filter(m => {
        const id = m.id.toLowerCase();
        // Filtrar solo modelos activos de chat
        return !id.includes('whisper') && !id.includes('distil');
      })
      .map(m => ({ id: m.id, nombre: m.id }))
      .sort((a, b) => {
        // Priorizar llama-3.1 y llama-3.3, luego mixtral, luego otros
        if (a.nombre.includes('llama-3.3') && !b.nombre.includes('llama-3.3')) return -1;
        if (!a.nombre.includes('llama-3.3') && b.nombre.includes('llama-3.3')) return 1;
        if (a.nombre.includes('llama-3.1') && !b.nombre.includes('llama-3.1')) return -1;
        if (!a.nombre.includes('llama-3.1') && b.nombre.includes('llama-3.1')) return 1;
        if (a.nombre.includes('mixtral') && !b.nombre.includes('mixtral')) return -1;
        if (!a.nombre.includes('mixtral') && b.nombre.includes('mixtral')) return 1;
        return a.nombre.localeCompare(b.nombre);
      });

    return { success: true, modelos: modelos };

  } catch (e) {
    throw new Error("Error listando modelos de Groq: " + e.message);
  }
}

// Función unificada para listar modelos según proveedor
function listarModelosDisponibles() {
  const proveedor = obtenerProveedor();

  try {
    let resultado;
    switch(proveedor) {
      case "gemini":
        resultado = listarModelosGemini();
        break;
      case "openai":
        resultado = listarModelosOpenAI();
        break;
      case "claude":
        resultado = listarModelosClaude();
        break;
      case "deepseek":
        resultado = listarModelosDeepSeek();
        break;
      case "groq":
        resultado = listarModelosGroq();
        break;
      default:
        throw new Error("Proveedor no soportado");
    }

    return resultado;

  } catch (e) {
    Logger.log("Error listando modelos: " + e.toString());
    throw new Error(e.message);
  }
}
