const submitBtn = document.getElementById('submit-btn');
const contactForm = document.querySelector("form")

const isFormValid = () => {
	const errorElements = contactForm.querySelectorAll('.error .hidden');
	console.log(errorElements.length)
	return contactForm.checkValidity() && errorElements.length === 0;
}

const getErrorEl = (name) => document.getElementById(`error-${name}`);

const showError = (name, message) => {
	const errorEl = getErrorEl(name);
	errorEl.textContent = message;
	errorEl.classList.remove('hidden');
	errorEl.ariaHidden = "false";
}

const hideError = (name) => {
	const errorEl = getErrorEl(name);
	errorEl.textContent = "";
	errorEl.classList.add('hidden');
	errorEl.ariaHidden = "true";
}

const validateName = () => {
	const name = document.getElementById('name').value;
	
	if (name.trim() === "") {
		showError("name", "Name is required");
	} else {
		hideError("name");
	}
}

const validateEmail = () => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const email = document.getElementById('email').value;
	
	if (!emailRegex.test(email.trim())) {
		showError("email", "Please enter a valid email address");
	} else {
		hideError("email");
	}
}

const validateSubject = () => {
	const subject = document.getElementById('subject').value;
	
	if (subject.trim() === "") {
		showError("subject", "Subject is required");
	} else {
		hideError("subject");
	}
}

const validateMessage = () => {
	const message = document.getElementById('message').value;
	
	if (message.trim().length < 10) {
		showError("message", "Message must be at least 10 characters long");
	} else {
		hideError("message");
	}
}

contactForm.addEventListener('submit', (e) => {
	e.preventDefault();

	validateName();
	validateEmail();
	validateSubject();
	validateMessage();

	if (isFormValid()) {		
		console.log("Form submitted");
		const success = document.getElementById('submit-message');
		success.textContent = "Your message has been sent successfully!";
		success.style.display = "block";
		success.ariaHidden = "false";
	}
})

document.getElementById('name').addEventListener('input', (e) => {
	validateName();
})

document.getElementById('email').addEventListener('input', (e) => {
	validateEmail();
})

document.getElementById('subject').addEventListener('input', (e) => {
	validateSubject();
})

document.getElementById('message').addEventListener('input', (e) => {
	validateMessage();
})

contactForm.addEventListener('blur', (e) => {
	switch (e.target.name) {
		case 'name':
			validateName();
			break;
		case 'email':
			validateEmail();
			break;
		case 'subject':
			validateSubject();
			break;
		case 'message':
			validateMessage();
			break;
		default:
			break;
	}

	if (isFormValid()) {
		submitBtn.disabled = false;
		submitBtn.ariaDisabled = "false";
	} else {
		submitBtn.disabled = true;
		submitBtn.ariaDisabled = "true";
	}
}, true);
