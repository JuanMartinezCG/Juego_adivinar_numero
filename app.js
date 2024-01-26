// el document.document.querySelector(`nombre del selector`); sirve para usar elementos del HTML
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMAximo = 10;

console.log(numeroSecreto); 

function asignarTextoElementos(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function VerificarIntento(){
// el document.getElementById(`nombre ID`); sirve para usar elementos del HTML solo por el id
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
// el "===" es para decirle al programa que tambien debe ser igual al tipo de dato
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElementos('p', `Acertaste El Numero en ${intentos} ${(intentos == 1) ? 'vez ' : 'veces'}`);
        /*con el ".removeAttribute('nombre del atrivuto')" puedo remover un atrivuto de un elementoen este caso el disable ace que el boton este invavilitado
        hasta que el jugador gane y se active al momento que suceda esto*/
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        // El Usuario no acerto 
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElementos('p', 'El Numero Secreto es Menor');
        }else{
            asignarTextoElementos('p', 'El Numero Secreto es Mayor');
        }
        limpiarCaja();
    }
    intentos++;
    return;
}

// limpiar la caja donde se escribe el numero
function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario').value = '';;
}

// genere el numero el cual se va adivinar
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMAximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados); 
    //si ya se usaron todos los numero
    if(listaNumerosSorteados.length == numeroMAximo){
        asignarTextoElementos('p', `ya se sortearon todos los numero posibles`);
    }else{
        // si el numero genera esta en la lista 
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

// condiciones inciales al inciar el juego
function condicionesInicales(){
    asignarTextoElementos('h1', '!juego del numero secreto!');
    asignarTextoElementos('p', `escoge un numero del 1 al ${numeroMAximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    // limpiar la caja
    limpiarCaja();
    // indicar de intervalo de numeros
    // generar el numero aleatorio
    // inicializar los intentos de nuevo
    condicionesInicales(); 
    // deshabilitar el boton de "nuevo juego"
    // con el ".setAttribute('nombre del atributo','condicion del atributo(false o true)')" nos deja agregar un atributo al elemento deseado y activarlo o dejarlo inactivo
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesInicales(); 

