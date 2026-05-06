document.addEventListener("DOMContentLoaded", () => {
    // Reveal Animasyonları
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Navbar Gölgesi
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (nav && window.scrollY > 50) {
            nav.style.boxShadow = "0 10px 30px rgba(0,0,0,0.05)";
        } else if (nav) {
            nav.style.boxShadow = "none";
        }
    });

    // Dashboard Sayacı
    document.querySelectorAll('.count').forEach(counter => {
        const target = parseFloat(counter.getAttribute('data-target'));
        const update = setInterval(() => {
            const current = parseFloat(counter.innerText);
            const inc = target / 30;
            if (current < target) {
                counter.innerText = (current + inc).toFixed(2);
            } else {
                counter.innerText = target;
                clearInterval(update);
            }
        }, 30);
    });
});
