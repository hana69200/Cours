function getBilan() {
  return (getTotalCA() - getTotalDepense()).toFixed(2);
}

function getMontantAchat(cell) {
/*
entrée : cell : string : cellule de la feuille
sortie : float : montant de l'achat de la cellule
*/ 
  if (!isAchat(cell)) return '';
  var tab = getLigneToTab(cell);
  return parseFloat(toEnglishNumber(tab[(getIndex(tab, '€') -1)]));
}

function getMontantCredit(cell) {
/*
entrée : cell : string : cellule de la feuille
sortie : float : montant du crédit de la cellule
*/ 
  if (!isCredit(cell)) return '';
  var tab = getLigneToTab(cell);
  return parseFloat(toEnglishNumber(tab[(getIndex(tab, '€') -1)]));
}

function getMontantRemboursement(cell) {
/*
entrée : cell : string : cellule de la feuille
sortie : float : montant du remboursement de la cellule
*/ 
  if (!isRemboursement(cell)) return '';
  var tab = getLigneToTab(cell);
  return parseFloat(toEnglishNumber(tab[(getIndex(tab, '€') -1)]));
}

function getMontantVente(cell) {
/*
entrée : cell : string : cellule de la feuille
sortie : float : montant de la vente de la cellule
*/ 
  if (!isVente(cell)) return '';
  var tab = getLigneToTab(cell);
  return parseFloat(toEnglishNumber(tab[(getIndex(tab, '€') -1)]));
}

function getNbCubeAchete(cell) {
/*
entrée : cell : string : cellule de la feuille
sortie : int : nombre de cubes achetés dans la cellule
*/ 
  if (!isAchat(cell)) return '';
  var tab = getLigneToTab(cell);
  return parseInt(tab[(getIndex(tab, is(cell, 'cube') ? 'cube' : 'cubes')  -1)]);
}

function getNbCubeNeufVendu(cell) {
/*
entrée : cell : string : cellule de la feuille
sortie : int : nombre de cubes neufs vendus dans la cellule
*/
  if (!isVente(cell) || !is(cell, 'neuf') && !is(cell, 'neufs')) return 0;
  var tab = getLigneToTab(cell);
  return parseInt(tab[(getIndex(tab, is(cell, 'neuf') ? 'neuf' : 'neufs')  -2)]);
}

function getNbCubeRecu(cell) {
  if (!isReception(cell)) return '';
  var tab = getLigneToTab(cell);
  return parseInt(tab[(getIndex(tab, is(cell, 'cube') ? 'cube' : 'cubes')  -1)]);
}

function getNbVieuxCubeVendu(cell) {
/*
entrée : cell : string : cellule de la feuille
sortie : int : nombre de vieux cubes vendus dans la cellule
*/
  if (!isVente(cell) || !is(cell, 'vieux')) return 0;
  var tab = getLigneToTab(cell);
  return parseInt(tab[(getIndex(tab, 'vieux') -1)]);
}

function getReception() {
  return getTotalCubeAchete() - getTotalCubeRecu();
}

function getStock() {
  return getTotalCubeAchete() - getTotalCubeNeufVendu() - getReception();
}

function getStockPotentiel() {
  return getStock() + getReception();
}

function getTotalCA() {
  var recu = 0;
  for (var i = 0; i < taille_colone; i++) {
    if (isVente(colone[i])) recu = recu + getMontantVente(colone[i]);
  }
  return recu.toFixed(2);
}

function getTotalCredit() {
  var credit = 0;
  for (var i = 0; i < taille_colone; i++) {
    if (isCredit(colone[i])) credit = credit + getMontantCredit(colone[i]);
  }
  return credit.toFixed(2);
}

function getTotalCubeAchete() {
  var nb = parseInt(0);
  for (var i = 0; i < taille_colone; i++) {
    if (isAchat(colone[i])) {
      nb = nb + getNbCubeAchete(colone[i]);
    }
  }
  return nb;
}

function getTotalCubeNeufVendu() {
  var nb = parseInt(0);
  for (var i = 0; i < taille_colone; i++) {
    nb = nb + getNbCubeNeufVendu(colone[i]);
  }
  return nb;
}

function getTotalCubeRecu() {
  var nb = parseInt(0);
  for (var i = 0; i < taille_colone; i++) {
    if (isReception(colone[i])) {
      nb = nb + getNbCubeRecu(colone[i]);
    }
  }
  return nb;
}

function getTotalCubeVendu() {
  return getTotalCubeNeufVendu() + getTotalVieuxCubeVendu();
}

function getTotalDepense() {
  var depense = 0;
  for (var i = 0; i < taille_colone; i++) {
    if (isAchat(colone[i])) {
      depense = depense + getMontantAchat(colone[i]);
    }
  }
  return depense.toFixed(2);
}

function getTotalRemboursement() {
  var remb = 0;
  for (var i = 0; i < taille_colone; i++) {
    if (isRemboursement(colone[i])) {
      remb = remb + getMontantRemboursement(colone[i]);
    }
  }
  return (getTotalCredit() - remb).toFixed(2);
}

function getTotalVieuxCubeVendu() {
  var nb = parseInt(0);
  for (var i = 0; i < taille_colone; i++) {
    nb = nb + getNbVieuxCubeVendu(colone[i]);
  }
  return nb;
}

function isAchat(cell) {
  return is(cell, 'achat');
}

function isCredit(cell) {
  return is(cell, 'crédit');
}

function isRemboursement(cell) {
  return is(cell, 'remboursement');
}

function isVente(cell) {
  return is(cell, 'vente');
}

function isReception(cell) {
  return is(cell, 'réception');
}
