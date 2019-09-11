
let menuOpen = false;

document.querySelector("#nav-toggle").addEventListener("click", function() {
    if ((menuOpen === false)) {
        this.classList.toggle("active");
        TweenMax.to(".mobile-nav", 1, {
            x: 0,
            ease: Power2.easeOut
        });
        TweenMax.staggerFrom(".mobile-nav__item", 0.2, {
            scale: 0,
            ease: Power2.easeOut,
            delay: 0.7
        }, 0.1);
    menuOpen = true;
    } else {
        this.classList.toggle("active");
        TweenMax.to(".mobile-nav", 1, {
            x: 1000,
            ease: Power2.easeOut
        });
    menuOpen = false;
    }
});

document.querySelectorAll(".mobile-nav__item").forEach(function(item) {item.addEventListener("click", function() {
    document.querySelector("#nav-toggle").classList.toggle("active");
    menuOpen = false;
    TweenMax.to(".mobile-nav", 1, {
        x: 2000,
        ease: Power2.easeOut
    });
    });
});



var rect = document.querySelector(".header__h2").getBoundingClientRect();
console.log(rect.top, rect.right, rect.bottom, rect.left);

document.querySelector("#shark").style.top = rect.top - 120+ "px";



TweenMax.from(".background", 0.7, {
    x: -1200,
    ease: Power4.easeOut,
    delay: 0.5
});

TweenMax.from(".header__h2", 0.5, {
    x: -1500,
    ease: Power2.easeOut,
    delay: 5.5
});

TweenMax.from("#shark", 1, {
    y: -1000,
    ease: Bounce.easeOut,
    delay: 6.5
});

TweenMax.staggerFrom(".nav__item", 0.2, {
    scale: 0,
    ease: Power2.easeOut,
    delay: 7.5
}, 0.2);


let yellowText = TweenMax.staggerFrom(".about__special-text", 0.5, {
    color: "#fff",
    ease: Power4.easeOut,
    delay: -0.7
}, 0.5);

let aboutHeading = TweenMax.from(".about__heading", 1.5, {
    opacity: 0,
    ease: Power2.easeOut,
    delay: 0.3
});

let aboutTimeline = new TimelineMax();
aboutTimeline.add(aboutHeading).add(yellowText)

let skillsTimeline = new TimelineMax();
skillsTimeline.from(".skills__heading", 1.2, {
    opacity: 0,
    ease: Power2.easeOut,
    delay: 0.3
}).staggerFrom(".skill", 0.3, {
    scale: 0,
    ease: Power2.easeOut
}, 0.2)

let projectsTimeline = new TimelineMax();
projectsTimeline.from(".projects__heading", 1.2, {
    opacity: 0,
    ease: Power2.easeOut,
    delay: 0.3
}).staggerFrom(".project-card", 0.3, {
    scale: 0,
    ease: Power2.easeOut,
}, 0.4)

let contactTimeline = new TimelineMax();
contactTimeline.from(".contact__heading", 1.2, {
    opacity: 0,
    ease: Power2.easeOut,
    delay: 0.3
}).staggerFrom(".contact__form__input", 0.2, {
    scale: 0,
    ease: Power2.easeOut,
},0.3)

let controller = new ScrollMagic.Controller();

let aboutScene = new ScrollMagic.Scene({
    triggerElement: ".about"})
    .setTween(aboutTimeline)
    .addTo(controller);

let skillsScene = new ScrollMagic.Scene({
    triggerElement: ".skills"})
    .setTween(skillsTimeline)
    .addTo(controller);

let projectsScene = new ScrollMagic.Scene({
    triggerElement: ".projects"})
    .setTween(projectsTimeline)
    .addTo(controller);

let contactScene = new ScrollMagic.Scene({
    triggerElement: ".contact"})
    .setTween(contactTimeline)
    .addTo(controller);