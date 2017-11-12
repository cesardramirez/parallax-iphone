const $iphone = document.getElementById('iphone');
const $mascara = document.getElementById('mascara');

window.addEventListener('scroll', function(event) {
	var initial = 54;  // background-position: -54px;

	var position = initial + window.scrollY;
	$mascara.style.backgroundPosition = '-' + position + 'px';
	console.log("backgroundPosition: " + position + " px");
	
	// var grade = position * 0.02 - initial * 0.02;
	var grade = 0.02 * (position - initial);
	$iphone.style.transform = 'rotate(-' + grade + 'deg)';
	console.log("transform: " + grade + " grades");
});