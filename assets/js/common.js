$(document).ready(function(){
	$('.noti_wrap').length && notiBtn(); //

});

function notiBtn () {
	var noticeBtn = $('.noti_wrap .noti_tit a');

	noticeBtn.on('click', function(e){
		// e.preventDefault()
		$('.noti_wrap').removeClass('on');
		$(this).closest('.noti_wrap').addClass('on')
	})
}