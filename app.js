import gsap from 'gsap'
import { TweenMax } from 'gsap/gsap-core';
const buttons = document.querySelectorAll(".contactbtn");
const forms = document.querySelectorAll(".contactform");

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        buttons.forEach((btn) => {
            btn.style.border = "1px solid #AD8B7F";
        });
        button.style.border = "5px double #AD8B7F";
        forms.forEach((form, formIndex) => {
            if (index === formIndex) {
                form.style.opacity = "1";
                form.style.pointerEvents = "auto"; // Make the form clickable
            } else {
                form.style.opacity = "0";
                form.style.pointerEvents = "none"; // Make the form unclickable
            }
        });
    });
});

document.querySelector(".menu.hamburger").addEventListener("click", function() {
    this.classList.toggle('opened');
    this.setAttribute('aria-expanded', this.classList.contains('opened'));
    toggleNavbar();
});

let show = 0;
function toggleNavbar() {
    console.log("hii")
    var mobileNavbar = document.querySelector(".mobile-navbar");
    if (show) {
        mobileNavbar.style.transform = "translateX(100%)"
        show = 0;
    }
    else {
        mobileNavbar.style.transform = "translateX(0%)"
        show = 1;
    }
}

gsap.registerPlugin(ScrollTrigger);
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min((1, 1.001 - Math.pow(2, -10 * t)))
})
function raf(time) {
    lenis.raf(time);
    ScrollTrigger.update();
    requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

gsap.from('.logo img', {
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
})


gsap.from('.row2col2img', {
    opacity: 0,
    x: 20,
    delay: 0.5,
    ease: Expo.easeInOut
})


TweenMax.from('.row2col1 h1', 1, {
    opacity: 0,
    delay: 0.5,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.from('.row2col1 p', 1, {
    opacity: 0,
    delay: 0.8,
    y: 20,
    ease: Expo.easeInOut
})


TweenMax.staggerFrom('.row1col2 a', 1, {
    opacity: 0,
    x: -20,
    ease: Power3.easeInOut
}, 0.08)


TweenMax.staggerFrom('.sect2div2content .content1', 1, {
    opacity: 0,
    y: -30,
    ease: Power3.easeInOut,
    scrollTrigger: {
        trigger: ".content1",
        scrub: 1,
        start: 'top 50%',
        end: 'bottom 50%',
    },
}, 0.08)

TweenMax.staggerFrom('.quicklink p', 1, {
    opacity: 0,
    y: -50,
    ease: Power3.easeInOut,
    scrollTrigger: {
        trigger: ".footer1left h1",
        scrub: 1,
        start: 'top 60%',
        end: 'bottom 70%',
    },
}, 0.08)

TweenMax.staggerFrom('.address p', 1, {
    opacity: 0,
    y: -50,
    ease: Power3.easeInOut,
    scrollTrigger: {
        trigger: ".footer1left h1",
        scrub: 1,
        start: 'top 60%',
        end: 'bottom 70%',
    },
}, 0.08)

TweenMax.staggerFrom('.footer2 img', 1, {
    opacity: 0,
    x: -50,
    ease: Power3.easeInOut,
    scrollTrigger: {
        trigger: ".footer1left h1",
        scrub: 1,
        start: 'top 50%',
        end: 'bottom 70%',
    },
}, 0.08)

TweenMax.staggerFrom('.footer2 p', 1, {
    opacity: 0,
    x: 50,
    ease: Power3.easeInOut,
    scrollTrigger: {
        trigger: ".footer1left h1",
        scrub: 1,
        start: 'top 50%',
        end: 'bottom 70%',
    },
}, 0.08)





















const t1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".naturealimg1",
        scrub: 1,
        start: 'top 50%',
        end: 'bottom center',
    },
    yoyo: true,
    ease: 'power2.inOut',
})

