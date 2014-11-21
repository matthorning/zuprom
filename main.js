$('.open-popup-link').magnificPopup({
  type:'inline',
  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
});

Parse.initialize("hyA2DksHnpZXS0fMTJWInFhBt6sf9ppT3t0GedZ4", "tnlu9b2XoiZCSe5gS9SAgBu5K1wgXeanbxgYw7ed");

// find someone
function voteByName(name) {
  var query = new Parse.Query("Votes");
  query.equalTo("name", name);
  query.find({
    success:function(list) {
      var obj = list[0];
      obj.increment("votes");
      obj.save({
        success: voteSuccess
      });
    }
  });
}
function voteSuccess(object) {

}

$('.wheel').on('click', '> div', function(e) {
  var name = $(e.currentTarget).text();
  alert(name);
  var kingOrQueen = $(e.delegateTarget).attr('id');
  $('#choose-' + kingOrQueen).html(name);
  $('#vote-' + kingOrQueen).data('name', name);
  $('#vote-' + kingOrQueen).prop('disabled', false);
  $.magnificPopup.close();
});
$('.vote').on('click', function(e) {
  var name = $(e.currentTarget).data('name');
  console.log(name);

});

//voteByName("Kevin");

//var Votes = Parse.Object.extend("Votes");
//var votes = new Votes();
//votes.save({name: "Kevin", votes: 0}).then(function(object) {
//});
