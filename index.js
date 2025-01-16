document.addEventListener('DOMContentLoaded', () => {
    gsap.from('.logo', {
        y: -20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    });

    gsap.from('.design-container', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: 'power3.out'
    });
    
    const figmaBtn = document.getElementById('figmaBtn');
    
    figmaBtn.addEventListener('click', (e) => {
        // Don't prevent default - let the link work
        gsap.to(e.currentTarget, {
            scale: 0.95,
            duration: 0.1,
            yoyo: true,
            repeat: 1,
            onComplete: () => {
                // After animation, trigger the link
                window.open(e.currentTarget.href, '_blank');
            }
        });
    });
});