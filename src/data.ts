export interface Proposal {
    id: number;
    partido: string;
    eje: string;
    propuesta: string;
    enfoque: string;
    prioridad: number;
    palabra: string;
}

export const SOURCES: Record<string, { link: string; candidate?: string; logo?: string }> = {
    "Partido Morado": {
        link: "https://mpesije.jne.gob.pe/docs/6eb5d4b8-bd18-4cf0-ae0e-e250ca085f5f.pdf",
        candidate: "Por Definir",
        logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_Partido_Morado.png"
    },
    "Partido Demócrata Verde": {
        link: "https://mpesije.jne.gob.pe/docs/3f2a939b-edf2-4505-b709-df775a5e0038.pdf",
        candidate: "Por Definir",
        logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Demócrata_Verde_(logo).svg"
    },
    "Alianza Fuerza Y Libertad": {
        link: "https://mpesije.jne.gob.pe/docs/d4ab9fba-d366-4083-bbf5-63aa465114d9.pdf",
        candidate: "Por Definir",
        logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_de_Fuerza_Moderna.jpg"
    },
    "Integridad Democrática": {
        link: "https://mpesije.jne.gob.pe/docs/ee89ac99-516b-4665-9297-413a0cf104de.pdf",
        candidate: "Por Definir",
        logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_de_Integridad_democratica.jpg"
    },
    "Partido Patriótico Del Perú": {
        link: "https://mpesije.jne.gob.pe/docs/6de519cb-bb4d-4319-a11b-be65d4438f4f.pdf",
        candidate: "Por Definir",
        logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Partido_Patriótico_del_Perú_(logo).svg"
    },
    "Alianza Unidad Nacional": {
        link: "https://mpesije.jne.gob.pe/docs/ae0c9ba2-6278-4ca7-b077-16ed2cc39e76.pdf",
        candidate: "Por Definir",
        logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Unidad_Nacional_2025.jpg"
    },
    "Avanza País": {
        link: "https://mpesije.jne.gob.pe/docs/5857261c-789e-4599-ac05-4531654b10b4.pdf",
        candidate: "Por Definir",
        logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Avanza_País_Logo_2017-20.jpg"
    },
    "Perú Libre": {
        link: "https://mpesije.jne.gob.pe/docs/b2d25860-484e-4226-bd13-a57fb83c59cb.pdf",
        candidate: "Por Definir",
        logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Perú_Libre_logo.svg"
    },
    "Ahora Nación": {
        link: "https://mpesije.jne.gob.pe/docs/7d70c5e1-2246-42e8-90c2-372aa1cf7f52.pdf",
        candidate: "Alfonso López Chau",
        logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Ahora_Nación.jpg"
    },
    "Prin": {
        link: "https://mpesije.jne.gob.pe/docs/3b89548c-81fa-479d-9ff9-2b7011fec7d2.pdf",
        candidate: "Por Definir",
        logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Partido_Político_PRIN_-_Símbolo.png"
    },
    "Unido Perú": {
        link: "https://mpesije.jne.gob.pe/docs/2e5235de-e828-45f0-92cc-017a830abc33.pdf",
        candidate: "Por Definir",
        logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_de_partido_democratico_unido_peru.jpg"
    },
    "Cooperación Popular": {
        link: "https://mpesije.jne.gob.pe/docs/582e0d55-19ee-4a7f-85ef-c254be5bada6.pdf",
        candidate: "Por Definir",
        logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_Cooperacion_Popular_Peru.png"
    },
    "Frente De La Esperanza": {
        link: "https://mpesije.jne.gob.pe/docs/d656b83f-3177-4053-a381-0f36ec99490a.pdf",
        candidate: "Fernando Olivera",
        logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Frente_de_la_Esperanza_2021_(logo).svg"
    },
    "Perú Primero": {
        link: "https://mpesije.jne.gob.pe/docs/f9624874-7cf6-4737-8db3-b73707c98e70.pdf",
        candidate: "Martin Vizcarra",
        logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_de_Perú_Primero.png"
    },
    "Fuerza Popular": {
        link: "https://mpesije.jne.gob.pe/docs/da4b943d-4344-4743-9362-a11ccf3054cb.pdf",
        candidate: "Keiko Fujimori",
        logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_of_the_Popular_Force_(2024).svg"
    },
    "Juntos Por El Perú": {
        link: "https://mpesije.jne.gob.pe/docs/3dd0e649-061c-4f31-8c3f-7a0836b58bde.pdf",
        candidate: "Roberto Sánchez",
        logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_juntos_por_el_Peru.svg"
    },
    "Partido Cívico Obras": {
        link: "https://mpesije.jne.gob.pe/docs/5643db28-6dbd-4d35-b79e-30d20d3bed85.pdf",
        candidate: "Por Definir",
        logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Partido_Civico_OBRAS.png"
    },
    "Libertad Popular": {
        link: "https://mpesije.jne.gob.pe/docs/30bab146-a532-4d1b-87a7-e0f8078dc70b.pdf",
        candidate: "Por Definir",
        logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_de_Libertad_Popular.jpg"
    },
    "Partido Democrático Somos Perú": {
        link: "https://mpesije.jne.gob.pe/docs/1334ac30-c28e-42a5-8fc5-79a4638ccd2a.pdf",
        candidate: "Por Definir",
        logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_Partido_Democrático_Somos_Perú.svg"
    },
    "Partido Aprista Peruano": {
        link: "https://mpesije.jne.gob.pe/docs/4d581919-b090-43d4-89e4-e284fde587b7.pdf",
        candidate: "Por Definir",
        logo: "https://commons.wikimedia.org/wiki/Special:FilePath/APRA_Peru_logo.svg"
    },
    "Partido Del Buen Gobierno": {
        link: "https://mpesije.jne.gob.pe/docs/19bde703-f7f4-4715-92f3-b82e19bbe651.pdf",
        candidate: "Jorge Nieto",
        logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Jorge_Nieto_Montesinos.jpg"
    },
    "Progresemos": {
        link: "https://mpesije.jne.gob.pe/docs/b2f303a2-1e0d-4933-9d5f-04682a3710b0.pdf",
        candidate: "Hernando de Soto",
        logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_de_Progresemos.jpg"
    },
    "Partido De Los Trabajadores Y Emprendedores": {
        link: "https://mpesije.jne.gob.pe/docs/6988c030-5c2b-40d8-b656-dc48899d4d8c.pdf",
        candidate: "Por Definir",
        logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_PTE_PERU.jpg"
    },
    "Alianza Electoral: Venceremos": {
        link: "https://mpesije.jne.gob.pe/docs/9984addc-e998-43b1-920f-1178d4d973aa.pdf",
        candidate: "Por Definir",
        logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Venceremos_-_Peru.jpg"
    },
    "Podemos Peru": {
        link: "https://mpesije.jne.gob.pe/docs/67b637b0-e2f7-47cc-8b23-fa16be709cc2.pdf",
        candidate: "Daniel Urresti",
        logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_Podemos_Perú.png"
    },
    "Salvemos Peru": {
        link: "https://mpesije.jne.gob.pe/docs/40877746-e670-42d3-840b-cdf683f46355.pdf",
        candidate: "Por Definir",
        logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Salvemos_al_Peru.png"
    },
    "Alianza Para El Progreso": {
        link: "https://mpesije.jne.gob.pe/docs/72576403-804a-4f28-85d3-bf4c7e648667.pdf",
        candidate: "César Acuña",
        logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Alianza_para_el_Progreso_Peru.svg"
    },
    "País Para Todos": {
        link: "https://mpesije.jne.gob.pe/docs/76291ee3-eba2-4c88-adef-2530f2d70bb8.pdf",
        candidate: "Carlos Añaños",
        logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_de_Pais_para_todos.jpg"
    },
    "Perú Acción": {
        link: "https://mpesije.jne.gob.pe/docs/f4e5c2c2-b0df-4033-adda-6617af774154.pdf",
        candidate: "Por Definir",
        logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Perú_Nación_2022.jpg"
    },
    "Perú Moderno": {
        link: "https://mpesije.jne.gob.pe/docs/12de1a7b-008b-43c5-9159-c62c9b45eab1.pdf",
        candidate: "Carlos Canales",
        logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_de_Perú_moderno.jpg"
    },
    "Sícreo": {
        link: "https://mpesije.jne.gob.pe/docs/e9d731a4-a79f-42e0-9ff7-29f6abe2bd3f.pdf",
        candidate: "Por Definir",
        logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_Partido_Político_SíCreo.png"
    },
    "Un Camino Diferente": {
        link: "https://mpesije.jne.gob.pe/docs/de662f06-21d5-4523-a3ec-4fcbacabe16c.pdf",
        candidate: "Por Definir",
        logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_de_un_camino_diferente.jpg"
    },
    "Renovación Popular": {
        link: "https://mpesije.jne.gob.pe/docs/2096b44a-f3b6-4c81-b03d-94fbfc9ac762.pdf",
        candidate: "Rafael López Aliaga",
        logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_de_Renovación_Popular_(Perú).png"
    },
    "Primero La Gente": {
        link: "https://mpesije.jne.gob.pe/docs/ae0d6a5c-4344-4743-9362-a11ccf3054cb.pdf",
        candidate: "Por Definir",
        logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Primero_la_gente.svg"
    }
};

