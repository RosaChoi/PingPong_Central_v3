function createMatch() {
  $('#newMatch').on('click', function(e) {
    $(this).hide();
    $('#enterPlayers').slideDown('2000');
  });

  $('#create_match').on('click',function(e){
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
      console.log(data)
      $('#match-vs').append($('\
      <li data-id="'+data.match.id+'">\
        <div class="match">\
          <div class="row">\
            <span class="player_names">\
              <div class="team_1 col-sm-3 col-sm-offset-2">\
                <p>'+data.team1[0].name+'</p>\
              </div>\
              <div class="col-sm-3">vs.</div>\
              <div class="team_2 col-sm-3">\
                <p>'+data.team2[0].name+'</p>\
              </div>\
            </span>\
          </div>\
          <div class="row col-sm-offset-1">\
            <button type="button" id="beginMatch" class="btn btn-success">Start Match</button>\
            <button type="button" id="deleteMatch" class="btn btn-default">Delete Match</button>\
          </div>\
        </div>\
      </li>\
      '));
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
