   //cuando la pagina cargue
    window.onload = function () {
        document.getElementById('footer').textContent = "Copyright © " + new Date().getFullYear() + " JP Solutions All rights reserved.";
    }

    // script para gestionar el mensaje de wts
    document.querySelector('#send_message').addEventListener('click', function () {
        const name = document.querySelector('#name').value;
        const message = document.querySelector('#mensaje').value;
        const mensaje = "Name: " + encodeURIComponent(name) + "\nMessage: " + encodeURIComponent(message);
        const phoneNumber = "+18328530681"; // Asegúrate de que el número de teléfono esté en formato internacional
        const url = "https://wa.me/" + phoneNumber + "?text=" + mensaje;
        window.open(url);
    });

    // script para validar el envio del mensaje
    document.querySelector('#mensaje').addEventListener('input', function (e) {
        const nLetras = e.target.value.length;
        const boton = document.getElementById("send_message");
        if (nLetras < 5) {
            boton.disabled = true;
            boton.classList.replace("btn-success", "btn-danger");
        } else {
            boton.disabled = false;
            boton.classList.replace("btn-danger", "btn-success");
        }

    })
