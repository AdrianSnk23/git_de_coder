class Cliente {
    constructor(nombre, apellido, nombreMascota, diaDePaseo, turnoDePaseo){
        this.nombre = nombre;
        this.apellido = apellido;
        this.nombreMascota = nombreMascota;
        this.diaDePaseo = diaDePaseo;
        this.turnoDePaseo = turnoDePaseo;
    }
}
let arrayClientes = [];

/*****************************/

if(localStorage.getItem("reservas")){
    let reserva = JSON.parse(localStorage.getItem("reservas"))
    arrayClientes = [...reserva]
 }

/*****************************/



const btn = document.getElementById("btnPaseos")
 btn.addEventListener("click", ()=>{
  document.getElementById("contenedorFormulario").classList.toggle("invisible")
 })

 const tarjetaUsuario = (usuario)=> {
  const {nombre, apellido, nombreMascota, diaDePaseo, turnoDePaseo} = usuario;
  return `
      <div class="card w-75 text-center m-1 text-bg-warning" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Cliente: ${nombre} ${apellido}</h5>
        <h6 class="card-subtitle mb-2">Nombre de Mascota: ${nombreMascota}</h6>
        <p class="card-text">El dia de paseo es el ${diaDePaseo} ${turnoDePaseo} hs</p>
      </div>
    </div>
  `
}

const paseoRecreativo = document.getElementById("paseoRecreativo")
 paseoRecreativo.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopPropagation();
    agregarCliente();
 })

 const agregarCliente = () => {
    const nombre = document.getElementById("nombreCliente")
    const apellido = document.getElementById("apellidoCliente");
    const mascota = document.getElementById("nombreMascota");
    const dia = document.getElementById("diaDePaseo");
    const turno = document.getElementById("turnoDePaseo");
    const cliente = new Cliente(nombre.value, apellido.value, mascota.value, dia.value, turno.value);
    if(nombre.value == "" || apellido.value == "" || mascota.value == "" || dia.value == "" || turno.value == ""){
      validarFormulario()
    }else{
    arrayClientes.push(cliente);
    localStorage.setItem("reservas", JSON.stringify(arrayClientes))
    console.log(arrayClientes);
    const ultimoUsuario = tarjetaUsuario(cliente)
    contenedor.innerHTML = ultimoUsuario;
    paseoRecreativo.reset();
    }
 }



const validarFormulario = () => {
  (() => {
    'use strict'
  
    // Validacion de Bootstrap
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()}

const btnReserva = document.getElementById("btnReserva");
const contenedorReserva = document.getElementById("contenedorReserva")
const verReserva = document.getElementById("verReserva")
const listadoClientes = "../json/clientes.json"

btnReserva.addEventListener("click", () => {
  document.getElementById("contenedorFormulario").classList.add("invisible") //toggle("invisible")
  Swal.fire({
    title:"Ingresa el nombre de tu mascota:",
    input: "text",
    inputLabel: "nombre mascota",
    confirmButtonText: "Listo"
  }).then((result) =>{
    let usuarios = arrayClientes;
    let mascota;
    console.log(result)
    if (result.isConfirmed) {
      fetch(listadoClientes)
      .then(datos => {
        datos.json().then(datosJson => {
          console.log(datosJson)
          usuarios = [...arrayClientes, ...datosJson];
          mascota = usuarios.find(reserva => {
            return reserva.nombreMascota === result.value
          })
          console.log(mascota)
          if(mascota){
            contenedorReserva.innerHTML =`<h1 class="text-center mt-3 text-warning">Su turno es</h1>
                                <div class="card w-75 text-center m-1 text-bg-success" style="width: 18rem;">
                                  <div class="card-body">
                                    <h5 class="card-title">Cliente: ${mascota.nombre} ${mascota.apellido}</h5>
                                    <h6 class="card-subtitle mb-2">Nombre de Mascota: ${mascota.nombreMascota}</h6>
                                    <p class="card-text">El dia de paseo es el ${mascota.diaDePaseo} ${mascota.turnoDePaseo} hs</p>
                                  </div>
                                </div>`

          } else {
            contenedorReserva.innerHTML = '<h2 class="text-center mt-3 text-warning bkgGradient">No tiene reserva hecha. Por favor realice su reserva.</h2>'
          }
          
        })
      })
    }
    console.log(usuarios);
    
  })})