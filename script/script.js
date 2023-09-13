const html = document.querySelector("html");
html.style.minHeight = screen.availHeight + "px";

const burger = document.querySelector(".hamburger-box");
const contain = document.querySelector(".containers");
const logo = document.querySelector(".logo");
const box = document.querySelector("#box");
const about = document.querySelector("#about-2");
const projects = document.querySelector("#projects-container");
const circles = document.querySelector("#circles");
const connectImage = document.querySelector("#connect-image");
const contact = document.querySelector("#contact-container");
const landingPage = document.querySelector("#landing");
const footer = document.querySelector("footer");
const formArea = document.querySelector("#form-area");
const connectContainer = document.querySelector("#connect-container");
const contactArea = document.querySelector("#contact-area");
const main = document.querySelector("#main");
const [one, two, three, four] = document.querySelectorAll(".item");
const [first, second, third] = document.querySelectorAll(".blurry");
const elementsToToggle = [contain, logo, box, about, projects, circles];

let aboutHeight = about.offsetHeight;
let contactHeight = contact.offsetHeight;
let projectsHeight = projects.offsetHeight;
let footerHeight = footer.offsetHeight;
let heighte = main.offsetHeight;

let activeSection = 0;

[first, second, third].forEach((element) => {
	element.addEventListener("mouseover", function () {
		element.classList.add("animate", "blur");
		if (element === first) element.innerHTML = "Don't Forget";
		else if (element === second) element.innerHTML = "To Reach";
		else if (element === third) element.innerHTML = "For The Stars";
	});
});

box.addEventListener("mouseleave", function () {
	[first, second, third].forEach((element) => {
		element.classList.remove("animate", "blur");
		if (element === first) element.innerHTML = "I'm Augusta Nwosu.";
		else if (element === second) element.innerHTML = "A Web Developer";
		else if (element === third) element.innerHTML = "based in Turkey.";
	});
});

box.addEventListener('touchstart', () => {
    changeText();
});
box.addEventListener('touchend', () => {
    resetText();
});

const changeText = () => {
	first.innerHTML = "Don't forget";
	second.innerHTML = "To Reach";
	third.innerHTML = "For The Stars";
}
const resetText = () => {
	first.innerHTML = "I'm Augusta Nwosu";
	second.innerHTML = "A Web Developer";
	third.innerHTML = "based in Turkey";
}
if (window.innerWidth <= 576) {
	connectImage.addEventListener("click", function () {
		formArea.style.display = "block";
		connectContainer.style.display = "none";
		contactArea.style.marginTop = "0";
	});
}

main.addEventListener("wheel", (event) => {
	let smallHeight = heighte - window.scrollY;
	if (
		smallHeight <=
		contactHeight + projectsHeight + aboutHeight + footerHeight
	) {
		if (smallHeight <= contactHeight + projectsHeight + footerHeight) {
			if (smallHeight <= contactHeight + footerHeight) {
				four.style.backgroundColor = "white";
				four.style.boxShadow = "0 0 6px 6px #88ef1c";
				one.style.backgroundColor = "#24b0e9";
				two.style.backgroundColor = "#23c4c8";
				three.style.backgroundColor = "#23d5ab";
				one.style.boxShadow = "none";
				two.style.boxShadow = "none";
				three.style.boxShadow = "none";
			} else {
				three.style.backgroundColor = "white";
				three.style.boxShadow = "0 0 6px 6px #23d5ab";
				one.style.backgroundColor = "#24b0e9";
				two.style.backgroundColor = "#23c4c8";
				four.style.backgroundColor = "#88ef1c";
				one.style.boxShadow = "none";
				two.style.boxShadow = "none";
				four.style.boxShadow = "none";
			}
		} else {
			two.style.backgroundColor = "white";
			two.style.boxShadow = "0 0 6px 6px #23c4c8";
			one.style.backgroundColor = "#24b0e9";
			three.style.backgroundColor = "#23d5ab";
			four.style.backgroundColor = "#88ef1c";
			one.style.boxShadow = "none";
			three.style.boxShadow = "none";
			four.style.boxShadow = "none";
		}
	} else {
		one.style.backgroundColor = "white";
		one.style.boxShadow = "0 0 6px 6px #0edff6";
		two.style.backgroundColor = "#23c4c8";
		three.style.backgroundColor = "#23d5ab";
		four.style.backgroundColor = "#88ef1c";
		two.style.boxShadow = "none";
		three.style.boxShadow = "none";
		four.style.boxShadow = "none";
	}
});

let projectIcons = [];
projectIcons = document.querySelectorAll(".project-icon");
console.log(projectIcons);
projectIconName = [];
projectIconNames = document.querySelectorAll("#project-icon-name");
const iconNamePair =  []

for (let i = 0; i < projectIcons.length; i++) {
	iconNamePair.push({
		name: projectIconNames[i],
		icon: projectIcons[i]
	})
}
console.log(iconNamePair)
iconNamePair.map((projectIcon) => {
	console.log(projectIcon);
	projectIcon.icon.addEventListener("mouseover", () => {
		projectIcon.name.style.display = "block";
	})
	projectIcon.icon.addEventListener("mouseleave", () => {
		projectIcon.name.style.display = "none";
	})}

)
let grids = [];
grids = document.querySelectorAll(".grid-project-background");
grids.forEach(grid => {
	grid.addEventListener("touchstart", ()=> {
		grid.style.backgroundImage = "conic-gradient(from top,#00ffc3,#00ffff,#2adfff,#009dff,#0200ff,#009dff,#2adfff,#00ffff)";
	});
	grid.addEventListener("touchend", ()=> {
		grid.style.backgroundImage = "linear-gradient(from top,#00ffc3,#00ffff,#2adfff,#009dff,#0200ff)";
	})
})