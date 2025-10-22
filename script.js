// 부드러운 스크롤 효과
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 네비게이션 활성화 상태 관리
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// 페이지 로드 시 애니메이션
window.addEventListener('load', () => {
    const elements = document.querySelectorAll('.project-card, .skill-item');
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// 다크 모드 토글 (선택사항)
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// 저장된 다크 모드 설정 불러오기
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}