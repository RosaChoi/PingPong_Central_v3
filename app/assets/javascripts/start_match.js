function startMatch(){
  $('#match-vs').on('click', '#beginMatch', function() {
    var id = $(this).closest('li').data('id');
    var teamOneName = $(this).closest('li').find('.team_1').children().text()
    var teamTwoName = $(this).closest('li').find('.team_2').children().text()

    $('#team_1 a').html(teamOneName);
    $('#team_2 a').html(teamTwoName);

    $('#match-vs').hide();
    $('#newMatch').hide();
    $('#startMatch').hide();
    $('#scoreboard').fadeIn('slow');

    $.ajax({
      type: "patch",
      url: "/matches/" + id,
      data: {
        match: {
          in_progress: true,
        }
      }
    }).done(function (data) {
      console.log(data)
    }).fail(function (data) {
      console.log("not saved");
    });
  });
}
