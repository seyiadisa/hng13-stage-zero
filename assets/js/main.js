const currentPageLink = document.querySelector(`nav a[href="${window.location.pathname.split("/").pop()}"]`);
currentPageLink.classList.add("current-page");