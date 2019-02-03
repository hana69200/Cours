function getBilanRepas() {
    /**
     * Description : Retourne un montant positif ou négatif
     * S'il est positif il s'agit de ce que je peux dépenser librement
     * S'il est négatif il s'agit de ce que je dois économiser prochainement
     */
    return (getSoldeReel() - getSoldeOfficiel()).toFixed(2);
  }
  
  function getBudjetCafe() {
    /**
     * Description : Retourne le montant utilisé dans les distributeurs
     */
    return (getTotalIzly() - getTotalRU()).toFixed(2);
  }
  
  function getNbRepas() {
    /**
     * Description : Retourne le nombre de repas compabilisés
     */
    var total = parseInt(0), i = 0;
    for (i ; i < taille_colone; i++) {
      if (is(colone[i], 'en') || is(colone[i], 'au')) {
        total += 1;
      }
    }
    return total;
  }
  
  function getSigneManger(ligne) {
    /**
     * Description : Retourne 1 s'il s'agit d'une entrée d'argent, -1 sinon
     */
    return is(ligne, 'manger') ? 1 : -1;
  }
  
  function getSoldeOfficiel() {
    /**
     * Description : Retourne le montant que je suis censé posséder
     */
    var total = 0, i = 0;
    for (i ; i < taille_colone; i++) {
      if (is(colone[i], '#ru')) {
        total += -3.25;
      }
      else if (is(colone[i], 'manger')) {
        total += getMontant(colone[i]);
      }
    }
    return total.toFixed(2);
  }
  
  function getSoldeReel() {
    /**
     * Description : Retourne le montant qu'il me reste
     */
    var total = 0, i = 0;
    for (i ; i < taille_colone; i++) {
      total += getMontant(colone[i])*getSigneManger(colone[i]);
    }
    return total.toFixed(2);
  }
  
  function getTotalDepenseOfficiel() {
    /**
     * Description : Retourne le montant total que je suis censé avoir dépensé pour manger à l'université
     */
    var total = 0, i = 0;
    for (i ; i < taille_colone; i++) {
      if (is(colone[i], '#ru')) {
        total += 3.25;
      }
    }
    return total.toFixed(2);
  }
  
  function getTotalDepenseReel() {
    /**
     * Description : Retourne le montant total que j'ai réellement dépensé
     */
    var total = 0, i = 0;
    for (i ; i < taille_colone; i++) {
      if (!is(colone[i], 'manger')) {
        total += getMontant(colone[i]);
      }
    }
    return total.toFixed(2);
  }
  
  function getTotalGagne() {
    /**
     * Description : Retourne le montant total que j'ai gagné sur les repas
     */
    return (getTotalDepenseOfficiel() - getTotalReelDepensePourManger()).toFixed(2);
  }
  
  function getTotalIzly() {
    /**
     * Description : Retourne le montant total que j'ai mis sur mon compte Izly
     */
    var total = 0, i = 0;
    for (i ; i < taille_colone; i++) {
      if (is(colone[i], 'izly')) {
        total += getMontant(colone[i]);
      }
    }
    return total.toFixed(2);
  }
  
  function getTotalRecu() {
    /**
     * Description : Retourne le montant total que j'ai reçu pour manger
     */
    var total = 0, i = 0;
    for (i ; i < taille_colone; i++) {
      if (is(colone[i], 'manger')) {
        total += getMontant(colone[i]);
      }
    }
    return total.toFixed(2);
  }
  
  function getTotalReelDepensePourManger() {
    /**
     * Description : Retourne le montant total que j'ai réellement dépensé pour manger à l'université
     */
    var total = 0, i = 0;
    for (i ; i < taille_colone; i++) {
      if (is(colone[i], '#ru')) {
        total += getMontant(colone[i]);
      }
    }
    return total.toFixed(2);
  }
  
  function getTotalRU() {
    /**
     * Description : Retourne le montant total que j'ai réellement dépensé pour manger au RU
     */
    var total = 0, i = 0;
    for (i ; i < taille_colone; i++) {
      if (is(colone[i], 'ru')) {
        total += getMontant(colone[i]);
      }
    }
    return total.toFixed(2);
  }
  