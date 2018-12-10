function Manger() {

  //Déclaration du tableau d'affichage
  var tab_affichage = [];
  
  //Déclaration des contenus de cellule à retourner
  tab_affichage.push('Bilan des repas : ' + getBilanRepas() + ' €');
  tab_affichage.push('Solde officiel : ' + getBilanOfficielManger() + ' €');
  tab_affichage.push('Solde réel : ' + getBilanPersoManger() + ' €');
  tab_affichage.push('Total reçu : ' + getTotalRecu() + ' €');
  tab_affichage.push('Total dépensé officiel : ' + getTotalDepenseOfficiel() + ' €');
  tab_affichage.push('Total dépensé réel : ' + getTotalDepenseReel() + ' €');
  tab_affichage.push('Nombre de repas : ' + getNombreDeRepas());
  tab_affichage.push('Budjet café : ' + getTotalIzly() + ' €');
  
  //Déclaration de la cellule de référence (impossible à mettre plus haut)
  var cellules_reference = [new Cellule('B', 2), new Cellule('B', (sheet.getLastRow() - tab_affichage.length + 1))];
  
  //Gestion de l'affichage
  for (var i = 0; i < cellules_reference.length; i++) {
    affichage(tab_affichage, cellules_reference[i], getBilanPersoManger() - getBilanOfficielManger());
  }
  
}
