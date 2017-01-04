document.addEventListener('DOMContentLoaded',function() {
	const triggers = document.querySelectorAll('.links');
	const background = document.querySelector('#dropDownBg');
	const main = document.querySelector('.main');

	function handleEnter() {
		this.classList.add('trigger-enter');
		setTimeout(() => this.classList.add('trigger-enter-active'),150);
		background.classList.add('open');

		const dropdown = this.querySelector('.dropdowns');
		const dropdownCoords = dropdown.getBoundingClientRect();
		const navCoords = main.getBoundingClientRect();
		const coords = {
			width: dropdownCoords.width + 20,
			height: dropdownCoords.height + 50,
			top: dropdownCoords.top - navCoords.top - 20,
			left: dropdownCoords.left - navCoords.left,
		};

		background.style.width = `${coords.width}px`;
		background.style.height = `${coords.height}px`;
		background.style.transform = `translate(${coords.left}px,${coords.top}px)`;
	}

	function handleLeave() {
		this.classList.remove('trigger-enter');
		setTimeout(() => this.classList.remove('trigger-enter-active'),150);
		background.classList.remove('open');
	}

	triggers.forEach(_ => _.addEventListener('mouseenter', handleEnter));
	triggers.forEach(_ => _.addEventListener('mouseleave',handleLeave));
});
