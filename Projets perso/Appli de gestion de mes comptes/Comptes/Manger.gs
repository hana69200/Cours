function Manger() {

    // Déclaration des variables
    var tab_affichage = [], cellules_reference = [];
    var f = new Manger_f();

    // Ajout de la date si c'est une nouvelle ligne
    ajoutDate(true);

    // Décallage la cellule A1
    decallageCelluleA1();

    // init
    f.constructor();

    // Ajout du contenu à afficher
    tab_affichage.push('Bilan des repas : ' + f.getBilanRepas() + ' €');
    tab_affichage.push('Solde officiel : ' + f.getSoldeOfficiel() + ' €');
    tab_affichage.push('Solde réel : ' + f.getSoldeReel() + ' €');
    tab_affichage.push('Total gagné : ' + f.getTotalGagne() + ' €');
    tab_affichage.push('Total reçu : ' + f.getTotalRecu() + ' €');
    tab_affichage.push('Total dépensé officiel : ' + f.getTotalDepenseOfficiel() + ' €');
    tab_affichage.push('Total réel dépensé pour manger : ' + f.getTotalReelDepensePourManger() + ' €');
    tab_affichage.push('Total dépensé réel : ' + f.getTotalDepenseReel() + ' €');
    tab_affichage.push('Nombre de repas : ' + f.getNbRepas());
    tab_affichage.push('Budjet café : ' + f.getBudjetCafe() + ' €');

    // Ajout des cellule où afficher le contenu
    for (var i = 0; i < taille_colonne - tab_affichage.length; i += tab_affichage.length + 15) {
        cellules_reference.push(new Cellule('B', 2 + i));
    }

    // Affichage du contenu dans les cellules
    for (var i = 0; i < cellules_reference.length; i++) {
        affichage(tab_affichage, cellules_reference[i], f.getBilanRepas());

    }

}
