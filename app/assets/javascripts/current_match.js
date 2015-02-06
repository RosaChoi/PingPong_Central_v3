function showCurrentMatch() {
  $('#currentMatch').on('click', function(){
    $('#match-vs').clone().appendTo($('#currentModal .modal-body'));
  });
  
}
