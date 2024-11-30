// function delay(n) {
//      n = n || 2000;
//      return new Promise((done) => {
//           setTimeout(() => {
//                done();
//           }, n);
//      });
// }

// function pageTransition() {
//      var tl = gsap.timeline();
//      tl.to(".loading-screen", {
//           duration: 1.2,
//           width: "100%",
//           left: "0%",
//           ease: "Expo.easeInOut",
//      });

//      tl.to(".loading-screen", {
//           duration: 1,
//           width: "100%",
//           left: "100%",
//           ease: "Expo.easeInOut",
//           delay: 0.3,
//      });
//      tl.set(".loading-screen", { left: "-100%" });
// }

// function contentAnimation() {
//      var tl = gsap.timeline();
//      tl.from(".animate-this", { duration: 1, y: 30, opacity: 0, stagger: 0.4, delay: 0.2 });
// }

// $(function () {
//      barba.init({
//           sync: true,

//           transitions: [
//                {
//                     async leave(data) {
//                          const done = this.async();

//                          pageTransition();
//                          await delay(1000);
//                          done();
//                     },

//                     async enter(data) {
//                          contentAnimation();
//                     },

//                     async once(data) {
//                          contentAnimation();
//                     },
//                },cusorPoint = document.querySelector(['data
//                },cusorPoint = document.querySelector(['data])])
//           ],
//      });
// });

const cusorPoint = document.querySelector('[data-cursos-point]');
const cusorOutline = document.querySelector('[data-cursos-outline]');

window.addEventListener('mousemove', (e) => {
     const posX = e.clientX
     const posY = e.clientY

     cusorPoint.style.left = `${posX}px`
     cusorPoint.style.top = `${posY}px`

     cusorOutline.style.left = `${posX}px`
     cusorOutline.style.top = `${posY}px`

     cusorOutline.animate({
          left: `${posX}px`,
          top: `${posY}px`
     }, { duration: 500, fill: "forwards" })
})

const links = document.querySelectorAll(".link");
const transition = document.querySelector(".transition");

function handleClick(e) {
     e.preventDefault();
     console.log('asdfdf');
     transition.classList.add("slide");

     setTimeout(() => {
          window.location = e.target.href;
     }, 900);

     // Remove the event listener for each link
     links.forEach(link => {
          link.removeEventListener("click", handleClick);
     });
}

// Attach click event listeners to links
links.forEach(link => {
     link.addEventListener("click", handleClick);
});


// const aboutLinks = document.querySelectorAll(".about-link");

function handleClickAbout(e) {
     e.preventDefault();
     console.log('asdfdf');
     transition.classList.add("slide");

     setTimeout(() => {
          window.location = e.target.href;
     }, 900);

     // Remove the event listener for each link
     aboutLinks.forEach(link => {
          link.removeEventListener("click", handleClickAbout);
     });
}
