$(function () {
	let menuArrow = document.querySelector(".select__arrow");
	let selectList = document.querySelector(".select__list");
	let selectTop = document.querySelector(".select__top");
	selectTop.addEventListener("click", function () {
		selectList.classList.toggle("active");
		menuArrow.classList.toggle("active");
	});

	let selectedLang = document.querySelector(".select__language");
	let currentSelectedLang = selectedLang;
	let langList = document.querySelectorAll(".select__item");
	let currentId;

	if (langList.length > 0) {
		langList.forEach((langItem, index) => {
			langItem.id = index;
			if (langItem.id == 0) {
				currentSelectedLang.innerText = langItem.querySelector("p").innerHTML;
				langItem.style.display = "none";
				currentId = index;
			}

			langItem.addEventListener("click", function () {
				selectList.classList.toggle("active");
				menuArrow.classList.toggle("active");
				currentSelectedLang.innerText = langItem.querySelector("p").innerHTML;
				langItem.style.display = "none";
				langList[currentId].style.display = "block";
				currentId = index;

				if (
					currentSelectedLang.innerText ==
					langList[langList.length - 1].querySelector("p").innerHTML
				) {
					langList[langList.length - 2].classList.add("last");
				} else {
					langList[langList.length - 2].classList.remove("last");
				}
			});
		});
	}
});
