// app.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const responseMessage = document.getElementById('responseMessage');
    const formResponse = document.getElementById('formResponse');
    
    // Manejar el envío del formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevenir el envío del formulario para manejarlo con JS
        
        // Obtener los valores del formulario
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Validación básica del formulario
        if (name === "" || email === "" || message === "") {
            alert("Por favor, completa todos los campos.");
            return;
        }

        // Mostrar mensaje de agradecimiento
        responseMessage.textContent = `¡Gracias, ${name}! Hemos recibido tu mensaje: "${message}". Nos pondremos en contacto contigo a través de ${email}.`;
        
        // Mostrar el div con la respuesta
        formResponse.style.display = "block";
        
        // Limpiar el formulario después de enviarlo
        form.reset();
    });
});
