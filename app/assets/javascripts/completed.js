function completedMatch(){
$('.row').on('click', '#done', function(){
  console.log('clicked');

  $.ajax({
    type: "patch",
    url: "/matches/" + id,
    data: {
      match: {
        completed: true,
      }
    }
  }).done(function (data) {
    console.log("START MATCH DONE")
    console.log(data)
  }).fail(function (data) {
    console.log("START MATCH FAIL")
    console.log("not saved");
  });


})

}
