$(document).ready(function() {
    $(".login-form").submit(function(event) {
      event.preventDefault(); // Evita el envío del formulario
  
      var email = $("#email").val();
      var password = $("#password").val();
  
      // Aquí puedes agregar la lógica para validar el usuario
      // Por ejemplo, puedes hacer una solicitud AJAX a un servidor
      // para verificar las credenciales del usuario
  
      // Simulando una validación exitosa
      if (email === "bnjamin.buccioni@gmail.com" && password === "contraseña123") {
        alert("Inicio de sesión exitoso");
        // Aquí puedes redirigir al usuario a otra página o realizar otras acciones
      } else {
        alert("Credenciales inválidas");
      }
    });
  });