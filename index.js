// JavaScript para los Testimonios
document.addEventListener('DOMContentLoaded', () => {
    const testimonialSlider = document.querySelector('.testimonial-slider');
    const totalTestimonios = document.querySelectorAll('.testimonial-item').length;
    let currentTestimonialIndex = 0;

    setInterval(() => {
        // Mueve el slider hacia la izquierda (por el ancho de cada testimonio + un pequeño espacio)
        testimonialSlider.style.transition = 'transform 1s ease-in-out'; // Hacer que el movimiento sea suave
        testimonialSlider.style.transform = `translateX(-${currentTestimonialIndex * 320}px)`; // 320px es el tamaño de cada testimonio
        currentTestimonialIndex = (currentTestimonialIndex + 1) % totalTestimonios; // Ciclo de los testimonios
    }, 3000); // Cambia cada 3 segundos
});

// Animación de testimonios
window.addEventListener('load', () => {
    const testimonials = document.querySelector('.testimonial-slider');
    testimonials.style.animation = 'slide 10s linear infinite';
});

// Script de ejemplo, no se requieren cambios en JS para el movimiento de testimonios
document.addEventListener('DOMContentLoaded', function() {
    console.log("Página cargada correctamente.");
});

// Activar la animación de deslizamiento al cargar la página
window.addEventListener('load', () => {
    const testimonials = document.querySelector('.testimonial-slider');
    testimonials.style.animation = 'slideLeftToRight 35s linear infinite'; // Se asegura que la animación se aplique al cargar
});

