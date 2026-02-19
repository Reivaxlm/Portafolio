AOS.init();

var typed = new Typed('#typed', {
    strings: ['Desarrollo Odoo', 'Desarrollo Full Stack', 'Desarrollo Web', 'Análisis de Datos', 'Soporte Técnico'],
    typeSpeed: 60, backSpeed: 40, loop: true
});

function changeSlide(sliderId, direction) {
    const wrapper = document.getElementById(sliderId);
    if (!wrapper) return;
    const slides = wrapper.querySelectorAll('.slide');
    const dots = wrapper.querySelectorAll('.dot');
    let current = 0;

    slides.forEach((s, i) => {
        if (s.classList.contains('active')) {
            current = i;
            if(s.tagName === "VIDEO") s.pause();
        }
    });

    slides[current].classList.remove('active');
    if(dots[current]) dots[current].classList.remove('active');

    let next = (current + direction + slides.length) % slides.length;
    slides[next].classList.add('active');
    if(dots[next]) dots[next].classList.add('active');
    if(slides[next].tagName === "VIDEO") slides[next].play();
}

function currentSlide(sliderId, index) {
    const wrapper = document.getElementById(sliderId);
    const slides = wrapper.querySelectorAll('.slide');
    const dots = wrapper.querySelectorAll('.dot');

    slides.forEach(s => { s.classList.remove('active'); if(s.tagName === "VIDEO") s.pause(); });
    dots.forEach(d => d.classList.remove('active'));

    slides[index].classList.add('active');
    dots[index].classList.add('active');
    if(slides[index].tagName === "VIDEO") slides[index].play();
}

window.onscroll = function() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "%";
};

// Movimiento automático cada 7 segundos
setInterval(() => {
    changeSlide('slider1', 1);
}, 50000);
setInterval(() => {
    changeSlide('slider2', 1);
}, 7000);
// Lógica para la barra de progreso
window.onscroll = function() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "%";
};
// Inicializa el traductor de Google de forma invisible
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
            pageLanguage: 'es',
                    includedLanguages: 'en,es',
                            autoDisplay: false
                                }, 'google_translate_element');
                                }

                                // Función para cambiar el idioma
                                function translatePage(lang) {
                                    const googleSelect = document.querySelector('.goog-te-combo');
                                        if (googleSelect) {
                                                googleSelect.value = lang;
                                                        googleSelect.dispatchEvent(new Event('change'));
                                                            } else {
                                                                    console.warn("El traductor aún está cargando... intenta de nuevo en un segundo.");
                                                                        }
                                                                        }