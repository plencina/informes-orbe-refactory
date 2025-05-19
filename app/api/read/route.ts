import { NextRequest, NextResponse } from "next/server"
import ConnectDB from "@/app/api/connection/connection"
import ReportModel from "@/app/api/models/report"

export async function GET (request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
        let page: string|null = searchParams.get('page')
        if (!page) throw new Error('Error: query parameter page inválido')
        let skip: number = (Number(page) - 1) * 40

        await ConnectDB()
        const result = await ReportModel.find()
        .sort({ time: - 1 })
        .skip(skip)
        .limit(40)
        .lean()
       
        /*
        const result = [
        {
          "_id": "6814e11c4eb235464e02c7f9",
          "title": "EN PARANÁ LLAMAN A INDAGATORIA A LOS HERMANOS ETCHEVEHERE Y A SU MADRE",
          "image": {
            "id": "Wp0nkXPC",
            "image": "https://i.ibb.co/5xkTr3nZ/EN-PARAN-LLAMAN-A-INDAGATORIA-A-LOS-HERMANOS-ETCHEVEHERE-Y-A-SU-MADRE.jpg",
            "thumb": "https://i.ibb.co/Wp0nkXPC/EN-PARAN-LLAMAN-A-INDAGATORIA-A-LOS-HERMANOS-ETCHEVEHERE-Y-A-SU-MADRE.jpg"
          },
          "paragraphs": [
            "(2 May -25) En el marco de una causa federal por presunta extorsión y violencia económica, la Justicia Federal de Paraná citó a indagatoria a los hermanos Luis Miguel, Arturo Sebastián y Juan Diego Etchevehere, junto a su madre, Leonor María Barbero Marcial. Todos deberán comparecer entre el 2 y el 3 de junio próximos en la sede judicial ubicada en calle 25 de Mayo 256 de la capital entrerriana.",
            "La causa, caratulada “N.N. y otros s/ Extorsión – Denunciante: Etchevehere, Dolores y otro” (Expediente FPA8173/2020), se tramita desde hace varios años e involucra denuncias realizadas por Dolores Etchevehere, quien acusó a su familia de haber ejercido maniobras de despojo sobre su parte en la herencia familiar, lo que encuadraría en hechos de violencia económica. También afirma que los hermanos estafaron a tres de sus primas hermanas que viven en Brasil.",
            "Según se supo , el cronograma judicial establece que Luis Miguel Etchevehere, exministro de Agricultura de la Nación, deberá presentarse el lunes 2 de junio a las 9:30. A las 10:30 del mismo día está citado su hermano Arturo Sebastián. Al día siguiente, el martes 3 de junio, Juan Diego Etchevehere deberá declarar a las 9:30, y a las 10:30 está prevista la audiencia de Leonor María Barbero Marcial, madre de los tres hermanos.",
            "La causa se enmarca en una serie de conflictos familiares entre Dolores Etchevehere y el resto de su familia, a quien les reclama lo que considera su parte legítima de los bienes heredados de su padre Luis Felix Etchevehere -quien fue Director de El Diario-, fallecido en 2009, publicó Uno. "
          ],
          "time": 1746198812063,
          "genre": 2
        },
        {
          "_id": "6814dfb64eb235464e02c7f7",
          "title": "LA POLICÍA IMPIDIÓ EL ROBO DE UNA MOTO PERO EL LADRÓN ESCAPÓ",
          "image": {
            "id": "3YR7HQv8",
            "image": "https://i.ibb.co/qFJdwVC4/LA-POLIC-A-IMPIDI-EL-ROBO-DE-UNA-MOTO-PERO-EL-LADR-N-ESCAP.jpg",
            "thumb": "https://i.ibb.co/3YR7HQv8/LA-POLIC-A-IMPIDI-EL-ROBO-DE-UNA-MOTO-PERO-EL-LADR-N-ESCAP.jpg"
          },
          "paragraphs": [
            "(2 May -25) Apenas transcurrida una hora de la nueva jornada, personal policial de la Comisaría 1ra de Gualeguaychú que se encontraba patrullando por calles de su jurisdicción, recibió una alerta del operador del Comando Radioeléctrico que informaba sobre una llamada telefónica de un vecino que había observado a un individuo llevando una moto a tiro por la zona de calles Pasteur y Bolívar, en dirección al sur de la ciudad.",
            "De inmediato la patrulla se dirigió al lugar y, cuando estaba circulando por calles Doello Jurado y Edison, logró localizar al sujeto mencionado, quien empujaba una motocicleta con el motor apagado. Al notar la presencia policial, el individuo arrojó el vehículo y emprendió la fuga corriendo por calle Edison hacia el norte, logrando evadir la intervención policial y perdiéndose de vista.",
            "Frente a esta situación, los policías procedieron al secuestro preventivo de la motocicleta, que fue puesto a disposición de la Fiscalía interviniente, a fin de establecer su real procedencia y propiedad.",
            "La Policía continúa con las tareas investigativas para tratar de identificar y localizar al autor del frustrado robo."
          ],
          "time": 1746198454910,
          "genre": 1
        },
        {
          "_id": "6814de674eb235464e02c7f5",
          "title": "UN AUTO CON TRES OCUPANTES SE INCENDIÓ CUANDO CIRCULABA POR LA AUTOVÍA RN12 ",
          "image": {
            "id": "mfv8zpr",
            "image": "https://i.ibb.co/tVZXCRw/UN-AUTO-CON-TRES-OCUPANTES-SE-INCENDI-CUANDO-CIRCULABA-POR-LA-AUTOV-A-RN12.jpg",
            "thumb": "https://i.ibb.co/mfv8zpr/UN-AUTO-CON-TRES-OCUPANTES-SE-INCENDI-CUANDO-CIRCULABA-POR-LA-AUTOV-A-RN12.jpg"
          },
          "paragraphs": [
            "(2 May -25) Alrededor de las 5 de la tarde de ayer un automóvil que circulaba por la Autovía “David Della Chiesa” (RN12) se prendió fuego casi por completo.",
            "El vehículo involucrado fue un Chevrolet Safira que circulaba a la altura del Km 140 de la autovía por la mano Entre Ríos a Buenos Aires y ocupado por tres hombres con domicilio en Los Polvorines, provincia de Buenos Aires.",
            "A raíz del incendio intervino una dotación del Cuerpo de Bomberos Voluntarios de Ceibas, que en pocos minutos logró extinguir las llamas que, igualmente, afectaron gran parte del automotor, cuyos ocupantes no sufrieron lesiones."
          ],
          "time": 1746198119781,
          "genre": 1
        },
        {
          "_id": "6814de264eb235464e02c7f3",
          "title": "ALLANAMIENTOS Y DETENCIONES EN C. DEL URUGUAY POR UNA CAUSA DE NARCOMENUDEO",
          "image": {
            "id": "m5HJ5PzF",
            "image": "https://i.ibb.co/d4QB4HKJ/ALLANAMIENTOS-Y-DETENCIONES-EN-C-DEL-URUGUAY-POR-UNA-CAUSA-DE-NARCOMENUDEO.jpg",
            "thumb": "https://i.ibb.co/m5HJ5PzF/ALLANAMIENTOS-Y-DETENCIONES-EN-C-DEL-URUGUAY-POR-UNA-CAUSA-DE-NARCOMENUDEO.jpg"
          },
          "paragraphs": [
            "(2 May -25) Personal de la Policía Federal Argentina, Delegación C. del Uruguay, realizó una serie de allanamientos en domicilios particulares de los barrios “San Vicente” y “Sarmiento” de la vecina ciudad, que finalmente llevaron a la detención de personas por la venta de drogas.",
            "La investigación surgió a raíz de una denuncia que daba cuenta de la comercialización de sustancias por parte de varias personas, que llevó a la investigación por parte de los policías federales",
            "En el marco de la pesquisa se fueron reuniendo pruebas y elaborando una hipótesis que involucraba a una vivienda del Bº San Vicente, que funcionaría como boca expendedora de estupefacientes.",
            "Con todo lo obtenido intervino la fiscal María Occhi, que solicitó al Juzgado de Garantías del doctor Gustavo Díaz que librara los allanamientos.",
            "Los mismos fueron cumplimentados logrando secuestrar gran cantidad de envoltorios de cocaína listos para su comercialización, balanzas, teléfonos celulares, elementos de corte y estiramiento, como así también una elevada suma de dinero en efectivo y una pistola con varias municiones.",
            "A raíz de los resultados se dispuso el traslado a la sede de la Policía Federal de cuatro personas, de las cuales dos quedaron detenidas y hoy viernes serán indagadas y se resolverá su situación."
          ],
          "time": 1746198054636,
          "genre": 3
        },
        {
          "_id": "6814dcf74eb235464e02c7f1",
          "title": "GUALEGUAYCHÚ: ATENCIÓN EN LAS OFICINAS DE TRANSPORTE PÚBLICO Y LICENCIAS DE CONDUCIR ",
          "image": {
            "id": "v6nQNRFX",
            "image": "https://i.ibb.co/XrR3nMQY/GUALEGUAYCH-ATENCI-N-EN-LAS-OFICINAS-DE-TRANSPORTE-P-BLICO-Y-LICENCIAS-DE-CONDUCIR.jpg",
            "thumb": "https://i.ibb.co/v6nQNRFX/GUALEGUAYCH-ATENCI-N-EN-LAS-OFICINAS-DE-TRANSPORTE-P-BLICO-Y-LICENCIAS-DE-CONDUCIR.jpg"
          },
          "paragraphs": [
            "(2 May -25) La Municipalidad de Gualeguaychú, a través de la Agencia de Seguridad y su Dirección de Tránsito, informa el cronograma de atención que se cumple en la oficina de Transporte Público y Licencias de Conducir durante el presente fin de semana largo.",
            "NO habrá atención al público hoy viernes y el domingo. El día de mañana sábado la atención se brindará con total normalidad, en los horarios habituales, de 8 a 12.",
            "Se recomienda a los ciudadanos tener en cuenta esta información al momento de programar trámites y consultas, a fin de evitar inconvenientes. Ante cualquier emergencia, comunicarse al 42-0456."
          ],
          "time": 1746197751199,
          "genre": 0
        },
        {
          "_id": "6814dc8d4eb235464e02c7ef",
          "title": "PARA TENER EN CUENTA SI VIAJA EN ESTOS DÍAS DE MAYO",
          "image": {
            "id": "Z1mj7LX2",
            "image": "https://i.ibb.co/S7rjGsyf/PARA-TENER-EN-CUENTA-SI-VIAJA-EN-ESTOS-D-AS-DE-MAYO.jpg",
            "thumb": "https://i.ibb.co/Z1mj7LX2/PARA-TENER-EN-CUENTA-SI-VIAJA-EN-ESTOS-D-AS-DE-MAYO.jpg"
          },
          "paragraphs": [
            "(1 May -25) Con el fin de prevenir siniestros viales y concientizar a la comunidad sobre las buenas prácticas a la hora de transitar las rutas, la Policía de Entre Ríos, a través de la Dirección de Prevención y Seguridad Vial y el Observatorio Provincial de Seguridad Vial, puso a disposición información útil para los automovilistas y advirtiendo que se han dispuesto estrictos controles en rutas y accesos.",
            ">RECOMENDACIONES EN LA RUTA",
            "Respetar las normas de tránsito debe ser prioritario al circular en rutas. No exceder la velocidad máxima permitida y respetar las señales de tránsito y la normativa de alcohol cero.",
            "La documentación requerida para conducir es: licencia, cédula de identificación vehicular, Documento Nacional de Identidad y póliza de seguro vigente.",
            "Se recordó que se debe llevar siempre las luces encendidas, usar cinturón de seguridad, llevar matafuego cargado y vigente, y tener las balizas portátiles ante emergencias. Además, antes de salir, verificar luces, frenos, paragolpes, cubiertas, parabrisas y espejos.",
            "En caso de lluvia, se sugiere aumentar la distancia de seguridad entre vehículos, utilizar aire acondicionado en frío para desempañar cristales, circular a una velocidad precautoria con luces bajas y frenar con suavidad, ya que disminuye la adherencia del vehículo.",
            "En tormentas fuertes, evitar circular por zonas inundadas, estar atento a la presencia de baches y otros obstáculos en la calzada, reducir la velocidad en zonas con curvas.",
            "En caso de emergencia llamar al 101 o 911. "
          ],
          "time": 1746197645516,
          "genre": 0
        },
        {
          "_id": "6814d8a74eb235464e02c7ed",
          "title": "ATROPELLÓ A UN CICLISTA DE 12 AÑOS Y HUYÓ",
          "image": {
            "id": "Q3rWBvYM",
            "image": "https://i.ibb.co/S4RkTwVB/ATROPELL-A-UN-CICLISTA-DE-12-A-OS-Y-HUY.jpg",
            "thumb": "https://i.ibb.co/Q3rWBvYM/ATROPELL-A-UN-CICLISTA-DE-12-A-OS-Y-HUY.jpg"
          },
          "paragraphs": [
            "(1 May -25) Indignación a causado en Concepción del Uruguay lo ocurrido en la mañana, donde un chico de 12 años, que circulaba por la vía pública en bicicleta, resultó lesionado de gravedad al ser colisionado por una camioneta, que se dio a la fuga tras el impacto.",
            "La madre de la víctima denunció que su hijo salía del Centro de Educación Física Nº 3 y se dirigía en bicicleta hacia el oeste por el bulevar Yrigoyen y, al llegar al cruce con calle Erausquin, fue embestido por una Toyota Hilux, de color gris.",
            "El chico fue auxiliado por otras personas y trasladado para su atención al Hospital “Justo José de Urquiza”, donde se constató que había sufrido lesiones graves, con fractura de radio y cúbito, además de contusiones en todo su cuerpo.",
            "El conductor de la camioneta involucrada se alejó del lugar inmediatamente, continuando su marcha por el mismo bulevar, sin prestarle auxilio al niño.",
            "La Policía uruguayense trabaja tratando de identificarlo, para que responda en la Justicia por su repudiable actitud."
          ],
          "time": 1746196647565,
          "genre": 1
        },
        {
          "_id": "6814d7d14eb235464e02c7eb",
          "title": "DOS LADRONES FUERON DETENIDOS POR ROBAR EN UNA CASA UBICADA A LA VERA DE LA RP20",
          "image": {
            "id": "pjzWkPRT",
            "image": "https://i.ibb.co/qYs02nW8/DOS-LADRONES-FUERON-DETENIDOS-POR-ROBAR-EN-UNA-CASA-UBICADA-A-LA-VERA-DE-LA-RP20.jpg",
            "thumb": "https://i.ibb.co/pjzWkPRT/DOS-LADRONES-FUERON-DETENIDOS-POR-ROBAR-EN-UNA-CASA-UBICADA-A-LA-VERA-DE-LA-RP20.jpg"
          },
          "paragraphs": [
            "(1 May -25) En la tarde de ayer miércoles, personal del Comando Radioeléctrico recibió un llamado telefónico alertando sobre dos jóvenes, que estaban sacando pertenencias de una propiedad privada ubicada al norte de Gualeguaychú, a la vera de la RP 20.",
            "Inmediatamente, personal de la Comisaría 4ta se dirigió al lugar, donde al llegar un transeúnte aportó información sobre la dirección en la que se habían retirado los individuos, quienes se movilizaban en un carro a tracción a sangre, y dando también detalles sobre sus características físicas y de vestimenta.",
            "Tras recorrer la zona, los efectivos interceptaron el carro que no estaba a mucha distancia del lugar donde se había perpetrado el ilícito. Los sujetos, al notar la presencia policial, intentaron darse a la fuga, pero fueron reducidos y aprehendidos. En el interior del carro los policías observaron varias chapas y una rueda de vehículo automotor.",
            "Minutos más tarde, se hizo presente el propietario de la vivienda intrusada, quien reconoció que todo lo que había en el carro era de su propiedad.",
            "El fiscal en turno ordenó la detención y traslado a la Jefatura Departamental de los sujetos, de 24 y 27 años de edad."
          ],
          "time": 1746196433798,
          "genre": 1
        },
        {
          "_id": "6814d6cf4eb235464e02c7e9",
          "title": "LA POLICÍA DE ENTRE RÍOS ABRIÓ LA PREINSCRPCIÓN PARA INGRESAR A LOS CURSOS DE 2026",
          "image": {
            "id": "WpY1W6B5",
            "image": "https://i.ibb.co/93Cj9Nyg/LA-POLIC-A-DE-ENTRE-R-OS-ABRI-LA-PREINSCRPCI-N-PARA-INGRESAR-A-LOS-CURSOS-DE-2026.jpg",
            "thumb": "https://i.ibb.co/WpY1W6B5/LA-POLIC-A-DE-ENTRE-R-OS-ABRI-LA-PREINSCRPCI-N-PARA-INGRESAR-A-LOS-CURSOS-DE-2026.jpg"
          },
          "paragraphs": [
            "(1-5-24) El Ministerio de Seguridad y Justicia de Entre Ríos informa que se encuentra abierta la preinscripción para aspirantes a oficiales y agentes de la Policía provincial.",
            "Desde hoy, 1 de mayo, y hasta el 30 de junio estará abierta la inscripción para el ingreso al Ciclo Lectivo 2026. Los cupos definitivos son limitados.",
            "Para más información, ingresá en: https//portal.entrerios.gov.ar/ingresoper/",
            "En este link está dispuesta la oferta académica, las condiciones de ingreso y los formularios de inscripción que deberán ser descargados junto a la ficha médica para presentar de forma presencial y formalizar la inscripción.",
            "La documentación primaria y la ficha técnica se recibirán hasta el 31 de julio de 2025 en la Dirección General de Institutos Policiales - Sección Admisión Permanente. Además, se pueden presentar en la División Escuela de Agentes “Crio. Gral. Pedro Fernando Ramón Campbell” (Villaguay); en la División Escuela de Suboficiales “Gral. Francisco Ramírez” (Rosario del Tala); en la División Coordinación Universitaria (C. del Uruguay); y en la totalidad de las Secretarías Generales de Personal de las diversas Jefaturas Departamentales.",
            "Por consultas, comunicarse a Sección Admisión Permanente de la Dirección General de Institutos Policiales de Paraná (calle Fraternidad 1415).",
            "Teléfono: 0343-4206210 (interno 125)",
            "Celular: 343-4602158",
            "Email: preinscripcionper@gmail.com "
          ],
          "time": 1746196175359,
          "genre": 1
        },
        {
          "_id": "6814d6274eb235464e02c7e7",
          "title": "DESIGNAN NUEVA JUEZA A CARGO DEL JUZGADO DE GARANTIAS Nº 1 DE GUALEGUAYCHÚ",
          "image": {
            "id": "27FX3jGs",
            "image": "https://i.ibb.co/1f0HG9Fd/DESIGNAN-NUEVA-JUEZA-A-CARGO-DEL-JUZGADO-DE-GARANTIAS-N-1-DE-GUALEGUAYCH.jpg",
            "thumb": "https://i.ibb.co/27FX3jGs/DESIGNAN-NUEVA-JUEZA-A-CARGO-DEL-JUZGADO-DE-GARANTIAS-N-1-DE-GUALEGUAYCH.jpg"
          },
          "paragraphs": [
            "(1 May -25) La ex-jueza de Garantías y Transición de Colón, doctora Natalia Céspedes, asumió como jueza de Garantías Nº 1 suplente de Gualeguaychú, en una ceremonia realizada en la Sala de Apelaciones Civil y Comercial que tiene a cargo la Superintendencia.",
            "La designación corrió por cuenta del Superior Tribunal de Justicia de Entre Ríos, el cual dejó constancia de que Céspedes ocupará el cargo como suplente del juez de Garantías y Tansición Nº de Gualeguaychú, doctor Tobías José Podestá, y se extenderá “hasta el reintegro de su titular o nueva disposición”.",
            "La doctora. Céspedes ejerció como magistrada en Colón durante una década, hasta la asunción de Jesús Penayo Amaya, elegido por el gobernador Rogelio Frigerio en el último concurso."
          ],
          "time": 1746196006350,
          "genre": 2
        },
        {
          "_id": "6812d838739e019878c6f3f6",
          "title": "INTENSIFICARÁN LOS CONTROLES DE ALCOHOLEMIA Y TRÁNSITO EN LAS PRÓXIMAS JORNADAS",
          "image": {
            "id": "HTnXgcgk",
            "image": "https://i.ibb.co/xqJ35n5R/INTENSIFICAR-N-LOS-CONTROLES-DE-ALCOHOLEMIA-Y-TR-NSITO-EN-LAS-PR-XIMAS-JORNADAS.jpg",
            "thumb": "https://i.ibb.co/HTnXgcgk/INTENSIFICAR-N-LOS-CONTROLES-DE-ALCOHOLEMIA-Y-TR-NSITO-EN-LAS-PR-XIMAS-JORNADAS.jpg"
          },
          "paragraphs": [
            "(30 Abr -25) La Dirección de Tránsito de Gualeguaychú, dependiente de la Agencia de Seguridad, reforzará en las próximas jornadas los controles de alcoholemia y las tareas de ordenamiento vehicular en distintos puntos estratégicos de la ciudad.",
            "Las acciones estarán especialmente enfocadas en el puente Méndez Casariego y los accesos al Parque Unzué, sectores que registran un importante flujo de vehículos durante los fines de semana. Allí se dispondrá de personal de Tránsito para facilitar la circulación y prevenir posibles congestiones.",
            "Además, se llevarán adelante controles de alcoholemia y de documentación en diferentes puntos de la ciudad, como parte de las tareas habituales de prevención y seguridad vial.",
            "Desde el municipio se solicita a los conductores respetar las indicaciones del personal de Tránsito, circular con la documentación correspondiente y colaborar con el normal desarrollo de los operativos."
          ],
          "time": 1746065464192,
          "genre": 2
        },
        {
          "_id": "6812d6d8739e019878c6f3f4",
          "title": "UN DELINCUENTE FUE APRESADO CUANDO ESTABA PERPETRANDO UN ASALTO",
          "image": {
            "id": "0pWRnG7k",
            "image": "https://i.ibb.co/mrYVRcjm/UN-DELINCUENTE-FUE-APRESADO-CUANDO-ESTABA-PERPETRANDO-UN-ASALTO.jpg",
            "thumb": "https://i.ibb.co/0pWRnG7k/UN-DELINCUENTE-FUE-APRESADO-CUANDO-ESTABA-PERPETRANDO-UN-ASALTO.jpg"
          },
          "paragraphs": [
            "(30 Abr -25) En horas de la madrugada personal de la Comisaría 1ra detuvo a un individuo autor de un intento de asalto en la vía pública, para lo cual había utilizado un arma blanca para intimidar a la víctima.",
            "Por lo que trascendió, escenario del hecho fue la zona de calle Bozzano, entre Cepeda y avenida Artigas, en proximidades de la Terminal de Ómnibus de Gualeguaychú, donde personal policial que patrullaba por el lugar en el sur de la ciudad, frente a una escuela observó a dos individuos.",
            "Uno de ellos, vistiendo una campera de color rojo, se encontraba en posesión de una bicicleta Venzo, de color negra, en tanto que el otro se alejaba rápidamente del lugar.",
            "Al ser interceptado, este último manifestó de manera inmediata que el sujeto de la campera roja lo había amenazado con un arma blanca, exigiéndole la entrega de la bicicleta, ante lo cual optó por no oponer resistencia.",
            "Los policías de inmediato salieron a buscar al señalado como autor del asalto, a quien aprehendieron en las inmediaciones.",
            "Este sujeto, de 34 años de edad, fue conducido a la Jefatura Departamental donde quedó imputado de “Robo calificado por el uso de arma blanca”, mientras que la víctima también fue trasladada a la dependencia policial, donde radicó la denuncia."
          ],
          "time": 1746065112043,
          "genre": 1
        },
        {
          "_id": "6812d60a739e019878c6f3f2",
          "title": "CON TOBILLERA ELECTRÓNICA AHORA LA DIRIGENTE SOCIAL CARINA IZAGUIRRE CUMPLE ARRESTO DOMICILIARIO",
          "image": {
            "id": "qL0nBk41",
            "image": "https://i.ibb.co/Xfy4XSdJ/CON-TOBILLERA-ELECTR-NICA-AHORA-LA-DIRIGENTE-SOCIAL-CARINA-IZAGUIRRE-CUMPLE-ARRESTO-DOMICILIARIO.jpg",
            "thumb": "https://i.ibb.co/qL0nBk41/CON-TOBILLERA-ELECTR-NICA-AHORA-LA-DIRIGENTE-SOCIAL-CARINA-IZAGUIRRE-CUMPLE-ARRESTO-DOMICILIARIO.jpg"
          },
          "paragraphs": [
            "(30 Abr -25) La dirigente del movimiento CUBa MTR, Carina Izaguirre, que se encontraba detenida en la UP 9 Granja Penal “El Potrero” pasó a cumplir en su casa con el arresto domiciliario dispuesto por el juez Federal de Gualeguaychú, doctor Hernán Viri.",
            "Izaguirre seguirá cumpliendo con la medida judicial con el monitoreo de una tobillera electrónica, según dejaron trascender fuentes de la investigación.",
            "La medida en su beneficio había sido solicitada a principios de mes por el abogado Matías Farías, defensor de la dirigente y fue concedida por la Cámara Federal de Apelaciones de Paraná, que de esta forma revocó la prisión",
            "preventiva dictada por el magistrado de Gualeguaychú. Carina Izaguirre estaba alojada en la unidad carcelaria desde mediados de diciembre pasado, cuando fue detenida por presuntas \"amenazas, coacción, extorsión y defraudación contra la administración pública\", y un posible enriquecimiento ilícito que investiga la Justicia Federal en la causa por el posible cobro de un 10 por ciento del monto percibido por los beneficiarios de los planes Potenciar Trabajo.",
            "Izaguirre está bajo investigación por ciertas transferencias de dinero a la dirigente nacional de CubaMTR, Mecha Martínez.",
            "Junto a Carina Izaguirre, también son objeto de investigación referentes del Movimiento Evita y la UTEP, por presunto manejo irregular de planes Potenciar Trabajo en Gualeguaychú. (Fuente: R2820) "
          ],
          "time": 1746064906159,
          "genre": 2
        },
        {
          "_id": "6812d50e739e019878c6f3f0",
          "title": "DICTAN PRISIÓN PREVENTIVA A DIEGO FRANCISCONI, ACUSADO POR ABUSO SEXUAL A UNA MENOR",
          "image": {
            "id": "pjXyH7W8",
            "image": "https://i.ibb.co/v4zYNFsG/DICTAN-PRISI-N-PREVENTIVA-A-DIEGO-FRANCISCONI-ACUSADO-POR-ABUSO-SEXUAL-A-UNA-MENOR.jpg",
            "thumb": "https://i.ibb.co/pjXyH7W8/DICTAN-PRISI-N-PREVENTIVA-A-DIEGO-FRANCISCONI-ACUSADO-POR-ABUSO-SEXUAL-A-UNA-MENOR.jpg"
          },
          "paragraphs": [
            "(30 Abr -25) El juez de Transición y Garantías Nº1 de Gualeguaychú, doctor Tobías Podestá, dictó una orden de prisión preventiva para Diego Francisconi, de 51 años de edad, que está imputado de haber abusado a una menor.",
            "La medida regirá durante los próximos 90 días, mientras se instruye una investigación penal preparatoria a cargo de las fiscales Martina Cedrés y Natalia Noemí Bartolo, quienes solicitaron que el hombre permanezca detenido ante el riego de fuga.",
            "Presuntamente Francisconi habría abusado de una niña de 13 años, y por ello pesaba sobre él una denuncia y otra por violencia de género por la cual se le había asignado un botón antipánico a la víctima.",
            "El caso saltó a la luz el domingo 20 de abril cuando Rosario González, la joven pareja de 23 años de Francisconi, se ausentó de su casa en el barrio Pitter para reencontrarse con el hombre que –por aquella denuncia- permanecía prófugo de la justicia de Gualeguaychú desde hacía casi dos meses.",
            "Como los familiares de la chica denunciaron su ausencia y temían que hubiera sido secuestrada, la Policía comenzó una intensa búsqueda que culminó el sábado, cuando se los logró ubicar a ambos en un lugar de difícil acceso en la zona de Costa Uruguay Sur.",
            "Allí se entregaron y fueron trasladados a Gualeguaychú donde Rosario fue revisada por un médico, mientras que Francisconi fue detenido de manera inmediata y continuará en esa condición los próximos tres meses.",
            "En tanto, la Fiscalía ampliará las cámaras Gessel, las testimoniales y tratará de indagar al imputado para conformar las pruebas de la causa, de acuerdo a lo informado por la fiscal Cedrés a R2820."
          ],
          "time": 1746064654510,
          "genre": 2
        },
        {
          "_id": "6812d438739e019878c6f3ee",
          "title": "SOBRESEEN A CONTADOR EN LA CAUSA DE LOS CONTRATOS ‘TRUCHOS’ LEGISLATIVOS",
          "image": {
            "id": "PsFDcHvW",
            "image": "https://i.ibb.co/vCVX3n6d/SOBRESEEN-A-CONTADOR-EN-LA-CAUSA-DE-LOS-CONTRATOS-TRUCHOS-LEGISLATIVOS.jpg",
            "thumb": "https://i.ibb.co/PsFDcHvW/SOBRESEEN-A-CONTADOR-EN-LA-CAUSA-DE-LOS-CONTRATOS-TRUCHOS-LEGISLATIVOS.jpg"
          },
          "paragraphs": [
            "(30 Abr -25) En Tribunales de Paraná el contador Héctor Gustavo Falco fue sobreseído luego de siete años de proceso de la causa de los contratos truchos legislativos.",
            "La discusión que se planteó en la audiencia era si quedaba desvinculado de la causa debido a que no se incorporaron nuevas pruebas como para sostener la acusación en un juicio, o si lisa y llanamente no cometió el delito que le imputaron, es decir, de formar parte del engranaje de corrupción como contador en el estudio Integral Asesoría.",
            "La jueza de Garantías Marina Barbagelatta coincidió con la Fiscalía en la primera razón, debido a que figuraba en los contratos que integrantes de la banda tenían en el Senado de la Nación, y por compartir inversiones con otros imputados.",
            "El abogado defensor de Falco, Emilio Fouces, dijo: “Con mucho agrado y satisfacción tomamos la decisión del MPF de instar el sobreseimiento de nuestro defendido. La Fiscalía lo sustenta en el inciso cinco del artículo 397, por no haber prueba suficiente para sostener la responsabilidad del imputado. Nosotros vamos disentir en ese aspecto, entendemos que es de aplicación el inciso 3, que es el que dice que los delitos no han sido cometidos por el señor Falco”.",
            "El fiscal Ignacio Aramberry se diferenció del defensor diciendo que “Pareciera que no está fundamentado por qué Falco fue imputado. Entendemos que Falco compareció al proceso en carácter de imputado porque coincidía con el grupo Beckman, Mena y el estudio Integral Asesoría en los contratos de Buenos Aires, que era el mantenimiento económico del grupo operativo, y que de esos contratos de Buenos Aires las personas contratadas se quedaban solamente con entre un 16 y 20%”.",
            "“Además -agregó el fiscal-, Falco registraba inversiones en común con quienes aparecen ligados a la maniobra. Por eso, sin perjuicio del encuadre legal y de que el sobreseimiento implica dejar a salvo el bueno nombre y honor del imputado, queríamos manifestar esto”. "
          ],
          "time": 1746064440265,
          "genre": 2
        },
        {
          "_id": "6812d274739e019878c6f3ec",
          "title": "LA POLICÍA RESOLVIÓ RÁPIDAMENTE UN ROBO DE BOTELLAS DE FERNET ",
          "image": {
            "id": "GQDJ6PJX",
            "image": "https://i.ibb.co/yFCR9sRD/LA-POLIC-A-RESOLVI-R-PIDAMENTE-UN-ROBO-DE-BOTELLAS-DE-FERNET.jpg",
            "thumb": "https://i.ibb.co/GQDJ6PJX/LA-POLIC-A-RESOLVI-R-PIDAMENTE-UN-ROBO-DE-BOTELLAS-DE-FERNET.jpg"
          },
          "paragraphs": [
            "(30 Abr -25) El oportuno alerta que llegó a la sala del Comando Radioeléctrico de la Jefatura de Gualeguaychú sobre dos jóvenes que habían sido vistos en horas de la madrugada transportando varios packs de latas de Fernet , permitió que personal policial interviniera y los interceptara en la vía pública.",
            "Cuando una patrulla policial los encontró en calle Soldado Carlos Mosto, entre San Juan y La Rioja. Ambos trataron de justificar la pertenencia de lo que llevaban, pero sus descargos fueron poco creíbles para los uniformados que prontamente establecieron que las latas habían sido robadas en un local comercial de 25 de Mayo al 200.",
            "Ambos jóvenes –de 24 y 25 años- fueron trasladados a la Jefatura donde quedaron a disposición de la Fiscalía en turno."
          ],
          "time": 1746063988271,
          "genre": 1
        },
        {
          "_id": "6812d1fe739e019878c6f3ea",
          "title": "EN ENTRE RÍOS ES LEY UNA INICIATIVA PARA PREVENIR DELITOS COMO EL ROBO DE CABLES Y PLACAS",
          "image": {
            "id": "pjX8m878",
            "image": "https://i.ibb.co/QvmR5RgR/EN-ENTRE-R-OS-ES-LEY-UNA-INICIATIVA-PARA-PREVENIR-DELITOS-COMO-EL-ROBO-DE-CABLES-Y-PLACAS.jpg",
            "thumb": "https://i.ibb.co/pjX8m878/EN-ENTRE-R-OS-ES-LEY-UNA-INICIATIVA-PARA-PREVENIR-DELITOS-COMO-EL-ROBO-DE-CABLES-Y-PLACAS.jpg"
          },
          "paragraphs": [
            "(30 Abr -29) En su sesión del pasado martes la Cámara de Diputados de Entre Ríos llevó adelante la tercera sesión especial del 146° periodo legislativo, presidida por Gustavo Hein, durante la cual los legisladores sancionaron por unanimidad el proyecto de ley, remitido por el Senado, que regula las actividades vinculadas a los metales no ferrosos.",
            "El diputado Marcelo López (Juntos por Entre Ríos), como presidente de la comisión de Legislación General, se refirió a la norma que prevé dotar a la Policía de herramientas para prevenir delitos que se cometen con los metales no ferrosos, es decir, aquellos que no tienen alto contenido de hierro: “Este proyecto crea un marco regulatorio para el acopio, la reducción, la fabricación, la fundición, la compraventa, los desarmaderos y depósitos de estos materiales, sean éstos adquiridos a título oneroso o gratuito”.",
            "López describió que el texto legal “establece un registro que va a funcionar en la órbita del Ministerio de Seguridad y Justicia y tiende a brindar una herramienta al Poder Ejecutivo provincial, a la fuerza de seguridad y a la propia Justicia para controlar las actividades que tienen que ver con el manejo de estos materiales”. Luego precisó que “existe un vacío legal que permite actuar a quienes se dedican a actividades delictivas en el manejo de estos metales, como por ejemplo la sustracción de cables y placas, y que dificulta determinar su trazabilidad”.",
            "Agregó el legislador que esta ley posibilitará la inspección del tránsito, al tiempo que mencionó que el Ministerio de Seguridad valoró la iniciativa y entendió que podría contribuir a la prevención de delitos, como ya ocurre en otras provincias.",
            "La iniciativa fue presentada por el senador provincial Jaime Benedetti (Juntos por Entre Ríos).",
            "Juan José Bahillo (Más para Entre Ríos) manifestó el acompañamiento de su bloque a esta propuesta. “Pedimos que, a la hora de establecer en el registro la autorización de determinado emprendimiento, se solicite un certificado de aptitud ambiental. Una vía para hacerlo es la reglamentación de esta ley. Si no fuera así, presentaremos un proyecto de ley para hacerlo”, sostuvo."
          ],
          "time": 1746063870149,
          "genre": 2
        },
        {
          "_id": "6812cf40739e019878c6f3e8",
          "title": "CONDENAN A UN ARGENTINO Y DOS URUGUAYOS POR UN ASALTO EN CONCORDIA",
          "image": {
            "id": "tMS29Rdq",
            "image": "https://i.ibb.co/fYbNsJck/CONDENAN-A-UN-ARGENTINO-Y-DOS-URUGUAYOS-POR-UN-ASALTO-EN-CONCORDIA.jpg",
            "thumb": "https://i.ibb.co/tMS29Rdq/CONDENAN-A-UN-ARGENTINO-Y-DOS-URUGUAYOS-POR-UN-ASALTO-EN-CONCORDIA.jpg"
          },
          "paragraphs": [
            "(30 Abr -25) En Tribunales de Concordia se condenó a dos uruguayos y un argentino al comprobarse su autoría en el asalto perpetrado en una casa de cambio de divisas en la citada ciudad del norte provincial.",
            "En un juicio abreviado --según informó Concordia Policiales--, la vocal Clara Mondragón condenó a tres individuos por un robo agravado a mano armada en un domicilio donde funcionaría una casa de cambios.",
            "Los uruguayos Diego Sebastián Machense Castro y Franco Matías Moneta Austria recibieron una pena de tres años de ejecución condicional. Por su parte, el concordiense Gonzalo Sebastián Ojeda, quien facilitó la fuga de los primeros y brindó su hogar como centro de operaciones, también fue condenado.",
            "El hecho ocurrió el 22 de octubre de 2024, en una propiedad situada en la intersección de calle San Juan y Antonio de Luque, donde funcionaría una casa de cambios. Ese día, Machense y Moneta, vestidos de enfermeros llegaron al lugar con la intención de cambiar pesos argentinos por dólares.",
            "Los hombres estaban armados, irrumpieron en el inmueble, redujeron a los propietarios y robaron más de 10 millones de pesos argentinos y 2.000 dólares.",
            "En tanto, Gonzalo Ojeda, quien había prestado su camioneta para la fuga, no sólo colaboró en la huida, sino que también preparó su vivienda como “base de operaciones” donde se planificó el robo. "
          ],
          "time": 1746063167979,
          "genre": 2
        },
        {
          "_id": "68124707f3d0a79ac8bb0f82",
          "title": "EN GUALEGUAYCHÚ LA JUSTICIA FEDERAL PROCESÓ A TRES CONTRABANDISTAS DE AVES AL URUGUAY",
          "image": {
            "id": "sdgzkN7s",
            "image": "https://i.ibb.co/1t0jhPcR/EN-GUALEGUAYCH-LA-JUSTICIA-FEDERAL-PROCES-A-TRES-CONTRABANDISTAS-DE-AVES-AL-URUGUAY.jpg",
            "thumb": "https://i.ibb.co/sdgzkN7s/EN-GUALEGUAYCH-LA-JUSTICIA-FEDERAL-PROCES-A-TRES-CONTRABANDISTAS-DE-AVES-AL-URUGUAY.jpg"
          },
          "paragraphs": [
            "(30 Abr -25) El Juez Federal de Gualeguaychú, doctor Hernán Sergio Viri, procesó a dos hombres de Villa Paranacito y a un bonaerense que Prefectura detuvo en octubre del 2023 cuando iban a cruzar por agua hacia la República Oriental del Uruguay, 95 cardenales amarillos y 22 negrillo boliviano.",
            "Fue el 13 de octubre de 2023 por la noche que la Prefectura de Villa Paranacito desbarató un cruce de contrabando que se iba a realizar por agua hacia Uruguay, con un cargamento de aves que procedían en su gran mayoría de la provincia de San Luis.",
            "Durante un patrullaje por el camino vecinal “El Guazuncho”, a orillas del arroyo Las Palmitas, que desemboca en el arroyo Martínez, los prefectos observaron una lancha en la que se trasladaban dos sujetos de 34 y 36 años, que manifestaron que estaban realizando caza furtiva.",
            "Fue en ese momento, que a ese lugar, se acercó otro hombre en una camioneta que al ser interrogado manifestó que llevaba unas aves que debía entregar a una embarcación, para que fueran cruzadas al país vecino. Incluso le mostró a los prefectos un mensaje de texto en el que se le indicaba la ubicación exacta donde lo iban a esperar dos desconocidos para hacer el trasbordo.",
            "Cuando le indicaron que abriera la caja de la camioneta, descubrieron tres cajas de cartón que contenían aves de la especie cardenal amarillo y otra de negrillo boliviano. Inmediatamente se requirió la intervención de la Dirección General de Fiscalización de la Provincia de Entre Ríos, a quien se le hizo entrega de las aves que tienen un alto valor en dólares dentro del mercado negro.",
            "Posteriormente las aves fueron llevadas al Refugio Vida Silvestre “Parque Pericos”, situado en el acceso San Justo, en el departamento de Concepción del Uruguay, donde se contabilizaron un total de 95 cardenales amarillos, de los cuales seis se encontraban sin vida, y 22 de la especie negrillo boliviano.",
            "El fiscal Federal de Gualeguaychú, Pedro Rebollo, le requirió en marzo pasado al titular del Juzgado Federal de Gualeguaychú, Hernán Viri, el procesamiento de los involucrados, y el viernes pasado se dictó la medida para los dos entrerrianos de 34 y 35 años, y para el hombre de 41 años, que manejaba la camioneta, oriundo de la localidad bonaerense de Morón.",
            "En la investigación que llevó adelante Rebollo se destacó el informe remitido por la Dirección Nacional de Migraciones, que registró los sucesivos pasos fronterizos por la aduana de Gualeguaychú – Fray Bentos, que se realizaban por un período corto de tiempo, de aproximadamente una hora.",
            "Además, del teléfono celular del bonaerense surgieron imágenes, audios y chats de los que se pudo corroborar la venta y compra de animales, particularmente de aves, siendo cardenales, cardenales de Virginia, reina mora, loros amazónicos, loros alisaros, botones, trincas, curios, bollero, pica pica, jilgueros, como así también otros animales, como monos y tortugas. Y a su vez, de este análisis, surgió que la comercialización de los animales era llevada a cabo entre personas que cazaban en las provincias de Entre Ríos, Tucumán, Santiago del Estero, Misiones, Corrientes y Santa Fe, con envíos en camiones a la provincia de Buenos Aires, siendo allí recibidos y distribuidos por el conurbano bonaerense.",
            "Pero otro de los puntos que se resaltó en la investigación fue que el bonaerense detenido tenía comunicaciones con otra persona, en torno a la comercialización en dólares de monos carayá, tití pincel y guacamayos, a través del paso fronterizo entre Gualeguaychú y Fray Bentos.",
            "Según se pudo saber, este cargamento de aves sería el mas grande de cardenales amarillos detectado en el país, y se estima que estas aves tenían como destino Europa a través del Uruguay porque “el aeropuerto de Carrasco era menos seguro”.",
            "El juez Viri decretó el auto de procesamiento sin prisión preventiva de los tres involucrados por el delito de contrabando agravado por el número de personas, por llevarse a cabo en horas y por lugares no habilitados, y por tratarse de elementos que se encuentran prohibidos de comercializar, en grado de tentativa, pero además dispuso el embargo de bienes por 100 mil pesos para cada uno de ellos. (Fuente: El Argentino)"
          ],
          "time": 1746028295150,
          "genre": 2
        },
        {
          "_id": "681245abf3d0a79ac8bb0f80",
          "title": "LOS VEHÍCULOS RETENIDOS JUDICIALMENTE SERÁN CEDIDOS A LOS ORGANISMOS ESTATALES",
          "image": {
            "id": "5WQ7ng2w",
            "image": "https://i.ibb.co/6RKd17NL/LOS-VEH-CULOS-RETENIDOS-JUDICIALMENTE-SER-N-CEDIDOS-A-LOS-ORGANISMOS-ESTATALES.jpg",
            "thumb": "https://i.ibb.co/5WQ7ng2w/LOS-VEH-CULOS-RETENIDOS-JUDICIALMENTE-SER-N-CEDIDOS-A-LOS-ORGANISMOS-ESTATALES.jpg"
          },
          "paragraphs": [
            "(30 Abr -25) Durante la reunión de gabinete que el gobernador Rogelio Frigerio mantuvo con ministros y otros funcionarios de su gobierno uno de los temas abordado fue la situación de los autos retenidos por la Justicia, visibles en los ingresos a la provincia, especialmente en el complejo Zárate-Brazo Largo.",
            "Se resolvió que aquellos vehículos que dependan de la Justicia provincial tendrán un uso en la administración pública, mientras que los que correspondan a otras jurisdicciones deberán ser gestionados por las autoridades correspondientes.",
            "Los vehículos retenidos especialmente en terrenos del Puesto de Control Vial de Brazo Largo se dispuso que fueran trasladados a otros depósitos policiales hasta tanto se resuelva efectivamente sobre cada uno de ellos. "
          ],
          "time": 1746027947420,
          "genre": 2
        },
        {
          "_id": "68124460f3d0a79ac8bb0f7c",
          "title": "EN C. DEL URUGUAY CONDENAN A UN HOMBRE POR DOS CASOS DE ABUSO SEXUAL",
          "image": {
            "id": "MznmBXn",
            "image": "https://i.ibb.co/2zqTZbq/EN-C-DEL-URUGUAY-CONDENAN-A-UN-HOMBRE-POR-DOS-CASOS-DE-ABUSO-SEXUAL.jpg",
            "thumb": "https://i.ibb.co/MznmBXn/EN-C-DEL-URUGUAY-CONDENAN-A-UN-HOMBRE-POR-DOS-CASOS-DE-ABUSO-SEXUAL.jpg"
          },
          "paragraphs": [
            "(30 Abr -25) El juez técnico y vocal del Tribunal de Juicio de Concepción del Uruguay, doctor Rubén Chaia, impuso la pena de 15 años de prisión de cumplimiento efectivo a V.L.J., quien el 11 de abril pasado fue declarado culpable por un jurado popular que lo consideró penalmente responsable de dos hechos de “Abuso sexual con acceso carnal agravado por el vínculo” y “Corrupción de menores agravada por el vínculo”.",
            "Además, el magistrado dispuso que, hasta tanto la condena quede firme, el imputado seguirá en libertad y cumpliendo medidas de coerción. Entre otras, abstenerse de mantener todo tipo de contacto, por sí o por interpósita persona, y por cualquier medio o vía, tanto con la denunciante como con la víctima.",
            "La sentencia dictada por el juez Chaia fue en el marco del legajo “V.L.J. s/Abuso sexual con acceso carnal reiterado agravado por el vínculo en concurso ideal con corrupción de menores agravada todo en concurso real”.",
            "Durante la audiencia de cesura, realizada el 22 de abril último, la fiscal María Albertina Chichi había solicitado para V.L.J. una pena de 22 años de prisión, en tanto que los abogados José Estolas y Pablo Sotelo, a cargo de la defensa técnica del imputado, pidieron una condena a 8 años de prisión.",
            "Se trató del centésimo vigesimoprimer juicio por jurados realizado en Entre Ríos desde la entrada en vigencia de este sistema de juzgamiento penal."
          ],
          "time": 1746027616052,
          "genre": 2
        },
        {
          "_id": "681243c5f3d0a79ac8bb0f7a",
          "title": "PREFECTURA SECUESTRÓ MARIHUANA POR MÁS DE $130 MILLONES",
          "image": {
            "id": "C5TRQc6L",
            "image": "https://i.ibb.co/27fGd9SJ/PREFECTURA-SECUESTR-MARIHUANA-POR-M-S-DE-130-MILLONES.jpg",
            "thumb": "https://i.ibb.co/C5TRQc6L/PREFECTURA-SECUESTR-MARIHUANA-POR-M-S-DE-130-MILLONES.jpg"
          },
          "paragraphs": [
            "(30 Abr -25) Durante un patrullaje nocturno, personal de la Prefectura Naval Argentina secuestró más de 41 kilos de flores de marihuana, cuyo valor supera los 130 millones de pesos, en la ciudad de Santa Ana, provincia de Misiones.",
            "El operativo se inició cuando los efectivos de la Fuerza realizaban tareas de control y hallaron cuatro bultos en la banquina de la RN 12, a la altura de la intersección con la RP 3",
            "Como resultado de la requisa, se comprobó que contenían más de 41 kilogramos de cogollos de marihuana, cuyo valor en el mercado ilegal supera los 130 millones de pesos.",
            "Intervino en la causa la Fiscalía Federal Nº 2 de Posadas, que ordenó el secuestro de la droga."
          ],
          "time": 1746027461065,
          "genre": 1
        },
        {
          "_id": "6812438ef3d0a79ac8bb0f78",
          "title": "PIDEN PRISIÓN CONDICIONAL PARA DOLORES ETCHEVEHERE POR USURPACIÓN DE UNA ESTANCIA ",
          "image": {
            "id": "dwZfwVH0",
            "image": "https://i.ibb.co/gLYrLfcM/PIDEN-PRISI-N-CONDICIONAL-PARA-DOLORES-ETCHEVEHERE-POR-USURPACI-N-DE-UNA-ESTANCIA.jpg",
            "thumb": "https://i.ibb.co/dwZfwVH0/PIDEN-PRISI-N-CONDICIONAL-PARA-DOLORES-ETCHEVEHERE-POR-USURPACI-N-DE-UNA-ESTANCIA.jpg"
          },
          "paragraphs": [
            "(30 Abr -25) En los Tribunales de La Paz la Fiscalía solicitó una condena de un año de prisión condicional para Dolores Etchevehere, acusada del delito de usurpación por el ingreso a la estancia Casa Nueva, en octubre de 2020, en el marco del denominado “Proyecto Artigas”.",
            "La acusación también alcanza al abogado Facundo Taboada, quien participó junto a Etchevehere en la toma del predio ubicado en el paraje El Quebracho, departamento La Paz, acompañado por militantes del Movimiento de Trabajadores Excluidos (MTE).",
            "El juicio oral, que se desarrolló entre el lunes 21 y el jueves 24 de abril, fue acortado por un acuerdo entre las partes, lo que implicó la renuncia a varios testigos, entre ellos el dirigente social Juan Grabois.",
            "La causa fue impulsada por la madre de Dolores, Leonor Barbero Marcial, y sus tres hermanos: Luis Miguel, Arturo Sebastián y Juan Diego Etchevehere. La querella, representada por el abogado Rubén Pagliotto, sostuvo que Dolores ocupó de forma ilegítima una propiedad que ya no le pertenecía, tras haber cedido en 2018 su participación accionaria en Las Margaritas S.A., la empresa familiar propietaria de la estancia.",
            "El fiscal Facundo Barbosa detalló en su alegato que el 15 de octubre de 2020, Etchevehere y Taboada, junto con militantes del MTE, ingresaron al predio forzando la entrega de llaves por parte de la empleada Ramona Rodríguez. Según la acusación, ante la negativa de Rodríguez, los imputados ingresaron a su vivienda dentro del establecimiento y tomaron las llaves por la fuerza, publicó Uno.",
            "Aunque el caso tuvo gran repercusión mediática en 2020, el juicio oral pasó casi desapercibido en los medios nacionales. Ahora, con el pedido de un año de prisión condicional, el proceso judicial llega a su etapa final. (Fuente: APFDigital)"
          ],
          "time": 1746027406192,
          "genre": 2
        },
        {
          "_id": "681242caf3d0a79ac8bb0f76",
          "title": "UN JURADO POPULAR DECLARÓ CULPABLES A DOS HOMBRES POR ABUSO SEXUAL ",
          "image": {
            "id": "Lhz9CGdX",
            "image": "https://i.ibb.co/sJvsFB9d/UN-JURADO-POPULAR-DECLAR-CULPABLES-A-DOS-HOMBRES-POR-ABUSO-SEXUAL.jpg",
            "thumb": "https://i.ibb.co/Lhz9CGdX/UN-JURADO-POPULAR-DECLAR-CULPABLES-A-DOS-HOMBRES-POR-ABUSO-SEXUAL.jpg"
          },
          "paragraphs": [
            "(29 Abr -25) Un jurado popular reunido en Paraná declaró culpables a dos hombres por delitos contra la integridad sexual.",
            "Uno de los imputados, A.J.H., fue considerado coautor penalmente responsable del delito de \"Abuso sexual agravado por la intervención de dos o más personas\" y \"Corrupción de menores simple en concurso ideal\", en tanto que MG.M.D fue declarado coautor del delito de \"Abuso sexual con acceso carnal agravado por la intervención de dos o más personas\" y \"Corrupción de menores agravada por ser la víctima menor de 13 años, en concurso ideal\".",
            "Fue en el marco del legajo “A.J.H-M.G.M.D. s/Abuso sexual con acceso carnal agravado y promoción a la corrupción de menores”, cuyo debate se desarrolló a puertas cerradas en el Salón de Actos del Superior Tribunal de Justicia (STJ).",
            "Conocido el veredicto del jurado, la jueza técnica y vocal del Tribunal de Juicio y Apelaciones de Paraná, Matilde Federik, dispuso la prisión preventiva de los imputados. Durante la audiencia de cesura las partes brindaron sus argumentos sobre las penas que deberán cumplir A.J.H. y MG.M.D.",
            "El Ministerio Público Fiscal estuvo representado por la fiscal Valeria Vilchez y el fiscal Facundo Etienot, en tanto que",
            "los imputados A.J.H. y M.G.M.D, que llegaron al juicio en libertad pero con medidas de coerción, fueron asistidos por el abogado Augusto Lafferriere y el defensor oficial Jorge Sueldo, respectivamente.",
            "Se trató del centésimo vigésimocuarto juicio por jurados que se realiza en Entre Ríos"
          ],
          "time": 1746027210517,
          "genre": 2
        },
        {
          "_id": "68123f18f3d0a79ac8bb0f74",
          "title": "DETIENEN A UN LADRÓN FRUSTRADO QUE ATACÓ A POLICÍAS CON UNA BOTELLA ROTA",
          "image": {
            "id": "0Rp9tp39",
            "image": "https://i.ibb.co/ycmkSmJk/DETIENEN-A-UN-LADR-N-FRUSTRADO-QUE-ATAC-A-POLIC-AS-CON-UNA-BOTELLA-ROTA.jpg",
            "thumb": "https://i.ibb.co/0Rp9tp39/DETIENEN-A-UN-LADR-N-FRUSTRADO-QUE-ATAC-A-POLIC-AS-CON-UNA-BOTELLA-ROTA.jpg"
          },
          "paragraphs": [
            "(29 Abr -25) Alojado en la Jefatura Departamental a disposición de la Justicia quedó un sujeto de 43 años de edad detenido en horas de la tarde de este día.",
            "El individuo había sido aprehendido por personal de la Comisaría 4ta en Primera Junta al 1700, por estar involucrado en una causa por hurto agravado por escalamiento.",
            "El procedimiento se originó cuando los efectivos policiales advirtieron la presencia del hombre dentro de una casa tratando de robar dos discos de hierro.",
            "Al ser interceptado, adoptó una actitud agresiva y amenazante hacia los uniformados, a quienes agredió con una botella de vidrio rota y provocándole lesiones en su brazo derecho a un funcionario, motivo por el fue reducido de inmediato.",
            "Por disposición del fiscal interviniente los elementos que intentaba robar el delincuente fueron restituidos a su propietario. "
          ],
          "time": 1746026264337,
          "genre": 1
        },
        {
          "_id": "68123e72f3d0a79ac8bb0f72",
          "title": "LADRÓN DE CABLES DEJÓ A CASI MEDIA CIUDAD DE VICTORIA SIN LUZ",
          "image": {
            "id": "BhKXW2N",
            "image": "https://i.ibb.co/wnr9Ghs/LADR-N-DE-CABLES-DEJ-A-CASI-MEDIA-CIUDAD-DE-VICTORIA-SIN-LUZ.jpg",
            "thumb": "https://i.ibb.co/BhKXW2N/LADR-N-DE-CABLES-DEJ-A-CASI-MEDIA-CIUDAD-DE-VICTORIA-SIN-LUZ.jpg"
          },
          "paragraphs": [
            "(29 Abr -25) Durante el pasado fin de semana, vecinos de la zona del hospital y el Quinto Cuartel de Victoria padecieron un corte de energía eléctrica que se extendió por más de una hora, como consecuencia de un acto de vandalismo que afectó cables de media tensión pertenecientes a la empresa Enersa.",
            "Según las primeras investigaciones, se sospecha que una o más personas —una de ellas ya habría sido individualizada— intentaron sustraer cables que habían quedado al descubierto tras recientes trabajos municipales en el barrio conocido como “La Ponderosa”. Esta acción provocó una explosión que interrumpió el suministro eléctrico en amplias zonas de la ciudad de Victoria.",
            "Desde Enersa se encuentran evaluando los daños ocasionados y se espera que en las próximas horas se radique la denuncia correspondiente ante las autoridades judiciales, publicó Uno."
          ],
          "time": 1746026098750,
          "genre": 1
        },
        {
          "_id": "68123e0cf3d0a79ac8bb0f70",
          "title": "UNA VÍCTIMA FATAL ES EL SALDO DE UN SINIESTRO VIAL QUE OCURRIÓ EN LA RN18 ",
          "image": {
            "id": "HjkWzGb",
            "image": "https://i.ibb.co/8HSW5Pf/UNA-V-CTIMA-FATAL-ES-EL-SALDO-DE-UN-SINIESTRO-VIAL-QUE-OCURRI-EN-LA-RN18.jpg",
            "thumb": "https://i.ibb.co/HjkWzGb/UNA-V-CTIMA-FATAL-ES-EL-SALDO-DE-UN-SINIESTRO-VIAL-QUE-OCURRI-EN-LA-RN18.jpg"
          },
          "paragraphs": [
            "(29 Abr -25) Lamentable saldo tuvo un siniestro vial ocurrido el domingo por la tarde en la RN 18, en el departamento Villaguay, al confirmarse el fallecimiento de Carlos Ramón Derudder, de 79 años, quien conducía un automóvil Fiat Siena y resultó gravemente herido al colisionar de atrás contra una camioneta que se encontraba detenida en espera de poder circular.",
            "El siniestro se registró el domingo minutos antes de las 19, entre un automóvil Fiat Siena conducido por el hombre de 79 años oriundo de Villa Clara y una camioneta Toyota Hilux al mando de un joven de 25 años, de San Salvador.",
            "El choque ocurrió cuando el conductor del Siena impactó por detrás a la Hilux, que se encontraba detenida esperando que se liberara la vía.",
            "Producto del fuerte impacto, el conductor del automóvil fue trasladado al Sanatorio Americano de la ciudad de Villaguay, donde ingresó con heridas de tal gravedad, que con el correr de las horas le causaron el deceso.",
            "Derudder era oriundo de la localidad de Villa Clara y, según testimonios recabados en el lugar del hecho, circulaba de manera normal cuando no logró frenar a tiempo, impactando de lleno contra la parte trasera de la camioneta Toyota Hilux. El conductor de esta última no sufrió lesiones."
          ],
          "time": 1746025996438,
          "genre": 1
        },
        {
          "_id": "68123d3bf3d0a79ac8bb0f6e",
          "title": "UN PASAJERO DE FLECHA BUS LLEVABA COCAÍNA ESCONDIDA ENTRE SU EQUIPAJE",
          "image": {
            "id": "KgcN5ZS",
            "image": "https://i.ibb.co/WXNDH9j/UN-PASAJERO-DE-FLECHA-BUS-LLEVABA-COCA-NA-ESCONDIDA-ENTRE-SU-EQUIPAJE.jpg",
            "thumb": "https://i.ibb.co/KgcN5ZS/UN-PASAJERO-DE-FLECHA-BUS-LLEVABA-COCA-NA-ESCONDIDA-ENTRE-SU-EQUIPAJE.jpg"
          },
          "paragraphs": [
            "(29 Abr -25) Un control de rutina realizado por efectivos de Gendarmería Nacional Argentina sobre la Autovía RN14 culminó en el hallazgo de cocaína de máxima pureza del “sello Delfín”, ocultos en el equipaje de un pasajero de un colectivo de larga distancia, lo que motivó una serie de diligencias judiciales ordenadas por el Juzgado Federal de Concordia.",
            "El operativo, llevado a cabo en el Km 292 de la Autovía Gral Artigas, en sentido sur-norte, tuvo lugar en horas de la tarde. Al inspeccionar un ómnibus de la empresa Flecha Bus que cubría el trayecto entre Liniers, Buenos Aires, y Paso de los Libres, Corrientes, los agentes advirtieron irregularidades respecto la ubicación de un pasajero.",
            "El hombre de 33 años y domiciliado en Paso de los Libres, fue invitado a mostrar el contenido de su mochila. En su interior, los uniformados encontraron varios paquetes de forma rectangular, envueltos en papel carbónico negro y cinta adhesiva amarilla, que presumiblemente contenían estupefacientes. Realizadas las pruebas de campo correspondientes, se confirmó que se trataba de cocaína, con un peso total de 5,47 kilogramos.",
            "En consecuencia, y con la urgencia del caso, la jueza federal Analía Graciela Ramponi dispuso el secuestro del teléfono celular del detenido, la guarda de la droga incautada, y ordenó de inmediato la constatación domiciliaria encubierta en la ciudad de Paso de los Libres.",
            "Además, y en función de los elementos probatorios reunidos, se libró orden de allanamiento sobre el domicilio vinculado al imputado, en la mencionada localidad correntina; la investigación continúa en curso bajo la órbita de la Secretaría Penal a cargo del doctor Alan Bergdolt, en coordinación con la Gendarmería Nacional.",
            ">EL “SELLO DELFÍN” ",
            "En los últimos años, las autoridades argentinas han detectado un incremento en la circulación de ladrillos de cocaína marcados con el “sello delfín”, un logotipo que identifica cargamentos de alta pureza. El uso de este símbolo responde a una estrategia de los cárteles para certificar la calidad de la droga y facilitar su comercialización tanto a nivel local como internacional.",
            "Procedente mayoritariamente de Bolivia, aunque también asociado a redes paraguayas, el “sello delfín” se ha convertido en un distintivo de prestigio dentro del mercado narco. Su aparición reiterada en operativos antidrogas en provincias como Buenos Aires, Salta y Entre Ríos confirma su consolidación como una “marca” de referencia en el tráfico de estupefacientes en el país.(Fuente: APFDigital)"
          ],
          "time": 1746025787533,
          "genre": 1
        },
        {
          "_id": "68123c6df3d0a79ac8bb0f6c",
          "title": "DETIENEN A UN INDIVIDUO QUE ESTABA ROBANDO UN TRANSFORMADOR DE ENERSA ",
          "image": {
            "id": "W4nNjmYT",
            "image": "https://i.ibb.co/LXSDHV2G/DETIENEN-A-UN-INDIVIDUO-QUE-ESTABA-ROBANDO-UN-TRANSFORMADOR-DE-ENERSA.jpg",
            "thumb": "https://i.ibb.co/W4nNjmYT/DETIENEN-A-UN-INDIVIDUO-QUE-ESTABA-ROBANDO-UN-TRANSFORMADOR-DE-ENERSA.jpg"
          },
          "paragraphs": [
            "(29 Abr -25) La Policía de Concordia logró detener a un individuo que estaba robando un transformador instalado a la altura del Km 234 de la Autovía “Gral José Gervasio Artigas” (RN14).",
            "El procedimiento se desarrolló ayer lunes de madrugada, cuando alrededor de las 3:30 de la mañana, el hombre fue detenido por el delito de “Robo en grado de tentativa en flagrancia”.",
            "Fue cuando personal de la Comisaría de Pedernal se encontraba realizando un patrullaje preventivo bajo la consigna \"control de transformadores\".",
            "En esa instancia fue que los patrulleros constataron la presencia de un automóvil estacionado entre la espesura, siendo el mismo un Renault Clío, de color blanco, con un individuo en su interior que no supo qué decir al ser consultado sobre su presencia en ese lugar.",
            "Los efectivos policiales inspeccionaron la zona y encontraron que uno de los transformadores de 25 kilovatios, propiedad de ENERSA (Energía de Entre Ríos, Sociedad Anónima), tenía cortado sus cables y perdía aceite. Además, había una soga, palos de madera y ganchos.",
            "Puesto en conocimiento de la situación el fiscal en turno, se dispuso la detención del sujeto."
          ],
          "time": 1746025581015,
          "genre": 1
        },
        {
          "_id": "68123ba5f3d0a79ac8bb0f6a",
          "title": "ANTECEDENTES DEL ABOGADO POSTULADO AL CARGO DE FISCAL DE ESTADO ADJUNTO DE ENTRE RÍOS",
          "image": {
            "id": "C5wwYrbH",
            "image": "https://i.ibb.co/JRccGhvs/ANTECEDENTES-DEL-ABOGADO-POSTULADO-AL-CARGO-DE-FISCAL-DE-ESTADO-ADJUNTO-DE-ENTRE-R-OS.jpg",
            "thumb": "https://i.ibb.co/C5wwYrbH/ANTECEDENTES-DEL-ABOGADO-POSTULADO-AL-CARGO-DE-FISCAL-DE-ESTADO-ADJUNTO-DE-ENTRE-R-OS.jpg"
          },
          "paragraphs": [
            "(29 Abr -25) La Comisión de Asuntos Constitucionales de la Cámara de Senadores publicó los antecedentes del abogado Martín Rettore Elena, propuesto por el Poder Ejecutivo para cubrir el cargo de Fiscal de Estado Adjunto luego de la jubilación de Sebastián Trinadori.",
            "“En cumplimiento de lo previsto por el Artículo 19º Inciso a) del Reglamento de la Honorable Cámara de Senadores, se procede a poner de manifiesto públicamente los datos filiatorios y curriculares del Dr. Martín Alejandro Rettore Elena, propuesto por el Poder Ejecutivo de la Provincia para ser nombrado Fiscal Adjunto de la Fiscalía de Estado de la Provincia de Entre Ríos. La presente publicación es a los fines de permitir a la ciudadanía y organizaciones en general, el ejercicio del derecho a manifestarse fundadamente y por escrito respecto de las calidades y méritos del candidato propuesto dentro de los diez días hábiles siguientes a la segunda”, señala el texto que apareció en el Boletín Oficial.",
            "Con título de abogado otorgado por la sede Paraná de la Universidad Católica Argentina (UCA), y Diplomatura Federal en Abogacía del Estado – Escuela del Cuerpo de Abogados y Abogadas del Estado de la Procuración del Tesoro de la Nación (29/04/2.024, Rettore Elena ejerce desde 2008 e integró el cuerpo de abogados de Fiscalía de Estado desde el 1º de marzo de 2010 al 31 de mayo de 2016. Desde 2016 hasta su designación en forma interina como Fiscal de Estado Ajunto ejerció como director de la Unidad de Control de Inmuebles de Dominio Público y Privado de la Provincia de Entre.",
            "El lunes 17, el fiscal de Estado, Julio Rodríguez Signes, ubicó a Rettore Elena como adjunto en forma interina. Hasta entonces había sido director de la Unidad de Control de Inmuebles de la Fiscalía de Estado. La resolución N° 53, del lunes 17, había consignado la necesidad de reemplazar a Trinadori “a fin de no resentir el normal funcionamiento del organismo” y luego de que el Poder Ejecutivo enviara su pliego el 7 de este mes al Senado.",
            "La disposición que firmó Rodríguez Signes consignó que Rettore Elena “reúne las condiciones requeridas para el cargo”.",
            "El pedido de acuerdo constitucional remitido por el gobernador Rogelio Frigerio a la Cámara de Senadores da cuenta que el postulante “cumple con los requisitos legales y constitucionales para ocupar el cargo y posee idoneidad suficiente para el mismo”.",
            "Sebastián Trinadori ocupó el cargo de fiscal de Estado Adjunto hasta el 28 de febrero último, cuando se acogió al beneficio jubilatorio. Había sido designado por decreto en 20122, y en en 2017 obtuvo el acuerdo constitucional del Senado. Había ingresado a la Administración Pública en 1983; en 1992 había obtenido el título de abogado en la Universidad Nacional del Litoral (UNL)."
          ],
          "time": 1746025381268,
          "genre": 2
        },
        {
          "_id": "6812387df3d0a79ac8bb0f68",
          "title": "HOMBRE DE LA 3RA EDAD INTENTÓ HURTAR EN CARREFOUR",
          "image": {
            "id": "Jw1GHfg7",
            "image": "https://i.ibb.co/ks7wXRv8/HOMBRE-DE-LA-3-RA-EDAD-INTENT-HURTAR-EN-CARREFOUR.jpg",
            "thumb": "https://i.ibb.co/Jw1GHfg7/HOMBRE-DE-LA-3-RA-EDAD-INTENT-HURTAR-EN-CARREFOUR.jpg"
          },
          "paragraphs": [
            "(28 Abr -25) En la siesta de este lunes, cerca de las 14, personal de la Comisaría 4ta aprehendió a un hombre de 70 años de edad que intentó sustraer productos varios en el hipermercado Carrefour, instalado en avenida Primera Junta y la RN 136, en Gualeguaychú.",
            "El hecho fue advertido por la encargada de seguridad del establecimiento, quien al realizar el control habitual en las cajas de pago, observó que el hombre, luego de abonar su compra, tenía ocultos varios productos entre sus prendas, incluyendo un paquete de tornillos.",
            "Se le solicitó que exhibiera sus pertenencias, constatándose la intención de sustraer mercadería del local. Se dio inmediata intervención al fiscal en turno, quien dispuso la aprehensión del hombre y su traslado a la Jefatura Departamental, quedando a disposición de la Justicia."
          ],
          "time": 1746024573284,
          "genre": 1
        },
        {
          "_id": "681237edf3d0a79ac8bb0f66",
          "title": "FUERTE RESPALDO DEL MINISTRO RONCAGLIA AL JEFE DE POLICÍA DE CONCORDIA ANTE ATAQUES MEDIÁTICOS",
          "image": {
            "id": "GQRsfyVH",
            "image": "https://i.ibb.co/8g9znqjY/FUERTE-RESPALDO-DEL-MINISTRO-RONCAGLIA-AL-JEFE-DE-POLIC-A-DE-CONCORDIA-ANTE-ATAQUES-MEDI-TICOS.jpg",
            "thumb": "https://i.ibb.co/GQRsfyVH/FUERTE-RESPALDO-DEL-MINISTRO-RONCAGLIA-AL-JEFE-DE-POLIC-A-DE-CONCORDIA-ANTE-ATAQUES-MEDI-TICOS.jpg"
          },
          "paragraphs": [
            "(28 Abr -25) En los últimos días, en un medio de comunicación de la ciudad de Paraná emitieron duras críticas contra la labor del jefe departamental de Concordia, comisario mayor José María Rosatelli.",
            "Los cuestionamientos, que llegaron a oídos del ministro de Seguridad y Justicia, Néstor Roncaglia, motivaron una contundente respuesta pública en defensa del funcionario policial.",
            "El ministro no solo rechazó enérgicamente los comentarios, sino que también destacó el compromiso y el trabajo del equipo que conduce Rosatelli en Concordia. “Escuché que hablaban mal del jefe de la Departamental Concordia, con todo el trabajo que está haciendo él y su equipo, no solamente él solo. La verdad es que me molestó muchísimo”, expresó Roncaglia en diálogo con Concordia Policiales.",
            "Además, apuntó contra quienes realizaron las críticas, señalando que “gente que no tiene dignidad, que gozan de prontuarios policiales, no pueden hablar bien”. El funcionario insinuó que detrás de los dichos habría intereses oscuros: “Evidentemente, Rosatelli, los trabajos que estás haciendo vos, estás poniendo en jaque a muchos sujetos que se sienten mal, tienen dinero, sospechamos que están poniendo dinero para que hablen mal de Rosatelli y no lo vamos a permitir”.",
            "Roncaglia explicó que su presencia en Concordia días pasados, donde se reunió con los jueces de Garantías, también respondió a la intención de felicitar personalmente al personal policial local por su tarea. “Vine a felicitar a todo el personal de la delegación, de la Departamental de Concordia, porque esto no corresponde”, aseguró.",
            "Según el ministro, las declaraciones agraviantes fueron emitidas desde una radio de Paraná, y no descartó que haya redes que se extienden desde la capital provincial con el objetivo de desprestigiar a las autoridades policiales que vienen realizando tareas efectivas en la región.",
            "“No vamos a aceptar que un sujeto de dudosa reputación, integrante de esta sociedad que arrastra algunas cuestiones delictivas, se ponga a hablar de un jefe departamental de lujo que tiene Concordia”, sentenció Roncaglia.(Fuente: Concordia Policiales)"
          ],
          "time": 1746024429963,
          "genre": 1
        },
        {
          "_id": "681236a7f3d0a79ac8bb0f64",
          "title": "“NO ESTUVE SECUESTRADA” ACLARÓ LA JOVEN QUE ESTUVO VARIOS DÍAS DESAPARECIDA EN GUALEGUAYCHÚ ",
          "image": {
            "id": "Dg1n3drq",
            "image": "https://i.ibb.co/tPH5yRLd/NO-ESTUVE-SECUESTRADA-ACLAR-LA-JOVEN-QUE-ESTUVO-VARIOS-D-AS-DESAPARECIDA-EN-GUALEGUAYCH.jpg",
            "thumb": "https://i.ibb.co/Dg1n3drq/NO-ESTUVE-SECUESTRADA-ACLAR-LA-JOVEN-QUE-ESTUVO-VARIOS-D-AS-DESAPARECIDA-EN-GUALEGUAYCH.jpg"
          },
          "paragraphs": [
            "(28 Abr -25) Rosario González, la joven gualeguaychuense de 23 años que estuvo desaparecida durante seis días y era buscada intensamente, aclaró que no estuvo secuestrada. “No estuve secuestrada, me fui por mi propia voluntad”, aseguró a la Radio Máxima.",
            "Rosario manifestó también que se encuentra “en perfectas condiciones”, y que desde que se fue, estuvo con Diego Francisconi, quien es su pareja desde hace siete años. Agregó que se sorprendió al leer que había estado mal alimentada. Enfatizó que su pareja jamás ejerció violencia contra ella, y qué él se fue porque su familia nunca lo aceptó.",
            "Adelantó su intención de aclarar a la Justicia lo que realmente ocurrió. “Fue un error no avisarle a mi familia”, admitió, aunque dijo que le dio aviso a una tía.",
            "Explicó también que ella estaba viviendo con su pareja en el barrio Pitter de Gualeguaychú y ahora se encuentra junto a sus padres.",
            "También habló sobre la grave acusación que pesa contra su pareja, un hombre de 49 años, por un presunto caso de abuso.",
            "Rosario fue encontrada en la tarde del sábado último junto a Diego Francisconi. Al respecto, Rosario dijo que ellos estaban buscando volver a Gualeguaychú y que su pareja no pensaba fugarse. En ese sentido, indicó que “él no opuso resistencia cuando nos encontró la Policía”.",
            "Por parte de la Policía, el comisario inspector Daniel Mígueles, a cargo de la Subjefatura de Gualeguaychú, dijo que en el trabajo de búsqueda estuvo personal de la División Investigaciones, Comisaría 6ta, la Departamental Islas, de las brigadas de Delitos Rurales, todo con la supervisión judicial de las fiscales de Gualeguaychú Martina Cedrés y Carolina Costa.",
            "“Accedimos por agua, al llegar al lugar se logró visualizar a Rosario acompañada por un hombre, accedieron voluntariamente a ser trasladados”, precisó el jefe policial."
          ],
          "time": 1746024103945,
          "genre": 1
        },
        {
          "_id": "681235c7f3d0a79ac8bb0f62",
          "title": "ESPECTACULAR VUELCO DE UN VEHÍCULO DE LOS BOMBEROS DE CEIBAS",
          "image": {
            "id": "dwvtD6ZT",
            "image": "https://i.ibb.co/xtbY6GZk/ESPECTACULAR-VUELCO-DE-UN-VEH-CULO-DE-LOS-BOMBEROS-DE-CEIBAS.jpg",
            "thumb": "https://i.ibb.co/dwvtD6ZT/ESPECTACULAR-VUELCO-DE-UN-VEH-CULO-DE-LOS-BOMBEROS-DE-CEIBAS.jpg"
          },
          "paragraphs": [
            "(28 Abr -25) Afortunadamentye sin lesiones –según lo informado desde el Cuartel- resultó un bombero del Cuerpo de Voluntarios de Ceibas que protagonizó un espectacular incidente vial en la RN 12.",
            "El efectivo conducía una unidad vehicular de apoyo perteneciente al estratégico y eficiente Cuartel de Bomberos existente en Ceibas (departamento Islas) cuando a la altura del Km 161 de la carretera nacional y la calle Juan Domingo Perón de la localidad isleña, perdió el control del rodado, que despistó y volcó, quedando en una zanja junto al trazado.",
            "Prontamente auxiliado, incluso con personal de asistencia médica del Hospital “Eva Duarte”, se comprobó que el servidor público estaba sin consecuencias físicas."
          ],
          "time": 1746023879081,
          "genre": 1
        },
        {
          "_id": "68123554f3d0a79ac8bb0f60",
          "title": "CON INTENCIONES DE ROBO INGRESÓ A UNA OBRA EN CONSTRUCCIÓN, PERO LO VIERON Y FUE DETENIDO",
          "image": {
            "id": "1G6qKPgw",
            "image": "https://i.ibb.co/Kxwq7fP3/CON-INTENCIONES-DE-ROBO-INGRES-A-UNA-OBRA-EN-CONSTRUCCI-N-PERO-LO-VIERON-Y-FUE-DETENIDO.jpg",
            "thumb": "https://i.ibb.co/1G6qKPgw/CON-INTENCIONES-DE-ROBO-INGRES-A-UNA-OBRA-EN-CONSTRUCCI-N-PERO-LO-VIERON-Y-FUE-DETENIDO.jpg"
          },
          "paragraphs": [
            "(28 Abr -25) Un individuo que había sido visto ingresar sospechosamente al interior de una obra en construcción existente en la zona de calles Ángel Elías y San Juan, fue aprehendido por personal policial .",
            "El sujeto fue observado cuando entraba en horas de la tarde de ayer domingo a la obra, algo que se sospechó enseguida como una acción delictiva por el día y la hora, lo que derivó a que se alertara al Comando Radioeléctrico de la Jefatura Departamental Gualeguaychú.",
            "Al lugar se enviaron efectivos policiales que al llegar vieron cuando el desconocido trepaba al muro que rodea la obra para salir y como, al darse cuenta de la presencia de las patrullas, nuevamente se escurría hacia el interior, siendo perseguido por los uniformados.",
            "Sin esfuerzos el sujeto fue aprehendido, tras lo cual los policías comprobaron que se trataba de un individuo de 31 años de edad, residente en la ciudad.",
            "La Fiscalía en turno fue informada de la intervención, disponiendo la misma que el hombre fuera trasladado a la Jefatura Departamental."
          ],
          "time": 1746023761914,
          "genre": 1
        },
        {
          "_id": "68119ef59569819826a509a8",
          "title": "EN IBICUY EL GOBIERNO ENTRERRIANO DELINEÓ ACCIONES CONTRA LA TRATA Y EL GROOMING",
          "image": {
            "id": "ymmgzk94",
            "image": "https://i.ibb.co/200czM9Z/EN-IBICUY-EL-GOBIERNO-ENTRERRIANO-DELINE-ACCIONES-CONTRA-LA-TRATA-Y-EL-GROOMING.jpg",
            "thumb": "https://i.ibb.co/ymmgzk94/EN-IBICUY-EL-GOBIERNO-ENTRERRIANO-DELINE-ACCIONES-CONTRA-LA-TRATA-Y-EL-GROOMING.jpg"
          },
          "paragraphs": [
            "(28 Abr -25) La coordinadora del Consejo Provincial de Prevención, Protección y Asistencia a Víctimas y Testigos del Tráfico y la Trata de Personas, Silvina Calveyra, mantuvo un encuentro con el presidente municipal de Ibicuy, Ezequiel Maneiro, y su equipo, donde se realizó un valioso intercambio de ideas y se delinearon estrategias de articulación en problemáticas sensibles como la Trata de Personas y el Grooming.",
            "En esta línea, la Coordinadora del Consejo Provincial hizo entrega al Intendente Maneiro de la normativa provincial vigente, así como de material de difusión y prevención, extendiendo una invitación formal a su adhesión.",
            "\"La articulación con municipios en el territorio es de suma importancia, son quienes conocen en profundidad las problemáticas en sus localidades, para la generación de redes de trabajo con los organismos provinciales y la optimización de recursos\", sostuvo la funcionaria.",
            "En este contexto, destacó la importancia de continuar generando lazos con instituciones y organizaciones, así como se viene realizando con otros municipios. \"La Trata de Personas es un delito de mucha complejidad y que, para luchar contra él, requiere la participación de muchos actores. Por eso seguimos reforzando estos vínculos, intercambiando esfuerzos y creando red para erradicar la Trata y el Grooming en nuestra provincia\", concluyó."
          ],
          "time": 1745985269066,
          "genre": 2
        },
        {
          "_id": "68119c989569819826a509a6",
          "title": "ANAF FORTALECIÓ SU PRESENCIA EN EL NODO “VILLA MARÍA” DE GUALEGUAYCHÚ",
          "image": {
            "id": "V0r1PS6S",
            "image": "https://i.ibb.co/spkfMw7w/ANAF-FORTALECI-SU-PRESENCIA-EN-EL-NODO-VILLA-MAR-A-DE-GUALEGUAYCH.jpg",
            "thumb": "https://i.ibb.co/V0r1PS6S/ANAF-FORTALECI-SU-PRESENCIA-EN-EL-NODO-VILLA-MAR-A-DE-GUALEGUAYCH.jpg"
          },
          "paragraphs": [
            "(28 Abr -25) En el marco de una política pública de cercanía y fortalecimiento territorial, el Área de Niñez, Adolescencia y Familia (ANAF) de la Municipalidad de Gualeguaychú continúa llevando adelante acciones concretas para garantizar los derechos de las infancias y adolescencias en los distintos barrios de la ciudad.",
            "Este viernes, el equipo de ANAF estuvo presente en el Nodo Villa María, donde realizaron tareas de acompañamiento a familias que ya están siendo asistidas, además de brindar orientación en nuevas situaciones de vulneración de derechos. Durante el encuentro, también se distribuyó material informativo para dar a conocer el funcionamiento del área y los distintos canales de atención disponibles para la comunidad.",
            "A lo largo de la jornada, el equipo técnico recorrió las calles del barrio para dialogar con vecinos, escuchar sus inquietudes y fortalecer los lazos comunitarios. Esta modalidad de intervención territorial busca no solo atender casos específicos, sino también construir redes de apoyo que promuevan entornos seguros y protectores para niños y adolescentes.",
            "“La presencia en los barrios nos permite estar cerca de las familias, acompañarlas de manera sostenida y actuar de forma rápida y efectiva cuando se detectan situaciones de riesgo”, expresó Virginia Castillo, responsable de ANAF. Además, subrayó la importancia de generar confianza y accesibilidad: “Queremos que cada familia sepa que no está sola y que hay un Estado presente dispuesto a acompañar”.",
            "La estrategia de ANAF forma parte de un plan integral de abordaje que pone en el centro la protección de los derechos de la infancia y adolescencia, articulando con otras áreas municipales y organismos provinciales. A través de la escucha activa, la intervención oportuna y la promoción de derechos, se busca construir una ciudad más justa e inclusiva para todas las familias."
          ],
          "time": 1745984663821,
          "genre": 0
        },
        {
          "_id": "68119ae29569819826a509a4",
          "title": "CONTRABANDO DE CIGARRILLOS IMPEDIDO POR GENDARMERÍA",
          "image": {
            "id": "V02JfBj1",
            "image": "https://i.ibb.co/vCZV0zwF/CONTRABANDO-DE-CIGARRILLOS-IMPEDIDO-POR-GENDARMER-A.jpg",
            "thumb": "https://i.ibb.co/V02JfBj1/CONTRABANDO-DE-CIGARRILLOS-IMPEDIDO-POR-GENDARMER-A.jpg"
          },
          "paragraphs": [
            "(28 Abr -25) Gendarmes de la Sección “Puerto Rico”, dependiente del Escuadrón 11 “San Ignacio”, detectaron una camioneta que efectuaba una veloz huida, al aproximarse al puesto de control ubicado sobre la RP 220 (a la altura de Colonia Moreno, Misiones).",
            "Luego de tareas de rastrillaje llevadas a cabo en zona, se concretó el hallazgo del rodado a varios kilómetros de distancia, sin ocupantes y con un total de 50 cajas de cartón en su interior. Dentro de las mismas se contabilizaron 29.000 atados de cigarrillos.",
            "En otro operativo realizado por integrantes del Escuadrón 10 “Eldorado”, sobre la RP 17, los uniformados observaron una camioneta que cambiaba abruptamente de dirección al advertir la presencia del móvil de la Fuerza, dándose a la fuga a gran velocidad.",
            "Posteriormente, los gendarmes hallaron el vehículo sobre la banquina del corredor vial, sin ocupantes y con un total de 20.000 paquetes de cigarrillos de origen extranjero distribuidos entre el compartimiento de carga y el habitáculo."
          ],
          "time": 1745984223824,
          "genre": 1
        },
        {
          "_id": "681183d8a6d09f0973315e36",
          "title": "SE ACTIVÓ EL BAP DE LA MADRE Y FUE DETENIDO EL HIJO INCUMPLIDOR",
          "image": {
            "id": "yFpVkjbG",
            "image": "https://i.ibb.co/v4hDdnKg/SE-ACTIV-EL-BAP-DE-LA-MADRE-Y-FUE-DETENIDO-EL-HIJO-INCUMPLIDOR.jpg",
            "thumb": "https://i.ibb.co/yFpVkjbG/SE-ACTIV-EL-BAP-DE-LA-MADRE-Y-FUE-DETENIDO-EL-HIJO-INCUMPLIDOR.jpg"
          },
          "paragraphs": [
            "(27 Abr -25) Personal de la Comisaría 6ta de Gualeguaychú acudió a un domicilio ubicado en Martínez Paiva al 2300, tras la activación del botón antipánico (BAP).",
            "Al arribar al lugar, los uniformados constataron la presencia de un joven de 28 años, que se encontraba dentro del inmueble, incumpliendo una medida de restricción vigente.",
            "Luego de saber que el individuo poseía medidas inhibitorias de acercamiento hacia su madre, fue trasladado a la Jefatura Departamental, donde quedó alojado en calidad de detenido, conforme lo dispuso la Fiscalía en turno."
          ],
          "time": 1745978328591,
          "genre": 1
        },
        {
          "_id": "6811833da6d09f0973315e34",
          "title": "PREFECTURA SECUESTRÓ CASI 1300 KILOS DE MARIHUANA EN MISIONES",
          "image": {
            "id": "Qvzqz8JQ",
            "image": "https://i.ibb.co/WvqdqDH5/PREFECTURA-SECUESTR-CASI-1300-KILOS-DE-MARIHUANA-EN-MISIONES.jpg",
            "thumb": "https://i.ibb.co/Qvzqz8JQ/PREFECTURA-SECUESTR-CASI-1300-KILOS-DE-MARIHUANA-EN-MISIONES.jpg"
          },
          "paragraphs": [
            "(27 Abr -25) Efectivos de la Prefectura Naval Argentina lograron detectar una maniobra de ingreso ilegal de estupefacientes al país, por un paso clandestino en cercanías de Puerto Piray en la provincia de Misiones, que finalizó con el secuestró de 1270 kilos de marihuana.",
            "El procedimiento se inició cuando el personal apostado en un punto de observación ubicado en la zona llamada “Gallo montaraz”, en el Km 1802 del río Paraná, observó el cruce de una embarcación desde la costa paraguaya hacia la argentina. Posteriormente, el bote a motor desembarcó varios bultos que fueron rápidamente cargados en una camioneta.",
            "Inmediatamente, se emitió una alerta a los móviles desplegados en la zona y comenzó el operativo de persecución. En ese momento, al intentar interceptar el vehículo sospechoso con una camioneta oficial, esta fue colisionada frontalmente, resultando heridos tres efectivos de Prefectura con distintos traumatismos.",
            "En ese instante, el personal de Prefectura identificó 1772 panes de marihuana, con un peso de más de 1270 kilos de marihuana y un valor de mercado que supera los casi cuatro mil millones de pesos.",
            "Intervinieron en la causa la Fiscalía Federal de Eldorado y el Juzgado Federal de la misma ciudad, de la Dra. Valeria Küppers, ordenándose las actuaciones correspondientes."
          ],
          "time": 1745978173797,
          "genre": 1
        }
      ]
       */ 
        return NextResponse.json({ success: true, data: result })
    
    } catch (error) {
        console.log("Error en api/crud/read")
        console.log(error)
        return NextResponse.json({ success: false, error })
    }
}
  