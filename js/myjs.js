// ACCEPT ON KEYDOWN OR CLICK MESSAGE FROM USER
$(document).ready(
  function(){
// SEARCHING FUNCTION
    $('.ricerca input').keyup(
     function(event){
       var input = $('.ricerca input').val();
       var lookFor = input.toUpperCase();
       $(".item-contatti").hide();
       $(".item-contatti").each(
         function() {
           if($(this).attr('name').includes(lookFor)){
             $(this).show();
     }
   });
});
// ADD USER MESSAGE (BLOCK IF EMPTY)
    $('.bottom input').keydown(
      function(event){
        if($('.bottom input').val().length > 0){
          if(event.which == 13){
            aggiungiMessaggioUtente();
            setTimeout(function(){
              aggiungiMessaggioComputer();
            }, 3000);
          }
        }
      }
    );
    $('.bottom i').click(
      function(){
        if($('.bottom input').val().length > 0){
          aggiungiMessaggioUtente();
          setTimeout(function(){
            aggiungiMessaggioComputer();
          }, 3000);
        }
      }
    );
});
// ADD USER MESSAGE
function aggiungiMessaggioUtente(){
  var bloccoMessaggio = $('.new_text .green_message').clone();
  bloccoMessaggio.removeClass('hide');
  var messaggio = $('.bottom input').val();
  bloccoMessaggio.prepend(messaggio);
  $('div[data-contact=' + index + '].wrapper').append(bloccoMessaggio);
  $('.bottom input').val('');
}
// ADD AUTOREPLY COMPUTER
function aggiungiMessaggioComputer(){
  var bloccoMessaggio = $('.new_text .white_message').clone();
  bloccoMessaggio.removeClass('hide');
  var messaggio = 'New phone,who dis?';
  bloccoMessaggio.prepend(messaggio);
  $('div[data-contact=' + index + '].wrapper').append(bloccoMessaggio);
}
// DELETE MESSAGE OPTION
$(document).on('click', '.message-options', function() {
  $(this).siblings('.elimina-messaggio').toggleClass('active');
  $(this).parents('.green_message').siblings('.green_message').find('.elimina-messaggio').removeClass('active');
  $(this).parents('.green_message, .white_message').siblings('.green_message, .white_message').find('.elimina-messaggio').removeClass('active');
});
$(document).on('click', '.message-delete', function() {
  $(this).parents('.green_message, .white_message').remove();
});
$(document).on('click','.item-contatti',
 function(){
   $('.wrapper').addClass('hidden');
   $('#right .top').addClass('hidden');
   index = parseInt($(this).attr('data-conversazione'));
   $('div[data-contact=' + index + ']').removeClass('hidden');
});
// CURRENT TIME ON GREEN
var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleTimeString();
// TIME ON WHITE
var dt = new Date();
document.getElementById("datetimewhite").innerHTML = dt.toLocaleTimeString();
// EXTRA DARKMODE SOFT FORM
$(".darksun").click(function(){
  $("#forbidden").addClass("darkmode");
});
$(".lightmode").click(function(){
  $("#forbidden").removeClass("darkmode");
});
