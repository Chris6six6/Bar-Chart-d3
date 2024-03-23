# Bar Chart Visualization Project

This project is a bar chart visualization displaying GDP data. It fulfills the requirements set forth by FreeCodeCamp's Data Visualization curriculum.

## Project Description

The bar chart displays GDP data over time, with bars representing individual data points. It includes features such as a title, axes, tick labels, and tooltip for interactive exploration of the data.

## User Stories

1. My chart should have a title with a corresponding id="title".
2. My chart should have a g element x-axis with a corresponding id="x-axis".
3. My chart should have a g element y-axis with a corresponding id="y-axis".
4. Both axes should contain multiple tick labels, each with a corresponding class="tick".
5. My chart should have a rect element for each data point with a corresponding class="bar" displaying the data.
6. Each .bar should have the properties data-date and data-gdp containing date and GDP values.
7. The .bar elements' data-date properties should match the order of the provided data.
8. The .bar elements' data-gdp properties should match the order of the provided data.
9. Each .bar element's height should accurately represent the data's corresponding GDP.
10. The data-date attribute and its corresponding .bar element should align with the corresponding value on the x-axis.
11. The data-gdp attribute and its corresponding .bar element should align with the corresponding value on the y-axis.
12. I can mouse over an area and see a tooltip with a corresponding id="tooltip" which displays more information about the area.
13. My tooltip should have a data-date property that corresponds to the data-date of the active area.

## Technologies Used

- HTML
- CSS
- JavaScript
- D3.js (Data-Driven Documents)

## Dataset

The dataset required for this project can be found [here](https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json).

## Project Structure

The project includes HTML, CSS, and JavaScript files. The HTML file contains the structure of the webpage, including DOM elements for the visualization. The CSS file styles the webpage elements for better presentation. The JavaScript file contains the logic to fetch the dataset, process the data, and create the bar chart visualization using D3.js.

## Usage

To view the bar chart visualization, simply open the HTML file in a web browser.

## Acknowledgments

- [FreeCodeCamp](https://www.freecodecamp.org/) for providing the project requirements and dataset.
- D3.js community for the powerful data visualization library.
- Developers contributing to open datasets for educational purposes.
