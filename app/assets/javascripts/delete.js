function deleteMatch(){
  $('#match-vs').on('click', '#deleteMatch', function() {
    var id = $(this).closest('li').data('id');
    console.log(id)
    var url = '/matches/' + id
    $.ajax(url, {type: 'delete'}).done(function(res) {
      var li = $('li[data-id="'+ res.id +'"]');
      li.fadeOut(function(){
        li.remove();
        $('#match-vs').append('<li class="alert alert-success">Deleted successfully.</li>');
        $('#match-vs').append('<li><button type="button" class="back btn btn-default">Back</button></li>')
      });
    }).fail(function(data) {
    console.log(".FAIL");
    });
  });
  back();
}

function back(){
  $('#match-vs').on('click','.back', function(){
    console.log('clicked')
    $(this).parent().parent().parent().hide();
    $('#newMatch').show();
    $('#match-vs .back').remove();
    $('#match-vs .alert').remove();
  })
}
