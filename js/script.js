var hamburgerIcon = document.getElementsByClassName('hamburger-icon')[0];
var sidebar = document.getElementsByClassName('sidebar')[0];

hamburgerIcon.addEventListener('click', function(){
	console.log('hamburger klikniety');
	sidebar.classList.toggle("full-sidebar");
});

