var $output = $("#output");

function loadData() {
  $("#form").submit(function getPlanets() {
    var planet = $("#planet").val();
    console.log(planet);
    var planetAPI = "https://images-api.nasa.gov/search?q=" + planet;
    $.getJSON(planetAPI, function(data) {
      var imageData = data.collection.items;
      for (var i = 0; i < 10; i++) {
        var img = imageData[i];
        var zero = 0;
        var source = img.data[zero];
        var imgZero = img.links[zero];
        //var title = img.data;
        $output.append(
          '<div class="planet-photo" >' +
            '<img src="' +
            imgZero.href +
            '">' +
            "<p>" +
            "<b>Title:</b> " +
            source.title +
            "</p>" +
            "</div><br>"
        );
      }
    })
      .done(function() {
        console.log("success!");
      })
      .fail(function() {
        console.log("Error loading images!");
      });
  });
  return false;
}

$("#form").submit(loadData);

function clearData() {
  $("#output").text("");
}

$("#reset").click(clearData);
