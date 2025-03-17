    // NAVIGATION WHILE HOVERING 
    let buttons = document.querySelectorAll('.navHover'); 
    buttons.forEach(button => {
        let text = button.textContent; 
        button.innerHTML = '';
    
        for (let char of text){
        
        let span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        button.appendChild(span);
        }
        // After styling span tag
        let spans = button.querySelectorAll('span');
    
        button.addEventListener('mouseenter', () => {
            spans.forEach((span, index) => {
            setTimeout(() => {
            span.classList.add('hover');
            }, index * 15);
            })
        })
    
        button.addEventListener('mouseleave', () => {
            spans.forEach((span, index) => {
            setTimeout(() => {
            span.classList.remove('hover');
            }, index * 15);
            })
        })
    })  



    function animateNumber(element, start, end, duration, callback) {
        let range = end - start;
        let current = start;
        let increment = range / (duration / 10); // 20ms per frame
        let interval = setInterval(() => {
            current += increment;
            if (current >= end) {
                current = end;
                clearInterval(interval);
                element.style.textShadow = "none"; // Remove glow after animation
                if (callback) callback();
            }
            element.innerText = Math.floor(current);
        }, 20);
    }
    
    document.addEventListener("DOMContentLoaded", () => {
        const elements = [
            { selector: ".number150M span", end: 150 },
            { selector: ".number6 span", end: 6 },
            { selector: ".number456 span", end: 456 }
        ];
    
        elements.forEach(({ selector, end }) => {
            const el = document.querySelector(selector);
            animateNumber(el, 0, end, 1500);
        });
    });
    