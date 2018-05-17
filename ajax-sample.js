/*google.load('visualization', '1', {'packages':['corechart']});

google.setOnLoadCallback(drawChart);


function drawChart(){
  var jsonData = $.ajax({
    url: 'http://localhost:8545',
    dataType: "json",
    data:"sampleData.json",
    async: false
  }).responseText;

  var data = new google.visualization.DataTable(jsonData);

  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));

  chart.draw(data, {width:800, height:400});

  alert(showObj(jsonData));
}
*/

$(document).ready(function(){
  $.ajax({
    type:'GET',
    dataType:'jsonp',
    data:{"jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":67},
    url: 'http://localhost:8545',
    jsonp: 'stone',
    success:function(json){
      console.log(showObj(json));
    }
  });
});


function showObj(obj){
  var str = "";
  for(key in obj){
    str += key+"="+obj[key]+"\n";
  }

  return str;
}
