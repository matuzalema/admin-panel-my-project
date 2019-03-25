var hamburgerIcon = document.getElementsByClassName('hamburger-icon')[0];
var sidebar = document.getElementsByClassName('sidebar')[0];

hamburgerIcon.addEventListener('click', function(){
	console.log('hamburger klikniety');
	sidebar.classList.toggle("full-sidebar");
});

// range

var range = document.getElementById("range");
var output = document.querySelector(".hours-range");
output.innerHTML = range.value;

range.oninput = function() {
  output.innerHTML = this.value;
};

// add banners

var btnAdd= document.querySelector(".add");
var 

btnAdd.addEventListener('click', function(){

});