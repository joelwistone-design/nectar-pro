// ============================
// NECTAR PRO - script.js
// ============================

// Affiche un message de bienvenue
window.addEventListener("load", () => {
    console.log("Bienvenue sur NECTAR PRO !");
});

// Animation douce au clic sur les liens internes
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const cible = document.querySelector(this.getAttribute("href"));

        if (cible) {
            cible.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Affiche l'année automatiquement dans le pied de page
const annee = document.getElementById("year");
if (annee) {
    annee.textContent = new Date().getFullYear();
}
