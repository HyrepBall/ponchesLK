$(document).ready(function() {

	

	
	$('.mac-tabs').tabslet({
		attribute: 'alt',
		animation: true,
		controls: {
			prev: '.mac-prev',
			next: '.mac-next'
		}
	});
	$('.pluses-tabs').tabslet({
		attribute: 'alt',
		animation: true,

	});

	$('.happy-slider').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [
				{
					breakpoint: 1400,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 1,
						infinite: true,
					}
				},
				{
					breakpoint: 950,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						infinite: true,
					}
				},
				{
					breakpoint: 710,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						infinite: true,
					}
				},
				{
					breakpoint: 410,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true,
					}
				},
			],
	});

	//form
	 $("form").submit(function (e) {
		$.ajax({
				type: "POST",
				url: "mail.php",
				data: $(this).serialize()
			}).done(function() {
				alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			});
			return false;
	 });

	 /*scrollToLink*/
	$('a[href^="#"], a[href^="."]').click( function(){ // если в href начинается с # или ., то ловим клик
		 var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href
			 if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
		 $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 800); // анимируем скроолинг к элементу scroll_el
			 }
		 return false; // выключаем стандартное действие
	 });

});