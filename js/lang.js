/* ==========================================================================
   HOCS INTEGRATED - AUTO LOCALE DETECTION ENGINE (No-UI)
   ========================================================================== */

const translations = {
    en: {
        "nav_home": "Home",
        "nav_tech": "Technology",
        "nav_team": "Team",
        "nav_portal": "Partner Portal",
        "hero_badge": "Next-Gen Optical Processor",
        "hero_title": "Breaking the Thermal Wall.",
        "hero_subtitle": "Overcoming the copper bottleneck with silicon photonics to build a zero-latency, 4.14 TB/s hardware infrastructure for AI servers.",
        "hero_btn": "Join the PoC Waitlist"
    },
    tr: {
        "nav_home": "Ana Sayfa",
        "nav_tech": "Teknoloji",
        "nav_team": "Ekip",
        "nav_portal": "Partner Portal",
        "hero_badge": "Yeni Nesil Optik İşlemci",
        "hero_title": "Breaking the Thermal Wall.",
        "hero_subtitle": "Silikon fotoniği ile bakır darboğazını aşıyor, yapay zeka sunucuları için saniyede 4.14 TB/s hızında sıfır gecikmeli donanım altyapısı inşa ediyoruz.",
        "hero_btn": "PoC Bekleme Listesine Katıl"
    },
    fr: {
        "nav_home": "Accueil",
        "nav_tech": "Technologie",
        "nav_team": "Équipe",
        "nav_portal": "Portail Partenaire",
        "hero_badge": "Processeur Optique Nouvelle Génération",
        "hero_title": "Briser le Mur Thermique.",
        "hero_subtitle": "Surmonter le goulot d'étranglement du cuivre avec la photonique sur silicium pour construire une infrastructure matérielle à latence zéro de 4,14 To/s pour les serveurs IA.",
        "hero_btn": "Rejoindre la liste d'attente PoC"
    },
    ja: {
        "nav_home": "ホーム",
        "nav_tech": "テクノロジー",
        "nav_team": "チーム",
        "nav_portal": "パートナーポータル",
        "hero_badge": "次世代光プロセッサ",
        "hero_title": "熱の壁を打ち破る。",
        "hero_subtitle": "シリコンフォトニクスで銅線のボトルネックを克服し、AIサーバー向けにゼロレイテンシ、4.14 TB/sのハードウェアインフラを構築します。",
        "hero_btn": "PoCウェイトリストに参加する"
    },
    zh: {
        "nav_home": "首页",
        "nav_tech": "技术",
        "nav_team": "团队",
        "nav_portal": "合作伙伴门户",
        "hero_badge": "下一代光学处理器",
        "hero_title": "打破热障。",
        "hero_subtitle": "利用硅光子技术克服铜线瓶颈，为AI服务器构建零延迟、4.14 TB/s的硬件基础架构。",
        "hero_btn": "加入 PoC 候补名单"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    // Tarayıcı dilini tespit et
    const browserLang = navigator.language.slice(0, 2).toLowerCase();
    const supportedLangs = ['en', 'tr', 'fr', 'ja', 'zh'];
    
    // Desteklenmiyorsa varsayılanı İngilizce (en) yap
    const currentLang = supportedLangs.includes(browserLang) ? browserLang : 'en';

    // Çeviriyi HTML'e bas
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang] && translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });
});
