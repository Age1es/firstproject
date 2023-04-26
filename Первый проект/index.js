let offset = 0
const sliderline = document.querySelector('.slider-line')

document.querySelector('.slider-next').addEventListener('click', function() {
	offset = offset + 450
	if (offset > 1350) {
		offset = 0
	}
	sliderline.style.left = -offset + 'px'
})

document.querySelector('.slider-prev').addEventListener('click', function() {
	offset = offset - 450
	if (offset < 0) {
		offset = 1350
	}
	sliderline.style.left = -offset + 'px'
})