// button id="new_grid" prompts for grid size
$("#new_grid").click(function(){
	gridFunction();
});

function gridFunction() {
	var input = prompt("Please enter a number from 1-128");
	if (input >= 1 && input <=128) {
		createGrid(input);
	} else {
		alert("Seriously, put a number 1-128. It'll make your life easier.");
	}
}	

function createGrid( max )
{			
	//add 16 rows to table
	for(var i=0; i < max; i++)
	{
		var row=document.getElementById('gridTable').insertRow(i);	
		//add 16 cells to each row
		for(var j=0; j < max; j++)
		{			
			row.insertCell(j);						
		}		
	}
	
	$("#gridTable td").mouseenter(function(){
			$(this).css("background-color", "red");
		});
}

function removeGrid() {
	$("#gridTable").remove();
	$grid_container = $(".grid_container");
	$grid_container.append("<table id='gridTable'></table>");
}
