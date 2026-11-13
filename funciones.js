// ==========================================================
// FUNCIONES DE ECOKIT UNIVERSITARIO
// 1. Menú móvil  2. Simulador en tiempo real  3. Formulario  4. Año del footer
// 5. Animación de números y barras  6. Menú activo con el scroll
// 7. Zoom de imágenes del kit
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

    // Barras gráficas de cada resultado
    const barraIngresos = document.getElementById('barraIngresos');
    const barraCostos = document.getElementById('barraCostos');
    const barraMargen = document.getElementById('barraMargen');

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

            // Las barras se miden contra el máximo posible (cantidad máxima x precio)
            const cantidadMaxima = parseInt(barraCantidad.max, 10);
            const ingresosMaximos = cantidadMaxima * PRECIO_VENTA;

            if (barraIngresos) {
                barraIngresos.style.width = (ingresosTotales / ingresosMaximos * 100) + '%';
            }
            if (barraCostos) {
                barraCostos.style.width = (costosTotales / ingresosMaximos * 100) + '%';
            }
            if (barraMargen) {
                barraMargen.style.width = (margenTotal / ingresosMaximos * 100) + '%';
            }
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

    // ==================================
    // 5. ANIMACIÓN DE NÚMEROS Y BARRAS (Inicio y Diagnóstico)
    // Los números suben desde 0 hasta su valor y las barras se llenan.
    // Funciona con cualquier sección que tenga elementos con
    // data-contar (números) o data-ancho (barras).
    // ==================================
    const DURACION_ANIMACION = 1400; // en milisegundos

    const animarSeccion = (seccion) => {
        // Evita empezar otra animación si la anterior sigue en marcha
        if (seccion.dataset.animando === 'si') {
            return;
        }
        seccion.dataset.animando = 'si';

        const numerosAnimados = seccion.querySelectorAll('[data-contar]');
        const barrasAnimadas = seccion.querySelectorAll('[data-ancho]');

        // Reiniciar: barras vacías (sin transición) y números en 0
        barrasAnimadas.forEach(barra => {
            barra.style.transition = 'none';
            barra.style.width = '0';
        });
        numerosAnimados.forEach(numero => {
            numero.textContent = '0' + (numero.dataset.sufijo || '');
        });

        // Esperar un instante para que el navegador registre el reinicio y luego animar
        setTimeout(() => {
            // Llenar las barras hasta su porcentaje
            barrasAnimadas.forEach(barra => {
                barra.style.transition = '';
                barra.style.width = barra.dataset.ancho + '%';
            });

            // Contar los números de 0 hasta el valor final
            const tiempoInicio = performance.now();

            const actualizarNumeros = (tiempoActual) => {
                const progreso = Math.min((tiempoActual - tiempoInicio) / DURACION_ANIMACION, 1);
                const progresoSuave = 1 - Math.pow(1 - progreso, 3); // Empieza rápido y frena al final

                numerosAnimados.forEach(numero => {
                    const valorActual = Math.round(Number(numero.dataset.contar) * progresoSuave);
                    numero.textContent = valorActual + (numero.dataset.sufijo || '');
                });

                if (progreso < 1) {
                    requestAnimationFrame(actualizarNumeros);
                } else {
                    seccion.dataset.animando = 'no';
                }
            };

            requestAnimationFrame(actualizarNumeros);
        }, 60);
    };

    // ==================================
    // 6. MENÚ ACTIVO SEGÚN EL SCROLL (scrollspy)
    // Cada sección ocupa la pantalla completa. Mientras haces scroll,
    // el menú marca en verde la sección donde estás.
    // ==================================
    const seccionesVista = document.querySelectorAll('.vista');
    const SECCIONES_ANIMADAS = ['inicio', 'diagnostico'];

    // Marca en el menú la opción de la sección actual
    const marcarEnlaceActivo = (idSeccion) => {
        enlacesMenu.forEach(enlace => {
            enlace.classList.toggle('activo', enlace.getAttribute('href') === '#' + idSeccion);
        });
    };

    if ('IntersectionObserver' in window) {
        // Se activa cuando una sección cruza la franja central de la pantalla
        const observadorDeSecciones = new IntersectionObserver((entradas) => {
            entradas.forEach(entrada => {
                if (entrada.isIntersecting) {
                    marcarEnlaceActivo(entrada.target.id);

                    // Al llegar a Inicio o Diagnóstico se reproduce la animación
                    if (SECCIONES_ANIMADAS.includes(entrada.target.id)) {
                        animarSeccion(entrada.target);
                    }
                }
            });
        }, { rootMargin: '-40% 0px -40% 0px', threshold: 0 });

        seccionesVista.forEach(seccion => observadorDeSecciones.observe(seccion));
    }

    // ==================================
    // 7. ZOOM DE IMÁGENES DEL KIT
    // Al hacer clic en una imagen se abre ampliada (lightbox).
    // Se cierra con la X, haciendo clic afuera o con la tecla Esc.
    // ==================================
    const visorImagen = document.getElementById('visorImagen');
    const imagenAmpliada = document.getElementById('visorImg');
    const tituloAmpliado = document.getElementById('visorTitulo');
    const botonCerrarVisor = document.getElementById('visorCerrar');
    const imagenesDelKit = document.querySelectorAll('.kit-item-card img');

    if (visorImagen && imagenAmpliada && tituloAmpliado && botonCerrarVisor) {

        // Abre el visor con la imagen que se tocó
        const abrirVisor = (imagenOriginal) => {
            imagenAmpliada.src = imagenOriginal.src;
            imagenAmpliada.alt = imagenOriginal.alt;

            // Usa el título de la tarjeta (h4) como texto debajo de la imagen
            const tarjeta = imagenOriginal.closest('.kit-item-card');
            const tituloTarjeta = tarjeta ? tarjeta.querySelector('h4') : null;
            tituloAmpliado.textContent = tituloTarjeta ? tituloTarjeta.textContent : imagenOriginal.alt;

            visorImagen.classList.add('visor-activo');
            document.body.style.overflow = 'hidden'; // Evita que la página de fondo se mueva
        };

        // Cierra el visor
        const cerrarVisor = () => {
            visorImagen.classList.remove('visor-activo');
            document.body.style.overflow = '';
        };

        // Clic en cada imagen del kit -> abrir
        imagenesDelKit.forEach(imagen => {
            imagen.addEventListener('click', () => abrirVisor(imagen));
        });

        // Clic en la X -> cerrar
        botonCerrarVisor.addEventListener('click', cerrarVisor);

        // Clic en el fondo oscuro (fuera de la imagen) -> cerrar
        visorImagen.addEventListener('click', (evento) => {
            if (evento.target === visorImagen) {
                cerrarVisor();
            }
        });

        // Tecla Esc -> cerrar
        document.addEventListener('keydown', (evento) => {
            if (evento.key === 'Escape') {
                cerrarVisor();
            }
        });
    }

    console.log("EcoKit Universitario cargado correctamente.");
});