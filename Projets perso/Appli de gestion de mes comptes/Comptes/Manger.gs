function Manger() {

  // Déclaration des variables
  var tab_affichage = [], cellules_reference = [];

  // Ajout du contenu à afficher
  tab_affichage.push('Bilan des repas : ' + getBilanRepas() + ' €');
  tab_affichage.push('Solde officiel : ' + getSoldeOfficiel() + ' €');
  tab_affichage.push('Solde réel : ' + getSoldeReel() + ' €');
  tab_affichage.push('Total gagné : ' + getTotalGagne() + ' €');
  tab_affichage.push('Total reçu : ' + getTotalRecu() + ' €');
  tab_affichage.push('Total dépensé officiel : ' + getTotalDepenseOfficiel() + ' €');
  tab_affichage.push('Total réel dépensé pour manger : ' + getTotalReelDepensePourManger() + ' €');
  tab_affichage.push('Total dépensé réel : ' + getTotalDepenseReel() + ' €');
  tab_affichage.push('Nombre de repas : ' + getNbRepas());
  tab_affichage.push('Budjet café : ' + getBudjetCafe() + ' €');

  // Ajout des cellule où afficher le contenu
  for (var i = 0; i < taille_colone - tab_affichage.length; i += tab_affichage.length + 15) {
    cellules_reference.push(new Cellule('B', 2 + i));
  }

  // Affichage du contenu dans les cellules
  for (var i = 0; i < cellules_reference.length; i++) {
    affichage(tab_affichage, cellules_reference[i], getBilanRepas());

  }

}
