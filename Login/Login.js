document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    if (form) {
        form.addEventListener('submit', (e) => {
<<<<<<< HEAD
            e.preventDefault(); 
            const documento = document.getElementById('documento').value;

            if (!documento.trim()) {
                alert('Por favor, ingrese su número de documento.');
                return;
            }

            sessionStorage.setItem('documentoUsuario', documento);

=======
            e.preventDefault(); // Evita que el formulario recargue la página

            // Aquí simularíamos la validación con el backend
            const documento = document.getElementById('documento').value;
            // Guardamos el documento en sessionStorage
            sessionStorage.setItem('documentoUsuario', documento);

            // Redirigimos al menú
>>>>>>> 3880d07fc0237d7ebad13b90a20e87588ec7aa06
            window.location.href = '../Menu/Menu.html';
        });
    }
});