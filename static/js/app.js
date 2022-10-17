// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// function to create table
function buildTable(data) {

    // establish clean table, clear pre-existing data
    tbody.html("");

    // loop through each object in data array
    data.forEach((dataRow) => {

        // establish new row for each object
        let row = tbody.append("tr");

        // loop through values of each object
        Object.values(dataRow).forEach((val) => {

            // establish new cell for each value
            let cell = row.append("td");

            // add current value to new cell
            cell.text(val);

        });
        
    });


};