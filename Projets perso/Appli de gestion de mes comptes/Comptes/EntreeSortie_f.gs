function afficherTousLesBilans() {
    /**
     * Description : Lance l'affichage de tous les bilans mensuels pour chaque année
     */
    var cellule_ref = new Cellule('D', 2);
    var annees = [];
    var i = 0;

    remplirAnnees(annees); // Dans l'ordre déchronologique

    // Pour chaque année
    for (i ; i < annees.length; i++) {
      traitementAnnee(cellule_ref, annees[i]);
    }
  }

  function afficherAnneeColone(cell, annee) {
    /**
     * Description : Affiche l'année dont il est question en haut de la colone
     */
    sheet.getRange(cell.toString()).setValue("Année " + annee);
    sheet.getRange(cell.toString()).setHorizontalAlignment('center');
    sheet.getRange(cell.toString()).setBackground(bleu);
    sheet.getRange(cell.toString()).setFontColor(blanc);
    sheet.getRange(cell.toString()).setFontSize(11);
    sheet.getRange(cell.toString()).setFontWeight('bold');
  }

  function getBilanMois(annee, mois) {
    /**
     * Description : Retourne le montant du bilan mensuel correspondant
     */
    var total = 0, i = 0, tmp;
    for (i ; i < taille_colone; i++) {
      if (annee == getAnnee(colone[i]) && mois == getMois(colone[i])) {
        tmp = getMontant(colone[i]);
        tmp *= getSigneES(colone[i]);
        tmp *= isRembourse(colone[i]);
        total += tmp;
      }
    }
    return total.toFixed(2);
  }

  function getBilanPersoMois(annee, mois) {
    /**
     * Description : Retourne le montant du bilan mensuel correspondant
     * en considérant que tout ce qui devait être remboursé l'a été
     */
    var total = 0, i = 0, tmp;
    for (i ; i < taille_colone; i++) {
      if (annee == getAnnee(colone[i]) && mois == getMois(colone[i])) {
        tmp = getMontant(colone[i]);
        tmp *= getSigneES(colone[i]);
        tmp *= isRembourse(colone[i]);
        tmp *= isRemboursable(colone[i]);
        total += tmp;
      }
    }
    return total.toFixed(2);
  }

  function getBilanPerso() {
    /**
     * Description : Retourne le bilan total actuel
     * en considérant que tout ce qui devait être remboursé l'a été
     */
    var total = 0, i = 0, tmp;
    for (i ; i < taille_colone; i++) {
      tmp = getMontant(colone[i]);
      tmp *= getSigneES(colone[i]);
      tmp *= isRembourse(colone[i]);
      tmp *= isRemboursable(colone[i]);
      total += tmp;
    }
    return total.toFixed(2);
  }

  function getBilanTotal() {
    /**
     * Description : Retourne le bilan total actuel
     */
    var total = 0, i = 0, tmp;
    for (i ; i < taille_colone; i++) {
      tmp = getMontant(colone[i]);
      tmp *= getSigneES(colone[i]);
      tmp *= isRembourse(colone[i]);
      total += tmp;
    }
    return total.toFixed(2);
  }

  function getBilanTotalMois(annee, mois) {
    /**
     * Description : Retourne le montant du bilan total à la fin du mois
     */
    var total = 0, i = 0, tmp = 0;

    // On se rend à l'index du mois
    while (!(annee == getAnnee(colone[i]) && mois == getMois(colone[i]))) {
      i++;
    }

    // Puis on fait notre traitement
    for (i ; i < taille_colone; i++) {
      tmp = getMontant(colone[i]);
      tmp *= getSigneES(colone[i]);
      tmp *= isRembourse(colone[i]);
      total += tmp;
    }
    return total.toFixed(2);
  }

  function getEntreeMois(annee, mois) {
    /**
     * Description : Retourne la somme des entrées du mois correspondant
     */
    var total = 0, i = 0;
    for (i ; i < taille_colone; i++) {
      if (annee == getAnnee(colone[i]) && mois == getMois(colone[i])) {

        // Si c'est une entrée ou que c'est une sortie qui a été remboursée
        if (getSigneES(colone[i]) == 1 || isRembourse(colone[i]) == 0) {
          total += getMontant(colone[i]);
        }
      }
    }
    return total.toFixed(2);
  }

  function getNbRemboursement() {
    /**
     * Description : Retourne le nombre total de remboursements en attente
     */
    var total = parseInt(0), i = 0;
    for (i ; i < taille_colone; i++) {
      if (is(colone[i], 'remboursable')) {
        total += 1;
      }
    }
    return total;
  }

  function getNbRemboursementMois(annee, mois) {
    /**
     * Description : Retourne le nombre de remboursements en attente pour le mois correspondant
     */
    var total = parseInt(0), i = 0;
    for (i ; i < taille_colone; i++) {
      if (annee == getAnnee(colone[i]) && mois == getMois(colone[i])) {
        if (is(colone[i], 'remboursable')) {
          total += 1;
        }
      }
    }
    return total;
  }

  function getSigneES(cell) {
    /**
     * Description : Retourne 1 si le montant de la cellule correspondante est une entrée, -1 sinon
     */
    return is(cell, 'entrée') ? 1 : -1;
  }

  function getSortieMois(annee, mois) {
    /**
     * Description : Retourne la somme des sorties du mois correspondant
     */
    var total = 0, i = 0;
    for (i ; i < taille_colone; i++) {
      if (annee == getAnnee(colone[i]) && mois == getMois(colone[i])) {
        // Si c'est une sortie
        if (getSigneES(colone[i]) == -1) {
          total += getMontant(colone[i]);
        }
      }
    }
    return total.toFixed(2);
  }

  function getTotalDu() {
    /**
     * Description : Retourne le montant total qu'on me doit
     */
    return (getBilanPerso() - getBilanTotal()).toFixed(2);
  }

  function getTotalDuMois(annee, mois) {
    /**
     * Description : Retourne le montant qu'on me doit pour le mois correspondant
     */
    return (getBilanPersoMois(annee, mois) - getBilanMois(annee, mois)).toFixed(2);
  }

  function getTotalEntree() {
    /**
     * Description : Retourne la somme de toutes les entrées
     */
    var total = 0, i = 0;
    for (i ; i < taille_colone; i++) {

      // Si c'est une entrée ou que c'est une sortie qui a été remboursée
      if (getSigneES(colone[i]) == 1 || isRembourse(colone[i]) == 0) {
        total += getMontant(colone[i]);
      }
    }
    return total.toFixed(2);
  }

  function getTotalSortie() {
    /**
     * Description : Retourne la somme de toutes les sorties
     */
    var total = 0, i = 0;
    for (i ; i < taille_colone; i++) {

      // Si c'est une sortie
      if (getSigneES(colone[i]) == -1) {
        total += getMontant(colone[i]);
      }
    }
    return total.toFixed(2);
  }

  function isRemboursable(cell) {
    return (is(cell, 'remboursable')) ? 0 : 1;
  }

  function isRembourse(cell) {
    return (is(cell, 'remboursé')) ? 0 : 1;
  }

  function remplirAnnees(annees) {
    /**
     * Description : Liste les années des dates de la colone A
     * et les ajoute au tableau passé en paramètre dans le même ordre
     */
    var anneeActuelle, i = 1;
    for (i ; i < taille_colone; i++) {
      if (i == 1 || anneeActuelle != getAnnee(colone[i])) {
        anneeActuelle = getAnnee(colone[i]);
        annees.push(anneeActuelle);
      }
    }
  }

  function remplirMois(annee, mois) {
    /**
     * Description : Liste les mois des dates de la colone A
     * et les ajoute au tableau passé en paramètre dans le même ordre
     */
    var moisActuel;
    var i = 1;
    clear(mois);
    for (i ; i < taille_colone; i++) {
      if (getAnnee(colone[i]) == annee && (i == 1 || moisActuel != getMois(colone[i]))) {
        moisActuel = getMois(colone[i]);
        mois.push(moisActuel);
      }
    }
  }

  function traitementAnnee(cellule_ref, annee) {
    /**
     * Description : Lance l'affichage de tous les bilans mensuels pour l'année passée en paramètre
     */
    var mois = [];
    var i = 0;

    // Afficher l'année en haut de la colone
    afficherAnneeColone(cellule_ref, annee);

    // Mise à jour de la cellule de référence
    cellule_ref.setNombre(cellule_ref.getNombre() + 1)

    remplirMois(annee, mois); // Dans l'ordre déchronologique

    // Pour chaque mois
    for (i ; i < mois.length; i++) {
      traitementMois(cellule_ref, annee, mois[i]);
    }

    // Redimentionnement de la colone à gauche de l'année
    sheet.setColumnWidth(alphabet.indexOf(cellule_ref.getLettre()), 25);

    // Mise à jour de la cellule de référence
    cellule_ref.setNombre(2);
    cellule_ref.setLettre(alphabet[(alphabet.indexOf(cellule_ref.getLettre()) + 2)%26]);
  }

  function traitementMois(cellule_ref, annee, mois) {
    /**
     * Description : Lance l'affichage du bilan mensuel pour le mois passée en paramètre
     */

    // Déclaration des variables
    var tab_affichage = [];
    var tmp;

    // Ajout du contenu à afficher...

    // Ajout du nom du mois
    tmp = "Bilan ";
    tmp += mois == "avril" || mois == "août" || mois == "octobre" ? "d'" : "de ";
    tmp += mois + " : "
    tab_affichage.push(tmp + getBilanMois(annee, mois) + ' €');

    // En cas de remboursement(s) en attente(s)
    if (getTotalDuMois(annee, mois) != 0) {
      tab_affichage.push("Bilan perso du mois : " + getBilanPersoMois(annee, mois) + ' €');
    }

    tab_affichage.push("Entrées du mois : " + getEntreeMois(annee, mois) + ' €');
    tab_affichage.push("Sorties du mois : " + getSortieMois(annee, mois) + ' €');

    // En cas de remboursement(s) en attente(s)
    if (getTotalDuMois(annee, mois) != 0) {
      tab_affichage.push("Ce mois on me doit : " + getTotalDuMois(annee, mois) + ' €');
      tab_affichage.push("Remboursements en attente : " + getNbRemboursementMois(annee, mois));
    }

    tab_affichage.push("Bilan total : " + getBilanTotalMois(annee, mois) + ' €');

    // Mise à jour de la cellule de référence
    cellule_ref.setNombre(cellule_ref.getNombre() + 1)

    // Affichage du bilan mensuel
    affichage(tab_affichage, cellule_ref, getBilanMois(annee, mois));

    // Mise à jour de la cellule de référence
    cellule_ref.setNombre(cellule_ref.getNombre() + tab_affichage.length)
  }
