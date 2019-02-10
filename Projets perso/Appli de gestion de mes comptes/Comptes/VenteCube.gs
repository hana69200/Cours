function VenteCube() {

    // Déclarations générales
    var tab_affichage = [];
    var cellule_reference = new Cellule('B', 2);
    var f = new VenteCube_f();

    // Ajout de la date si c'est une nouvelle ligne
    ajoutDate(false);

    // Décallage la cellule A1
    decallageCelluleA1();

    // Ajout du contenu à afficher
    tab_affichage.push('Bilan : ' + f.getBilan() + ' €');
    tab_affichage.push('Stock de cube : ' + f.getStock());
    tab_affichage.push('Stock de cube potentiel : ' + f.getStockPotentiel());
    tab_affichage.push('Investissement : ' + f.getInvestissement() + ' €');
    tab_affichage.push('Chiffre d\'affaire : ' + f.getCA() + ' €');
    tab_affichage.push('Cubes reçus : ' + f.getNbRecu());
    tab_affichage.push('Cubes en attente de réception : ' + f.getReception());
    tab_affichage.push('Cubes neufs vendus : ' + f.getNbNeufVendu());
    tab_affichage.push('Vieux cubes vendus : ' + f.getNbVieuxVendu());
    tab_affichage.push('Total de cubes vendus : ' + f.getNbVendu());
    tab_affichage.push('Total de cubes achetés : ' + f.getNbAchete());
    if (f.getNbCredit() > 0) {
        tab_affichage.push('Nombre de crédits en attente : ' + f.getNbCredit() + ' €');
        tab_affichage.push('Total qu\'on me doit : ' + f.getTotalCreance() + ' €');
    }

    // Affichage du contenu
    affichage(tab_affichage, cellule_reference, f.getBilan());

}
