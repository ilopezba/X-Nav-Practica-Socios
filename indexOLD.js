  $(function() {
    $( "#tabs" ).tabs();
	$(document).ready(function() { 
		$.getJSON("/timeline.json", function(data) { 
		/*for(var i = 0; i<2;i++){
			$('#content').append('<div class = foo"></div>');
			$('#foo').append('<div class = "foto"></div>');
			$("#foo").append('<h1>' + data.mensaje[i].Autor+'</h1>');
			$("#foto").append('<h1>' + data.mensaje[i].Avatar+'</h1>');
		}*/
		for(var i = 0; i<2;i++){
			$('<div/>', {id: 'foo'+i}).appendTo('#content');
			$("#foo"+i).append("<img src="+data.mensaje[i].Avatar+ ' alt="Car" width="100" height="100">' +" "+ data.mensaje[i].Autor+": "+data.mensaje[i].Titulo);
			$('<div/>', {id: 'foto'+i}).appendTo('#foo'+i);
			
			
		}
			
	});
    });
  });


/*var myItems = [], $myList = $('#content');
 
for (var i=0; i<100; i++) {
    myItems.push('<li>item ' + i + '</li>');
}
 
$myList.append(myItems.join(''));

*/
