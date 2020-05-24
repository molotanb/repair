$(document).ready(function(){

    var button = $('#button');
    var modal = $('#modal');
    var close = $('#close');
    var closeBacground = $('#modal');

    button.on('click', function(){

        modal.addClass('modal_active');
        $('html, body').animate({scrollTop: 0},500);
		return false;
    
    });

    close.on('click', function(){

        modal.removeClass('modal_active');
    
    });

    /* closeBacground.on('click', function(){

        modal.removeClass('modal_active');
    
    }); */

});
