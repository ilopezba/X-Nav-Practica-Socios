 var mensajes = "";
 var mismensajes = "";
 var actualizo = "";
 $(function() {
    $( "#tabs" ).tabs();
	$( "#content").accordion();
	$("#content").accordion("destroy");

	$(document).ready(function() { 
		$.getJSON("/timeline.json", function(data) { 
			
			for(var i = 0; i< data.mensaje.length ;i++){
				var Autor = data.mensaje[i].Autor;
				var Titulo = data.mensaje[i].Titulo;
				var Contenido = data.mensaje[i].Contenido;
				var Fecha = data.mensaje[i].Fecha;
				var FirstLine = "<img src="+ data.mensaje[i].Avatar+" style='width: 100px; height: 100px;'>"+ " " + Autor + ": " +  Titulo;
				mensajes += "<h3>"+FirstLine+"</h3><div><p>"+Contenido+"<br>"+Fecha+"</p></div> ";
				
			}
			$("#content").html(mensajes);
			$( "#content" ).accordion({active: true});
		});

		$.getJSON("/myline.json", function(midata) { 
			$( "#miss" ).accordion();
			$("#miss").accordion("destroy");			
			for(var i = 0; i< midata.mensaje.length ;i++){
				var Autor = midata.mensaje[i].Autor;
				var Titulo = midata.mensaje[i].Titulo;
				var Contenido = midata.mensaje[i].Contenido;
				var Fecha = midata.mensaje[i].Fecha;
				var FirstLine = "<img src="+ midata.mensaje[i].Avatar+" style='width: 100px; height: 100px;'>"+ " " + Autor + ": " +  Titulo;
				mismensajes += "<h3>"+FirstLine+"</h3><div><p>"+Contenido+"<br>"+Fecha+"</p></div> ";
				
			}
			$("#miss").html(mismensajes);
			$( "#miss" ).accordion({active: true});
		});
		$.getJSON("/update.json", function(updatedata) { 
			
			$("#Update").html("Tienes "+updatedata.mensaje.length+" noticias nuevas");
		});
	$("#botUpdate").click(updateSocial);
		
    });
  });

function updateSocial(){
		$("#content").accordion("destroy");
		$.getJSON("/update.json", function(updatedata) { 
			
			if (!actualizo){
				for(var i =0; i< updatedata.mensaje.length ;i++){
					var Autor = updatedata.mensaje[i].Autor;
					var Titulo = updatedata.mensaje[i].Titulo;
					var Contenido = updatedata.mensaje[i].Contenido;
					var Fecha = updatedata.mensaje[i].Fecha;
					var FirstLine = "<img src="+ updatedata.mensaje[i].Avatar+" style='width: 100px; height: 100px;'>"+ " " + Autor + ": " +  Titulo;
					mensajes = "<h3>"+FirstLine+"</h3><div><p>"+Contenido+"<br>"+Fecha+"</p></div> " + mensajes;
				}
			}
			actualizo = true;
			$("#content").html(mensajes);
			$( "#content" ).accordion({active: true});
			$("#Update").html("Tienes "+0+" noticias nuevas");
		});
}

/*var myItems = [], $myList = $('#content');
 
for (var i=0; i<100; i++) {
    myItems.push('<li>item ' + i + '</li>');
}
 
$myList.append(myItems.join(''));

*/
