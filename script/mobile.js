const inner = document.querySelector("#inner");

inner.classList.add("hidden");

document.querySelectorAll(".menu").forEach((btn) => {
	btn.addEventListener("click", (e) => {
		btn.classList.toggle("active");

		if (btn.classList.contains("active")) {
			inner.classList.remove("hidden");
			inner.classList.add("visible");
		} else {
			inner.classList.remove("visible");
			inner.classList.add("hidden");
		}
		document.querySelectorAll(".navbar-item").forEach((el) => {
			el.addEventListener("click", () => {
				btn.classList.toggle("active");
				inner.classList.remove("visible");
				inner.classList.add("hidden");
			})
		});
	});
});

