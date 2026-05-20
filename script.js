const dropdown = document.querySelector(".dropdown");
const toggle = dropdown.querySelector(".dropdown-toggle");
const menu = dropdown.querySelector(".dropdown-menu");

toggle.addEventListener("click", (e) => {
     e.preventDefault();
     menu.style.display = menu.style.display === "flex" ? "none" : "flex";
});

document.addEventListener("click" , (e) => {
   if(!dropdown.contains(e.target)){
         menu.style.display = "none";}
      });