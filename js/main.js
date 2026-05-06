/* --- HOCS MAIN ENGINE --- */
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Reveal Animasyonu
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // 2. Sayaçlar (Metrics)
    const counters = document.querySelectorAll('.counter-val');
    counters.forEach(counter => {
        const target = parseFloat(counter.innerText);
        let count = 0;
        const update = () => {
            const speed = target / 40;
            if (count < target) {
                count += speed;
                counter.innerText = count.toFixed(2);
                setTimeout(update, 30);
            } else {
                counter.innerText = target;
            }
        };
        update();
    });
});
