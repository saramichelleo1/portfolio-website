console.log("Hi! I'm Sara Michelle and I'm a UX Designer.");


function menuToggle() {
	var x = document.getElementById('myNavToggle');
	if (x.className === 'navtoggle') {
		x.className += 'responsive';
	} else {
		x.className = 'navtoggle';
	}
}
