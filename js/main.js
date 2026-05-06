/* ==========================================================================
   HOCS INTEGRATED - MAIN JAVASCRIPT ENGINE
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. SCROLL ANIMATIONS (Intersection Observer)
    // Sayfayı aşağı kaydırdıkça elemanların belirmesini sağlar.
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                obs.unobserve(entry.target); // Sadece bir kere animasyon yapsın
            }
        });
    }, observerOptions);

    // .reveal sınıfına sahip tüm HTML öğelerini dinle
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // 2. DYNAMIC NUMBER COUNTERS (Dashboard Metrikleri İçin)
    // data-target="" değerine sahip sayıları 0'dan yukarı saydırır.
    const counters = document.querySelectorAll('.count');
    if (counters.length > 0) {
        counters.forEach(counter => {
            const target = parseFloat(counter.getAttribute('data-target'));
            const update = () => {
                const current = parseFloat(counter.innerText);
                // Artış hızını belirliyoruz (hedefin 40'ta biri kadar)
                const increment = target / 40; 
                
                if (current < target) {
                    counter.innerText = (current + increment).toFixed(2);
                    setTimeout(update, 30);
                } else {
                    // Küsürat hatalarını önlemek için son rakamı tam eşitle
                    counter.innerText = target; 
                }
            };
            // Sayacın hemen başlamaması, biraz delay ile göze hoş gelmesi için
            setTimeout(update, 500); 
        });
    }
});
