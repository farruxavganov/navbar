const menu = document.querySelector(".navbar__bars");
const lists = document.querySelector(".navbar__wrapper");

menu.addEventListener("click", function () {
	if(lists.classList.contains("show")) {
		lists.classList.remove("show");
	}else {
		lists.classList.add("show");
	}
})