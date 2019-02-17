var VenteCube_f = function () {

    this.donnees = [];

    // Création d'une transaction
    var tr = function (at, ae, c, m, n, rn, ru, rt, ve, vu) {
        this.achat = at;
        this.achete = ae;
        this.credit = c;
        this.montant = m;
        this.neufVendu = n;
        this.reception = rn;
        this.recu = ru;
        this.remboursement = rt;
        this.vente = ve;
        this.vieuxVendu = vu;
    }

    this.constructor = function () {
        var i, achat, achete, credit, montant, neufVendu, reception, recu, remboursement, vente, vieuxVendu;
        for (i = 0; i < taille_colonne; i++) {
            achat = this.isAchat(i);
            if (achat) {
                achete = this.getNbAcheteLigne(i);
            }
            credit = this.isCredit(i);
            montant = getMontant(i);
            reception = this.isReception(i);
            if (reception) {
                recu = this.getNbRecuLigne(i);
            }
            remboursement = this.isRemboursement(i);
            vente = this.isVente(i);
            if (vente) {
                neufVendu = this.getNbNeufVenduLigne(i);
                vieuxVendu = this.getNbVieuxVenduLigne(i);
            }

            this.donnees.push(new tr(achat, achete, credit, montant, neufVendu, reception, recu, remboursement, vente, vieuxVendu));
        }
    }

    this.getBilan = function () {
        /**
         * Description : Retourne le bilan globale du commerce
         */
        return (this.getCA() - this.getInvestissement()).toFixed(2);
    }

    this.getCA = function () {
        /**
         * Description : Retourne le chiffre d'affaires du commerce
         */
        var recu = 0, i = 0;
        for (i; i < taille_colonne; i++) {
            if (this.donnees[i].vente) {
                recu += this.donnees[i].montant;
            }
        }
        return recu.toFixed(2);
    }

    this.getInvestissement = function () {
        /**
         * Description : Retourne l'investissement total du commerce
         */
        var depense = 0, i = 0;
        for (i; i < taille_colonne; i++) {
            if (this.donnees[i].achat) {
                depense += this.donnees[i].montant;
            }
        }
        return depense.toFixed(2);
    }

    this.getNbAchete = function () {
        /**
         * Description : Retourne le nombre total de cubes achetés
         */
        var nb = parseInt(0), i = 0;
        for (i; i < taille_colonne; i++) {
            if (this.donnees[i].achat) {
                nb += this.donnees[i].achete;
            }
        }
        return nb;
    }

    this.getNbAcheteLigne = function (index) {
        /**
         * Description : Retourne le nombre de cubes achetés de la cellule passée en paramètre
         */
        var tab = lignes[index];
        return parseInt(tab[tab.indexOf(is(index, 'cube') ? 'cube' : 'cubes') - 1]);
    }

    this.getNbCredit = function () {
        /**
         * Description : Retourne le nombre de remboursements en attente
         */
        var credit = 0, remboursement = 0, i = 0;
        for (i; i < taille_colonne; i++) {
            if (this.isCredit(i)) {
                credit++;
            }
            else if (this.isRemboursement(i)) {
                remboursement++;
            }
        }
        return credit - remboursement;
    }

    this.getNbNeufVendu = function () {
        /**
         * Description : Retourne le nombre total de cubes neufs vendus
         */
        var nb = parseInt(0), i = 0;
        for (i; i < taille_colonne; i++) {
            nb += this.getNbNeufVenduLigne(i);
        }
        return nb;
    }

    this.getNbNeufVenduLigne = function (index) {
        /**
         * Description : Retourne le nombre de cubes neufs vendus de la cellule passée en paramètre
         */
        if (!this.isVente(index) || !is(index, 'neuf') && !is(index, 'neufs')) return 0;
        var tab = lignes[index];
        return parseInt(tab[tab.indexOf(is(index, 'neuf') ? 'neuf' : 'neufs') - 2]);
    }

    this.getNbRecu = function () {
        /**
         * Description : Retourne le nombre total de cubes reçus
         */
        var nb = parseInt(0), i = 0;
        for (i; i < taille_colonne; i++) {
            if (this.donnees[i].reception) {
                nb += this.donnees[i].recu;
            }
        }
        return nb;
    }

    this.getNbRecuLigne = function (index) {
        /**
         * Description : Retourne le nombre de cubes reçus de la cellule passée en paramètre
         */
        if (!this.isReception(index)) return '';
        var tab = lignes[index];
        return parseInt(tab[tab.indexOf(is(index, 'cube') ? 'cube' : 'cubes') - 1]);
    }

    this.getNbVendu = function () {
        /**
         * Description : Retourne le nombre total de cubes vendus
         */
        return this.getNbNeufVendu() + this.getNbVieuxVendu();
    }

    this.getNbVieuxVendu = function () {
        /**
         * Description : Retourne le nombre total de vieux cubes vendus
         */
        var nb = parseInt(0), i = 0;
        for (i; i < taille_colonne; i++) {
            if (this.donnees[i].vente) {
                nb += this.donnees[i].vieuxVendu;
            }
        }
        return nb;
    }

    this.getNbVieuxVenduLigne = function (index) {
        /**
         * Description : Retourne le nombre de vieux cubes vendus de la cellule passée en paramètre
         */
        if (!this.isVente(index) || !is(index, 'vieux')) return 0;
        var tab = lignes[index];
        return parseInt(tab[tab.indexOf('vieux') - 1]);
    }

    this.getReception = function () {
        /**
         * Description : Retourne le nombre total de cubes en attente de réception
         */
        return this.getNbAchete() - this.getNbRecu();
    }

    this.getStock = function () {
        /**
         * Description : Retourne le nombre total de cubes en stock
         */
        return this.getNbAchete() - this.getNbNeufVendu() - this.getReception();
    }

    this.getStockPotentiel = function () {
        /**
         * Description : Retourne le nombre total de cubes que le commerce aura en stock 
         * une fois qu'il aura réceptionné tous les cubes qu'il attend
         */
        return this.getStock() + this.getReception();
    }

    this.getTotalCreance = function () {
        /**
         * Description : Retourne le total de la somme des remboursements que le commerce attend
         */
        var credit = 0, remboursement = 0, i = 0;
        for (i; i < taille_colonne; i++) {
            if (this.donnees[i].credit) {
                credit += this.donnees[i].montant;
            }
            else if (this.donnees[i].remboursement) {
                remboursement += this.donnees[i].montant;
            }
        }
        return (credit - remboursement).toFixed(2);
    }

    this.isAchat = function (index) {
        return is(index, 'achat');
    }

    this.isCredit = function (index) {
        return is(index, 'crédit');
    }

    this.isReception = function (index) {
        return is(index, 'réception');
    }

    this.isRemboursement = function (index) {
        return is(index, 'remboursement');
    }

    this.isVente = function (index) {
        return is(index, 'vente');
    }

}