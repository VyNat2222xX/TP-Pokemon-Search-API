// QUERRY SELECTORS
const $container = document.querySelector("#pokemon-grid");
const $counterText = document.querySelector("#count-badge");
const $badges = document.querySelectorAll(".poke-card");
const $details = document.querySelector("#detail-content");
const $detailsEmpty = document.querySelector("#detail-banner");

// MEMORY
const APIurl = "https://pokeapi.co/api/v2/pokemon";
let counter = 1;

// CODE
document.addEventListener("DOMContentLoaded", async () => {
	const response = await fetch(APIurl + "?limit=1025");
	const DATA = await response.json();

	console.log(DATA);

	for (let i = 0; i < DATA.results.length; i++) {
		const div = document.createElement("div");
		const p1 = document.createElement("p");
		const p2 = document.createElement("p");
		const img = document.createElement("img");

		div.classList.add("poke-card");
		p1.classList.add("poke-id");
		p2.classList.add("poke-name");

		if (i < 9) {
			p1.textContent = "#000" + counter;
		} else if (i < 99) {
			p1.textContent = "#00" + counter;
		} else if (i < 999) {
			p1.textContent = "#0" + counter;
		} else {
			p1.textContent = "#" + counter;
		}
		p2.textContent = DATA.results[i].name;

		img.src =
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" +
			[i + 1] +
			".png";
		img.alt = "Image de " + DATA.results[i].name;

		div.appendChild(img);
		div.appendChild(p1);
		div.appendChild(p2);
		$container.appendChild(div);

		counter++;
		$counterText.textContent = counter - 1 + " Pokémons";
	}
});
