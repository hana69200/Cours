var Manger_f = function () {

    this.donnees = [];

    // Création d'une transaction
    var tr = function (i, m, o, re, ru, s) {
        this.izly = i;
        this.montant = m;
        this.officiel = o; // #ru
        this.repas = re; // est-ce un repas
        this.ru = ru; // j'ai mangé au vrai ru
        this.signe = s; // 1 s'il s'agit d'une entrée d'argent, -1 sinon
    }

    this.constructor = function () {
        var i, izly, montant, officiel, repas, ru, signe;
        for (i = 0; i < taille_colonne; i++) {
            izly = is(i, 'izly');
            montant = getMontant(i);
            officiel = is(i, '#ru');
            repas = is(i, 'en') || is(i, 'au');
            ru = is(i, 'ru');
            signe = is(i, 'manger') ? 1 : -1;

            this.donnees.push(new tr(izly, montant, officiel, repas, ru, signe));
        }
    }

    this.getBilanRepas = function () {
        /**
         * Description : Retourne un montant positif ou négatif
         * S'il est positif il s'agit de ce que je peux dépenser librement
         * S'il est négatif il s'agit de ce que je dois économiser prochainement
         */
        return (this.getSoldeReel() - this.getSoldeOfficiel()).toFixed(2);
    }

    this.getBudjetCafe = function () {
        /**
         * Description : Retourne le montant utilisé dans les distributeurs
         */
        return (this.getTotalIzly() - this.getTotalRU()).toFixed(2);
    }

    this.getNbRepas = function () {
        /**
         * Description : Retourne le nombre de repas compabilisés
         */
        var total = parseInt(0), i = 0;
        for (i; i < taille_colonne; i++) {
            if (this.donnees[i].repas) {
                total += 1;
            }
        }
        return total;
    }

    this.getSoldeOfficiel = function () {
        /**
         * Description : Retourne le montant que je suis censé posséder
         */
        var total = 0, i = 0;
        for (i; i < taille_colonne; i++) {
            if (this.donnees[i].officiel) {
                total += -3.25;
            }
            else if (this.donnees[i].signe > 0) {
                total += this.donnees[i].montant;
            }
        }
        return total.toFixed(2);
    }

    this.getSoldeReel = function () {
        /**
         * Description : Retourne le montant qu'il me reste
         */
        var total = 0, i = 0;
        for (i; i < taille_colonne; i++) {
            total += this.donnees[i].montant * this.donnees[i].signe
        }
        return total.toFixed(2);
    }

    this.getTotalDepenseOfficiel = function () {
        /**
         * Description : Retourne le montant total que je suis censé avoir dépensé pour manger à l'université
         */
        var total = 0, i = 0;
        for (i; i < taille_colonne; i++) {
            if (this.donnees[i].officiel) {
                total += 3.25;
            }
        }
        return total.toFixed(2);
    }

    this.getTotalDepenseReel = function () {
        /**
         * Description : Retourne le montant total que j'ai réellement dépensé
         */
        var total = 0, i = 0;
        for (i; i < taille_colonne; i++) {
            if (this.donnees[i].signe < 0) {
                total += this.donnees[i].montant;
            }
        }
        return total.toFixed(2);
    }

    this.getTotalGagne = function () {
        /**
         * Description : Retourne le montant total que j'ai gagné sur les repas
         */
        return (this.getTotalDepenseOfficiel() - this.getTotalReelDepensePourManger()).toFixed(2);
    }

    this.getTotalIzly = function () {
        /**
         * Description : Retourne le montant total que j'ai mis sur mon compte Izly
         */
        var total = 0, i = 0;
        for (i; i < taille_colonne; i++) {
            if (this.donnees[i].izly) {
                total += this.donnees[i].montant;
            }
        }
        return total.toFixed(2);
    }

    this.getTotalRecu = function () {
        /**
         * Description : Retourne le montant total que j'ai reçu pour manger
         */
        var total = 0, i = 0;
        for (i; i < taille_colonne; i++) {
            if (this.donnees[i].signe > 0) {
                total += this.donnees[i].montant;
            }
        }
        return total.toFixed(2);
    }

    this.getTotalReelDepensePourManger = function () {
        /**
         * Description : Retourne le montant total que j'ai réellement dépensé pour manger à l'université
         */
        var total = 0, i = 0;
        for (i; i < taille_colonne; i++) {
            if (this.donnees[i].officiel) {
                total += this.donnees[i].montant;
            }
        }
        return total.toFixed(2);
    }

    this.getTotalRU = function () {
        /**
         * Description : Retourne le montant total que j'ai réellement dépensé pour manger au RU
         */
        var total = 0, i = 0;
        for (i; i < taille_colonne; i++) {
            if (this.donnees[i].ru) {
                total += this.donnees[i].montant;
            }
        }
        return total.toFixed(2);
    }

}