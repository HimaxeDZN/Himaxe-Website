// // Import GSAP & ScrollTrigger
// window.addEventListener("load", function () {
//     gsap.registerPlugin(ScrollTrigger);

//     // Fade-in effect for sections
//     gsap.utils.toArray("section").forEach(section => {
//         gsap.from(section, {
//             opacity: 0,
//             y: 50,
//             duration: 1.2,
//             ease: "power2.out",
//             scrollTrigger: {
//                 trigger: section,
//                 start: "top 80%",
//                 toggleActions: "play none none none"
//             }
//         });
//     });

//     // Enable smooth scrolling behavior
//     document.documentElement.style.scrollBehavior = "smooth";
// });




// Import GSAP & ScrollTrigger
window.addEventListener("load", function () {
    gsap.registerPlugin(ScrollTrigger);

    // Fade-in & fade-out effect
    gsap.utils.toArray(".fadeEffect").forEach(el => {
        gsap.fromTo(el, { opacity: 0, y: 50 }, {
            opacity: 1, y: 0, duration: 1.2, ease: "power2.out",
            scrollTrigger: {
                trigger: el,
                start: "top 80%", 
                end: "top 20%",
                toggleActions: "play reverse play reverse"
            }
        });
    });

    // Scale-in effect
    gsap.utils.toArray(".scaleEffect").forEach(el => {
        gsap.fromTo(el, { scale: 0.8, opacity: 0 }, {
            scale: 1, opacity: 1, duration: 1.2, ease: "power2.out",
            scrollTrigger: {
                trigger: el,
                start: "top 85%", 
                end: "top 15%",
                toggleActions: "play reverse play reverse"
            }
        });
    });

    // Rotate effect
    gsap.utils.toArray(".rotateEffect").forEach(el => {
        gsap.fromTo(el, { rotation: -30, opacity: 0 }, {
            rotation: 0, opacity: 1, duration: 1.2, ease: "power2.out",
            scrollTrigger: {
                trigger: el,
                start: "top 85%", 
                end: "top 10%",
                toggleActions: "play reverse play reverse"
            }
        });
    });

    // Text animation - letter-by-letter fade-in
    gsap.utils.toArray(".textEffect").forEach(text => {
        let splitText = text.innerText.split("").map(char => `<span>${char}</span>`).join("");
        text.innerHTML = splitText;
        gsap.fromTo(text.children, { opacity: 0, y: 10 }, {
            opacity: 1, y: 0, stagger: 0.05, duration: 0.8, ease: "power2.out",
            scrollTrigger: {
                trigger: text,
                start: "top 90%", 
                toggleActions: "play none none none"
            }
        });
    });

    // Blur-in & Blur-out Effect
    gsap.utils.toArray(".blurEffect").forEach(el => {
        gsap.fromTo(el, { filter: "blur(10px)", opacity: 0 }, {
            filter: "blur(0px)", opacity: 1, duration: 1.5, ease: "power2.out",
            scrollTrigger: {
                trigger: el,
                start: "top 85%", 
                end: "top 20%",
                toggleActions: "play reverse play reverse"
            }
        });
    });

    // Typing effect for text
    gsap.utils.toArray(".typingEffect").forEach(el => {
        let textContent = el.innerText;
        el.innerText = ""; // Clear original text
        let i = 0;
        function type() {
            if (i < textContent.length) {
                el.innerText += textContent.charAt(i);
                i++;
                setTimeout(type, 50); // Adjust speed
            }
        }
        ScrollTrigger.create({
            trigger: el,
            start: "top 85%",
            onEnter: () => type(),
            once: true
        });
    });

    // Skew & Stretch Effect
    gsap.utils.toArray(".skewEffect").forEach(el => {
        gsap.fromTo(el, { skewX: 15, scaleX: 0.8, opacity: 0 }, {
            skewX: 0, scaleX: 1, opacity: 1, duration: 1.5, ease: "power2.out",
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
                end: "top 20%",
                toggleActions: "play reverse play reverse"
            }
        });
    });
     
    
});

// window.addEventListener("load", function () {
//     staggeredFadeIn();
// });
// gsap.utils.toArray(".staggerEffect .faq-item").forEach((item, index) => {
//     gsap.from(item, {
//         opacity: 0,
//         y: 50,
//         duration: 0.4,
//         ease: "power2.out",
//         delay: index * 0.2, // Stagger effect
//         scrollTrigger: {
//             trigger: item,
//             start: "top 100%",
//             end: "top 10%",
//             toggleActions: "play reverse play reverse"
//         }
//     });
// });
   



// MAGNETIC BUTTON EFFECT
window.addEventListener("load", function () {
    magneticButtonEffect();
});

// Magnetic Button Effect
function magneticButtonEffect() {
    document.querySelectorAll(".magnetic-btn").forEach((button) => {
        button.addEventListener("mousemove", (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            gsap.to(button, {
                x: x * 0.3,
                y: y * 0.3,
                duration: 0.3,
                ease: "power2.out",
            });
        });
        button.addEventListener("mouseleave", () => {
            gsap.to(button, {
                x: 0,
                y: 0,
                duration: 0.3,
                ease: "power2.out",
            });
        });
    });

    
}

