const projectContainers = document.querySelectorAll(".projectImageContainer");
const popup = document.querySelector(".popup");
const popupImage = document.querySelector(".popup-image");
const popupTitle = document.querySelector(".popup-title");
const popupDescription = document.querySelector(".popup-description");
const popupLink = document.querySelector(".popup-link");
const closeButton = document.querySelector(".close-btn");

projectContainers.forEach(container => {
    container.addEventListener("click", () => {
        const imageSrc = container.querySelector("img").src;
        const title = container.getAttribute("data-title");
        const description = container.getAttribute("data-description");
        const link = container.getAttribute("data-link");

        popupImage.src = imageSrc;
        popupTitle.textContent = title;
        popupDescription.textContent = description;
        popupLink.href = link || "#"; // Default to "#" if no link is provided

        popup.classList.add("active");
    });
});

// Close popup when clicking the close button
closeButton.addEventListener("click", () => {
    popup.classList.remove("active");
});

// Close popup when clicking outside the popup content
popup.addEventListener("click", (event) => {
    if (!event.target.closest(".popup-content")) {
        popup.classList.remove("active");
    }
});




// FOR THUMBNAIL POPOP
const thumbnails = document.querySelectorAll(".thumb-thumbnail");
const thumbPopup = document.querySelector(".thumb-popup");
const thumbPopupImage = document.querySelector(".thumb-popup-image");

// Open popup when clicking a thumbnail
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener("click", () => {
        thumbPopupImage.src = thumbnail.src;
        thumbPopup.style.display = "flex";

        // Add tilt attributes dynamically
        thumbPopupImage.setAttribute("data-tilt", "");
        thumbPopupImage.setAttribute("data-tilt-glare", "");

        // Initialize VanillaTilt
        VanillaTilt.init(thumbPopupImage);
    });
});

// Close popup when clicking anywhere inside it (including image)
thumbPopup.addEventListener("click", () => {
    thumbPopup.style.display = "none";

    // Remove tilt attributes
    thumbPopupImage.removeAttribute("data-tilt");
    thumbPopupImage.removeAttribute("data-tilt-glare");

    // Destroy VanillaTilt instance to prevent duplication
    if (thumbPopupImage.vanillaTilt) {
        thumbPopupImage.vanillaTilt.destroy();
    }
});



// POPPUP FOR GRAPHICS 

const graphicItems = document.querySelectorAll(".graphicItem");
const graphicPopup = document.getElementById("graphicPopup");
const graphicPopupImg = document.getElementById("graphicPopupImg");

graphicItems.forEach(image => {
    image.addEventListener("click", function () {
        graphicPopupImg.src = this.src;
        graphicPopup.classList.add("active");

        // Add tilt attributes dynamically
        graphicPopupImg.setAttribute("data-tilt", "");
        graphicPopupImg.setAttribute("data-tilt-glare", "");

        // Initialize VanillaTilt
        VanillaTilt.init(graphicPopupImg);
    });
});

// Close popup when clicking anywhere inside it
graphicPopup.addEventListener("click", function () {
    graphicPopup.classList.remove("active");

    // Remove tilt attributes
    graphicPopupImg.removeAttribute("data-tilt");
    graphicPopupImg.removeAttribute("data-tilt-glare");

    // Destroy tilt effect to prevent duplication
    if (graphicPopupImg.vanillaTilt) {
        graphicPopupImg.vanillaTilt.destroy();
    }
});
