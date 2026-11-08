// ==========================================================
// FUNCIONES DE ECOKIT UNIVERSITARIO
// 1. Menú móvil  2. Simulador en tiempo real  3. Formulario  4. Año del footer
// ==========================================================

document.addEventListener('DOMContentLoaded', () => {

    // ==================================
    // 1. MENÚ DE NAVEGACIÓN MÓVIL
    // ==================================
    const botonMenu = document.getElementById('menu-toggle');
    const enlacesNavegacion = document.querySelector('.nav-links');

    if (botonMenu && enlacesNavegacion) {
        botonMenu.addEventListener('click', () => {
            if (enlacesNavegacion.style.display === 'flex') {
                enlacesNavegacion.style.display = 'none';
            } else {
                enlacesNavegacion.style.display = 'flex';
                enlacesNavegacion.style.flexDirection = 'column';
                enlacesNavegacion.style.position = 'absolute';
                enlacesNavegacion.style.top = '80px';
                enlacesNavegacion.style.left = '0';
                enlacesNavegacion.style.width = '100%';
                enlacesNavegacion.style.backgroundColor = '#ffffff';
                enlacesNavegacion.style.padding = '20px';
                enlacesNavegacion.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
            }
        });
    }

    // Cerrar el menú al hacer clic en un enlace (solo en móvil)
    const enlacesMenu = document.querySelectorAll('.nav-links a');
    enlacesMenu.forEach(enlace => {
        enlace.addEventListener('click', () => {
            if (window.innerWidth <= 768 && enlacesNavegacion) {
                enlacesNavegacion.style.display = 'none';
            }
        });
    });

    // ==================================
    // 2. SIMULADOR ECONÓMICO EN TIEMPO REAL
    // Se recalcula cada vez que mueves la barra
    // ==================================
    const barraCantidad = document.getElementById('cantidadKits');
    const textoCantidad = document.getElementById('valorCantidad');
    const textoIngresos = document.getElementById('resIngresos');
    const textoCostos = document.getElementById('resCostos');
    const textoMargen = document.getElementById('resMargen');

    if (barraCantidad && textoCantidad && textoIngresos && textoCostos && textoMargen) {

        // Valores del kit (en soles)
        const PRECIO_VENTA = 29.00;
        const COSTO_VARIABLE = 19.00;

        // Da formato de dinero peruano: S/ 1,450.00
        const formatearSoles = (monto) => {
            return 'S/ ' + monto.toLocaleString('es-PE', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
        };

        // Lee la barra, calcula y actualiza la pantalla
        const actualizarCalculadora = () => {
            const cantidadKits = parseInt(barraCantidad.value, 10);

            const ingresosTotales = cantidadKits * PRECIO_VENTA;
            const costosTotales = cantidadKits * COSTO_VARIABLE;
            const margenTotal = ingresosTotales - costosTotales;

            textoCantidad.textContent = `${cantidadKits} kits`;
            textoIngresos.textContent = formatearSoles(ingresosTotales);
            textoCostos.textContent = formatearSoles(costosTotales);
            textoMargen.textContent = formatearSoles(margenTotal);
        };

        // 'input' se dispara mientras arrastras la barra (tiempo real)
        barraCantidad.addEventListener('input', actualizarCalculadora);
        // 'change' como respaldo al soltar la barra
        barraCantidad.addEventListener('change', actualizarCalculadora);

        // Calcular una vez al cargar la página
        actualizarCalculadora();
    } else {
        console.warn("No se encontraron los elementos del simulador. Revisa los id en index.html.");
    }

    // ==================================
    // 3. REGISTRO PILOTO CONECTADO A TURSO (RENDER)
    // ==================================
    const formularioPiloto = document.getElementById('pilotForm');
    const mensajeFormulario = document.getElementById('formMessage');

    if (formularioPiloto && mensajeFormulario) {
        formularioPiloto.addEventListener('submit', async (evento) => {
            evento.preventDefault();

            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const carrera = document.getElementById('carrera').value;

            // Aviso de espera: Render gratis puede tardar ~50 s en "despertar"
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
                mensajeFormulario.textContent = "No se pudo conectar con el servidor. Intenta nuevamente en unos segundos.";
            }
        });
    }

    // ==================================
    // 4. AÑO AUTOMÁTICO DEL FOOTER (si existe el elemento)
    // ==================================
    const textoAnioActual = document.getElementById('currentYear');
    if (textoAnioActual) {
        textoAnioActual.textContent = new Date().getFullYear();
    }

    console.log("EcoKit Universitario cargado correctamente.");
});