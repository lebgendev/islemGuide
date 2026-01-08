let nav = document.getElementById("nav");

window.addEventListener("scroll", () => {
    let height = window.scrollY;
    if(height >= 200){
        nav.classList.add("open");
    } else {
        nav.classList.remove("open");
    }
});

let opened = false;

function openMenu(){
    let menu = document.getElementById("menu");
    if(opened){
        menu.classList.remove("menuOpen");
        document.body.style.overflow = "auto"
    } else {
        menu.classList.add("menuOpen");
        document.body.style.overflow = "hidden";
    }
    opened = !opened;
}

let writeSecOne = document.getElementById("writeSecOne");

function write(message){
  for(let i = 0; i < message.length; i++){
    setTimeout(() => {
      writeSecOne.textContent += message[i];
    }, 20*i);
  }
}

write("MedSpace vous offre une expérience d'apprentissage interactive et efficace, axée sur des QCMs corrigés et soigneusement commentés");



const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));
