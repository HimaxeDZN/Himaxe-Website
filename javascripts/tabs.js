document.addEventListener("DOMContentLoaded", function () {
  let viewMoreBtn = document.getElementById("viewMoreBtn");
  let hiddenThumbnails = document.getElementById("hiddenThumbnails");

  viewMoreBtn.addEventListener("click", function () {
    hiddenThumbnails.classList.remove("hidden"); // Show hidden thumbnails
    this.style.display = "none"; // Hide button after clicking
  });
});

function showGallery(id, element) {
  document.querySelectorAll(".gallery").forEach((gallery) => {
    gallery.classList.remove("show");
  });

  document.getElementById(id).classList.add("show");

  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.remove("active");
  });

  element.classList.add("active");

  // Reset the View More button and hidden thumbnails when switching tabs
  let viewMoreBtn = document.getElementById("viewMoreBtn");
  let hiddenThumbnails = document.getElementById("hiddenThumbnails");

  if (id === "thumbnails") {
    hiddenThumbnails.classList.add("hidden"); // Always reset hidden section
    viewMoreBtn.style.display = "block"; // Make button visible again
  } else {
    viewMoreBtn.style.display = "none"; // Hide button for other tabs
  }
}

// LOGIC FOR VIEW MORE OF PROJECTS
const projectViewMore = document.getElementById("viewMoreBtn1");
projectViewMore.addEventListener("click", function () {
  document.querySelectorAll(".hiddenProject").forEach((hiddenProject) => {
    hiddenProject.classList.remove("hiddenProject");
  });
  this.style.display = "none";
});


// LOGIC FOR VIEW MORE OF GRAPHICS
document.querySelectorAll(".hiddenGraphic").forEach(item => {
    item.style.display = "none"
})
const graphicViewMore = document.getElementById("viewMoreBtn2");
graphicViewMore.addEventListener("click", function () {
  document.querySelectorAll(".hiddenGraphic").forEach((hiddenGraphic) => {
    hiddenGraphic.style.display = "block";
  });
  this.style.display = "none";
});




let tabValue = 2;

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", function () {
    if (this.classList.contains("projectsTab")) {
      tabValue = 1;
    } else if (this.classList.contains("thumbnailsTab")) {
      tabValue = 2;
    } else if (this.classList.contains("graphicsTab")) {
      tabValue = 3;
    }

    if (tabValue === 1) {
      document.getElementById("hiddenThumbnails").classList.add("otherTab");

      document.getElementById("viewMoreBtn1").style.display = "block";

      document.getElementById("viewMoreBtn2").style.display = "none";
    }
    if (tabValue === 2) {
        document.getElementById("hiddenThumbnails").classList.remove("otherTab");
        
        document.getElementById("viewMoreBtn1").style.display = "none";

        document.getElementById("viewMoreBtn2").style.display = "none";
    }
    if (tabValue === 3) {
        document.getElementById("hiddenThumbnails").classList.add("otherTab");
        
        document.getElementById("viewMoreBtn1").style.display = "none";

        document.getElementById("viewMoreBtn2").style.display = "block";
    }
  });
});


