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
    // SIMULADOR ECONÓMICO / CALCULADORA
    // ==================================
    const rangeInput = document.getElementById('cantidadKits');
    const valorCantidad = document.getElementById('valorCantidad');
    const resIngresos = document.getElementById('resIngresos');
    const resCostos = document.getElementById('resCostos');
    const resMargen = document.getElementById('resMargen');

    if (rangeInput) {
        const actualizarCalculadora = () => {
            const cantidad = parseInt(rangeInput.value);
            const precioVenta = 29.00;
            const costoVariable = 19.00;
            
            const ingresos = cantidad * precioVenta;
            const costos = cantidad * costoVariable;
            const margen = ingresos - costos;

            valorCantidad.textContent = `${cantidad} kits`;
            resIngresos.textContent = `S/ ${ingresos.toLocaleString('es-PE', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
            resCostos.textContent = `S/ ${costos.toLocaleString('es-PE', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
            resMargen.textContent = `S/ ${margen.toLocaleString('es-PE', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
        };

        rangeInput.addEventListener('input', actualizarCalculadora);
        rangeInput.addEventListener('change', actualizarCalculadora);
        actualizarCalculadora();
    }

    // ==================================
    // REGISTRO PILOTO CONECTADO A TURSO (RENDER)
    // ==================================
    const pilotForm = document.getElementById('pilotForm');
    const formMessage = document.getElementById('formMessage');

    if (pilotForm) {
        pilotForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const carrera = document.getElementById('carrera').value;

            try {
                const respuesta = await fetch('https://ecokit-universitario.onrender.com/api/registrar', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ nombre, email, carrera })
                });

                const resultado = await respuesta.json();

                if (resultado.success) {
                    pilotForm.reset();
                    formMessage.textContent = "¡Registro guardado exitosamente en la base de datos de Turso!";
                    formMessage.classList.remove('hidden');

                    setTimeout(() => {
                        formMessage.classList.add('hidden');
                    }, 6000);
                } else {
                    alert("Hubo un error al registrar en la base de datos.");
                }
            } catch (error) {
                console.error("Error de conexión:", error);
                alert("No se pudo conectar con el servidor.");
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