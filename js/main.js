  // Timeline 1: For wrapper and hero section
  const t2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".wrapper",
        start: "0 0", // Trigger when the top of wrapper hits the top of viewport
        end: "+=150%", // End when the bottom of wrapper hits the bottom of viewport
        pin: true, // Pin the wrapper during the scroll
        scrub: true, // Scrub the animation to the scroll position
        markers: false, // Show markers for debugging
        id: "timeline1" // Unique identifier for this ScrollTrigger
    }
});

// Animations for the first timeline
t2.to(".mask", {
    scale: 1.2,
    z: 500,
    transformOrigin: "center top",
    ease: "power4.inOut"
})
.to(".section.hero", {
    scale: 1,
    transformOrigin: "center top",
    ease: "power4.inOut"
}, "<"); // This "<" ensures the second animation starts immediately after the first

// Timeline 2: For box1 and box2




$(document).ready(function(){
 // Initialize AOS
 AOS.init({
  duration: 1000, // Duration of the animation
    easing: 'ease-in-out', // Easing function
    once: false, // Allow animations to trigger every time the element is in view
    offset: 100, // Optional: Add an offset to trigger animations a little earlier
    delay: 0, // Optional: No delay for the first trigger
    mirror: true, // Optional: Keep the animations running as you scroll back up
});


})





// type animation
$(function () {
  $(".typed").typed({
      strings: ["Designer.", "Frontend.", "Good Person.", "Hard Worker."],
      // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
      stringsElement: null,
      // typing speed
      typeSpeed: 50,
      // time before typing starts
      startDelay: 1200,
      // backspacing speed
      backSpeed: 20,
      // time before backspacing
      backDelay: 500,
      // loop
      loop: true,
      // false = infinite
      loopCount: false,
      // show cursor
      showCursor: false,
      // character for cursor
      cursorChar: "|",
      // attribute to type (null == text)
      attr: null,
      // either html or text
      contentType: 'html',
      // call when done callback function
      callback: function () { },
      // starting callback function before each string
      preStringTyped: function () { },
      //callback for every typed string
      onStringTyped: function () { },
      // callback for reset
      resetCallback: function () { }
  });
});

(function($) {
  $(window).on("load", function() {
    $("a[rel='m_PageScroll2id']").mPageScroll2id();
  });
})(jQuery);

