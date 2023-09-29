(() => {
  // IEFE FUNCTION START

  // -----------------------------------------------------------------------------------------------

  // To find the element is in view port or not START-----------------------------------------------------------

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  const box = document.querySelector(".second-pg-pra3");

  let timrun = 0;
  document.addEventListener(
    "scroll",
    function () {
      console.log("run this if condition", timrun);

      // counter incrementer START----------------
      function animateNumber(targetId, initialValue, finalValue, duration) {
        const element = document.getElementById(targetId);
        const increment = (finalValue - initialValue) / (duration / 30);

        let currentValue = initialValue;

        function updateValue() {
          currentValue += increment;
          element.textContent = Math.round(currentValue);

          if (currentValue < finalValue) {
            requestAnimationFrame(updateValue);
          }
        }

        updateValue();
      }
      if (isInViewport(box) && timrun == 0) {
        

        animateNumber("inc-num1", 1, 34, 2000);
        animateNumber("inc-num2", 1, 20, 2000);
        animateNumber("inc-num3", 1, 12, 2000);
        timrun = timrun + 1;
        console.log("timrun +1", timrun);

        // counter incrementer END----------------
      }
      if (!isInViewport(box) && timrun !== 0) {
        timrun = 0;
      }
    },
    {
      passive: true,
    }
  );

  // To find the element is in view port or not END----------------------------------------------------------------
})(); // IEFE FUNCTION END


id="slide-bn-1"

// slider button START--------------------------------------------------------------------------------------------

let scrollCont=document.querySelector(".thrd-pg-bottom")

let leftslide =document.getElementById("slide-bn-1")
let righttslide =document.getElementById("slide-bn-2")

leftslide.addEventListener("click",()=>{
  scrollCont.style.scrollBehavior="smooth"
  scrollCont.scrollLeft-=900;
    
})

righttslide.addEventListener("click",()=>{
  scrollCont.style.scrollBehavior="smooth"
  scrollCont.scrollLeft +=900;
    
})
