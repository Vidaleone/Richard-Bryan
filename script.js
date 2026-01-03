console.log("JS conectado");

const btnHistoria = document.querySelector("#btn-historia");
const btnServicos = document.querySelector("#btn-servicos");

btnHistoria.addEventListener("click", () => {
    window.location.href = "about.html";
});

btnServicos.addEventListener("click", () => {
    window.location.href = "services.html";
});

const linkHistoria = document.querySelector('a[href="about.html"]');

console.log(window.location.pathname.includes("about.html"));
if (window.location.pathname.includes("about.html")) {
    Element.classList.add("active");
}
