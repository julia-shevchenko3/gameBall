window.addEventListener("load", () => {
	const game = document.getElementById(".game");
	const place = document.querySelector(".place");
	const point = document.querySelector(".point");
	const start = document.querySelector(".start");
	const newGame = document.querySelector(".new-game");
	const time = document.querySelector(".time");
	let sec = 30;

	start.addEventListener("click", startGame);
	start.addEventListener("click", main);

	function startGame() {
		place.style.height = "50vh";
		point.style.opacity = "1";
		start.style.display = "none";
		newGame.style.display = "inline-block";
	}

	function main() {
		function timer() {
			sec--;
			time.innerHTML = "00:" + ("0" + sec).slice(-2);

			if (sec <= 5) time.style.color = "#9a1b59";

			if (sec == 0) {
				clearInterval(setTime);
				let gameOver = document.createElement("h2");
				gameOver.innerHTML = "GAME OVER!";
				place.appendChild(gameOver);

				point.removeEventListener("mouseover", movement);
				point.removeEventListener("click", win);
			}
		}

		point.addEventListener("click", win);

		function win() {
			let win = document.createElement("h2");
			win.innerHTML = "VICTORY!";
			place.appendChild(win);
			clearInterval(setTime);
			point.removeEventListener("mouseover", movement);
		}

		let setTime = setInterval(timer, 1000);
	}

	newGame.addEventListener("click", rest);

	function rest() {
		location.reload();
	}

	point.addEventListener("mouseover", movement);

	function movement() {
		let top = (Math.random() * 70).toFixed(1);
		let left = (Math.random() * 70).toFixed(1);
		point.style.top = top + "%";
		point.style.left = left + "%";
	}
});
