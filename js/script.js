// ======================== mobile navigation ========================================

var hamburgerIcon = document.getElementsByClassName('hamburger-icon')[0];
var sidebar = document.getElementsByClassName('sidebar')[0];

hamburgerIcon.addEventListener('click', function(){
	sidebar.classList.toggle("sidebar-mobile");
});


// ======================== range =====================================================

var range = document.getElementById("range");
var output = document.querySelector(".hours-range");
output.innerHTML = range.value;

range.oninput = function() {
  output.innerHTML = this.value;
};


// ======================== navigation toggle class active =============================

var navActive = document.getElementsByClassName("menu-item");

for ( var i=0; i<navActive.length; i++) {
	navActive[i].addEventListener('click', function(){
		var current = document.getElementsByClassName("nav-active");
		current[0].className = current[0].classList.toggle("active");
		this.className += "nav-active";
	}
)};
