"use strict";
const menuList = document.querySelector(".menuList");
const menuContainer = document.querySelector(".menuContainer");
const letters = document.querySelector(".letters");
const numbers = document.querySelector(".numbers");

menuContainer.addEventListener("click", (e) => {
	if (e.target.classList.contains("menuBtnFnt")) {
		menuList.classList.toggle("hidden");
	}

	if (e.target.classList.contains("letterBtn")) {
		e.target.style.color = "blue";
		letters.classList.remove("hidden");
		numbers.classList.add("hidden");
		menuList.classList.toggle("hidden");
	} else if (e.target.classList.contains("numBtn")) {
		e.target.style.color = "blue";
		letters.classList.add("hidden");
		numbers.classList.remove("hidden");
		menuList.classList.toggle("hidden");
	}
});
