document.addEventListener('DOMContentLoaded', function() {
    // 탭 전환 기능
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            console.log('Tab clicked:', tab.getAttribute('data-tab'));
            // 활성 탭 변경
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // 탭 콘텐츠 변경
            const tabId = tab.getAttribute('data-tab');
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === tabId) {
                    content.classList.add('active');
                }
            });
            
            // 탭 변경 시 스크롤 맨 위로
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
    
    // 모바일에서 탭 스크롤 시 탭바 고정
    const tabNavigation = document.querySelector('.tab-navigation');
    const headerHeight = document.querySelector('header').offsetHeight;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY >= headerHeight) {
            tabNavigation.style.top = '0';
        } else {
            tabNavigation.style.top = `${headerHeight - window.scrollY}px`;
        }
    });
});
