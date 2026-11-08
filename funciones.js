// ==================================
// MENÚ DE NAVEGACIÓN MÓVIL
// ==================================

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '80px';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.backgroundColor = '#ffffff';
                navLinks.style.padding = '20px';
                navLinks.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
            }
        });
    }

    // Cerrar menú al hacer clic en un enlace del menú móvil
    const enlacesMenu = document.querySelectorAll('.nav-links a');
    enlacesMenu.forEach(enlace => {
        enlace.addEventListener('click', () => {
            if (window.innerWidth <= 768 && navLinks) {
                navLinks.style.display = 'none';
            }
        });
    });

    // ==================================
    // REGISTRO PILOTO CONECTADO A TURSO (RENDER)
    // ==================================
    const formularioPiloto = document.getElementById('pilotForm');
    const mensajeFormulario = document.getElementById('formMessage');

    if (formularioPiloto) {
        formularioPiloto.addEventListener('submit', async (evento) => {
            evento.preventDefault();

            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const carrera = document.getElementById('carrera').value;

            // Mensaje de espera: Render gratis puede tardar ~50 s en "despertar"
            mensajeFormulario.textContent = "Enviando... (la primera vez puede tardar hasta 1 minuto)";
            mensajeFormulario.classList.remove('hidden');

            try {
                const respuesta = await fetch('https://ecokit-universitario.onrender.com/api/registrar', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ nombre, email, carrera })
                });

                const resultado = await respuesta.json();
                console.log("Respuesta del servidor:", respuesta.status, resultado);

                if (resultado.success) {
                    formularioPiloto.reset();
                    mensajeFormulario.textContent = "¡Registro guardado exitosamente en la base de datos!";
                    setTimeout(() => mensajeFormulario.classList.add('hidden'), 6000);
                } else {
                    mensajeFormulario.textContent = "Error: " + (resultado.message || "no se pudo registrar.");
                }
            } catch (error) {
                console.error("Error de conexión:", error);
                mensajeFormulario.textContent = "No se pudo conectar con el servidor. Revisa que la URL de Render sea correcta.";
            }
        });
    }

    // ==================================
    // AÑO AUTOMÁTICO DEL FOOTER
    // ==================================
    const currentYear = document.getElementById('currentYear');
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    console.log("EcoKit Universitario cargado y sincronizado correctamente.");
});