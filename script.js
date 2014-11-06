$(document).ready(function(){
	gridFunction();
	setColor("#white");
});
// button id="new_grid" prompts for grid size
$("#new_grid").click(function(){
	gridFunction();
	setColor("#white");
});

function gridFunction() {
	var input = prompt("Please enter a number from 1-128");
	if (input >= 1 && input <=128) {
		createGrid(input);
	} else {
		alert("Seriously, put a number 1-128. It'll make your life and mine easier.");
	}
}	

function createGrid(max) {
	for(var i=0; i < max; i++) {
		var row=document.getElementbyId("gridTable").insertRow(i);

		for(var j=0; j < max; j++) {
			row.insertCell(j);
		}
	}
}