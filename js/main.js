/* ==========================================================================
   HOCS INTEGRATED - DYNAMIC ENGINE (v2.0)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. SCROLL REVEAL ANIMATIONS (Kaydırdıkça Gelen Öğeler)
    const revealOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Elemanın %15'i göründüğünde tetikle
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Performans için izlemeyi bırak
            }
        });
    }, revealOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        revealOnScroll.observe(el);
    });

    // 2. DYNAMIC NUMBER COUNTER (Portal Metrikleri İçin Akıcı Sayaçlar)
    const counters = document.querySelectorAll('.count');
    if (counters.length > 0) {
        counters.forEach(counter => {
            const target = parseFloat(counter.getAttribute('data-target'));
            const duration = 2000; // Animasyon süresi (milisaniye)
            const frameRate = 30; // Saniyede 30 kare
            const totalFrames = Math.round(duration / (1000 / frameRate));
            const increment = target / totalFrames;
            let currentCount = 0;

            const updateCounter = setInterval(() => {
                currentCount += increment;
                if (currentCount >= target) {
                    counter.innerText = target; // Tam sayıya eşitle
                    clearInterval(updateCounter);
                } else {
                    counter.innerText = currentCount.toFixed(2); // 2 ondalık hane göster
                }
            }, 1000 / frameRate);
        });
    }

    // 3. NAVBAR SCROLL EFFECT (Aşağı İnince Menüye Gölge Verme)
    const navbar = document.querySelector('nav');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)";
                navbar.style.background = "rgba(255,255,255,0.95)";
            } else {
                navbar.style.boxShadow = "none";
                navbar.style.background = "rgba(255,255,255,0.8)";
            }
        });
    }
});
