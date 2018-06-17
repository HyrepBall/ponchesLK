$(document).ready(function() {

	//////

	(function() {
		if (window.matchMedia('(max-width: 900px)').matches) {
	    var lastScrollPosition = 0;
	    window.onscroll = function() {
	      var newScrollPosition = window.scrollY;

	      if (newScrollPosition < lastScrollPosition){
	        // ScrollUP
	        $('.header-mobile').removeClass('scrollDown')
	      }else{
	        // ScrollDown
	        $('.header-mobile').addClass('scrollDown')
	      }
	      lastScrollPosition = newScrollPosition;
	    }
    }
		
	})();

	//////

	$('.header-mobile-menu-button').on('click', function() {
		$(this).removeClass('hidden')
		$(this).closest('.header-mobile-head').addClass('opened')
	})

	$('.header-mobile-menu-close').on('click', function(e) {
		$(this).closest('.header-mobile-menu-button').addClass('hidden')
		$(this).closest('.header-mobile-head').removeClass('opened')
		e.stopPropagation()
	})

	//////

	$('.feed-item__close').on('click', function() {
		$(this).closest('.feed-item').slideUp(300)
	});

	//////
	/*
	$(window).scroll(function() {

		var scrollTop = $(this).scrollTop(),
				balanceFormOffsetTop = $('.balance-form').offset().top;

		if ( scrollTop > balanceFormOffsetTop ){
			$('.balance-form').addClass('sticky');
		}
		else{
			$('.balance-form').removeClass('sticky');
		}
	});
	*/

	//////

	$('.show-task-button').click(function() {
		$('.task-modal').addClass('open');
	});
	$('.tarifs-button').click(function() {
		$('.tarifs-modal').addClass('open');
	});
	$('.history-row__disput').click(function() {
		$('.disput-modal').addClass('open');
	});

	//////
	
	$(`
		.modal-close,
		.modal-close-layout,
		.modal-back-close,
		.disput-modal-cancel `)
		.click(function() {
			$(this).closest('.modal-container').removeClass('open')
	});

	$(function() {
		$('select').selectric({
			maxHeight: 200
		});
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