document.addEventListener("DOMContentLoaded", function() {
    const displayedImg = document.querySelector(".displayed-img");
    const overlay = document.querySelector(".overlay");
    const darkBtn = document.querySelector(".dark");
    const thumbBar = document.querySelector(".thumb-bar");
  

    const images = [
      "images/luffy.jpg",
      "images/zoro.jpg",
      "images/nami.jpg",
      "images/franky.jpg",
      "images/sanji.jpg"
    ];
    const alts = {
        'luffy.jpg' : 'luffy',
        'zoro.jpg' : 'zoro',
        'nami.jpg' : 'nami',
        'franky.jpg' : 'franky',
        'sanji.jpg' : 'sanji',
    }
  

    images.forEach(image => {
      const thumbImg = document.createElement("img");
      thumbImg.setAttribute("src", image);
      thumbImg.setAttribute("alt", alts[image.split('/').pop()]);
      thumbImg.addEventListener("click", function() {
        displayedImg.setAttribute("src", image);
      });
      thumbBar.appendChild(thumbImg);
    });
  

    darkBtn.addEventListener("click", function() {
      if (overlay.style.display === "none" || overlay.style.display === "") {
        overlay.style.display = "block";
        darkBtn.textContent = "Undarken";
      } else {
        overlay.style.display = "none";
        darkBtn.textContent = "Darken";
      }
    });
});
