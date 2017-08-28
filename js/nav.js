var tog = false

function navToggle(x) {
  x.classList.toggle("change");
  
  $('.mainNavDropDown').slideToggle(500);

	if (tog === false){
		document.getElementById("mainWindow").style.backgroundColor = "#282828";
		document.getElementById("head").style.backgroundColor = "#282828";
		document.body.style.backgroundColor = "#282828";
		tog = true;
	} else {
		document.getElementById("mainWindow").style.backgroundColor = "#e5e5e5";
		document.getElementById("head").style.backgroundColor = "#1F364E";
		document.body.style.backgroundColor = "#C7BFAF";
		tog = false;
	}
}