t1
    .fromTo('#faceimg', {
        x: -300
    }, {
        x: 0,
    })
    .fromTo('#girlimg', {
        x: -300
    }, {
        x: 0,
    })
    .fromTo('.naturealimg1 h1', {
        opacity: 0,
        y: 50,
    }, {
        opacity: 1,
        y: 0,
    })

const glassaniamtion = gsap.timeline({
    scrollTrigger: {
        trigger: ".sect2div2",
        scrub: 1,
        start: 'top 50%',
        end: 'bottom 40%',
    },
    yoyo: true,
    ease: 'power2.inOut',
})

glassaniamtion
    .fromTo('#glassimg', {
        y: 0,
        x: 0,
    }, {
        keyframes: {
            rotation: [15, -15, 15, -15, 10, -10, 15, -15, 15, -15, 10, -10, 0]
        },
        duration: 1,
    })
    .fromTo("#glassimg", {
        x: 0,
        y: 0,
    }, {
        y: 60,
        x: -30,
        duration: 1,
        scrollTrigger: {
            trigger: "#first",
            scrub: 1,
            start: 'top 40%',
            end: 'bottom 40%',
        },
    })
    .fromTo("#glassimg", {
        y: 60,
        x: -30,
    }, {
        x: -400,
        y: -120,
        scrollTrigger: {
            trigger: "#first",
            scrub: 1,
            start: 'top 20%',
            end: 'bottom 40%',
        },
    })
    .fromTo("#glassimg", {
        x: -400,
        y: -120,
    }, {
        y: 10,
        x: -440,
        opacity: 0,
        scrollTrigger: {
            trigger: "#third",
            scrub: 1,
            start: 'top 70%',
            end: 'bottom 50%',
        },
    })
    .to("#bottleimg1", {
        y: 80,
        x: -40,
        scrollTrigger: {
            trigger: "#third",
            scrub: 1,
            start: 'top 70%',
            end: 'bottom 50%',
        },
    })
    .fromTo("#bottleimg1", {
        y: 80,
        x: -40,
    }, {
        x: 350,
        y: 250,
        scrollTrigger: {
            trigger: "#third",
            scrub: 1,
            start: 'top 50%',
            end: 'bottom 50%',
        },
    })
    .fromTo("#bottleimg1", {
        x: 350,
        y: 250,
    }, {
        x: 320,
        y: 300,
        opacity: 0,
        scrollTrigger: {
            trigger: "#third",
            scrub: 1,
            start: 'top 20%',
            end: 'bottom 50%',
        },
    })




const circletimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".sect3imgdiv",
        scrub: 1,
        start: 'top 70%',
        end: 'bottom 60%',
    },
    yoyo: true,
    ease: 'power2.inOut',
})

const circletimeline1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".sect3imgdiv",
        scrub: 1,
        start: 'top 70%',
        end: 'bottom 60%',
    },
    yoyo: true,
    ease: 'power2.inOut',
})
const circletimeline2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".sect3imgdiv",
        scrub: 1,
        start: 'top 70%',
        end: 'bottom 60%',
    },
    yoyo: true,
    ease: 'power2.inOut',
})

circletimeline
    .to('#circle1', {
        y: "45%",
        rotate: "360deg",
    })
    .to('#circle2', {
        y: "-45%",
        rotate: "180deg",
    })
    .to('#circle3', {
        y: "-15%",
        rotate: "0deg",
    })
    .to('#circle4', {
        x: "-50%",
        rotate: "180deg",
    })
    .to('#circle5', {
        x: "50%",
        rotate: "-90deg",
    })

circletimeline1
    .to('#scircle1', {
        y: "15%",
        rotate: "90deg"
    })
    .to('#scircle2', {
        y: "-15%",
        rotate: "-90deg"
    })
    .to('#scircle3', {
        y: "30%",
        rotate: "90deg"
    })
    .to('#scircle4', {
        y: "-30%",
        rotate: "-90deg"
    })


circletimeline2
    .to('#acircle1', {
        x: "45%",
        rotate: "90deg"
    })
    .to('#acircle2', {
        y: "45%",
        rotate: "270deg"
    })
    .to('#acircle3', {
        y: "-25%",
        rotate: "90deg"
    })
    .to('#acircle4', {
        x: "-25%",
        rotate: "0deg"
    })


