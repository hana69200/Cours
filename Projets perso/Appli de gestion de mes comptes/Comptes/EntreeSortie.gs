function EntreeSortie() {

    // Déclaration des variables
    var tab_affichage = [], cellules_reference = [];
    var i = 0;

    // Ajout de la date si c'est une nouvelle ligne
    ajoutDate(false);

    // Ajout du contenu à afficher
    if (getTotalDu() != 0) {
      tab_affichage.push('Bilan total : ' + getBilanTotal() + ' €');
    }
    tab_affichage.push('Bilan perso : ' + getBilanPerso() + ' €');
    tab_affichage.push('Total des entrées : ' + getTotalEntree() + ' €');
    tab_affichage.push('Total des sorties : ' + getTotalSortie() + ' €');
    tab_affichage.push('Total qu\'on me doit : ' + getTotalDu() + ' €');
    if (getTotalDu() != 0) {
      tab_affichage.push('Remboursements en attente : ' + getNbRemboursement());
    }

    // Ajout des cellule où afficher le contenu
    for (i ; i < taille_colone - tab_affichage.length; i += tab_affichage.length + 15) {
      cellules_reference.push(new Cellule('B', 2 + i));
    }

    // Affichage des bilans finaux
    for (i = 0; i < cellules_reference.length; i++) {
      affichage(tab_affichage, cellules_reference[i], getBilanTotal());
    }

    // Affichage des bilans mensuels
    afficherTousLesBilans();

}
