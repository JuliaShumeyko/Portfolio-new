// const shumeyko = document.querySelectorAll("#shumeyko path");

// for (let i = 0; i < shumeyko.length; i++) {
//     console.log(`Letter ${i} is ${shumeyko[i].getTotalLength()}`);
// }

TweenMax.from(".background", 0.7, {
    x: -1200,
    ease: Power4.easeOut,
    delay: 0.5
});

TweenMax.from(".header__h2", 0.5, {
    x: -1100,
    ease: Power2.easeOut,
    delay: 6.5
});

TweenMax.staggerFrom(".nav__item", 0.2, {
    scale: 0,
    ease: Power2.easeOut,
    delay: 7.5
}, 0.2);


let yellowText = TweenMax.staggerFrom(".about__special-text", 0.5, {
    color: "#3d3d3d",
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