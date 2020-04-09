// from data.js
var tableData = data;

// YOUR CODE HERE!
// This is where my results will be appended
var tbody = d3.select("tbody");

// YOUR CODE HERE!
//console.log(data);

// This function append the filtereddata results into a table on the html
// Looping through 'data
data.forEach(function(sightings) {
    //console.log(sightings);

    // Use d3 to append one table row 'tr' for each sighting
    var row = tbody.append("tr");

    // Use object.entries to console.log my value results
    Object.entries(sightings).forEach(function([key, value]) {
        //console.log(key, value);

        // Append value results into the html table
        var cell = row.append("td");
        cell.text(value);
    });
});
// Data source
var sightdate = data;

// Call the filter button from the html here
var button = d3.select("#filter-btn");

button.on("click", function() {

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // Printing both inputValue and sightdate into the console
    //console.log(inputValue);
    //console.log(sightdate);

    // Filter parameter
    var filteredData = sightdate.filter(sightdate => sightdate.datetime === inputValue);
    tbody.selectAll("tr").remove();
    // Print the fileteredData results into the console
    //console.log(filteredData);

    // This function append the filtereddata results into a table on the html
    filteredData.forEach(function(sightings) {
        //console.log(sightings);
        var row = tbody.append("tr");

        Object.entries(sightings).forEach(function([key, value]) {
            //console.log(key, value);

            var cell = row.append("td");
            cell.text(value);
        });
    });


});