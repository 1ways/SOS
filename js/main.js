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

	// if (langList.length > 0) {
	// 	for (let i = 0; i < langList.length; i++) {
	// 		langList[i].id = i;
	// 		if (langList[i].id == 0) {
	// 			currentSelectedLang.innerText = langList[i].querySelector(
	// 				"p"
	// 			).innerHTML;
	// 			langList[i].style.display = "none";
	// 			currentId = i;
	// 			console.log(currentId);
	// 		}

	// 		langList[i].addEventListener("click", function () {
	// 			selectList.classList.toggle("active");
	// 			menuArrow.classList.toggle("active");
	// 			currentSelectedLang.innerText = langList[i].querySelector(
	// 				"p"
	// 			).innerHTML;
	// 			langList[i].style.display = "none";
	// 			langList[currentId].style.display = "block";
	// 			currentId = i;
	// 		});
	// 	}
	// }

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
				currentSelectedLang.innerText = langItem.querySelector(
					"p"
				).innerHTML;
				langItem.style.display = "none";
				langItem[currentId].style.display = "block";
				currentId = index;
			});
		});
	}
});
