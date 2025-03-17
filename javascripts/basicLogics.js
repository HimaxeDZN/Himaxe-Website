function scrollToSection() {
    document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" });
}



function toggleFaq(faq) {
    let content = faq.querySelector('.faq-content');
    let symbol = faq.querySelector('span');

    if (content.style.maxHeight && content.style.maxHeight !== "0px") {
        content.style.maxHeight = "0";
        content.style.overflow = "hidden";
        content.style.paddingTop = "0";
        content.style.paddingBottom = "0";
        symbol.textContent = "+";
    } else {
        content.style.maxHeight = content.scrollHeight + "px";  // Ensures full height
        content.style.overflow = "visible";  // Prevents cutting text
        content.style.paddingTop = "10px";
        content.style.paddingBottom = "10px";
        symbol.textContent = "−";
    }
}


function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
    
    // Close sidebar when clicking outside
    document.addEventListener("click", outsideClickHandler);
}

function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";

    // Remove event listener to avoid unnecessary calls
    document.removeEventListener("click", outsideClickHandler);
}

function outsideClickHandler(event) {
    const sidebar = document.querySelector(".sidebar");
    const toggleButton = document.querySelector(".toggle-button"); // Adjust if you have a button to open sidebar

    if (!sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
        hideSidebar();
    }
}

// Close sidebar when clicking on a nav link
document.querySelectorAll(".sidebar a").forEach(link => {
    link.addEventListener("click", hideSidebar);
});
