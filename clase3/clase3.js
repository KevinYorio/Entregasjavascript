
//for//

/*for( let i= 0 ; i < 10 ; i = i + 1){

    console.log("Mensaje desde el bucle For");
    console.log("Estamos en la vuelta ", i );
}*/

// se ingresar 5 usuarios por teclados, ir dando la bienvenida a cada uno//

/*for( let i = 0 ; i < 5 ; i = i + 1){

    //let nombredeUsuario = prompt("ingrese su nombre");
   // console.log("Bienvenido: ", nombredeUsuario);

}*/


/* for( let i = 0 ; i < 51 ; i = i + 1){
    console.log(i);
    }*/

// se pide un numero por teclado y se muestra la tabla del mismo

/*let numero_usuario = prompt("ingrese un numero y la muestro la tabla del mismoi");

numero_usuario = parseInt(numero_usuario);

for( let i = 0 ; i < 11 ; i = i + 1 ){

    let resultado = numero_usuario * i;
    console.log( numero_usuario, "x" , i , "=", resultado);
    }*/


// ingreso de sesion con error posible    
/* let usuario_registrado = "Pepe";
    let intentos = 1;

    for( let i = 0; i < 3; i = i +1){
        
        let nombreUsuario = prompt("ingrese su nombre");

        if( nombreUsuario != usuario_registrado && intentos < 3){
        console.log("Datos incorrectos");
        intentos = intentos + 1;
        continue;
        }

        if( intentos == 3){
            console.log("chau tarjeta");
            break;
        }

        if( nombreUsuario == usuario_registrado){
            console.log("Bienvenido ", nombreUsuario);
            break
        }
    } */

// MIENTRAS LA CONDICION SE EVALUE POR VERDAD - REPITO

/* while( 10 > 5){
    console.log("Hola desde el bucle");
} */

/* let nombre_usuario = prompt("Ingrese su nombre o FIN");

while( nombre_usuario != "FIN"){
    console.log("Bienvenido al sistema: ", nombre_usuario);
    nombre_usuario = prompt("Ingrese su nombre o FIN");
}*/

//pido un numero por teclado y muestro el siguiente por consola, se finaliza cuando se ingrese un numero negativo

/* let numero = prompt("ingrese un numero, solo positivo");

numero = parseInt(numero);

while( numero >= 0){ 
    console.log("Usted ingreso el numero ", numero);
    console.log("El siguiente es: ", numero+1);

    //actualizo
    numero = prompt("ingrese un numero, se mostrata por consola el siguiente. Solo se aceptan positivos");
    numero = parseInt(numero);
    } */


    //do while

   /* let nombre_usuario = prompt("ingrese su nombre");

    do{
        if( nombre_usuario == "ERROR"){
            console.log("se detecto erroe en la consulta");
        }
        else{
            console.log("bienvenido al sistema");
            nombre_usuario = prompt("ingrese su nombre");
        }
    }

    while( nombre_usuario != "ERROR") */