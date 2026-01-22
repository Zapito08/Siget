document.addEventListener('DOMContentLoaded', () => {
    const cargarUsuario = () => {
        // Recuperar del sessionStorage
        const documentoUsuario = sessionStorage.getItem('documentoUsuario');

        const userNameDisplay = document.querySelector('.user-name');
        if (userNameDisplay) {
            if (documentoUsuario) {
                // Si es un número válido, formateamos con puntos
                if (!isNaN(documentoUsuario)) {
                    userNameDisplay.textContent = new Intl.NumberFormat('es-CO').format(documentoUsuario);
                } else {
                    userNameDisplay.textContent = documentoUsuario;
                }
            } else {
                userNameDisplay.style.display = 'none';
            }
        }
    };
    cargarUsuario();


    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');

    let toastTimeout;
    const showToast = (message) => {
        toastMessage.textContent = message;
        toast.classList.add('show');
        if (toastTimeout) clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => { toast.classList.remove('show'); }, 3000);
    };

    const descargarCertificado = (tipo, btn) => {
        // Evitar múltiples clics si ya está cargando
        if (btn.classList.contains('is-loading')) return;

        const originalContent = btn.innerHTML;

        // Cambiar estado a cargando (Spinner)
        btn.classList.add('is-loading');
        btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i><span>Descargando...</span>';

        console.log(`Iniciando descarga para: ${tipo}`);
        setTimeout(() => {
            btn.classList.remove('is-loading');
            btn.innerHTML = originalContent;
            showToast(`Certificado de ${tipo} descargado.`);
        }, 2000);
    };

    const botonesCertificados = [
        { id: 'btn-salario', tipo: 'Salario' },
        { id: 'btn-funciones', tipo: 'Funciones' },
        { id: 'btn-historia', tipo: 'Historia Laboral' },
        { id: 'btn-comision', tipo: 'Comisión Exterior' },
        { id: 'btn-pension', tipo: 'Fondo de Pensión' }
    ];

    botonesCertificados.forEach(conf => {
        const btn = document.getElementById(conf.id);
        if (btn) {
            btn.addEventListener('click', () => descargarCertificado(conf.tipo, btn));
        }
    });

    // Lógica para cerrar sesión
    const btnLogout = document.getElementById('btn-logout');
    if (btnLogout) {
        btnLogout.addEventListener('click', () => {
            sessionStorage.removeItem('documentoUsuario'); // Limpiar sesión
            window.location.href = '../Login/Login.html';
        });
    }
});