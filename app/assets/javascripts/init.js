$(document).ready(function () {
  init();
});

function init() {
  $('#newMatch').on('click', createMatch);
  $('#match-vs').on('click', '#deleteMatch', deleteMatch);
  $('#match-vs').on('click', '#beginMatch', startMatch);
  gameScores();
  completedMatch();
}
