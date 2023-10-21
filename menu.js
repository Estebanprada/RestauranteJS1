function mostrar() {
    const menuplatos = parseFloat(document.getElementById("platoscomida").value);
    let cantplatos = parseInt(document.getElementById("cantidad").value);
    const menubebidas = parseFloat(document.getElementById("numbedidas").value); 
    let cantbebidas = parseInt(document.getElementById("cantidadBebidas").value);

    var resPlatos = menuplatos * cantplatos; 
    var resBebida = menubebidas * cantbebidas; 

    var total = resPlatos + resBebida;

    
    document.getElementById("resultado").textContent = `Total a pagar: $${total}`;
}


