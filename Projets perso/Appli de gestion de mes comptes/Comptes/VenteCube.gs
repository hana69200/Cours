function VenteCube() {

    // Déclarations générales
    var tab_affichage = [];
    var cellule_reference = new Cellule('B', 2);

    // Ajout du contenu à afficher
    tab_affichage.push('Bilan : ' + getBilan() + ' €');
    tab_affichage.push('Stock de cube : ' + getStock());
    tab_affichage.push('Stock de cube potentiel : ' + getStockPotentiel());
    tab_affichage.push('Investissement : ' + getInvestissement() + ' €');
    tab_affichage.push('Chiffre d\'affaire : ' + getCA() + ' €');
    tab_affichage.push('Cubes reçus : ' + getNbRecu());
    tab_affichage.push('Cubes en attente de réception : ' + getReception());
    tab_affichage.push('Cubes neufs vendus : ' + getNbNeufVendu());
    tab_affichage.push('Vieux cubes vendus : ' + getNbVieuxVendu());
    tab_affichage.push('Total de cubes vendus : ' + getNbVendu());
    tab_affichage.push('Total de cubes achetés : ' + getNbAchete());
    if (getNbCredit() > 0) {
      tab_affichage.push('Nombre de crédits en attente : ' + getNbCredit() + ' €');
      tab_affichage.push('Total qu\'on me doit : ' + getTotalCreance() + ' €');
    }

    // Affichage du contenu
    affichage(tab_affichage, cellule_reference, getBilan());

  }
