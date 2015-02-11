function gameScores(){
  $('#updateScore').on('click', function(e){
    var id =  $('#updateScore').parent().parent().parent().find('#match-vs li').data('id');
    var game1Team1Score = parseInt($('#t1Game1Score').val());
    var game2Team1Score = parseInt($('#t1Game2Score').val());
    var game3Team1Score = parseInt($('#t1Game3Score').val());
    var game1Team2Score = parseInt($('#t2Game1Score').val());
    var game2Team2Score = parseInt($('#t2Game2Score').val());
    var game3Team2Score = parseInt($('#t2Game3Score').val());


    $.ajax({
      type: "patch",
      url: "/matches/" + id,
      data: {
        match: {
          games: {
            game1: {
              team_1_score: game1Team1Score,
              team_2_score: game1Team2Score,
            }
          }
        }
      }
    }).done(function (data) {
      console.log(data);
    });
  });

}
