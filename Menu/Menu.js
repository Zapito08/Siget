document.addEventListener('DOMContentLoaded', () => {
    const cargarUsuario = () => {
        const documentoUsuario = sessionStorage.getItem('documentoUsuario');

        const userNameDisplay = document.querySelector('.user-name');
        if (userNameDisplay) {
            if (documentoUsuario) {
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

    const showToast = (message) => {
        toastMessage.textContent = message;
        toast.classList.add('show');
        setTimeout(() => { toast.classList.remove('show'); }, 3000);
    };

    const descargarCertificado = (tipo, btn) => {
        if (btn.classList.contains('is-loading')) return;

        const originalContent = btn.innerHTML;
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

    const btnLogout = document.getElementById('btn-logout');
    if (btnLogout) {
        btnLogout.addEventListener('click', () => {
            sessionStorage.removeItem('documentoUsuario'); 
            window.location.href = '../Login/Login.html';
        });
    }
});