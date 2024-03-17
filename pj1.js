let box = document.querySelector("#center");

box.addEventListener("mousemove", function (details) {
  // alert("RISHABH")

  var rectanglelocation = box.getBoundingClientRect();

  var insiderectval = details.clientX - rectanglelocation.left;

  if (insiderectval < rectanglelocation.width / 2) {
    var redcolor = gsap.utils.mapRange(
      0,

      rectanglelocation.width / 2,

      255,
      0,

      insiderectval
    );

    gsap.to(box, {
      backgroundColor: `rgb(${redcolor},0,0)`,
      ease: Power4,
    });
    console.log("Rishabh in left");
  } else {
    var greencolor = gsap.utils.mapRange(
      0,
      rectanglelocation.width / 2,
      rectanglelocation.width,
      255,
      0,
      insiderectval
    );

    gsap.to(box, {
      backgroundColor: `rgb(0,${greencolor},0)`,
      ease: Power4,
    });
    console.log("Rishabh in Right");
  }
});

box.addEventListener("mouseleave", function () {
  gsap.to(box, {
    backgroundColor: "yellow",
  });
});
