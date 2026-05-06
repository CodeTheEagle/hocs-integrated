document.addEventListener("DOMContentLoaded", () => {
    // 1. Reveal (Kaydırınca Gelme)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // 2. Sayaç (Metrics)
    const counters = document.querySelectorAll('.counter-val');
    counters.forEach(counter => {
        const target = parseFloat(counter.innerText);
        let current = 0;
        const step = target / 50;
        const update = () => {
            if (current < target) {
                current += step;
                counter.innerText = current.toFixed(2);
                setTimeout(update, 20);
            } else counter.innerText = target;
        };
        update();
    });
});
