class Alumno {
    constructor(nombre, edad, correo, contraseña) {
      this.nombre = nombre;
      this.edad = edad;
      this.correo = correo;
      this.contraseña = contraseña;
      this.clasesInscritas = [];
      this.pagosRealizados = [];
    }
  
    inscribirClase(clase, fecha) {
      this.clasesInscritas.push({ clase, fecha });
    }
  
    realizarPago(monto) {
      this.pagosRealizados.push({
        fecha: new Date(),
        monto: monto,
      });
    }
  
    obtenerSaldoPendiente() {
      const totalPagado = this.pagosRealizados.reduce((total, pago) => total + pago.monto, 0);
      return this.calcularTotalClases() - totalPagado;
    }
  
    calcularTotalClases() {
    }
  }
  
  function crearCuenta() {
    let nombre;
    while (true) {
      nombre = prompt("Ingrese su nombre:");
      if (/^[a-zA-Z]+$/.test(nombre)) {
        break;
      } else {
        alert("El nombre debe contener solo letras.");
      }
    }
  
    let edad;
    while (true) {
      let edadStr = prompt("Ingrese su edad:");
      if (/^\d+$/.test(edadStr)) {
        edad = parseInt(edadStr);
        break;
      } else {
        alert("La edad debe contener solo números.");
      }
    }
  
    let correo;
    while (true) {
      correo = prompt("Ingrese su correo:");
      if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(correo)) {
        break;
      } else {
        alert("El correo no es válido. Debe tener el formato correcto.");
      }
    }
  
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
  
    const alumno = new Alumno(nombre, edad, correo, contrasena);
  
    return alumno;
  }
  
  function calcularPrecioConRecargo(alumno) {
    let precios = [100, 200, 300];
  
    console.log("Opciones de precios:");
    for (let i = 0; i < precios.length; i++) {
      console.log(`Opción ${i + 1}: Precio: $${precios[i]}`);
    }
  
    let opcionElegida = parseInt(prompt("Elige un plan de pago (1, 2 o 3):"));
  
    if (opcionElegida >= 1 && opcionElegida <= 3) {
      let precioElegido = precios[opcionElegida - 1];
      let precioConRecargo = precioElegido * 1.1;
  
      // Inscribir la clase y realizar un pago
      alumno.inscribirClase(`Plan ${opcionElegida}`, "Hoy");
      alumno.realizarPago(precioConRecargo);
  
      console.log(`Has elegido el Plan ${opcionElegida}. Precio original: $${precioElegido} - Precio con recargo: $${precioConRecargo}`);
      console.log(`Saldo pendiente: $${alumno.obtenerSaldoPendiente()}`);
    } else {
      console.log("Opción inválida. Por favor, elige una opción válida.");
    }
  }
  
  function reservarClases(alumno) {
    let opcionesClases = ["Yoga", "Funcional", "Pilates"];
  
    console.log("Opciones de clases:");
    for (let i = 0; i < opcionesClases.length; i++) {
      console.log(`Opción ${i + 1}: Clase: ${opcionesClases[i]}`);
    }
  
    let opcionElegida = parseInt(prompt("Elige una clase (1, 2 o 3):"));
  
    if (opcionElegida >= 1 && opcionElegida <= 3) {
      let fecha;
      while (true) {
        fecha = prompt("Elige una fecha para la reserva (YYYY-MM-DD):");
        if (/^\d{4}-\d{2}-\d{2}$/.test(fecha)) {
          break;
        } else {
          alert("La fecha debe tener el formato YYYY-MM-DD.");
        }
      }
  
      alumno.inscribirClase(opcionesClases[opcionElegida - 1], fecha);
  
      console.log(`Has reservado la clase de ${opcionesClases[opcionElegida - 1]} para el ${fecha}`);
    } else {
      console.log("Opción inválida. Por favor, elige una opción válida.");
    }
  }
  
  // Crear la cuenta del alumno
  const alumno1 = crearCuenta();
  
  // Calcular el precio con recargo y realizar el pago
  calcularPrecioConRecargo(alumno1);
  
  // Reservar clases
  reservarClases(alumno1);
  
  function buscarClase(alumno) {
    let nombreClase = prompt("Ingrese el nombre de la clase que desea buscar:");
    
    const claseEncontrada = alumno.clasesInscritas.find((clase) => {
      return clase.clase === nombreClase;
    });
  
    if (claseEncontrada) {
      console.log(`Clase encontrada: ${claseEncontrada.clase} - Fecha: ${claseEncontrada.fecha}`);
    } else {
      console.log("No se encontró ninguna clase con ese nombre.");
    }
  }

  buscarClase(alumno1);