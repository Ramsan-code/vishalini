document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        document.addEventListener('click', (e) => {
            if (!menuToggle.contains(e.target) && !navLinks.contains(e.target) && navLinks.classList.contains('active')) {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }

    // 2. Active Link Based on URL
    const currentLocation = location.href;
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(link => {
        if (link.href === currentLocation) {
            link.classList.add('active');
        }
    });

    // 3. Ransom Note Effect Generator
    const ransomHeadings = document.querySelectorAll('.ransom-text');
    const rClasses = ['rl-1', 'rl-2', 'rl-3', 'rl-4', 'rl-5', 'rl-6'];

    ransomHeadings.forEach(heading => {
        const text = heading.textContent.trim();
        heading.innerHTML = '';
        const words = text.split(/\s+/);
        
        words.forEach(word => {
            const wordSpan = document.createElement('span');
            wordSpan.className = 'ransom-word';
            
            for(let i = 0; i < word.length; i++) {
                const charSpan = document.createElement('span');
                charSpan.textContent = word[i];
                // Random class, but occasionally fallback to bare text for the "accidental mismatch" effect
                if(Math.random() > 0.1) {
                    charSpan.className = 'ransom-letter ' + rClasses[Math.floor(Math.random() * rClasses.length)];
                } else {
                    charSpan.className = 'ransom-letter rl-bare';
                }
                
                // Random rotation for extra chaos
                const rot = (Math.random() * 10 - 5).toFixed(1);
                charSpan.style.transform = `rotate(${rot}deg)`;
                
                wordSpan.appendChild(charSpan);
            }
            heading.appendChild(wordSpan);
            
            // Add a normal space between words to allow wrapping
            const spaceSpan = document.createElement('span');
            spaceSpan.className = 'ransom-space';
            spaceSpan.innerHTML = ' ';
            spaceSpan.style.display = 'inline-block';
            spaceSpan.style.width = '10px';
            heading.appendChild(spaceSpan);
        });
    });

    // 4. Portfolio Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const filterValue = btn.getAttribute('data-filter');
                
                portfolioItems.forEach(item => {
                    item.style.transition = 'all 0.4s';
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1) rotate(' + (Math.random() * 4 - 2) + 'deg)';
                        }, 50);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }

    // 5. Randomly rotate scrap/photo elements slightly for more organic DIY feel
    const scraps = document.querySelectorAll('.scrap, .photo-wrapper, .sticky-note');
    scraps.forEach(scrap => {
        const isHoverOnly = scrap.classList.contains('no-init-rot');
        if(!isHoverOnly) {
            const rot = (Math.random() * 4 - 2).toFixed(1);
            scrap.style.transform = `rotate(${rot}deg)`;
        }
    });
});
