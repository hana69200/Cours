var VenteCube_f = function() {

    this.getBilan = function() {
      /**
       * Description : Retourne le bilan globale du commerce
       */
      return (this.getCA() - this.getInvestissement()).toFixed(2);
    }
    
    this.getCA = function() {
      /**
       * Description : Retourne le chiffre d'affaires du commerce
       */
      var recu = 0, i = 0;
      for (i ; i < taille_colonne; i++) {
        if (this.isVente(i)) {
          recu += this.getMontantVente(i);
        }
      }
      return recu.toFixed(2);
    }
    
    this.getInvestissement = function() {
      /**
       * Description : Retourne l'investissement total du commerce
       */
      var depense = 0, i = 0;
      for (i ; i < taille_colonne; i++) {
        if (this.isAchat(i)) {
          depense += this.getMontantAchat(i);
        }
      }
      return depense.toFixed(2);
    }
    
    this.getMontantAchat = function(index) {
      /**
       * Description : Retourne le montant de l'achat de la cellule passée en paramètre
       */
      if (!this.isAchat(index)) return '';
      var tab = lignes[index];
      return parseFloat(toEnglishNumber(tab[(getIndex(tab, '€') -1)]));
    }
    
    this.getMontantCredit = function(index) {
      /**
       * Description : Retourne le montant du crédit de la cellule passée en paramètre
       */
      if (!this.isCredit(index)) return '';
      var tab = lignes[index];
      return parseFloat(toEnglishNumber(tab[(getIndex(tab, '€') -1)]));
    }
    
    this.getMontantRemboursement = function(index) {
      /**
       * Description : Retourne le montant du remboursement de la cellule passée en paramètre
       */
      if (!this.isRemboursement(index)) return '';
      var tab = lignes[index];
      return parseFloat(toEnglishNumber(tab[(getIndex(tab, '€') -1)]));
    }
    
    this.getMontantVente = function(index) {
      /**
       * Description : Retourne le montant de la vente de la cellule passée en paramètre
       */
      if (!this.isVente(index)) return '';
      var tab = lignes[index];
      return parseFloat(toEnglishNumber(tab[(getIndex(tab, '€') -1)]));
    }
    
    this.getNbAchete = function() {
      /**
       * Description : Retourne le nombre total de cubes achetés
       */
      var nb = parseInt(0), i = 0;
      for (i ; i < taille_colonne; i++) {
        if (this.isAchat(i)) {
          nb += this.getNbAcheteLigne(i);
        }
      }
      return nb;
    }
    
    this.getNbAcheteLigne = function(index) {
      /**
       * Description : Retourne le nombre de cubes achetés de la cellule passée en paramètre
       */
      if (!this.isAchat(index)) return '';
      var tab = lignes[index];
      return parseInt(tab[(getIndex(tab, is(index, 'cube') ? 'cube' : 'cubes')  -1)]);
    }
    
    this.getNbCredit = function() {
      /**
       * Description : Retourne le nombre de remboursements en attente
       */
      var credit = 0, remboursement = 0, i = 0;
      for (i ; i < taille_colonne; i++) {
        if (this.isCredit(i)) {
          credit++;
        }
        else if (this.isRemboursement(i)) {
          remboursement++;
        }
      }
      return credit - remboursement;
    }
    
    this.getNbNeufVendu = function() {
      /**
       * Description : Retourne le nombre total de cubes neufs vendus
       */
      var nb = parseInt(0), i = 0;
      for (i ; i < taille_colonne; i++) {
        nb += this.getNbNeufVenduLigne(i);
      }
      return nb;
    }
    
    this.getNbNeufVenduLigne = function(index) {
      /**
       * Description : Retourne le nombre de cubes neufs vendus de la cellule passée en paramètre
       */
      if (!this.isVente(index) || !is(index, 'neuf') && !is(index, 'neufs')) return 0;
      var tab = lignes[index];
      return parseInt(tab[(getIndex(tab, is(index, 'neuf') ? 'neuf' : 'neufs')  -2)]);
    }
    
    this.getNbRecu = function() {
      /**
       * Description : Retourne le nombre total de cubes reçus
       */
      var nb = parseInt(0), i = 0;
      for (i ; i < taille_colonne; i++) {
        if (this.isReception(i)) {
          nb += this.getNbRecuLigne(i);
        }
      }
      return nb;
    }
    
    this.getNbRecuLigne = function(index) {
      /**
       * Description : Retourne le nombre de cubes reçus de la cellule passée en paramètre
       */
      if (!this.isReception(index)) return '';
      var tab = lignes[index];
      return parseInt(tab[(getIndex(tab, is(index, 'cube') ? 'cube' : 'cubes')  -1)]);
    }
    
    this.getNbVendu = function() {
      /**
       * Description : Retourne le nombre total de cubes vendus
       */
      return this.getNbNeufVendu() + this.getNbVieuxVendu();
    }
    
    this.getNbVieuxVendu = function() {
      /**
       * Description : Retourne le nombre total de vieux cubes vendus
       */
      var nb = parseInt(0), i = 0;
      for (i ; i < taille_colonne; i++) {
        nb += this.getNbVieuxVenduLigne(i);
      }
      return nb;
    }
    
    this.getNbVieuxVenduLigne = function(index) {
      /**
       * Description : Retourne le nombre de vieux cubes vendus de la cellule passée en paramètre
       */
      if (!this.isVente(index) || !is(index, 'vieux')) return 0;
      var tab = lignes[index];
      return parseInt(tab[(getIndex(tab, 'vieux') -1)]);
    }
    
    this.getReception = function() {
      /**
       * Description : Retourne le nombre total de cubes en attente de réception
       */
      return this.getNbAchete() - this.getNbRecu();
    }
    
    this.getStock = function() {
      /**
       * Description : Retourne le nombre total de cubes en stock
       */
      return this.getNbAchete() - this.getNbNeufVendu() - this.getReception();
    }
    
    this.getStockPotentiel = function() {
      /**
       * Description : Retourne le nombre total de cubes que le commerce aura en stock 
       * une fois qu'il aura réceptionné tous les cubes qu'il attend
       */
      return this.getStock() + this.getReception();
    }
    
    this.getTotalCreance = function() {
      /**
       * Description : Retourne le total de la somme des remboursements que le commerce attend
       */
      var credit = 0, remboursement = 0, i = 0;
      for (i ; i < taille_colonne; i++) {
        if (this.isCredit(i)) {
          credit += this.getMontantVente(i);
        }
        else if (isRemboursement(i)) {
          remboursement += this.getMontantRemboursement(i);
        }
      }
      return (credit - remboursement).toFixed(2);
    }
    
    this.isAchat = function(index) {
      return is(index, 'achat');
    }
    
    this.isCredit = function(index) {
      return is(index, 'crédit');
    }
    
    this.isReception = function(index) {
      return is(index, 'réception');
    }
    
    this.isRemboursement = function(index) {
      return is(index, 'remboursement');
    }
    
    this.isVente = function(index) {
      return is(index, 'vente');
    }
    
  }