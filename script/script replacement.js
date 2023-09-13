var html = document.querySelector("html");
html.style.minHeight = screen.availWidth;

var burger = document.querySelector(".hamburger-box");
var contain = document.querySelector(".containers");
var logo = document.querySelector(".logo");

var box = document.querySelector("#box");
var about = document.querySelector("#about-2");
var projects = document.querySelector("#projects-container");
var circles = document.querySelector("#circles");
var connectImage = document.querySelector("#connect-image");
var formArea = document.querySelector("#form-area");
var connectContainer = document.querySelector("#connect-container");
var contactArea = document.querySelector("#contact-area");
var contact = document.querySelector("#contact-container");
var landingPage = document.querySelector("#landing");
var main = document.querySelector("#main");
var one = document.querySelector("#on");
var two = document.querySelector("#tw");
var three = document.querySelector("#thre");
var four = document.querySelector("#fou");
var footer = document.querySelector("footer");
var aboutHeight = about.offsetHeight;
var contactHeight = contact.offsetHeight;
var projectsHeight = projects.offsetHeight;
var footerHeight = footer.offsetHeight;
var heighte = main.offsetHeight;
var smallHeight = (heighte - window.scrollY);
if (burger.checked) {
	burger.classList.toggle("is-active");
	if (burger.classList.contains("is-active")) {
		contain.style.display = "flex";
		logo.style.display = "none";
		box.style.display = "none";
		about.style.display = "none";
		projects.style.display = "none";
		circles.style.display = "none";

		window.addEventListener("resize", function () {
			if (window.innerWidth > 576) {
				contain.style.display = "none";
				logo.style.display = "inline-block";
				box.style.display = "inline-block";
				about.style.display = "block";
				projects.style.display = "block";
				circles.style.display = "block";
			} else {
				contain.style.display = "flex";
				logo.style.display = "none";
				box.style.display = "none";
				about.style.display = "none";
				projects.style.display = "none";
				circles.style.display = "none";
			}
		});
	} else {
		contain.style.display = "none";
		logo.style.display = "inline-block";
		box.style.display = "inline-block";
		about.style.display = "block";
		projects.style.display = "block";
		circles.style.display = "block";
	}
}

var first = document.querySelector(".first");
var second = document.querySelector(".second");
var third = document.querySelector(".third");
var box = document.querySelector("#box");
const animateElements = [
	{
		name: "first",
		replacement: "Don't Forget",
        initial: "I'm Augusta Nwosu."
	},
	{
        name: "second",
        replacement: "To Reach",
        initial: "A Web Developer"
    },
    {
        name: "third",
        replacement: "For The Stars",
        initial: "based in Turkey."
    }
];
animateElements.forEach((animateElement) => {
    const element = document.querySelector("." + animateElement.name);
    element.addEventListener("mouseover", () => {
        element.classList.add("animate", "blur");
        element.innerHTML = animateElement.replacement;
    });
});

box.addEventListener("mouseleave", function (e) {
	first.classList.remove("animate", "blur");
	second.classList.remove("animate", "blur");
	third.classList.remove("animate", "blur");
	first.innerHTML = "I'm Augusta Nwosu.";
	second.innerHTML = "A Web Developer";
	third.innerHTML = "based in Turkey.";
});
connectImage.addEventListener("click", function (e) {
	formArea.style.display = "block";
	connectContainer.style.display = "none";
	contactArea.style.marginTop = "0";
});



main.addEventListener("wheel", (event) => {
    if (smallHeight <= (contactHeight + projectsHeight + aboutHeight + footerHeight)) {
        if (smallHeight <= (contactHeight + projectsHeight + footerHeight)) {
            if (smallHeight <= contactHeight + footerHeight) {
                four.style.backgroundColor = 'white';
                four.style.boxShadow = "0 0 6px 6px #88ef1c";
                one.style.backgroundColor = '#24b0e9';
                two.style.backgroundColor = '#23c4c8';
                three.style.backgroundColor = '#23d5ab';
                one.style.boxShadow = "none";
                two.style.boxShadow = "none";
                three.style.boxShadow = "none";

            } else {
              three.style.backgroundColor = 'white';
              three.style.boxShadow = "0 0 6px 6px #23d5ab";
              one.style.backgroundColor = '#24b0e9';
              two.style.backgroundColor = '#23c4c8';
              four.style.backgroundColor = '#88ef1c';
              one.style.boxShadow = "none";
              two.style.boxShadow = "none";
              four.style.boxShadow = "none";
            }

        } else {
          two.style.backgroundColor = 'white';
          two.style.boxShadow = "0 0 6px 6px #23c4c8";
          one.style.backgroundColor = '#24b0e9';
          three.style.backgroundColor = '#23d5ab';
          four.style.backgroundColor = '#88ef1c';
          one.style.boxShadow = "none";
          three.style.boxShadow = "none";
          four.style.boxShadow = "none";
        }

    } else {
      one.style.backgroundColor = 'white';
      one.style.boxShadow = "0 0 6px 6px #0edff6";
      two.style.backgroundColor = '#23c4c8';
      three.style.backgroundColor = '#23d5ab';
      four.style.backgroundColor = '#88ef1c';
      two.style.boxShadow = "none";
      three.style.boxShadow = "none";
      four.style.boxShadow = "none";
    }
});
// main.addEventListener("wheel", () => {
// 	observeElement(landingPage, one);
// 	observeElement(about, two);
// 	observeElement(projects, three);
// 	observeElement(contact, four);
// });
// const observeElement = (element, circle) => {
// 	var observer = new IntersectionObserver(function (entries) {
// 		if (entries[0].isIntersecting) {
// 			circle.style.boxShadow = "0 0 6px 6px #23c4c8";
// 			circle.style.backgroundColor = "white";
// 			observer.disconnect();
// 		} else {
// 			circle.style.boxShadow = none;
// 			circle.style.backgroundColor = "#88ef1c";
// 		}
// 	});

// 	observer.observe(element);
// };