export const DATA: Proposal[] = [
    { id: 1, partido: "Partido Morado", eje: "Economía", propuesta: "Crear el Régimen Único Simplificado Digital con cuota única mensual que incluye pensiones e impuestos.", enfoque: "Regulatorio", prioridad: 5, palabra: "Formalización" },
    { id: 2, partido: "Partido Morado", eje: "Salud", propuesta: "Implementar un sistema de Historia Clínica Digital Única interoperable entre todos los sectores prestadores.", enfoque: "Tecnológico", prioridad: 5, palabra: "Telemedicina" },
    { id: 3, partido: "Partido Morado", eje: "Seguridad", propuesta: "Crear unidades de élite antiextorsión y un sistema nacional de videovigilancia con 50000 cámaras nuevas.", enfoque: "Tecnológico", prioridad: 5, palabra: "Extorsión" },
    { id: 4, partido: "Partido Morado", eje: "Corrupción", propuesta: "Derogar leyes pro-crimen en 100 días y fortalecer órganos autónomos como Contraloría y JNJ.", enfoque: "Regulatorio", prioridad: 5, palabra: "Anticorrupción" },
    { id: 5, partido: "Partido Morado", eje: "Infraestructura", propuesta: "Construir 5 ejes transandinos estratégicos y modernizar la red ferroviaria de carga nacional.", enfoque: "APP/Privado", prioridad: 5, palabra: "Logística" },
    { id: 6, partido: "Partido Morado", eje: "Economía", propuesta: "Reformar el sistema de pensiones a un modelo de 3 pilares con pensión mínima indexada.", enfoque: "Social", prioridad: 5, palabra: "Pensiones" },
    { id: 7, partido: "Partido Morado", eje: "Educación", propuesta: "Restaurar funciones fiscalizadoras de SUNEDU y revisión obligatoria de carreras creadas sin supervisión.", enfoque: "Regulatorio", prioridad: 5, palabra: "Universidades" },
    { id: 8, partido: "Partido Morado", eje: "Educación", propuesta: "Garantizar conectividad de alta velocidad en escuelas y entregar tablets con software pedagógico.", enfoque: "Inversión Pública", prioridad: 4, palabra: "Conectividad" },
    { id: 9, partido: "Partido Morado", eje: "Medio Ambiente", propuesta: "Reforestar un millón de hectáreas mediante plantaciones forestales sostenibles y crear el Bono Carbono Social.", enfoque: "Social", prioridad: 4, palabra: "Reforestación" },
    { id: 10, partido: "Partido Morado", eje: "Salud", propuesta: "Establecer 6 macrorregiones de salud con especialización hospitalaria para descentralizar la atención de Lima.", enfoque: "Inversión Pública", prioridad: 4, palabra: "Descentralización" },
    { id: 11, partido: "Partido Demócrata Verde", eje: "Economía", propuesta: "Impulsar el Programa Nacional de Emprendimiento para integrar políticas MIPYME y fortalecer la productividad.", enfoque: "Social", prioridad: 5, palabra: "Emprendimiento" },
    { id: 12, partido: "Partido Demócrata Verde", eje: "Seguridad", propuesta: "Reingeniería de la Policía Nacional mediante el programa Policía del Siglo XXI para mejorar investigación.", enfoque: "Tecnológico", prioridad: 5, palabra: "Policía" },
    { id: 13, partido: "Partido Demócrata Verde", eje: "Salud", propuesta: "Fortalecer el primer nivel de atención con personal permanente y telemedicina mediante Salud Primero.", enfoque: "Inversión Pública", prioridad: 5, palabra: "Atención" },
    { id: 14, partido: "Partido Demócrata Verde", eje: "Educación", propuesta: "Programa Aprende Perú para renovación curricular con enfoque en pensamiento crítico y habilidades digitales.", enfoque: "Social", prioridad: 5, palabra: "Aprendizaje" },
    { id: 15, partido: "Partido Demócrata Verde", eje: "Corrupción", propuesta: "Crear el programa Integridad Pública Perú con transparencia total y control concurrente de Contraloría.", enfoque: "Regulatorio", prioridad: 5, palabra: "Integridad" },
    { id: 16, partido: "Partido Demócrata Verde", eje: "Infraestructura", propuesta: "Desarrollar corredores económicos transversales y mejorar la competitividad exportadora mediante Perú Conectado.", enfoque: "Inversión Pública", prioridad: 5, palabra: "Logística" },
    { id: 17, partido: "Partido Demócrata Verde", eje: "Medio Ambiente", propuesta: "Detener la deforestación mediante control territorial e incentivos económicos de conservación en la Amazonía.", enfoque: "Social", prioridad: 4, palabra: "Amazonía" },
    { id: 18, partido: "Partido Demócrata Verde", eje: "Economía", propuesta: "Fomentar la bioeconomía aprovechando la biodiversidad para desarrollar bioproductos agrícolas con valor agregado.", enfoque: "Tecnológico", prioridad: 4, palabra: "Bioeconomía" },
    { id: 19, partido: "Partido Demócrata Verde", eje: "Seguridad", propuesta: "Establecer Centrales de Seguridad Pública de forma colegiada entre municipios y la Policía Nacional.", enfoque: "Social", prioridad: 4, palabra: "CESEPUB" },
    { id: 20, partido: "Partido Demócrata Verde", eje: "Salud", propuesta: "Universalizar los servicios de salud mental mediante la expansión de Centros de Salud Mental Comunitaria.", enfoque: "Social", prioridad: 4, palabra: "Mente" },
    { id: 21, partido: "Alianza Fuerza Y Libertad", eje: "Economía", propuesta: "Fomentar formalización laboral con incentivos reales y acceso a financiamiento para pequeños negocios.", enfoque: "Social", prioridad: 5, palabra: "Formalización" },
    { id: 22, partido: "Alianza Fuerza Y Libertad", eje: "Seguridad", propuesta: "Combatir delincuencia fortaleciendo la Policía Nacional mediante modernización de equipamiento y penas severas.", enfoque: "Tecnológico", prioridad: 5, palabra: "Policía" },
    { id: 23, partido: "Alianza Fuerza Y Libertad", eje: "Salud", propuesta: "Implementar la Historia Clínica Electrónica Única para asegurar atención continua en todo el país.", enfoque: "Tecnológico", prioridad: 5, palabra: "Digitalización" },
    { id: 24, partido: "Alianza Fuerza Y Libertad", eje: "Educación", propuesta: "Transformar el sistema educativo con tecnología e infraestructura moderna asegurando formación técnica.", enfoque: "Tecnológico", prioridad: 5, palabra: "Tecnología" },
    { id: 25, partido: "Alianza Fuerza Y Libertad", eje: "Economía", propuesta: "Diversificar la oferta exportable hacia bienes de mayor valor agregado incrementando la inversión en I+D.", enfoque: "Tecnológico", prioridad: 5, palabra: "Exportación" },
    { id: 26, partido: "Alianza Fuerza Y Libertad", eje: "Corrupción", propuesta: "Lucha frontal contra la corrupción reconstruyendo la confianza y devolviendo derechos a los ciudadanos.", enfoque: "Regulatorio", prioridad: 4, palabra: "Integridad" },
    { id: 27, partido: "Alianza Fuerza Y Libertad", eje: "Infraestructura", propuesta: "Implementar gestión de riesgos basada en infraestructura resistente a desastres y alertas tempranas.", enfoque: "Inversión Pública", prioridad: 4, palabra: "Prevención" },
    { id: 28, partido: "Alianza Fuerza Y Libertad", eje: "Seguridad", propuesta: "Creación del Centro de Seguridad Metropolitana integrando videovigilancia avanzada con inteligencia artificial.", enfoque: "Tecnológico", prioridad: 4, palabra: "Videovigilancia" },
    { id: 29, partido: "Alianza Fuerza Y Libertad", eje: "Educación", propuesta: "Creación de la Beca Perú 100% Digital garantizando laptops y conectividad gratuita.", enfoque: "Social", prioridad: 4, palabra: "Conectividad" },
    { id: 30, partido: "Alianza Fuerza Y Libertad", eje: "Infraestructura", propuesta: "Desarrollo de una red ferroviaria nacional para reducir costos logísticos y conectar puertos.", enfoque: "APP/Privado", prioridad: 4, palabra: "Ferrocarriles" },
    { id: 31, partido: "Alianza Fuerza Y Libertad", eje: "Medio Ambiente", propuesta: "Implementar soluciones hídricas alternativas incluyendo captación de agua de lluvia y desalinización.", enfoque: "Inversión Pública", prioridad: 4, palabra: "Resiliencia" },
    { id: 32, partido: "Alianza Fuerza Y Libertad", eje: "Salud", propuesta: "Garantizar acceso a atención médica oportuna y medicamentos esenciales fortaleciendo la atención primaria.", enfoque: "Inversión Pública", prioridad: 5, palabra: "Prevención" },
    { id: 33, partido: "Integridad Democrática", eje: "Economía", propuesta: "Garantizar independencia del BCRP y metas de inflación entre 1% y 3% para estabilidad macroeconómica.", enfoque: "Regulatorio", prioridad: 5, palabra: "Inflación" },
    { id: 34, partido: "Integridad Democrática", eje: "Seguridad", propuesta: "Construcción de mega penales de máxima seguridad como Challapalca II con capacidad para 10000 internos.", enfoque: "Inversión Pública", prioridad: 5, palabra: "Cárceles" },
    { id: 35, partido: "Integridad Democrática", eje: "Salud", propuesta: "Erradicar anemia infantil mediante seguimiento nutricional obligatorio para gestantes y niños.", enfoque: "Social", prioridad: 5, palabra: "Anemia" },
    { id: 36, partido: "Integridad Democrática", eje: "Corrupción", propuesta: "Establecer inhabilitación de por vida para funcionarios condenados por delitos de corrupción.", enfoque: "Regulatorio", prioridad: 5, palabra: "Inhabilitación" },
    { id: 37, partido: "Integridad Democrática", eje: "Seguridad", propuesta: "Integrar sistemas de inteligencia de FFAA y PNP bajo comando unificado contra el crimen.", enfoque: "Tecnológico", prioridad: 5, palabra: "Inteligencia" },
    { id: 38, partido: "Integridad Democrática", eje: "Salud", propuesta: "Implementar telesalud universal e interoperable para reducir brechas territoriales y fortalecer atención.", enfoque: "Tecnológico", prioridad: 5, palabra: "Telesalud" },
    { id: 39, partido: "Integridad Democrática", eje: "Educación", propuesta: "Modernizar infraestructura educativa y garantizar conectividad total mediante fibra óptica y satélite.", enfoque: "Inversión Pública", prioridad: 4, palabra: "Conectividad" },
    { id: 40, partido: "Integridad Democrática", eje: "Medio Ambiente", propuesta: "Implementar trazabilidad de madera mediante Blockchain para erradicar la tala ilegal amazónica.", enfoque: "Tecnológico", prioridad: 4, palabra: "Trazabilidad" },
    { id: 41, partido: "Integridad Democrática", eje: "Infraestructura", propuesta: "Construir corredores logísticos multimodales vinculando zonas productivas con puertos y aeropuertos.", enfoque: "APP/Privado", prioridad: 4, palabra: "Multimodal" },
    { id: 42, partido: "Integridad Democrática", eje: "Economía", propuesta: "Exoneración tributaria temporal por dos años para nuevos emprendedores y MYPES.", enfoque: "Regulatorio", prioridad: 4, palabra: "Formalización" },
    { id: 43, partido: "Partido Patriótico Del Perú", eje: "Seguridad", propuesta: "Ascensos policiales basados en resultados y transformación de penales en centros productivos autosostenibles.", enfoque: "Regulatorio", prioridad: 5, palabra: "Policía" },
    { id: 44, partido: "Partido Patriótico Del Perú", eje: "Educación", propuesta: "Revolución educativa con métodos de súper aprendizaje inteligencia artificial e idiomas obligatorios.", enfoque: "Tecnológico", prioridad: 5, palabra: "Aprendizaje" },
    { id: 45, partido: "Partido Patriótico Del Perú", eje: "Educación", propuesta: "Descentralización de universidades nacionales emblemáticas con sedes en las 25 regiones.", enfoque: "Inversión Pública", prioridad: 4, palabra: "Universidades" },
    { id: 46, partido: "Partido Patriótico Del Perú", eje: "Economía", propuesta: "Impulsar crédito MYPE mediante el Banco de la Nación y atraer banca internacional.", enfoque: "APP/Privado", prioridad: 4, palabra: "Crédito" },
    { id: 47, partido: "Partido Patriótico Del Perú", eje: "Economía", propuesta: "Industrializar sectores productivos en todas las regiones para elevar la manufactura al 20% PBI.", enfoque: "Social", prioridad: 4, palabra: "Industrialización" },
    { id: 48, partido: "Partido Patriótico Del Perú", eje: "Infraestructura", propuesta: "Creación de líneas de bandera aérea pesquera mercante y trenes para fortalecer soberanía.", enfoque: "Inversión Pública", prioridad: 3, palabra: "Transporte" },
    { id: 49, partido: "Partido Patriótico Del Perú", eje: "Corrupción", propuesta: "Uso obligatorio del polígrafo para declaraciones juradas de funcionarios de alto nivel.", enfoque: "Tecnológico", prioridad: 3, palabra: "Polígrafo" },
    { id: 50, partido: "Partido Patriótico Del Perú", eje: "Medio Ambiente", propuesta: "Desterrar la minería ilegal fluvial mediante prevención y control de mercurio en Amazonía.", enfoque: "Regulatorio", prioridad: 3, palabra: "Minería" },
    { id: 51, partido: "Alianza Unidad Nacional", eje: "Seguridad", propuesta: "Comando unificado contra criminalidad y construcción de tres megapenales para 10 mil internos.", enfoque: "APP/Privado", prioridad: 5, palabra: "Cárceles" },
    { id: 52, partido: "Alianza Unidad Nacional", eje: "Salud", propuesta: "Unificar SIS EsSalud y sanidades bajo rectoría del MINSA con presupuesto de 7.5% PBI.", enfoque: "Inversión Pública", prioridad: 5, palabra: "Unificación" },
    { id: 53, partido: "Alianza Unidad Nacional", eje: "Infraestructura", propuesta: "Plan Nacional de Infraestructura para cerrar brecha de 159 mil millones de dólares.", enfoque: "Inversión Pública", prioridad: 5, palabra: "Brechas" },
    { id: 54, partido: "Alianza Unidad Nacional", eje: "Economía", propuesta: "Formalización minera mediante reemplazo del REINFO por FOMIN y plantas legales fiscalizadoras.", enfoque: "APP/Privado", prioridad: 5, palabra: "Minería" },
    { id: 55, partido: "Alianza Unidad Nacional", eje: "Economía", propuesta: "Alcanzar 100 mil millones de dólares en exportaciones al 2031 diversificando manufactura.", enfoque: "Social", prioridad: 4, palabra: "Exportaciones" },
    { id: 56, partido: "Alianza Unidad Nacional", eje: "Educación", propuesta: "Reforma de currícula escolar incluyendo cultura cívica y eliminación de ideología de género.", enfoque: "Regulatorio", prioridad: 4, palabra: "Valores" },
    { id: 57, partido: "Alianza Unidad Nacional", eje: "Infraestructura", propuesta: "Cosecha de aguas con reservorios para habilitar 133 mil nuevas hectáreas de riego.", enfoque: "Inversión Pública", prioridad: 4, palabra: "Riego" },
    { id: 58, partido: "Alianza Unidad Nacional", eje: "Corrupción", propuesta: "Creación de un Órgano Vinculante en PCM para coordinar políticas con sociedad civil.", enfoque: "Regulatorio", prioridad: 4, palabra: "Integridad" },
    { id: 59, partido: "Avanza País", eje: "Salud", propuesta: "Implementar telemedicina en todas las postas y mejorar atención con historia clínica digital.", enfoque: "Tecnológico", prioridad: 5, palabra: "Telemedicina" },
    { id: 60, partido: "Avanza País", eje: "Seguridad", propuesta: "Incorporar 60 mil efectivos policiales adicionales con equipamiento de inteligencia y 11 penales.", enfoque: "Inversión Pública", prioridad: 5, palabra: "Policía" },
    { id: 61, partido: "Avanza País", eje: "Economía", propuesta: "Formalización laboral de 1.3 millones de puestos mediante nuevo Código del Trabajo.", enfoque: "Regulatorio", prioridad: 5, palabra: "Formalización" },
    { id: 62, partido: "Avanza País", eje: "Educación", propuesta: "Reducir brecha educativa en 40% e implementar educación técnica según vocación regional.", enfoque: "Social", prioridad: 5, palabra: "Tecnificación" },
    { id: 63, partido: "Avanza País", eje: "Corrupción", propuesta: "Establecer Muerte Civil inmediata para corruptos y el juicio de residencia.", enfoque: "Regulatorio", prioridad: 5, palabra: "Sanciones" },
    { id: 64, partido: "Avanza País", eje: "Economía", propuesta: "Venta de empresas estatales con fallas financieras como Petroperú para estabilidad fiscal.", enfoque: "Privado", prioridad: 4, palabra: "Privatización" },
    { id: 65, partido: "Avanza País", eje: "Infraestructura", propuesta: "Priorizar proyectos ferroviarios como el tren Lima-Ica y el tren de la Costa.", enfoque: "Inversión Pública", prioridad: 4, palabra: "Ferrocarriles" },
    { id: 66, partido: "Perú Libre", eje: "Educación", propuesta: "Construir una educación pública liberadora gratuita y nacionalizar acceso urbano-rural.", enfoque: "Social", prioridad: 5, palabra: "Alfabetización" },
    { id: 67, partido: "Perú Libre", eje: "Salud", propuesta: "Implementar un Sistema Único de Salud universal y gratuito controlado por el Estado.", enfoque: "Inversión Pública", prioridad: 5, palabra: "Universalización" },
    { id: 68, partido: "Perú Libre", eje: "Economía", propuesta: "Transitar hacia una Economía Popular con Mercados industrializando y nacionalizando sectores estratégicos.", enfoque: "Regulatorio", prioridad: 5, palabra: "Industrialización" },
    { id: 69, partido: "Perú Libre", eje: "Economía", propuesta: "Reforma tributaria progresiva para elevar presión fiscal al 20% del PBI.", enfoque: "Regulatorio", prioridad: 5, palabra: "Impuestos" },
    { id: 70, partido: "Perú Libre", eje: "Corrupción", propuesta: "Erradicar la corrupción mediante control popular y sanciones a grupos de poder económico.", enfoque: "Social", prioridad: 4, palabra: "Fiscalización" },
    { id: 71, partido: "Perú Libre", eje: "Medio Ambiente", propuesta: "Alcanzar deforestación cero en la Amazonía para 2030 mediante control estatal.", enfoque: "Regulatorio", prioridad: 4, palabra: "Amazonía" },
    { id: 72, partido: "Perú Libre", eje: "Seguridad", propuesta: "Reducir criminalidad atacando causas sociales y recuperación del control territorial estatal.", enfoque: "Social", prioridad: 4, palabra: "Prevención" },
    { id: 73, partido: "Ahora Nación", eje: "Salud", propuesta: "Construir 500 establecimientos de primer nivel y modernizar hospitales regionales estratégicos.", enfoque: "Inversión Pública", prioridad: 5, palabra: "Hospitales" },
    { id: 74, partido: "Ahora Nación", eje: "Seguridad", propuesta: "Shock de inversiones en equipamiento tecnología y vehículos junto con Bono Anticrimen.", enfoque: "Tecnológico", prioridad: 5, palabra: "Policía" },
    { id: 75, partido: "Ahora Nación", eje: "Economía", propuesta: "Diversificación productiva mediante incentivos tecnológicos y creación de fondo soberano.", enfoque: "Regulatorio", prioridad: 5, palabra: "Diversificación" },
    { id: 76, partido: "Ahora Nación", eje: "Infraestructura", propuesta: "Construcción del Gran Eje Ferroviario de la Costa Central y pavimentación nacional.", enfoque: "APP/Privado", prioridad: 5, palabra: "Ferrocarriles" },
    { id: 77, partido: "Ahora Nación", eje: "Educación", propuesta: "Garantizar conectividad y servicios básicos en escuelas y fortalecer formación docente.", enfoque: "Social", prioridad: 4, palabra: "Conectividad" },
    { id: 78, partido: "Prin", eje: "Corrupción", propuesta: "Implementar plataforma blockchain para licitaciones y crear Consejo Nacional Anti-corrupción.", enfoque: "Tecnológico", prioridad: 5, palabra: "Blockchain" },
    { id: 79, partido: "Prin", eje: "Seguridad", propuesta: "Instalación de cámaras con IA para reconocimiento facial y placas vinculadas a bases criminales.", enfoque: "Tecnológico", prioridad: 4, palabra: "Vigilancia" },
    { id: 80, partido: "Prin", eje: "Economía", propuesta: "Incrementar presión tributaria al 19% y otorgar beneficios fiscales a MYPES formales.", enfoque: "Regulatorio", prioridad: 4, palabra: "Impuestos" },
    { id: 81, partido: "Prin", eje: "Educación", propuesta: "Implementar colegios especializados en comercio y técnico productivo según geografía regional.", enfoque: "Social", prioridad: 3, palabra: "Especialización" },
    { id: 82, partido: "Unido Perú", eje: "Seguridad", propuesta: "Servicio militar obligatorio para NINIS y cadena perpetua para sicarios y corruptos.", enfoque: "Social", prioridad: 5, palabra: "Sanciones" },
    { id: 83, partido: "Unido Perú", eje: "Corrupción", propuesta: "Muerte civil e inhabilitación de por vida para corruptos con embargo de bienes.", enfoque: "Regulatorio", prioridad: 5, palabra: "Corrupción" },
    { id: 84, partido: "Unido Perú", eje: "Infraestructura", propuesta: "Construcción del Tren del Pacífico de alta velocidad mediante esquema de inversión G2G.", enfoque: "Inversión Pública", prioridad: 4, palabra: "Tren-bala" },
    { id: 85, partido: "Unido Perú", eje: "Salud", propuesta: "Descentralizar Hospital Neoplásica y construir hospitales estratégicos en cada provincia.", enfoque: "Inversión Pública", prioridad: 4, palabra: "Descentralización" },
    { id: 86, partido: "Cooperación Popular", eje: "Seguridad", propuesta: "Reingeniería operativa de la PNP y control territorial disuasivo con apoyo de FFAA.", enfoque: "Inversión Pública", prioridad: 5, palabra: "Policía" },
    { id: 87, partido: "Cooperación Popular", eje: "Educación", propuesta: "Reconstrucción de 27000 escuelas compra de satélite y capacitación masiva del magisterio.", enfoque: "Tecnológico", prioridad: 5, palabra: "Satélite" },
    { id: 88, partido: "Cooperación Popular", eje: "Economía", propuesta: "Renegociación de contratos de concesión de recursos naturales para beneficios equitativos.", enfoque: "Regulatorio", prioridad: 5, palabra: "Concesiones" },
    { id: 89, partido: "Cooperación Popular", eje: "Corrupción", propuesta: "Aprobar muerte civil para delincuentes y usar IA para control de recursos públicos.", enfoque: "Tecnológico", prioridad: 5, palabra: "Corrupción" },
    { id: 90, partido: "Cooperación Popular", eje: "Salud", propuesta: "Garantizar atención primaria fortalecida con tres turnos y equipamiento en centros.", enfoque: "Social", prioridad: 4, palabra: "Atención" },
    { id: 91, partido: "Cooperación Popular", eje: "Infraestructura", propuesta: "Construcción de autopistas nacionales Lima-Tacna y Lima-Junín y ferrocarriles de cercanía.", enfoque: "Inversión Pública", prioridad: 4, palabra: "Autopistas" },
    { id: 92, partido: "Cooperación Popular", eje: "Medio Ambiente", propuesta: "Regular actividades extractivas y licitar plantas de tratamiento para descontaminar agua.", enfoque: "Regulatorio", prioridad: 4, palabra: "Descontaminación" },
    { id: 93, partido: "Frente De La Esperanza", eje: "Corrupción", propuesta: "Implementar Ley Patriota para eliminar inmunidades y juicio de residencia presidencial.", enfoque: "Regulatorio", prioridad: 5, palabra: "Inmunidad" },
    { id: 94, partido: "Frente De La Esperanza", eje: "Seguridad", propuesta: "Creación de Guardia Civil Policía de Investigaciones and Sistema de Inteligencia Nacional.", enfoque: "Inversión Pública", prioridad: 5, palabra: "Policía" },
    { id: 95, partido: "Frente De La Esperanza", eje: "Economía", propuesta: "Reducir progresivamente el IGV al 10% y generar un millón de empleos anuales.", enfoque: "Regulatorio", prioridad: 5, palabra: "Empleo" },
    { id: 96, partido: "Frente De La Esperanza", eje: "Salud", propuesta: "Creación de la Droguería y Laboratorio Farmacéutico Nacional para abaratar medicinas.", enfoque: "Inversión Pública", prioridad: 4, palabra: "Droguería" },
    { id: 97, partido: "Frente De La Esperanza", eje: "Educación", propuesta: "Impulsar educación orientada a ciencia y tecnología con infraestructura moderna.", enfoque: "Social", prioridad: 4, palabra: "Tecnología" },
    { id: 98, partido: "Frente De La Esperanza", eje: "Infraestructura", propuesta: "Ejecución de trenes de alta velocidad Lima-Ica Lima-Trujillo y túnel trasandino.", enfoque: "APP/Privado", prioridad: 4, palabra: "Trenes" },
    { id: 99, partido: "Frente De La Esperanza", eje: "Medio Ambiente", propuesta: "Identificación de biodiversidad para programas de canje de deuda por conservación.", enfoque: "Social", prioridad: 3, palabra: "Biodiversidad" },
    { id: 100, partido: "Perú Primero", eje: "Seguridad", propuesta: "Reforma de PNP especialización en cibercrimen and cárceles de máxima seguridad remotas.", enfoque: "Inversión Pública", prioridad: 5, palabra: "Cárceles" },
    { id: 101, partido: "Perú Primero", eje: "Salud", propuesta: "Creación del Centro Nacional de Inteligencia en Salud and redes integradas regionales.", enfoque: "Tecnológico", prioridad: 5, palabra: "Inteligencia" },
    { id: 102, partido: "Perú Primero", eje: "Economía", propuesta: "Implementación del Régimen Simplificado Progresivo MYPE and destrabe de inversiones.", enfoque: "Regulatorio", prioridad: 5, palabra: "Inversión" },
    { id: 103, partido: "Perú Primero", eje: "Corrupción", propuesta: "Registro Nacional de Corrupción Policial Fiscal and Judicial con auditorías externas.", enfoque: "Tecnológico", prioridad: 5, palabra: "Transparencia" },
    { id: 104, partido: "Perú Primero", eje: "Infraestructura", propuesta: "Rehabilitación de 5000 km de red vial and adopción masiva de metodología BIM.", enfoque: "Tecnológico", prioridad: 5, palabra: "Infraestructura" },
    { id: 105, partido: "Perú Primero", eje: "Educación", propuesta: "Digitalización de trámites e internet gratuito para universidades and colegios públicos.", enfoque: "Tecnológico", prioridad: 4, palabra: "Internet" },
    { id: 106, partido: "Perú Primero", eje: "Medio Ambiente", propuesta: "Reforestación de 100000 hectáreas nativas y actualización del Plan Nacional Ambiental.", enfoque: "Inversión Pública", prioridad: 4, palabra: "Reforestación" },
    { id: 107, partido: "Fuerza Popular", eje: "Seguridad", propuesta: "Construcción de 8 penales and sistema C5i con IA para análisis predictivo.", enfoque: "Tecnológico", prioridad: 5, palabra: "Videovigilancia" },
    { id: 108, partido: "Fuerza Popular", eje: "Economía", propuesta: "Reducción del 40% del tiempo en trámites mediante shock desregulatorio digital.", enfoque: "Regulatorio", prioridad: 5, palabra: "Desregulación" },
    { id: 109, partido: "Fuerza Popular", eje: "Educación", propuesta: "Construcción de 3000 colegios and adquisición de 6 millones de dispositivos tecnológicos.", enfoque: "Inversión Pública", prioridad: 5, palabra: "Infraestructura" },
    { id: 110, partido: "Fuerza Popular", eje: "Corrupción", propuesta: "Shock Anticorrupción Digital usando IA para detectar patrones anómalos en contrataciones.", enfoque: "Tecnológico", prioridad: 4, palabra: "Anticorrupción" },
    { id: 111, partido: "Fuerza Popular", eje: "Salud", propuesta: "Despliegue de telemedicina nacional e historias clínicas interoperables ligadas al DNI.", enfoque: "Tecnológico", prioridad: 4, palabra: "Telemedicina" },
    { id: 112, partido: "Fuerza Popular", eje: "Infraestructura", propuesta: "Consolidación del Megapuerto de Chancay and modernización de puertos regionales.", enfoque: "APP/Privado", prioridad: 4, palabra: "Puertos" },
    { id: 113, partido: "Juntos Por El Perú", eje: "Economía", propuesta: "Transición a economía mixta con industrialización del campo and control de exportación minera.", enfoque: "Regulatorio", prioridad: 5, palabra: "Industrialización" },
    { id: 114, partido: "Juntos Por El Perú", eje: "Seguridad", propuesta: "Reforma estructural de la PNP con depuración de mandos and control ciudadano.", enfoque: "Regulatorio", prioridad: 5, palabra: "Reforma" },
    { id: 115, partido: "Juntos Por El Perú", eje: "Salud", propuesta: "Implementar Redes Integradas de Salud and aumentar presupuesto al 8% PBI.", enfoque: "Inversión Pública", prioridad: 5, palabra: "Presupuesto" },
    { id: 116, partido: "Juntos Por El Perú", eje: "Educación", propuesta: "Restituir gratuidad educativa con inversión del 6% PBI and alfabetización nacional.", enfoque: "Social", prioridad: 5, palabra: "Gratuidad" },
    { id: 117, partido: "Juntos Por El Perú", eje: "Corrupción", propuesta: "Declarar imprescriptibilidad de delitos de corrupción e inhabilitación perpetua.", enfoque: "Regulatorio", prioridad: 4, palabra: "Imprescriptibilidad" },
    { id: 118, partido: "Juntos Por El Perú", eje: "Medio Ambiente", propuesta: "Declarar intangibilidad de cabeceras de cuenca y proteger la Amazonía.", enfoque: "Regulatorio", prioridad: 4, palabra: "Cuencas" },
    { id: 119, partido: "Juntos Por El Perú", eje: "Infraestructura", propuesta: "Acelerar ejecución del Metro de Lima y trenes de cercanías.", enfoque: "Inversión Pública", prioridad: 3, palabra: "Metro" },
    { id: 120, partido: "Partido Cívico Obras", eje: "Economía", propuesta: "Economía social de mercado y renegociación de contratos de recursos naturales.", enfoque: "Regulatorio", prioridad: 5, palabra: "Contratos" },
    { id: 121, partido: "Partido Cívico Obras", eje: "Salud", propuesta: "Acceso gratuito en áreas rurales priorizando salud materno-infantil y anemia.", enfoque: "Social", prioridad: 5, palabra: "Materno-infantil" },
    { id: 122, partido: "Partido Cívico Obras", eje: "Educación", propuesta: "Revertir brechas de infraestructura básica para minimizar deserción escolar rural.", enfoque: "Inversión Pública", prioridad: 5, palabra: "Infraestructura" },
    { id: 123, partido: "Partido Cívico Obras", eje: "Corrupción", propuesta: "Imprescriptibilidad de delitos contra el Estado e inhabilitación perpetua.", enfoque: "Regulatorio", prioridad: 5, palabra: "Inhabilitación" },
    { id: 124, partido: "Partido Cívico Obras", eje: "Seguridad", propuesta: "Recuperar plazas activas y constituir 5000 comités cívicos de vigilancia vecinal.", enfoque: "Social", prioridad: 4, palabra: "Vigilancia" },
    { id: 125, partido: "Libertad Popular", eje: "Economía", propuesta: "Estabilidad fiscal con déficit al 1.5% PBI e incentivo a inversión privada.", enfoque: "Regulatorio", prioridad: 5, palabra: "Fiscal" },
    { id: 126, partido: "Libertad Popular", eje: "Seguridad", propuesta: "Crear Comando Unificado de Seguridad y Justicia articulando PNP FFAA y Fiscalía.", enfoque: "Tecnológico", prioridad: 5, palabra: "Comando" },
    { id: 127, partido: "Libertad Popular", eje: "Salud", propuesta: "Implementar Historia Clínica Electrónica y expandir telemedicina en zonas rurales.", enfoque: "Tecnológico", prioridad: 4, palabra: "Digitalización" },
    { id: 128, partido: "Libertad Popular", eje: "Educación", propuesta: "Formación docente meritocrática e inclusión de cursos de libertad financiera.", enfoque: "Social", prioridad: 4, palabra: "Meritocracia" },
    { id: 129, partido: "Libertad Popular", eje: "Medio Ambiente", propuesta: "Reducir deforestación mediante gobernanza territorial y bioeconomía sostenible.", enfoque: "Social", prioridad: 4, palabra: "Deforestación" },
    { id: 130, partido: "Partido Democrático Somos Perú", eje: "Economía", propuesta: "Duplicar exportaciones agrícolas mediante 500000 nuevas hectáreas con riego.", enfoque: "Inversión Pública", prioridad: 5, palabra: "Agroexportación" },
    { id: 131, partido: "Partido Democrático Somos Perú", eje: "Seguridad", propuesta: "Programa Alto al Crimen enfocado en ahogo financiero y extinción de dominio.", enfoque: "Regulatorio", prioridad: 5, palabra: "Finanzas" },
    { id: 132, partido: "Partido Democrático Somos Perú", eje: "Infraestructura", propuesta: "Culminar Línea 2 del Metro e integrar tarifas con transporte masivo.", enfoque: "Inversión Pública", prioridad: 5, palabra: "Metro" },
    { id: 133, partido: "Partido Democrático Somos Perú", eje: "Salud", propuesta: "Expandir programa PADOMI nacional para atención domiciliaria de adultos mayores.", enfoque: "Social", prioridad: 4, palabra: "Geriátrico" },
    { id: 134, partido: "Partido Democrático Somos Perú", eje: "Medio Ambiente", propuesta: "Aumentar valorización de residuos al 25% mediante segregación obligatoria.", enfoque: "Social", prioridad: 4, palabra: "Reciclaje" },
    { id: 135, partido: "Partido Aprista Peruano", eje: "Salud", propuesta: "Ley de atención universal y fortalecimiento de infraestructura mediante APP.", enfoque: "APP/Privado", prioridad: 5, palabra: "Universalidad" },
    { id: 136, partido: "Partido Aprista Peruano", eje: "Economía", propuesta: "Nuevo Régimen Tributario Único simplificado y progresivo para MYPES.", enfoque: "Regulatorio", prioridad: 5, palabra: "Tributación" },
    { id: 137, partido: "Partido Aprista Peruano", eje: "Seguridad", propuesta: "Incrementar policías a 250 mil y crear unidades de inteligencia transnacional.", enfoque: "Inversión Pública", prioridad: 5, palabra: "Patrullaje" },
    { id: 138, partido: "Partido Aprista Peruano", eje: "Educación", propuesta: "Actualizar currícula y cumplir la Ley de la Carrera Pública Magisterial.", enfoque: "Social", prioridad: 4, palabra: "Meritocracia" },
    { id: 139, partido: "Partido Aprista Peruano", eje: "Infraestructura", propuesta: "Rehabilitar 5000 km de Red Vial y ejecutar megaproyectos ferroviarios.", enfoque: "Inversión Pública", prioridad: 4, palabra: "Ferrocarriles" },
    { id: 140, partido: "Partido Aprista Peruano", eje: "Medio Ambiente", propuesta: "Migrar matriz energética a renovables y controlar contaminación hídrica.", enfoque: "Tecnológico", prioridad: 3, palabra: "Renovables" },
    { id: 141, partido: "Partido Del Buen Gobierno", eje: "Salud", propuesta: "Consolidar sistema prestacional único integrado con Historia Clínica Electrónica.", enfoque: "Tecnológico", prioridad: 5, palabra: "Digitalización" },
    { id: 142, partido: "Partido Del Buen Gobierno", eje: "Seguridad", propuesta: "Derogación de leyes pro crimen y reducción del 50% en extorsión al 2031.", enfoque: "Regulatorio", prioridad: 5, palabra: "Extorsión" },
    { id: 143, partido: "Partido Del Buen Gobierno", eje: "Economía", propuesta: "Economía diversificada con industrialización y creación de Fondo Soberano.", enfoque: "Social", prioridad: 4, palabra: "Diversificación" },
    { id: 144, partido: "Partido Del Buen Gobierno", eje: "Educación", propuesta: "Educación inclusiva y científica con cierre de brechas digitales.", enfoque: "Inversión Pública", prioridad: 4, palabra: "Inclusión" },
    { id: 145, partido: "Partido Del Buen Gobierno", eje: "Medio Ambiente", propuesta: "Establecer impuestos verdes y eliminar progresivamente subsidios a combustibles.", enfoque: "Regulatorio", prioridad: 4, palabra: "Descarbonización" },
    { id: 146, partido: "Progresemos", eje: "Seguridad", propuesta: "Salida de la Corte IDH para aplicar pena de muerte y Estado de Sitio.", enfoque: "Regulatorio", prioridad: 5, palabra: "Soberanía" },
    { id: 147, partido: "Progresemos", eje: "Corrupción", propuesta: "Uso de IA para levantar secreto bancario y muerte civil definitiva.", enfoque: "Tecnológico", prioridad: 5, palabra: "IA" },
    { id: 148, partido: "Progresemos", eje: "Economía", propuesta: "Reducción de asesorías externas en 20% y Bono de Formalización MYPE.", enfoque: "Social", prioridad: 4, palabra: "MYPE" },
    { id: 149, partido: "Progresemos", eje: "Salud", propuesta: "Red nacional de salud mental y telemonitoreo de primeros 1000 días.", enfoque: "Social", prioridad: 4, palabra: "Infancia" },
    { id: 150, partido: "Progresemos", eje: "Educación", propuesta: "Complejos Educativos en zonas rurales con robótica e internet satelital.", enfoque: "Tecnológico", prioridad: 4, palabra: "Tecnificación" },
    { id: 151, partido: "Progresemos", eje: "Medio Ambiente", propuesta: "Agenda animalista con hospitales veterinarios públicos y cárcel por maltrato.", enfoque: "Regulatorio", prioridad: 4, palabra: "Animalismo" },
    { id: 152, partido: "Partido De Los Trabajadores Y Emprendedores", eje: "Economía", propuesta: "Apoyo financiero y técnico a un millón de emprendedores.", enfoque: "Social", prioridad: 5, palabra: "Emprendimiento" },
    { id: 153, partido: "Partido De Los Trabajadores Y Emprendedores", eje: "Corrupción", propuesta: "Cadena perpetua para corrupción grave y judicialización del 100% de casos.", enfoque: "Regulatorio", prioridad: 4, palabra: "Sanción" },
    { id: 154, partido: "Partido De Los Trabajadores Y Emprendedores", eje: "Salud", propuesta: "Red nacional de atención médica preventiva con cobertura rural total.", enfoque: "Inversión Pública", prioridad: 4, palabra: "Prevención" },
    { id: 155, partido: "Partido De Los Trabajadores Y Emprendedores", eje: "Medio Ambiente", propuesta: "Creación de un impuesto ecológico para recaudar 500 millones anuales.", enfoque: "Regulatorio", prioridad: 3, palabra: "Impuesto" },
    { id: 156, partido: "Alianza Electoral: Venceremos", eje: "Corrupción", propuesta: "Reorganización del sistema y transparencia para lucha contra el crimen organizado.", enfoque: "Regulatorio", prioridad: 5, palabra: "Anticorrupción" },
    { id: 157, partido: "Alianza Electoral: Venceremos", eje: "Economía", propuesta: "Soberanía nacional industrialización II Reforma Agraria y financiamiento popular.", enfoque: "Inversión Pública", prioridad: 5, palabra: "Soberanía" },
    { id: 158, partido: "Alianza Electoral: Venceremos", eje: "Salud", propuesta: "Reforma integral progresiva para garantizar atención universal gratuita de calidad.", enfoque: "Social", prioridad: 4, palabra: "Salud" },
    { id: 159, partido: "Alianza Electoral: Venceremos", eje: "Educación", propuesta: "Revolución educativa con enfoque intercultural bilingüe y de género.", enfoque: "Social", prioridad: 4, palabra: "Educación" },
    { id: 160, partido: "Alianza Electoral: Venceremos", eje: "Seguridad", propuesta: "Seguridad y defensa con enfoque preventivo y participación comunitaria.", enfoque: "Regulatorio", prioridad: 4, palabra: "Seguridad" },
    { id: 161, partido: "Alianza Electoral: Venceremos", eje: "Medio Ambiente", propuesta: "Protección de recursos naturales y energías limpias para desarrollo sostenible.", enfoque: "Social", prioridad: 3, palabra: "Energía" },
    { id: 162, partido: "Podemos Peru", eje: "Economía", propuesta: "Crecimiento sostenible mediante shock de inversiones públicas y privadas.", enfoque: "Inversión Pública", prioridad: 5, palabra: "Inversión" },
    { id: 163, partido: "Podemos Peru", eje: "Seguridad", propuesta: "Programa Comando Perú con uso de tecnología e IA contra el crimen.", enfoque: "Tecnológico", prioridad: 5, palabra: "Vigilancia" },
    { id: 164, partido: "Podemos Peru", eje: "Corrupción", propuesta: "Sistema anticorrupción con rango constitucional y eliminación de redes regionales.", enfoque: "Regulatorio", prioridad: 5, palabra: "Integridad" },
    { id: 165, partido: "Podemos Peru", eje: "Educación", propuesta: "Fortalecer escuela pública y duplicar presupuesto para universidades públicas.", enfoque: "Inversión Pública", prioridad: 4, palabra: "Universidad" },
    { id: 166, partido: "Podemos Peru", eje: "Salud", propuesta: "Fortalecer atención primaria con enfoque preventivo y derecho universal.", enfoque: "Social", prioridad: 4, palabra: "Prevención" },
    { id: 167, partido: "Podemos Peru", eje: "Infraestructura", propuesta: "Plan Nacional de Infraestructura integral coordinando transporte multimodal.", enfoque: "Inversión Pública", prioridad: 3, palabra: "Transporte" },
    { id: 168, partido: "Salvemos Peru", eje: "Salud", propuesta: "Estrategia integral para alcanzar cero anemia y desnutrición infantil.", enfoque: "Social", prioridad: 5, palabra: "Nutrición" },
    { id: 169, partido: "Salvemos Peru", eje: "Corrupción", propuesta: "Fortalecer sistemas de integridad y potenciar la Secretaría de Integridad Pública.", enfoque: "Regulatorio", prioridad: 5, palabra: "Transparencia" },
    { id: 170, partido: "Salvemos Peru", eje: "Seguridad", propuesta: "Empoderar a la Policía para desarticular extorsión y sicariato.", enfoque: "Social", prioridad: 5, palabra: "Policía" },
    { id: 171, partido: "Salvemos Peru", eje: "Educación", propuesta: "Calidad educativa con enfoque STEAM y cierre de brechas de infraestructura.", enfoque: "Tecnológico", prioridad: 4, palabra: "STEAM" },
    { id: 172, partido: "Salvemos Peru", eje: "Economía", propuesta: "Fomentar PyMES mediante digitalización y financiamiento innovador.", enfoque: "APP/Privado", prioridad: 4, palabra: "PyMES" },
    { id: 173, partido: "Salvemos Peru", eje: "Medio Ambiente", propuesta: "Gestión integrada de cuencas y resiliencia hídrica ante cambio climático.", enfoque: "Inversión Pública", prioridad: 4, palabra: "Cuencas" },
    { id: 174, partido: "Salvemos Peru", eje: "Infraestructura", propuesta: "Cerrar brechas de infraestructura vial y portuaria en zonas rurales.", enfoque: "Inversión Pública", prioridad: 3, palabra: "Vialidad" },
    { id: 175, partido: "Alianza Para El Progreso", eje: "Seguridad", propuesta: "Construir cárceles mediante OXI y migrar reos a sistemas APP.", enfoque: "APP/Privado", prioridad: 5, palabra: "Cárceles" },
    { id: 176, partido: "Alianza Para El Progreso", eje: "Corrupción", propuesta: "IA y analítica de datos para detectar fraude en licitaciones públicas.", enfoque: "Tecnológico", prioridad: 4, palabra: "VigIA" },
    { id: 177, partido: "Alianza Para El Progreso", eje: "Infraestructura", propuesta: "Construcción del teleférico de Choquequirao para potenciar circuito turístico.", enfoque: "Inversión Pública", prioridad: 3, palabra: "Teleféricos" },
    { id: 178, partido: "País Para Todos", eje: "Seguridad", propuesta: "Aislamiento comunicacional efectivo y bloqueo de señal en cárceles.", enfoque: "Regulatorio", prioridad: 5, palabra: "Penales" },
    { id: 179, partido: "País Para Todos", eje: "Salud", propuesta: "Descentralizar especialidades médicas mediante redes integradas de atención.", enfoque: "Social", prioridad: 4, palabra: "Telemedicina" },
    { id: 180, partido: "País Para Todos", eje: "Economía", propuesta: "Plan Crecer Productivo para agricultura tradicional y economía forestal.", enfoque: "Inversión Pública", prioridad: 4, palabra: "Productividad" },
    { id: 181, partido: "Perú Acción", eje: "Seguridad", propuesta: "Plan Mano de Hierro con salida de CIDH y pena de muerte.", enfoque: "Regulatorio", prioridad: 5, palabra: "Penas" },
    { id: 182, partido: "Perú Acción", eje: "Economía", propuesta: "Eliminar ISC a combustibles y reducir IGV al 16% eliminando FONCOMUN.", enfoque: "Regulatorio", prioridad: 4, palabra: "Impuestos" },
    { id: 183, partido: "Perú Moderno", eje: "Infraestructura", propuesta: "Construir Tren Transandino Puno-Cajamarca para integrar mercados aislados.", enfoque: "Inversión Pública", prioridad: 5, palabra: "Ferrocarriles" },
    { id: 184, partido: "Perú Moderno", eje: "Educación", propuesta: "Nueva Escuela Peruana con formación dual académica-técnica desde secundaria.", enfoque: "Social", prioridad: 5, palabra: "Pedagogía" },
    { id: 185, partido: "Sícreo", eje: "Corrupción", propuesta: "Zar Anticorrupción para conectar bases de datos de SUNAT y SBS.", enfoque: "Tecnológico", prioridad: 5, palabra: "Zar" },
    { id: 186, partido: "Sícreo", eje: "Medio Ambiente", propuesta: "Siembra y cosecha de agua mediante 7500 qochas y zanjas de infiltración.", enfoque: "Inversión Pública", prioridad: 4, palabra: "Agua" },
    { id: 187, partido: "Sícreo", eje: "Educación", propuesta: "Implementar bonos educativos para elección familiar según rendimiento pedagógico.", enfoque: "APP/Privado", prioridad: 4, palabra: "Bono" },
    { id: 188, partido: "Un Camino Diferente", eje: "Seguridad", propuesta: "Fusionar Defensa e Interior en Ministerio de Guerra con uso de IA.", enfoque: "Tecnológico", prioridad: 5, palabra: "Guerra" },
    { id: 189, partido: "Un Camino Diferente", eje: "Educación", propuesta: "Bachillerato automático y homologación universitaria bajo estándares internacionales.", enfoque: "Regulatorio", prioridad: 5, palabra: "Bachillerato" },
    { id: 190, partido: "Un Camino Diferente", eje: "Infraestructura", propuesta: "Tren de Alta Velocidad Tumbes-Tacna e integración logística de puertos.", enfoque: "Inversión Pública", prioridad: 5, palabra: "Ferrocarril" },
    { id: 191, partido: "Un Camino Diferente", eje: "Salud", propuesta: "Campañas preventivas anuales y atención 24/7 en postas territoriales.", enfoque: "Social", prioridad: 4, palabra: "Prevención" },
    { id: 192, partido: "Un Camino Diferente", eje: "Medio Ambiente", propuesta: "Eficiencia energética inversa y reforestación en áreas mineras afectadas.", enfoque: "Tecnológico", prioridad: 4, palabra: "Sostenibilidad" },
    { id: 193, partido: "Renovación Popular", eje: "Corrupción", propuesta: "Central de Lucha Contra Corrupción con facultades de infiltración y captura.", enfoque: "Regulatorio", prioridad: 5, palabra: "Fiscalización" },
    { id: 194, partido: "Renovación Popular", eje: "Seguridad", propuesta: "Unidades Itinerantes de Pacificación y convenios de inteligencia con EE.UU.", enfoque: "Tecnológico", prioridad: 5, palabra: "Inteligencia" },
    { id: 195, partido: "Renovación Popular", eje: "Infraestructura", propuesta: "Línea ferroviaria Tumbes-Tacna y Tren Bioceánico Atlántico-Pacífico.", enfoque: "Inversión Pública", prioridad: 5, palabra: "Bioceánico" },
    { id: 196, partido: "Renovación Popular", eje: "Economía", propuesta: "Reducción del IGV e impulso al Banco PYME para financiamiento privado.", enfoque: "APP/Privado", prioridad: 4, palabra: "PYMES" },
    { id: 197, partido: "Renovación Popular", eje: "Educación", propuesta: "Participación de padres en fiscalización y educación sanitaria ministerial.", enfoque: "Social", prioridad: 3, palabra: "Padres" },
    { id: 198, partido: "Primero La Gente", eje: "Corrupción", propuesta: "Implementar auditorías ciudadanas digitales y transparencia radical en presupuesto.", enfoque: "Regulatorio", prioridad: 5, palabra: "Transparencia" }
];
