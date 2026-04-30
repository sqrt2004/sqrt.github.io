console.log("Bienvenido al sistema de sqrt 🚀");

const text = "Accediendo...";
let i = 0;

function typing() {
  if (i < text.length) {
    document.title = text.substring(0, i+1);
    i++;
    setTimeout(typing, 100);
  }
}

typing();
