var Manger_f = function() {

    this.getBilanRepas = function() {
      /**
       * Description : Retourne un montant positif ou négatif
       * S'il est positif il s'agit de ce que je peux dépenser librement
       * S'il est négatif il s'agit de ce que je dois économiser prochainement
       */
      return (this.getSoldeReel() - this.getSoldeOfficiel()).toFixed(2);
    }
    
    this.getBudjetCafe = function() {
      /**
       * Description : Retourne le montant utilisé dans les distributeurs
       */
      return (this.getTotalIzly() - this.getTotalRU()).toFixed(2);
    }
    
    this.getNbRepas = function() {
      /**
       * Description : Retourne le nombre de repas compabilisés
       */
      var total = parseInt(0), i = 0;
      for (i ; i < taille_colonne; i++) {
        if (is(i, 'en') || is(i, 'au')) {
          total += 1;
        }
      }
      return total;
    }
    
    this.getSigneManger = function(index) {
      /**
       * Description : Retourne 1 s'il s'agit d'une entrée d'argent, -1 sinon
       */
      return is(index, 'manger') ? 1 : -1;
    }
    
    this.getSoldeOfficiel = function() {
      /**
       * Description : Retourne le montant que je suis censé posséder
       */
      var total = 0, i = 0;
      for (i ; i < taille_colonne; i++) {
        if (is(i, '#ru')) {
          total += -3.25;
        }
        else if (is(i, 'manger')) {
          total += getMontant(i);
        }
      }
      return total.toFixed(2);
    }
    
    this.getSoldeReel = function() {
      /**
       * Description : Retourne le montant qu'il me reste
       */
      var total = 0, i = 0;
      for (i ; i < taille_colonne; i++) {
        total += getMontant(i) * this.getSigneManger(i);
      }
      return total.toFixed(2);
    }
    
    this.getTotalDepenseOfficiel = function() {
      /**
       * Description : Retourne le montant total que je suis censé avoir dépensé pour manger à l'université
       */
      var total = 0, i = 0;
      for (i ; i < taille_colonne; i++) {
        if (is(i, '#ru')) {
          total += 3.25;
        }
      }
      return total.toFixed(2);
    }
    
    this.getTotalDepenseReel = function() {
      /**
       * Description : Retourne le montant total que j'ai réellement dépensé
       */
      var total = 0, i = 0;
      for (i ; i < taille_colonne; i++) {
        if (!is(i, 'manger')) {
          total += getMontant(i);
        }
      }
      return total.toFixed(2);
    }
    
    this.getTotalGagne = function() {
      /**
       * Description : Retourne le montant total que j'ai gagné sur les repas
       */
      return (this.getTotalDepenseOfficiel() - this.getTotalReelDepensePourManger()).toFixed(2);
    }
    
    this.getTotalIzly = function() {
      /**
       * Description : Retourne le montant total que j'ai mis sur mon compte Izly
       */
      var total = 0, i = 0;
      for (i ; i < taille_colonne; i++) {
        if (is(i, 'izly')) {
          total += getMontant(i);
        }
      }
      return total.toFixed(2);
    }
    
    this.getTotalRecu = function() {
      /**
       * Description : Retourne le montant total que j'ai reçu pour manger
       */
      var total = 0, i = 0;
      for (i ; i < taille_colonne; i++) {
        if (is(i, 'manger')) {
          total += getMontant(i);
        }
      }
      return total.toFixed(2);
    }
    
    this.getTotalReelDepensePourManger = function() {
      /**
       * Description : Retourne le montant total que j'ai réellement dépensé pour manger à l'université
       */
      var total = 0, i = 0;
      for (i ; i < taille_colonne; i++) {
        if (is(i, '#ru')) {
          total += getMontant(i);
        }
      }
      return total.toFixed(2);
    }
    
    this.getTotalRU = function() {
      /**
       * Description : Retourne le montant total que j'ai réellement dépensé pour manger au RU
       */
      var total = 0, i = 0;
      for (i ; i < taille_colonne; i++) {
        if (is(i, 'ru')) {
          total += getMontant(i);
        }
      }
      return total.toFixed(2);
    }
    
  }