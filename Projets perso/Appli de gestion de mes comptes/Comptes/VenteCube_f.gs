function getBilan() {
    /**
     * Description : Retourne le bilan globale du commerce
     */
    return (getCA() - getInvestissement()).toFixed(2);
  }
  
  function getCA() {
    /**
     * Description : Retourne le chiffre d'affaires du commerce
     */
    var recu = 0, i = 0;
    for (i ; i < taille_colone; i++) {
      if (isVente(colone[i])) {
        recu += getMontantVente(colone[i]);
      }
    }
    return recu.toFixed(2);
  }
  
  function getInvestissement() {
    /**
     * Description : Retourne l'investissement total du commerce
     */
    var depense = 0, i = 0;
    for (i ; i < taille_colone; i++) {
      if (isAchat(colone[i])) {
        depense += getMontantAchat(colone[i]);
      }
    }
    return depense.toFixed(2);
  }
  
  function getMontantAchat(cell) {
    /**
     * Description : Retourne le montant de l'achat de la cellule passée en paramètre
     */
    if (!isAchat(cell)) return '';
    var tab = getLigneToTab(cell);
    return parseFloat(toEnglishNumber(tab[(getIndex(tab, '€') -1)]));
  }
  
  function getMontantCredit(cell) {
    /**
     * Description : Retourne le montant du crédit de la cellule passée en paramètre
     */
    if (!isCredit(cell)) return '';
    var tab = getLigneToTab(cell);
    return parseFloat(toEnglishNumber(tab[(getIndex(tab, '€') -1)]));
  }
  
  function getMontantRemboursement(cell) {
    /**
     * Description : Retourne le montant du remboursement de la cellule passée en paramètre
     */
    if (!isRemboursement(cell)) return '';
    var tab = getLigneToTab(cell);
    return parseFloat(toEnglishNumber(tab[(getIndex(tab, '€') -1)]));
  }
  
  function getMontantVente(cell) {
    /**
     * Description : Retourne le montant de la vente de la cellule passée en paramètre
     */
    if (!isVente(cell)) return '';
    var tab = getLigneToTab(cell);
    return parseFloat(toEnglishNumber(tab[(getIndex(tab, '€') -1)]));
  }
  
  function getNbAchete() {
    /**
     * Description : Retourne le nombre total de cubes achetés
     */
    var nb = parseInt(0), i = 0;
    for (i ; i < taille_colone; i++) {
      if (isAchat(colone[i])) {
        nb += getNbAcheteLigne(colone[i]);
      }
    }
    return nb;
  }
  
  function getNbAcheteLigne(cell) {
    /**
     * Description : Retourne le nombre de cubes achetés de la cellule passée en paramètre
     */
    if (!isAchat(cell)) return '';
    var tab = getLigneToTab(cell);
    return parseInt(tab[(getIndex(tab, is(cell, 'cube') ? 'cube' : 'cubes')  -1)]);
  }
  
  function getNbCredit() {
    /**
     * Description : Retourne le nombre de remboursements en attente
     */
    var credit = 0, remboursement = 0, i = 0;
    for (i ; i < taille_colone; i++) {
      if (isCredit(colone[i])) {
        credit++;
      }
      else if (isRemboursement(colone[i])) {
        remboursement++;
      }
    }
    return credit - remboursement;
  }
  
  function getNbNeufVendu() {
    /**
     * Description : Retourne le nombre total de cubes neufs vendus
     */
    var nb = parseInt(0), i = 0;
    for (i ; i < taille_colone; i++) {
      nb += getNbNeufVenduLigne(colone[i]);
    }
    return nb;
  }
  
  function getNbNeufVenduLigne(cell) {
    /**
     * Description : Retourne le nombre de cubes neufs vendus de la cellule passée en paramètre
     */
    if (!isVente(cell) || !is(cell, 'neuf') && !is(cell, 'neufs')) return 0;
    var tab = getLigneToTab(cell);
    return parseInt(tab[(getIndex(tab, is(cell, 'neuf') ? 'neuf' : 'neufs')  -2)]);
  }
  
  function getNbRecu() {
    /**
     * Description : Retourne le nombre total de cubes reçus
     */
    var nb = parseInt(0), i = 0;
    for (i ; i < taille_colone; i++) {
      if (isReception(colone[i])) {
        nb += getNbRecuLigne(colone[i]);
      }
    }
    return nb;
  }
  
  function getNbRecuLigne(cell) {
    /**
     * Description : Retourne le nombre de cubes reçus de la cellule passée en paramètre
     */
    if (!isReception(cell)) return '';
    var tab = getLigneToTab(cell);
    return parseInt(tab[(getIndex(tab, is(cell, 'cube') ? 'cube' : 'cubes')  -1)]);
  }
  
  function getNbVendu() {
    /**
     * Description : Retourne le nombre total de cubes vendus
     */
    return getNbNeufVendu() + getNbVieuxVendu();
  }
  
  function getNbVieuxVendu() {
    /**
     * Description : Retourne le nombre total de vieux cubes vendus
     */
    var nb = parseInt(0), i = 0;
    for (i ; i < taille_colone; i++) {
      nb += getNbVieuxVenduLigne(colone[i]);
    }
    return nb;
  }
  
  function getNbVieuxVenduLigne(cell) {
    /**
     * Description : Retourne le nombre de vieux cubes vendus de la cellule passée en paramètre
     */
    if (!isVente(cell) || !is(cell, 'vieux')) return 0;
    var tab = getLigneToTab(cell);
    return parseInt(tab[(getIndex(tab, 'vieux') -1)]);
  }
  
  function getReception() {
    /**
     * Description : Retourne le nombre total de cubes en attente de réception
     */
    return getNbAchete() - getNbRecu();
  }
  
  function getStock() {
    /**
     * Description : Retourne le nombre total de cubes en stock
     */
    return getNbAchete() - getNbNeufVendu() - getReception();
  }
  
  function getStockPotentiel() {
    /**
     * Description : Retourne le nombre total de cubes que le commerce aura en stock 
     * une fois qu'il aura réceptionné tous les cubes qu'il attend
     */
    return getStock() + getReception();
  }
  
  function getTotalCreance() {
    /**
     * Description : Retourne le total de la somme des remboursements que le commerce attend
     */
    var credit = 0, remboursement = 0, i = 0;
    for (i ; i < taille_colone; i++) {
      if (isCredit(colone[i])) {
        credit += getMontantVente(colone[i]);
      }
      else if (isRemboursement(colone[i])) {
        remboursement += getMontantRemboursement(colone[i]);
      }
    }
    return (credit - remboursement).toFixed(2);
  }
  
  function isAchat(cell) {
    return is(cell, 'achat');
  }
  
  function isCredit(cell) {
    return is(cell, 'crédit');
  }
  
  function isReception(cell) {
    return is(cell, 'réception');
  }
  
  function isRemboursement(cell) {
    return is(cell, 'remboursement');
  }
  
  function isVente(cell) {
    return is(cell, 'vente');
  }
  