const text = new SplitType('#cursortext')

const cursorsection = document.querySelector('.slidersect');
const cursor = document.querySelector('.custom-cursor');
let cursortext = document.querySelectorAll(".char")
const sliderdiv = document.querySelector('.sliderdiv');

function roundtext(radius) {
    for (i = 0; i < cursortext.length; i++) {
        let rotation = i * (360 / cursortext.length)
        gsap.set(cursortext[i], {
            transformOrigin: `0px ${radius}px`,
            x: radius,
            rotate: rotation
        })
        gsap.set(cursor, {
            transformOrigin: 'center center',
            rotation: 0,
            width: radius * 2,
            height: radius * 2,
        })
        let rotate = gsap.timeline({ repeat: -1 })
        rotate.to(cursor, {
            rotation: 360,
            duration: 5,
            ease: 'none'
        })
    }
}


function moveSliderLeft() {
    const scrollAmount = 100;
    const duration = 500;
    const startTime = performance.now();
    const initialScrollLeft = sliderdiv.scrollLeft;
    const targetScrollLeft = initialScrollLeft - scrollAmount;
    function scrollAnimation(currentTime) {
        const elapsedTime = currentTime - startTime;
        if (elapsedTime < duration) {
            const scrollProgress = elapsedTime / duration;
            const scrollValue = initialScrollLeft - scrollProgress * (initialScrollLeft - targetScrollLeft);
            sliderdiv.scrollLeft = scrollValue;
            requestAnimationFrame(scrollAnimation);
        } else {
            sliderdiv.scrollLeft = targetScrollLeft;
        }
    }
    requestAnimationFrame(scrollAnimation);
}


function moveSliderRight() {
    const scrollAmount = 100;
    const duration = 500;
    const startTime = performance.now();
    const initialScrollLeft = sliderdiv.scrollLeft;
    const targetScrollLeft = initialScrollLeft + scrollAmount;
    function scrollAnimation(currentTime) {
        const elapsedTime = currentTime - startTime;
        if (elapsedTime < duration) {
            const scrollProgress = elapsedTime / duration;
            const scrollValue = initialScrollLeft + scrollProgress * scrollAmount;
            sliderdiv.scrollLeft = scrollValue;
            requestAnimationFrame(scrollAnimation);
        } else {
            sliderdiv.scrollLeft = targetScrollLeft;
        }
    }
    requestAnimationFrame(scrollAnimation);
}


function showCursor() {
    console.log("show")
    cursor.style.opacity = '1';
    document.body.style.cursor = 'none';
}

function hideCursor() {
    console.log("hide")
    cursor.style.opacity = '0';
    document.body.style.cursor = 'default';
}

let radius = 50
function cursormove(e) {
    var mouseX = e.pageX
    var mouseY = e.pageY
    const cursorRight = mouseX > (sliderdiv.getBoundingClientRect().right - radius);
    const cursorLeft = mouseX < (sliderdiv.getBoundingClientRect().left + radius);
    m1 = gsap.timeline();
    m1.to(cursor, {
        duration: 0.1,
        x: mouseX - radius,
        y: mouseY - radius,
        ease: Expo.ease
    })
    if (cursorRight) {
        moveSliderRight();
    } else if (cursorLeft) {
        moveSliderLeft();
    }
}


function init() {
    roundtext(radius);
    cursorsection.addEventListener('mousemove', cursormove);
    cursorsection.addEventListener('mouseenter', showCursor);
    cursorsection.addEventListener('mouseleave', hideCursor);
}

window.addEventListener('load', function () {
    init();
    hideCursor();
})


gsap.to(".footercircleimg", {
    top: -60,
    scrollTrigger: {
        trigger: ".footer1",
        scrub: 1,
        start: 'top 50%',
        end: 'bottom 90%',
    },
})


