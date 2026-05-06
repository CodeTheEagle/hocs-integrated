/* --- HOCS MASTER ENGINE --- */
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Scroll Reveal (Aşağı kaydırdıkça gelen öğeler)
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // 2. Rakam Sayaçları (Metrics)
    const counters = document.querySelectorAll('.counter-val');
    counters.forEach(counter => {
        const target = parseFloat(counter.innerText);
        let count = 0;
        const updateCount = () => {
            const speed = target / 50;
            if (count < target) {
                count += speed;
                counter.innerText = count.toFixed(2);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
});
