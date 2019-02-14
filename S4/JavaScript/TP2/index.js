window.addEventListener("load", () => start());

start = () => {

    // Lance un thread qui se ré exécutera toutes les secondes
    update();

};

function update() {
    
    // Liste des fonctions à appeler à chaque update
    updateDate();

    // Ré-appel de la fonction update
    setTimeout(function() {
        update();
    }, 1000);
    
}

function updateDate() { // Met à jour l'heure affichée

    // Récupération de la date
    var date = new Date();

    // Valeurs numériques de l'heure
    var iheure = date.getHours();
    var iminute = date.getMinutes();
    var iseconde = date.getSeconds();

    // Valeurs à afficher (de type String)
    var theure = iheure < 10 ? "0" + iheure : iheure;
    var tminute = iminute < 10 ? "0" + iminute : iminute;
    var tseconde = iseconde < 10 ? "0" + iseconde : iseconde;

    // Écriture de l'heure sur la page
    document.querySelector("nav#heure").innerText = theure;
    document.querySelector("nav#minute").innerText = tminute;
    document.querySelector("nav#seconde").innerText = tseconde;
}

