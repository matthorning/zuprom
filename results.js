
Parse.initialize("hyA2DksHnpZXS0fMTJWInFhBt6sf9ppT3t0GedZ4", "tnlu9b2XoiZCSe5gS9SAgBu5K1wgXeanbxgYw7ed");

var $table = $('table');
var query = new Parse.Query("Votes");
query.addDescending('votes');
query.find({
  success:function(list) {
    list.forEach(function(element, index, array){
      var obj = element.attributes;
      $table.append('<tr><td>'+obj.name+'</td><td>'+obj.votes+'</td></tr>');
    });
  }
});
