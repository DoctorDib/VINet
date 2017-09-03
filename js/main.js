var tog = false
var myIndex = 0;
var slideIndex = 36;





/** MAIN */
function main(){
	
	$('#content').hide();
	$('#content').fadeIn(1000);

	$('#content').load('content/home.html').delay(100);
	
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




/** BUTTONS SCRIPT LOAD */
function home(){
	$('#content').hide();
	$('#content').load('content/home.html').fadeIn(1000);
};

function meet_the_team(){
	$('#content').hide();
	$('#content').load('content/meet_the_team.html').fadeIn(1000);
};

function join_us(){
	$('#content').hide();
	$('#content').load('content/join_us.html').fadeIn(1000);
	carousel();
	showDivs(slideIndex);
};

function about_us(){
	$('#content').hide();
	$('#content').load('content/about_us.html').fadeIn(1000);
};

function contact_us(){
	$('#content').hide();
	$('#content').load('content/contact_us.html').fadeIn(1000);
};










/** LOADING PROFILE DATA */
var loadProfile = function (user) {
	$('#profileContent').hide();
	
	var url = 'content/team/' + user + '.html'
	
	$('#profileContent').load(url).fadeIn(1000);
}



var Bool = true;

var toggleClick = function (name) {

	var modal = document.getElementById('modal-content');
	var back = document.getElementById('modal-background');
	
	if (Bool === true){
		Bool = false;
		document.getElementById("mainWindow").style.backgroundColor = "#282828";
		modal.style.display = "block";
		back.style.display = "block";
		loadProfile(name);
		
	} else {
		Bool = true;
		document.getElementById("mainWindow").style.backgroundColor = "#e5e5e5";
		modal.style.display = "none";
		back.style.display = "none";
	}

}

$(document).ready(main);




