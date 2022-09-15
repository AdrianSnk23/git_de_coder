/***** Turnos para paseo de mascotas*****/


class Cliente {
    constructor(nombre, apellido, nombreMascota, diaDePaseo, turnoDePaseo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.nombreMascota = nombreMascota;
        this.diaDePaseo = diaDePaseo;
        this.turnoDePaseo = turnoDePaseo
    }
}

const clienteAbel = new Cliente("Abel", "Derico", "Gonzalo", "lunes", 14);
const clienteMonica = new Cliente("Monica", "Gamito", "Luna", "martes", 16);
const clienteDario = new Cliente("Dario", "Melendez", "Helen", "miercoles", 14);
const clienteEstela = new Cliente("Estela", "De Santis", "Morita", "lunes", 15);

const arrayClientes = [];

arrayClientes.push(clienteAbel);
arrayClientes.push(clienteMonica);
arrayClientes.push(clienteDario);
arrayClientes.push(clienteEstela);

console.log(arrayClientes);

const arrayDiasHabiles = ["lunes", "martes", "miercoles", "jueves", "viernes"]
const arrayTurnos = [13, 14, 15, 16]

function menu() {
    alert("Bienvenido a Petsitters");
    let opcion = parseInt(prompt("Ingrese una opción: \n 1) Nuevo Paseo \n 2) Modificación de horario \n 3) Consulta de paseo \n 4) Salir"));
    return opcion;
}

function altaCliente() {
    let nombre = prompt("Ingrese su nombre: ");
    let apellido = prompt("Ingrese su apellido: ");
    let nombreMascota = prompt("Ingrese el nombre de la mascota: ");
    let diaDePaseo = prompt("Ingrese un dia hábil: ");
    let turnoDePaseo = parseInt(prompt("Ingrese un horario: \n 13 \n 14 \n 15 \n 16\n "));
    let cliente = new Cliente(nombre, apellido, nombreMascota, diaDePaseo, turnoDePaseo);
    arrayClientes.push(cliente);
    console.log(arrayClientes);
    let chequeoDia = arrayDiasHabiles.includes(diaDePaseo)
    let chequeoTurno = arrayTurnos.includes(turnoDePaseo)
    if (chequeoDia && chequeoTurno){
        alert("Fecha confirmada")
    } else{
        alert("Ingresaste un dato no valido")
    }
}

function modificacionCliente() {
    let nombreMascota = prompt("Ingrese el nombre de la mascota: ");
    let cliente = arrayClientes.find(cliente => cliente.nombreMascota === nombreMascota);
    let indice = arrayClientes.indexOf(cliente);
    let nombre = prompt("Ingrese el nombre del cliente: ");
    let apellido = prompt("Ingrese el apellido del cliente: ");
    let diaDePaseo = prompt("Ingrese un dia hábil: ");
    let turnoDePaseo = parseInt(prompt("Ingrese un horario: \n 13 \n 14 \n 15 \n 16\n "));
    let clienteModificado = new Clientes(nombre, apellido, nombreMascota, diaDePaseo, turnoDePaseo);
    arrayClientes.splice(indice, 1, clienteModificado);
    console.log(arrayClientes);
    let chequeoDia = arrayDiasHabiles.includes(diaDePaseo)
    let chequeoTurno = arrayTurnos.includes(turnoDePaseo)
    if (chequeoDia && chequeoTurno){
        alert("Fecha confirmada")
    } else{
        alert("Ingresaste un dato no valido")
    }
}

function consultaCliente() {
    let nombreMascota = prompt("Ingrese el nombre de la mascota: ");
    let cliente = arrayClientes.find(cliente => cliente.nombreMascota === nombreMascota);
    console.log(cliente);
}


let opcion;
while (opcion != 4) {
    opcion = menu();
    switch (opcion) {
        case 1:
            altaCliente();
            break;
        case 2:
            modificacionCliente();
            break;
        case 3:
            consultaCliente();
            break;
        case 4:
            salir();
            break;
        default:
            alert("Opción incorrecta");
            break;
    }
}