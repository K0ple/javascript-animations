//timeline to chain events, easing controls the transition animation "movement"
const tl = gsap.timeline({ defaults: { duration: 0.75, ease: "power1.out" } });

//Adding 3 different animations here
// 1. the first one controlls the fade in animation of the cookie conatiner.
//    On specifying a duration it will overide the duration mentioned in defaults for this animation
tl.fromTo(
  ".cookie-container",
  { scale: 0 },
  { scale: 1, ease: "elastic.out(1, 0.4)", duration: 1.5 }
);

// 2. the second one controlls the fade in animation for the cookie conatiner
//    we can specify the rotaion parameter for the cookie to roll in from start to finish degree
//    '<50%' specifies this animation will start after the first animation is done 50%

tl.fromTo(
  ".cookie",
  { opacity: 0, x: -50, rotation: "-45deg" },
  { opacity: 1, x: 0, rotation: "0deg" },
  "<50%"
);

//3. the third one controlls the fade in animation for the text inside the pop-up.
//   the '<' specifies that it will sync animation start time with the previous animation
tl.fromTo(".text", { x: 30, opacity: 0 }, { x: 0, opacity: 1 }, "<");

tl.fromTo(
  ".cookie",
  { y: 0, rotation: "0deg" },
  { y: -20, rotation: "-20deg", yoyo: true, repeat: -1 }
);
tl.fromTo("#crumbs", { y: 0 }, { y: -10, yoyo: true, repeat: -1 }, "<");

//pop-up close
const button = document.querySelector("button");
button.addEventListener("click", () => {
  gsap.to(".cookie-container", {
    opacity: 0,
    y: 100,
    duration: 0.75,
    ease: "power1.out",
  });
});
