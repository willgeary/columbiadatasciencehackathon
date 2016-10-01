var ngraph = [];

function neighbors(country, thresh, ticker) {
  return ngraph[country][thresh].filter(function(x) {
    return (x[0] == ticker || x[1] == ticker);
  }).map(function(x) {
    if (x[0] == ticker) {
      return x[1];
    } else {
      return x[0];
    }
  });
}

$.getJSON("json files/pr.json","",function(data) {ngraph[0] = data;});
$.getJSON("json files/jp.json","",function(data) {ngraph[1] = data;});
function replneighbors() {
  var thresh = parseInt($("#threshold").val());
  var country = parseInt($("#country").val());
  $("#neighbors").html(neighbors(country, thresh, $("#ticker").val()).join("<BR>"));
  if (thresh > 5) {
    if (country == 0) {
      $("#pic").html('<img src="graph-images/' + thresh + '.png" />');
    } else {
      $("#pic").html('<img src="graph-images/JP' + thresh + '.png" />');
    }
  } else {
    $("#pic").html("");
  }
}
$("#country").on("change", replneighbors);
$("#ticker").on("change", replneighbors);
$("#threshold").on("change", replneighbors);
