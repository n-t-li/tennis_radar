$(document).ready(function(){

	var tmp = $('.block_search_options').height();
	$('.a_search_options').click(function(){
		if($(this).hasClass('active')){
			setTimeout("$('.a_search_options').removeClass('active')",600);
			$('.block_search_options').slideUp(600);
			$('.map_holder').animate({top: "59px"},600);
			$('.ymaps-map').animate({height: ($('.ymaps-map').height()+tmp)},600);
		}else{
			$(this).addClass('active');
			$('.block_search_options').slideDown(600);
			$('.map_holder').animate({top: (tmp+59)},600);
			$('.ymaps-map').animate({height: ($('.ymaps-map').height()-tmp)},600);
		}
	});

	$('.block_search_options_group li > .a').click(function(){
		if($(this).hasClass('disable')){
		}else{
			if($(this).hasClass('active')){
				$(this).removeClass('active');
			}else{
				$(this).addClass('active');
			}
		}
	});

	$('.scrollbar-outer').scrollbar();

	$('.a_list').click(function(){
		if($(this).parent().hasClass('open')){
			$(this).text('Развернуть список').parent().removeClass('open');
			$('.block_search_results').slideUp(600);
		}else{
			$(this).text('Свернуть список').parent().addClass('open');
			$('.block_search_results').slideDown(600);
		}
	});

	$('.button_close_small').click(function(){
		$(this).parent().css('display', 'none');
	});

	$('.tabs_1 a').click(function(){
		$('.tabs_1').find('.active').removeClass('active');
		$(this).addClass('active');
		$('.tab_content_1').css('display', 'none');
		$('.'+$(this).attr('id')+'_content').css('display', 'block');
	});

	$('.a_club_description').click(function(){
		if($(this).hasClass('open')){
			$(this).removeClass('open').text('Показать подробную информацию ↓').parent().parent().find('.block_more').slideUp(600);
		}else{
			$(this).addClass('open').text('Скрыть подробную информацию ↑').parent().parent().find('.block_more').slideDown(600);
		}
	});

	$('.a_club_info').click(function(){
		if($(this).hasClass('open')){
			$(this).removeClass('open').text('Показать полное описание ↓').parent().parent().find('.block_more').slideUp(600);
		}else{
			$(this).addClass('open').text('Скрыть полное описание ↑').parent().parent().find('.block_more').slideDown(600);
		}
	});

	$('.tabs_2 a').click(function(){
		$('.tabs_2').find('.active').removeClass('active');
		$(this).addClass('active');
		$('.tab_content_2').css('display', 'none');
		$('.'+$(this).attr('id')+'_content').css('display', 'block');
	});

	$('.a_price_more').click(function(){
		if($(this).hasClass('open')){
			$(this).removeClass('open').text('Полный прайс-лист ↓').parent().parent().find('.block_more').slideUp(600);
		}else{
			$(this).addClass('open').text('Свернуть прайс-лист ↑').parent().parent().find('.block_more').slideDown(600);
		}
	});

	$('.button_on_top').click(function(){
		$('html, body').animate({scrollTop: 0},600);
	});

	$('.a_types_of_courts').click(function(){
		$('.overlay').fadeIn(600);
		$('.popup_types_of_courts').fadeIn(600).css('margin-left', '-'+(($('.popup_types_of_courts').width())/2+30)+'px').css('top', ((document.documentElement.scrollTop || document.body.scrollTop) + 150) + 'px');
	});
	$('.mycarousel img').click(function(){
		$('.mycarousel .active').removeClass('active');
		$(this).parent().addClass('active');
		var tmp = $(this).attr('src');
		$('.img_big').attr('href', tmp);
		$('.img_big img').attr('src', tmp);
	});

	$('.overlay, .button_close').click(function(){
		$('.overlay').fadeOut(600);
		$('.popup').fadeOut(600);
	});

	$('[rel="lightbox"]').lightBox();

	$('.mycarousel').jcarousel({
		wrap: 'both'
	});
	$('.carousel_arrow_left').click(function(){
		$('.mycarousel').jcarousel('scroll', '-=1');
	});
	$('.carousel_arrow_right').click(function(){
		$('.mycarousel').jcarousel('scroll', '+=1');
	});

});