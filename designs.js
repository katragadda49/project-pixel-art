/**
* This function is used to populate the table with rows and columns
* as per the values entered in the form.
*/
function makeGrid() {

  // Fetch the table element from index.html
  const makeTable = document.getElementById("pixelCanvas");
  // Clearing the old grid and creating a fresh one
  makeTable.innerHTML = '';
  const inputHeight = document.getElementById("inputHeight").value;
  const inputWidth = document.getElementById("inputWidth").value;


  for (let row = 1; row <= inputHeight; row++){
    // Create a new row
    let tableRow = document.createElement("tr");
    for (let column = 1; column <= inputWidth; column++){
      // Adding the individual cells and their functionality.
      let tableData = document.createElement("td");
      tableData.addEventListener("click", function(e) {
        // Set the color from the form input variable
        let colorEl = document.getElementById("colorPicker").value;
        tableData.style.backgroundColor = colorEl;
      });
      // Add the data cell to the row object
      tableRow.appendChild(tableData);
    }
    // Append the formed table row
    makeTable.appendChild(tableRow);
  }
  // Use prevent default function to avoid the frequent refresh
  event.preventDefault();
}
