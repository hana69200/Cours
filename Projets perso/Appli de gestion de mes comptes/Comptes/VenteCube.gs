function VenteCube() {

  //Déclarations générales
  var tab_affichage = [];
  var cellule_reference = new Cellule('B', 2);
  
  //Déclaration des contenus de cellule à retourner
  tab_affichage.push('Bilan : ' + getBilan() + ' €');
  tab_affichage.push('Stock de cube : ' + getStock());
  tab_affichage.push('Stock de cube potentiel : ' + getStockPotentiel());
  tab_affichage.push('Investissement : ' + getTotalDepense() + ' €');
  tab_affichage.push('Chiffre d\'affaire : ' + getTotalCA() + ' €');
  tab_affichage.push('Cubes reçus : ' + getTotalCubeRecu());
  tab_affichage.push('Cubes en attente de réception : ' + getReception());
  tab_affichage.push('Cubes neufs vendus : ' + getTotalCubeNeufVendu());
  tab_affichage.push('Vieux cubes vendus : ' + getTotalVieuxCubeVendu());
  tab_affichage.push('Total de cubes vendus : ' + getTotalCubeVendu());
  tab_affichage.push('Total de cubes achetés : ' + getTotalCubeAchete());
  tab_affichage.push('Total des crédits faits : ' + getTotalCredit() + ' €');
  tab_affichage.push('Total qu\'on me doit : ' + getTotalRemboursement() + ' €');
  
  //Gestion de l'affichage
  affichage(tab_affichage, cellule_reference, getBilan());
  
}
