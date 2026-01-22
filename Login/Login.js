document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); 
            const documento = document.getElementById('documento').value;

            if (!documento.trim()) {
                alert('Por favor, ingrese su número de documento.');
                return;
            }

            sessionStorage.setItem('documentoUsuario', documento);

            window.location.href = '../Menu/Menu.html';
        });
    }
});