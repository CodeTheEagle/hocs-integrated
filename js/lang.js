/* --- HOCS PURE LANGUAGE ENGINE --- */
const dictionary = {
    en: {
        "n1": "Home", "n2": "Technology", "n3": "Team", "n4": "Partner Portal",
        "h1": "Breaking the Thermal Wall.", "h2": "4.14 TB/s zero-latency optical hardware for next-gen AI.",
        "btn": "Join Waitlist", "footer": "Adıyaman R&D Operations Base"
    },
    tr: {
        "n1": "Ana Sayfa", "n2": "Teknoloji", "n3": "Ekip", "n4": "Partner Portal",
        "h1": "Breaking the Thermal Wall.", "h2": "AI altyapısı için saniyede 4.14 TB/s sıfır gecikmeli donanım.",
        "btn": "PoC Listesine Katıl", "footer": "Adıyaman Ar-Ge Operasyon Merkezi"
    },
    fr: {
        "n1": "Accueil", "n2": "Technologie", "n3": "Équipe", "n4": "Portail Partenaire",
        "h1": "Briser le Mur Thermique.", "h2": "Matériel optique à latence zéro de 4,14 To/s pour l'IA.",
        "btn": "Rejoindre la liste", "footer": "Base d'opérations R&D d'Adıyaman"
    },
    ja: {
        "n1": "ホーム", "n2": "テクノロジー", "n3": "チーム", "n4": "ポータル",
        "h1": "熱の壁を打ち破る。", "h2": "次世代AI向けの4.14 TB/sゼロ遅延光ハードウェア。",
        "btn": "ウェイトリストに参加", "footer": "アドゥヤマンR&D拠点"
    },
    zh: {
        "n1": "首页", "n2": "技术", "n3": "团队", "n4": "门户",
        "h1": "打破热障。", "h2": "针对下一代人工智能的4.14 TB/s零延迟光学硬件。",
        "btn": "加入候补名单", "footer": "阿德亚曼研发运营基地"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const browserLang = navigator.language.slice(0, 2).toLowerCase();
    const currentLang = dictionary[browserLang] ? browserLang : 'en';
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dictionary[currentLang][key]) {
            el.innerText = dictionary[currentLang][key];
        }
    });
});
