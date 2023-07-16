const body = document.querySelector('body')
const dark = document.querySelector('.btn-mode')
const menu = document.querySelector('.nav__menu')
const bars = document.querySelector('.nav__bars')
const logo = document.querySelector('.nav__logo')
const allNavItems = document.querySelectorAll('.nav__menu-item')

const handleNav = () => {
	menu.classList.toggle('nav__menu--active')
	bars.classList.toggle('nav__bars--active')
	dark.classList.toggle('btn-mode--active')
	body.classList.toggle('blocked')

	allNavItems.forEach(item =>
		item.addEventListener('click', () => {
			menu.classList.remove('nav__menu--active')
			bars.classList.remove('nav__bars--active')
			dark.classList.remove('btn-mode--active')
			body.classList.remove('blocked')
		})
	)
}

const handleDarkMode = () => {
	if (body.getAttribute('data-mode') === 'light') {
		body.setAttribute('data-mode', 'dark')
	} else {
		body.setAttribute('data-mode', 'light')
	}
}

function handleRemoveNav() {
	menu.classList.remove('nav__menu--active')
	bars.classList.remove('nav__bars--active')
	dark.classList.remove('btn-mode--active')
	body.classList.remove('blocked')
}

window.addEventListener('scroll', function () {
	let scrollTop = window.pageYOffset || document.documentElement.scrollTop

	if (scrollTop >= 25) {
		document.getElementById('theme').style.opacity = 0
	} else {
		document.getElementById('theme').style.opacity = 1
	}
})

dark.addEventListener('click', handleDarkMode)
bars.addEventListener('click', handleNav)
logo.addEventListener('click', handleRemoveNav)
