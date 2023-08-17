function calcularPrecioConRecargo() {
    // Pedir nombre de usuario
    let usuario = prompt("Ingrese su nombre de usuario:");

    // Pedir contraseña con al menos un número y una letra
    let contrasenaValida = false;
    let contrasena;
    
    while (!contrasenaValida) {
    contrasena = prompt("Ingrese una contraseña con al menos un número y una letra:");
    if (/\d/.test(contrasena) && /[a-zA-Z]/.test(contrasena)) {
        contrasenaValida = true;
    } else {
        alert("La contraseña debe contener al menos un número y una letra.");
    }
    }

    // Mostrar opciones de precios y permitir al usuario elegir
    let precios = [100, 200, 300];

    console.log("Opciones de precios:");
    for (let i = 0; i < precios.length; i++) {
    console.log(`Opción ${i + 1}: Precio: ${precios[i]}`);
    }

    // Pedir al usuario que elija una opción
    let opcionElegida = parseInt(prompt("Planes a elegir: 2 veces por semana (1), Solo pilates(2), Pase libre(3)"));
    
    if (opcionElegida >= 1 && opcionElegida <= 3) {
    let precioElegido = precios[opcionElegida - 1];
      let precioConRecargo = precioElegido * 1.1;
    console.log(`Usted eligió la opción ${opcionElegida}. Precio original: ${precioElegido} - Precio con recargo: ${precioConRecargo}`);
    } else {
    console.log("Opción inválida. Por favor, elija una opción válida.");
    }
}

  // Llamando a la función
calcularPrecioConRecargo();
