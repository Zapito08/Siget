document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita que el formulario recargue la página

            // Aquí simularíamos la validación con el backend
            const documento = document.getElementById('documento').value;
            // Guardamos el documento en sessionStorage
            sessionStorage.setItem('documentoUsuario', documento);

            // Redirigimos al menú
            window.location.href = '../Menu/Menu.html';
        });
    }
});