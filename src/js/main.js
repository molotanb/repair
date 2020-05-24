/* var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');
var interval;

function closes () {
    modal.classList.remove('modal_active');
    clearInterval(interval);
};

button.addEventListener('click', function() {
    modal.classList.add('modal_active');
    
    interval =  setInterval(closes, 5000);
});


close.addEventListener('click', closes);
 */

//--------------------------------------------------



$(document).ready(function(){

    //Стили по селетору//
    /* $('.modal-dialog__title').css('border', 'solid 3px #000'); */ 

    //Клик по элементц//
    /* $('.modal').dblclick(function(){
        $('.modal-dialog__title').css('border', 'solid 3px #000');
    });
 */
    /* $('.modal-dialog').mouseenter(function(){
        $(this).toggleClass('red')
    });
    $('.modal-dialog').mouseleave(function(){
        $(this).toggleClass('red')
    }); */

    /* $('#userName').change(function(){

        $('.offer-info__time').text(', ' + $(this).val());

    }); */


    // Запись данных в селектор//
    /* $('#userName').keyup(function(){

        $('.offer-info__time').text(', ' + $(this).val());

    });  */

    //Анимация//

 /*    $('#userName').delay(1000).animate({'width': '100%'}, 1000).delay(2000).animate({'width': '240px'}, 1000)
    $('#userPhone').delay(1000).animate({'width': '100%'}, 1000).delay(2000).animate({'width': '240px'}, 1000)
  */
});