const elementsToAnimate = document.querySelectorAll('section, .team-member, .project');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

elementsToAnimate.forEach(el => observer.observe(el));
