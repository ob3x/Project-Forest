const burgerBtn = document.querySelector('.nav-burger');
const navBox = document.querySelector('.nav-box');
const allNavItems = document.querySelectorAll('.nav-box__item');

const nameInput = document.querySelector('.input-name');
const mailInput = document.querySelector('.input-mail');
const textarea = document.querySelector('.contact-box__item-textarea');
const sendBtn = document.querySelector('.contact-box__btn');
const error = document.querySelector('.contact-error');

const toggleNav = () => {
	navBox.classList.toggle('nav-active');

	allNavItems.forEach((item) => {
		item.addEventListener('click', () => {
			navBox.classList.remove('nav-active');
		});
	});
};

if (document.location.search === '?mail_status=sent') {
	error.classList.add('success');
	error.textContent = 'Wiadomość wysłana!';

	setTimeout(() => {
		error.classList.remove('success');
	}, 3000);
}

if (document.location.search === '?mail_status=error') {
	error.classList.add('error');
	error.textContent = 'Wystąpił błąd.';

	setTimeout(() => {
		error.classList.remove('error');
	}, 3000);
}

burgerBtn.addEventListener('click', toggleNav);
