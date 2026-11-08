document.addEventListener('DOMContentLoaded', () => {
    // Menú móvil toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '70px';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.backgroundColor = '#ffffff';
                navLinks.style.padding = '20px';
                navLinks.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
            }
        });
    }

    // Simulador Económico / Calculadora de Viabilidad
    const rangeInput = document.getElementById('cantidadKits');
    const valorCantidad = document.getElementById('valorCantidad');
    const resIngresos = document.getElementById('resIngresos');
    const resCostos = document.getElementById('resCostos');
    const resMargen = document.getElementById('resMargen');

    if (rangeInput) {
        rangeInput.addEventListener('input', (e) => {
            const cantidad = parseInt(e.target.value);
            const precioVenta = 29.00;
            const costoVariable = 19.00;
            
            const ingresos = cantidad * precioVenta;
            const costos = cantidad * costoVariable;
            const margen = ingresos - costos;

            valorCantidad.textContent = `${cantidad} kits`;
            resIngresos.textContent = `S/ ${ingresos.toLocaleString('es-PE', {minimumFractionDigits: 2})}`;
            resCostos.textContent = `S/ ${costos.toLocaleString('es-PE', {minimumFractionDigits: 2})}`;
            resMargen.textContent = `S/ ${margen.toLocaleString('es-PE', {minimumFractionDigits: 2})}`;
        });
    }

    // Manejo del formulario de inscripción al piloto
    const pilotForm = document.getElementById('pilotForm');
    const formMessage = document.getElementById('formMessage');

    if (pilotForm) {
        pilotForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simulación de envío exitoso
            pilotForm.reset();
            formMessage.classList.remove('hidden');

            setTimeout(() => {
                formMessage.classList.add('hidden');
            }, 5000);
        });
    }
});