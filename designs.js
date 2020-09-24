// Select color input

// Select size input

// When size is submitted by the user, call makeGrid()
function makeGrid() {
  const makeTable = document.getElementById("pixelCanvas");
  makeTable.innerHTML = '';
  const inputHeight = document.getElementById("inputHeight").value;
  const inputWidth = document.getElementById("inputWidth").value;


  for (let row = 1; row <= inputHeight; row++){
    let tableRow = document.createElement("tr");
    for (let column = 1; column <= inputWidth; column++){
      let tableData = document.createElement("td");
      tableData.addEventListener("click", function() {
        let colorEl = document.getElementById("colorPicker").value;
        tableData.style.backgroundColor = colorEl;
      });
      tableRow.appendChild(tableData);
    }
    makeTable.appendChild(tableRow);
  }
  event.preventDefault();
}
