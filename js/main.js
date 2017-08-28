var tog = false
var myIndex = 0;
var slideIndex = 36;





/** MAIN */
function main(){
	
	$('#content').hide();
	$('#content').fadeIn(1000);

	$('#content').load('content/home.html').delay(100);
	
	carousel()
};





/** NAVIGATION HAMBURGER */
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





/** SCROLL SCRIPT */
$(document).ready(function(){

	var div = $("#divToShowHide");
	var pos = div.position();
	var top_offset = $(window).scrollTop();

	$(window).scroll(function () {
		var windowpos = $(window).scrollTop();
		
		if (window.pageYOffset == 0){
			div.removeClass("AfterScroll");
		}
		else if (windowpos >= (pos.top - 10)) {
			div.addClass("AfterScroll");
		}
	});
});





/** GALLERY*/
function carousel() {
	var i;
	var x = document.getElementsByClassName("mySlides");
	for (i = 0; i < x.length; i++) {
	   x[i].style.display = "none";  
	}
	myIndex++;
	if (myIndex > x.length) {myIndex = 1}    
	x[myIndex-1].style.display = "block"; 
		
	setTimeout(carousel, 1000);
	
}

function plusDivs(n) {
	showDivs(slideIndex += n);
}

function currentDiv(n) {
	showDivs(slideIndex = n);
	myIndex = n;
}

function showDivs(n) {
	var i;
	var x = document.getElementsByClassName("mySlides");

	if (n > x.length) {s
		lideIndex = 1;
	}
	if (n < 1) {
		slideIndex = x.length;
	}
	
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	
	x[slideIndex-1].style.display = "block";
	
}





/** BUTTONS SCRIPT LOAD */
function home(){
	$('#content').hide();
	$('#content').load('content/home.html').fadeIn(1000);
};

function gallery(){
	$('#content').hide();
	$('#content').load('content/gallery.html').fadeIn(1000);
	carousel();
	showDivs(slideIndex);
};

function projects(){
	$('#content').hide();
	$('#content').load('content/projects.html').fadeIn(1000);
};

function contact(){
	$('#content').hide();
	$('#content').load('content/contact.html').fadeIn(1000);
};

$(document).ready(main);




