// URL del archivo JSON que contiene los datos
const url = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json';

// Cargar los datos JSON desde la URL y llamar a la función init cuando estén listos
d3.json(url).then(data => init(data));

// Función init que se ejecuta cuando los datos se cargan correctamente
function init(data) {
    // Extraer los datos y metadatos del archivo JSON
    const json = data;
    const dataset = json.data; // Datos de GDP
    const title = json.source_name; // Título del gráfico

    // Seleccionar el elemento HTML con el ID "title" y asignarle el título del gráfico
    d3.select('#title').text(title);

    // Definir dimensiones y márgenes del gráfico
    const width = 1100;
    const height = 500;
    const padding = 60;

    // Crear el elemento SVG donde se dibujará el gráfico
    const svg = d3.select("body")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    // Crear escalas para los ejes x e y
    const xScale = d3.scaleTime()
        .domain([
            new Date(dataset[0][0]), // Primera fecha del array
            new Date(dataset[dataset.length - 1][0]) // Última fecha
        ])
        .range([padding, width - padding]);

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(dataset, (d) => d[1])]) // Dominio de los datos de GDP
        .range([height - padding, padding]);

    // Crear ejes x e y
    const xAxis = d3.axisBottom(xScale).tickFormat(d3.timeFormat("%Y")); // Formato de las etiquetas del eje x
    const yAxis = d3.axisLeft(yScale);

    // Añadir ejes al SVG
    // Eje X
svg.append("g")                               // Selecciona el elemento <g> para el eje X y lo añade al SVG
.attr("id", "x-axis")                         // Establece el atributo 'id' como 'x-axis' al grupo
.attr("transform", `translate(0,${height - padding})`)  // Translada el grupo hacia abajo para posicionar el eje en la parte inferior del gráfico
.call(xAxis)                                  // Llama a la función del eje x para generar el eje
.style("font-size", "16px")                   // Establece el tamaño de la fuente para las etiquetas del eje X
.selectAll("tick")                            // Selecciona todas las etiquetas de texto del eje X
.attr("class", "tick");                       // Añade la clase "tick" a todas las etiquetas del eje X

// Eje Y
svg.append("g")                               // Selecciona el elemento <g> para el eje Y y lo añade al SVG
.attr("id", "y-axis")                         // Establece el atributo 'id' como 'y-axis' al grupo
.attr("transform", `translate(${padding},0)`) // Translada el grupo hacia la derecha para posicionar el eje en el margen izquierdo del gráfico
.call(yAxis)                                  // Llama a la función del eje y para generar el eje
.selectAll("tick")                            // Selecciona todas las etiquetas de texto del eje Y
.attr("class", "tick")                        // Añade la clase "tick" a todas las etiquetas del eje Y
.style("font-size", "16px");                  // Establece el tamaño de la fuente para las etiquetas del eje Y

// Añadir barras al SVG
svg.selectAll("rect")
.data(dataset)                                // Vincula los datos de GDP al conjunto de elementos rect
.enter()                                      // Ingresa en el conjunto de datos
.append("rect")                               // Añade un elemento rect para cada dato de GDP no representado
.attr("class", "bar")                         // Establece la clase "bar" para cada barra
.attr("data-date", (d) => d[0])               // Establece el atributo 'data-date' para cada barra con la fecha correspondiente
.attr("data-gdp", (d) => d[1])                // Establece el atributo 'data-gdp' para cada barra con el valor de GDP correspondiente
.attr("x", (d) => xScale(new Date(d[0])))     // Establece la posición x de cada barra utilizando la escala x y la fecha correspondiente
.attr("y", (d) => yScale(d[1]))               // Establece la posición y de cada barra utilizando la escala y y el valor de GDP correspondiente
.attr("width", (width - 2 * padding) / dataset.length)  // Establece el ancho de cada barra en función del ancho total del gráfico y la cantidad de datos
.attr("height", (d) => height - padding - yScale(d[1]))  // Establece la altura de cada barra en función de la escala y y el valor de GDP correspondiente
.attr("fill", "orange")                     // Establece el color de relleno de las barras en naranja
// tooltip
.on('mouseover', function(e, d){
    const tooltip = d3.select("#tooltip");

    tooltip
        .transition()
        .duration(0)
        .style("opacity", 0.9)
        .style("left", e.pageX + 10 + "px")
        .style("top", e.pageY + 10 + "px")
        .style("font-size", "15px");

    tooltip.attr("data-date", d[0])
            .html(`${d[0].split(/-/)[0]} <br/> $${d[1]} Billion`);
    })

.on('mouseout', function(e){
    d3.select("#tooltip").style("opacity", 0);
});

const tooltip = d3.select("body")
                    .append("div")
                    .attr("id", "tooltip")
                    .style("opacity", 0)
                    .style("position", "absolute")
                    .style("background-color", "rgba(0,0,0,0.8")
                    .style("color", "#fff")
                    .style("padding", "10px")
                    .style("font-size", "15px");

}