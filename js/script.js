$(function(){
	
	//$('.nav li').hover(function(){
	//	$('.nav li').removeClass('selected');
	//	$(this).addClass('selected');
	//}) 
	
	$('.nav li').hover(function(){
		$(this).find('dd').each(function(){
			var n = $(this).index();
			$(this).fadeIn();
			$(this).css({'display':'block','opacity':0}).delay(100).stop().animate({'left':0, 'top':0, 'opacity':1},200*n);
		})
	},
	function(){
		$(this).find('dd').each(function(){
			$(this).stop().animate({'left':200,'top':50},200);
			$(this).css({'display':'none','opacity':1});
		})
	})
})