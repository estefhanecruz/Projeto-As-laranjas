document.querySelectorAll(".dropdown-item").forEach((link) => {
	link.addEventListener("click", function () {
		const target = document.querySelector(this.getAttribute("href"));
		if (target) {
			const collapse = target.closest(".accordion-collapse");
			if (collapse && !collapse.classList.contains("show")) {
				new bootstrap.Collapse(collapse, { toggle: true });
			}
		}
	});
});
