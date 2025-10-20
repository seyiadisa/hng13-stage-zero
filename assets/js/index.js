document.addEventListener('DOMContentLoaded', function() {
	const displayTime = document.getElementById('displayTime');

	function updateTime() {
		const now = Date.now();
		const dateFormat = Intl.DateTimeFormat(navigator.language, {timeStyle: "medium"}).format(new Date(now));

		displayTime.textContent = now.toString();
		displayTime.title = dateFormat;
	}

	setInterval(updateTime, 1000);
	updateTime();
});

const textTruncate = document.querySelectorAll('.text-truncate');
textTruncate.forEach(el => {
	const fullText = el.textContent;
	el.setAttribute('aria-label', fullText);
})