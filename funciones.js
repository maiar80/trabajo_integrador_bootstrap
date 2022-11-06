function boton_borrar() {
    document.getElementById("formulario_tickets").reset();
    document.getElementById("precio_a_pagar").innerHTML = "";
      
   
}

function boton_resumen() {
    var cantidad=parseInt(document.getElementById("cantidad").value);
    var categoria= document.getElementById("categoria").value;
    document.getElementById("precio_a_pagar").innerHTML= (cantidad*200)-(cantidad*200*categoria/100);
}