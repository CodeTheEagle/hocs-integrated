/* --- HOCS ULTIMATE ENGINE --- */
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. SCROLL REVEAL: Sayfa kaydırıldıkça öğelerin nazikçe gelmesi
    const revealOptions = { threshold: 0.1 };
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, revealOptions);

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // 2. METRICS COUNTER: Rakamların akıcı bir şekilde artması
    const counters = document.querySelectorAll('.counter-val');
    counters.forEach(counter => {
        const target = parseFloat(counter.innerText);
        let count = 0;
        const speed = target / 60; // Akış hızı ayarı

        const updateCount = () => {
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

    // 3. NAVBAR SCROLL EFFECT: Aşağı inince menünün hafiflemesi
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (nav && window.scrollY > 50) {
            nav.style.background = "rgba(255,255,255,0.95)";
            nav.style.boxShadow = "0 10px 30px rgba(0,0,0,0.03)";
        } else if (nav) {
            nav.style.background = "rgba(255,255,255,0.8)";
            nav.style.boxShadow = "none";
        }
    });
});
