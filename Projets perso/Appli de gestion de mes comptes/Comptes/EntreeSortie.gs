function EntreeSortie() {

  //Déclaration du tableau d'affichage
  var tab_affichage = [];
  
  //Déclaration des contenus de cellule à retourner
  tab_affichage.push('Bilan total : ' + getTotalActuel() + ' €');
  tab_affichage.push('Bilan perso : ' + getTotalPotentiel() + ' €');
  tab_affichage.push('Bilan du mois actuel : ' + getBilanMoisActuel() + ' €');
  tab_affichage.push('Bilan du mois dernier : ' + getBilanMoisDernier() +' €');
  tab_affichage.push('Total qu\'on me doit : ' + getTotalDu() + ' €');
  tab_affichage.push('Remboursements en attente : ' + getNbRemboursement());
  
  //Déclaration de la cellule de référence (impossible à mettre plus haut)
  var cellules_reference = [new Cellule('B', 2), new Cellule('B', (sheet.getLastRow() - tab_affichage.length + 1))];
  
  //Gestion de l'affichage
  for (var i = 0; i < cellules_reference.length; i++) {
    affichage(tab_affichage, cellules_reference[i], getTotalActuel());
  }
  
}
