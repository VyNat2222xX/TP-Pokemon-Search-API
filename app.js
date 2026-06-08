// QUERRY SELECTORS
const $container = document.querySelector("#pokemon-grid");
const $counterText = document.querySelector("#count-badge");

// MEMORY
const APIurl = "https://pokeapi.co/api/v2/pokemon";
let counter = -1;

// CODE
document.addEventListener("DOMContentLoaded", async () => {
	const response = await fetch(APIurl + "?limit=1350");
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

		p1.textContent = "#" + i;
		p2.textContent = DATA.results[i].name;

		img.src = "";

		div.appendChild(img);
		div.appendChild(p1);
		div.appendChild(p2);
		$container.appendChild(div);

		counter++;
		$counterText.textContent = counter + " Pokémons";
	}
});
