function startMatch(){
  $('#match-vs').on('click', '#beginMatch', function() {
    var id = $(this).closest('li').data('id');
    console.log(id)
    $('#match-vs').hide();
    $('#newMatch').hide();
    $('#startMatch').hide();
    $('#scoreboard').fadeIn('slow');

  });
}
