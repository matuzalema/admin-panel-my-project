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

// sections items
var sectionItems = document.getElementsByClassName("section-item");

var generlSection = document.querySelector(".section--general");
var detailsSection = document.querySelector(".section--details");
var linksSection = document.querySelector(".section--links");
var bannersSection = document.querySelector(".section--banners");
var personalDataSection = document.querySelector(".section--personal-data");
var payoutSection = document.querySelector(".section--payout");
var postbackSection = document.querySelector(".section--postback");
var addBannersSection = document.querySelector(".section--add-banners");
var addUrlSection = document.querySelector(".section--add-url");

// navigation items
var navItems = document.getElementsByClassName("menu-item");

var navGeneral = document.querySelector(".nav-general");
var navDetails = document.querySelector(".nav-details");
var navLinks = document.querySelector(".nav-links");
var navBanners = document.querySelector(".nav-banners");
var navPersonalData = document.querySelector(".nav-personal-data");
var navPayout = document.querySelector(".nav-payout");
var navPostback = document.querySelector(".nav-postback");


var removeDisplayClass = function(){
	for (var i = 0; i < sectionItems.length; i++) {
		sectionItems[i].classList.add("display");
	}
};

navGeneral.addEventListener('click', function(){
	removeDisplayClass();
	generlSection.classList.toggle("display");
});

navDetails.addEventListener('click', function(){
	removeDisplayClass();
	detailsSection.classList.toggle("display");
});

navLinks.addEventListener('click', function(){
	removeDisplayClass();
	linksSection.classList.toggle("display");
});

navBanners.addEventListener('click', function(){
	removeDisplayClass();
	bannersSection.classList.toggle("display");
});

navPersonalData.addEventListener('click', function(){
	removeDisplayClass();
	personalDataSection.classList.toggle("display");
});

navPayout.addEventListener('click', function(){
	removeDisplayClass();
	payoutSection.classList.toggle("display");
});

navPostback.addEventListener('click', function(){
	removeDisplayClass();
	postbackSection.classList.toggle("display");
});

for (var i = 0; i < navItems.length; i++) {
	navItems[i].addEventListener("click", function() {
	var current = document.getElementsByClassName("active");
	current[0].className = current[0].className.replace(" active", "");
	this.className += " active";
	});
}

// ======================== modal add banners =============================

var btnsAddBanners = document.querySelectorAll(".btn-add-banners");
var btnAddBannersClose = document.querySelector(".add-banners-close");

var showAddBanners = function(e){
	e.preventDefault();
	document.querySelector(".section--add-banners").classList.toggle("display");
};

for (var i=0; i<btnsAddBanners.length; i++) {
	btnsAddBanners[i].addEventListener('click', showAddBanners);	
}

var hideModalAddBanner = function(e){
	e.preventDefault();
	document.querySelector(".section--add-banners").classList.add("display");
};


btnAddBannersClose.addEventListener('click', hideModalAddBanner);

document.querySelector("#add-banners-overlay").addEventListener('click', hideModalAddBanner);

// ======================== modal add url =============================

var btnsAddUrl = document.querySelectorAll(".add-url");
var bannerAddUrl = document.querySelector(".section--add-url");
var btnAddUrlClose = document.querySelector(".close-add-url");

var showAddUrl = function(e){
	e.preventDefault();
	bannerAddUrl.classList.toggle("display");
};

for (var i=0; i<btnsAddUrl.length; i++){
	btnsAddUrl[i].addEventListener('click', showAddUrl);
}

var hideModalAddUrl = function(e) {
	e.preventDefault();
	bannerAddUrl.classList.add("display");
};

btnAddUrlClose.addEventListener('click', hideModalAddUrl);

document.querySelector("#add-url-overlay").addEventListener('click', hideModalAddUrl);
