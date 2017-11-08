function alcerrar(){
	//return "Está a punto de cerrar esta página...";
}
function Cargando(){
    document.getElementById("imgCargando").style.display = '';
    //document.getElementById('body').style.overflow = 'hidden';
    document.getElementById('bloqueo').style.display = 'none'; 
}
function NoCargando(){
    document.getElementById("imgCargando").style.display = 'none';
    //document.getElementById('body').style.overflow="scroll"; 
    document.getElementById('bloqueo').style.display =''; 
}
/*function Validar(documento){
	var ss = SpreadsheetApp.openById('1ojtEd5DGSTnORK4lAUBah2oYmvc5Q8oxkoogy7W52cc').getSheetByName('ACTIVIDADES');
}
function BuscarDocumento(inferior,superior,documento,centro_1){
	var ss = SpreadsheetApp.openById('1ojtEd5DGSTnORK4lAUBah2oYmvc5Q8oxkoogy7W52cc').getSheetByName('BD');
	var centro = Math.ceil((superior-inferior)/2)


}
function Decodificador(celda){
	var informacion = [];
	var final = false;
	while(final == false){
		var pipe = celda.search("\\|");
		var valor = celda.substring(0,pipe);

		if(celda = ""){
			final = true;
		}
	}
}*/