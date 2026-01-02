// ============================================
// AppStudioLB - Language Switching & Interactions
// ============================================

// Translation data
const translations = {
    en: {
        langToggle: 'EN',
        heroTitle: 'Crafting Digital Experiences',
        heroSubtitle: 'We build innovative mobile apps and web solutions that make a difference',
        badgeAndroid: 'Android',
        badgeiOS: 'iOS',
        badgeWeb: 'Web',
        servicesTitle: 'What We Do',
        servicesSubtitle: 'We specialize in creating high-quality digital products',
        serviceMobileTitle: 'Mobile Development',
        serviceMobileDesc: 'Native and cross-platform apps for Android and iOS with stunning UI and seamless performance',
        serviceWebTitle: 'Web Development',
        serviceWebDesc: 'Modern, responsive web applications built with cutting-edge technologies',
        portfolioTitle: 'Our Portfolio',
        portfolioSubtitle: 'Explore our featured projects and applications',
        voiceMatchTitle: 'Voice Match',
        voiceMatchDesc: 'An interactive voice-controlled game. Have fun gaming with your voice!',
        daboTitle: 'Dabo - Smart Review Note',
        daboDesc: 'AI-powered automatic problem content recognition for creating smart wrong answer notes. Perfect for students!',
        daboRating: '4.5 Rating',
        aiSelectorTitle: 'AI Selector',
        aiSelectorDesc: 'Discover, compare, and prioritize AI tools with Gemini-guided recommendations. Build your personalized AI stack!',
        kakaoTitle: 'KakaoTalk AI Helper',
        kakaoDesc: 'AI-powered assistant for KakaoTalk. Enhance your messaging experience with smart AI features.',
        pickbotTitle: 'PICKBot',
        pickbotDesc: 'AI-powered recommendation app for movies, animations, and TV shows. Get personalized picks based on your unique taste!',
        pickbotFeature1: '🎯 Personalized AI',
        pickbotFeature2: '🎥 Movies & TV',
        pickbotFeature3: '🎌 Anime',
        viewOnPlayStore: 'View on Play Store',
        visitWebsite: 'Visit Website',
        inDevelopment: 'In Development',
        comingSoon: 'Coming Soon',
        contactTitle: 'Get In Touch',
        contactSubtitle: 'Have a project in mind? Let\'s create something amazing together!',
        emailLabel: 'Email',
        playStoreLabel: 'Google Play Store',
        viewAllApps: 'View All Apps',
        copyright: '© 2025 AppStudioLB. All rights reserved.'
    },
    ko: {
        langToggle: 'KR',
        heroTitle: '디지털 경험을 만들어갑니다',
        heroSubtitle: '차별화된 모바일 앱과 웹 솔루션을 개발합니다',
        badgeAndroid: '안드로이드',
        badgeiOS: 'iOS',
        badgeWeb: '웹',
        servicesTitle: '서비스 소개',
        servicesSubtitle: '고품질 디지털 제품을 전문적으로 개발합니다',
        serviceMobileTitle: '모바일 개발',
        serviceMobileDesc: '뛰어난 UI와 매끄러운 성능을 갖춘 안드로이드 및 iOS 네이티브/크로스플랫폼 앱',
        serviceWebTitle: '웹 개발',
        serviceWebDesc: '최신 기술로 구축된 현대적이고 반응형 웹 애플리케이션',
        portfolioTitle: '포트폴리오',
        portfolioSubtitle: '주요 프로젝트와 애플리케이션을 살펴보세요',
        voiceMatchTitle: 'Voice Match',
        voiceMatchDesc: '음성으로 즐기는 인터랙티브 게임. 목소리로 게임을 즐겨보세요!',
        daboTitle: '다보 - 스마트 오답노트',
        daboDesc: 'AI가 문제 내용을 자동 인식하여 스마트 오답노트를 만들어줍니다. 학생들에게 완벽한 학습 도우미!',
        daboRating: '평점 4.5',
        aiSelectorTitle: 'AI Selector',
        aiSelectorDesc: 'Gemini 기반 추천으로 AI 도구를 발견, 비교, 우선순위를 정하세요. 나만의 AI 스택을 구축하세요!',
        kakaoTitle: '카톡 AI Helper',
        kakaoDesc: '카카오톡을 위한 AI 어시스턴트. 스마트한 AI 기능으로 메시지 경험을 향상시키세요.',
        pickbotTitle: 'PICKBot',
        pickbotDesc: '영화, 애니메이션, TV 프로그램을 AI가 추천해주는 앱. 취향에 맞는 맞춤형 추천을 받아보세요!',
        pickbotFeature1: '🎯 맞춤형 AI',
        pickbotFeature2: '🎥 영화 & TV',
        pickbotFeature3: '🎌 애니메이션',
        viewOnPlayStore: 'Play 스토어에서 보기',
        visitWebsite: '웹사이트 방문',
        inDevelopment: '개발중',
        comingSoon: '출시 예정',
        contactTitle: '연락하기',
        contactSubtitle: '프로젝트가 있으신가요? 함께 멋진 것을 만들어봐요!',
        emailLabel: '이메일',
        playStoreLabel: 'Google Play 스토어',
        viewAllApps: '모든 앱 보기',
        copyright: '© 2025 AppStudioLB. All rights reserved.'
    }
};

// Current language state
let currentLang = 'en';

// Get saved language preference or default to English
function getSavedLanguage() {
    return localStorage.getItem('appstudiolb-lang') || 'en';
}

// Save language preference
function saveLanguage(lang) {
    localStorage.setItem('appstudiolb-lang', lang);
}

// Update all translatable elements
function updateTranslations(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang === 'ko' ? 'ko' : 'en';
}

// Toggle language
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ko' : 'en';
    saveLanguage(currentLang);
    updateTranslations(currentLang);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Load saved language
    currentLang = getSavedLanguage();
    updateTranslations(currentLang);
    
    // Set up language toggle button
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
    
    // Add intersection observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe portfolio cards and service cards
    document.querySelectorAll('.portfolio-card, .service-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});
