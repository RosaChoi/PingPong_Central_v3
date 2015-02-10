function createMatch() {
    $('#newMatch').hide();
    $('#enterPlayers').slideDown('2000');

  $('#create_match').on('click',function(e){
    console.log('createMatch')
    var players = [];
    var playerNames = $('#enterPlayers input');

    for(var i = 0; i < playerNames.length; i++) {
      players.push($($('#enterPlayers input')[i]).val());
    }

    $.ajax({
      type: "post",
      url: "/matches",
      data: {
        match: {
          names: players,
        }
      }
    }).done(function (data) {
      console.log("CREATE MATCH DONE")
      console.log(data)
      $('#match-vs').empty();
      var source = $("#matchList").html();
      var template = Handlebars.compile(source);
      var context = {
        team_one_name1: data.team1[0].name,
        team_one_name2: data.team2[0].name,
        matchId: data.match.id,
      }
      var html = template(context);
      $('#match-vs').append(html);

      // append new match to list of matches
      $('#startMatch').fadeIn(function(){
        $('#match-vs li').show();
        $('#enterPlayers input').val("");
        $('#enterPlayers').slideUp('slow');
      });

    }).fail(function (data) {
      console.log("not saved");
    });
  });

}
