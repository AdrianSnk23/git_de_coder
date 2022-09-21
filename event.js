class Cliente {
    constructor(nombre, apellido, nombreMascota, diaDePaseo, turnoDePaseo){
        this.nombre = nombre;
        this.apellido = apellido;
        this.nombreMascota = nombreMascota;
        this.diaDePaseo = diaDePaseo;
        this.turnoDePaseo = turnoDePaseo;
    }
}
 const arrayClientes = [];

const tarjetaUsuario = (usuario)=> {
    const {nombre, apellido, nombreMascota, diaDePaseo, turnoDePaseo} = usuario;
    return `
        <div class="card w-75 text-center m-1 text-bg-primary" style="width: 18rem;">
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
    const nombre = document.getElementById("nombreCliente")
    const apellido = document.getElementById("apellidoCliente");
    const mascota = document.getElementById("nombreMascota");
    const dia = document.getElementById("diaDePaseo");
    const turno = document.getElementById("turnoDePaseo");
    const cliente = new Cliente(nombre.value, apellido.value, mascota.value, dia.value, turno.value);
    arrayClientes.push(cliente);
    console.log(arrayClientes);
    const ultimoUsuario = tarjetaUsuario(cliente)
    
    contenedor.innerHTML = ultimoUsuario;

    paseoRecreativo.reset();

 })

