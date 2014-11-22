
Parse.initialize("hyA2DksHnpZXS0fMTJWInFhBt6sf9ppT3t0GedZ4", "tnlu9b2XoiZCSe5gS9SAgBu5K1wgXeanbxgYw7ed");

// find someone
function voteByName(name) {
  var query = new Parse.Query("Votes");
  query.equalTo("name", name);
  query.find({
    success:function(list) {
      var obj = list[0];
      obj.increment("votes");
      obj.save();
    }
  });
}

var sel = $('.basic').fancySelect();
sel.on('change.fs', function(){
  var $sel = $(this);
  var name = $sel.val();
  var kingOrQueen = $sel.attr('id');
  $('#vote-' + kingOrQueen).data('name', name);
  $('#vote-' + kingOrQueen).prop('disabled', false);
});
$('button.vote').on('click', function(e) {
  var name = $(e.currentTarget).data('name');
  voteByName(name);
  $(this).text('voted');
  $(this).prop('disabled', true);
});

//var Votes = Parse.Object.extend("Votes");
//var votes = new Votes();
//votes.save({name: "Martina", votes: 0}).then(function(object) {
//});
