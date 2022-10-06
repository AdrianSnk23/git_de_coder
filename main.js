//Inicio de sesión con SweetAlert

const inicioSesion = document.getElementById("inicioSesion")
inicioSesion.addEventListener("click", () => {
  Swal.fire({
    title: "Ingresa tu Usuario",
    html: `<input type="text" id="email" class="swal2-input text-bg-secondary" placeholder="Email">
           <input type="password" id="password" class="swal2-input text-bg-secondary" placeholder="Password">`,
    background: "#FFC107",
    backdrop: "#787779",
    imageUrl: "https://placekitten.com/350/300",
    confirmButtonText: "Enviar",
    confirmButtonColor: "#8a2be2",
    showCancelButton: true,
    cancelButtonText: "Cancelar",
    cancelButtonColor: "#8a2be2",
  }).then((result) =>{
    if (result.isConfirmed) {
      window.location.href="pages/turnos.html"
      } 
  });
} );