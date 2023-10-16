const dropdowns = document.querySelectorAll('.dropdown-menu');

dropdowns.forEach(dropdown => {
	const dropdownBtn = dropdown.querySelector('.dropdown-menu__btn');
	const dropdownList = dropdown.querySelector('.dropdown-menu__list');
	const dropdownListItems = dropdown.querySelectorAll('.dropdown-menu__list-item')
	const dropdownInput = dropdown.querySelector('.dropdown-menu__input');

	dropdownBtn.addEventListener('click', () => {
		dropdownBtn.classList.toggle('dropdown-menu__btn--active');
		dropdownList.classList.toggle('dropdown-menu__list--active');
	});

	dropdownListItems.forEach(dropdownListItem => {
		dropdownListItem.addEventListener('click', e => {
			e.stopPropagation();
			dropdownListItems.forEach(dropdownListItem => {
				dropdownListItem.classList.remove('dropdown-menu__list-item--active');
			});
			e.target.classList.add('dropdown-menu__list-item--active');
			dropdownBtn.innerHTML = e.target.innerHTML;
			const value = e.target.dataset.value;
			dropdownInput.setAttribute('value', value);
			dropdownBtn.classList.remove('dropdown-menu__btn--active');
			dropdownList.classList.remove('dropdown-menu__list--active');
		});
	});

	document.addEventListener('click', e => {
		if (e.target !== dropdownBtn) {
			dropdownBtn.classList.remove('dropdown-menu__btn--active');
			dropdownList.classList.remove('dropdown-menu__list--active');
		}
	});

	document.addEventListener('keydown', e => {
		if (e.key === 'Tab' || e.key == 'Escape') {
			dropdownBtn.classList.remove('dropdown-menu__btn--active');
			dropdownList.classList.remove('dropdown-menu__list--active');
		}
	});
});