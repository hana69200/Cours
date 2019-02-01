function affichage(tab, cell, bilan) {
    /**
     * Gère l'affichage d'un tableau de cellules
     * @param {string[]} tab - Tableau des lignes à afficher
     * @param {Cellule} cell - Cellule de référence
     * @param {float} bilan - Valeur du bilan
     */

    // Efface la cellule A1
    if (colone[0] != '') {
      baisseColone();
    }
    else if (colone[1] == '') {
      monteColone();
    }

    // Écriture dans les cellules
    for (var i = 0; i < tab.length; i++) {
      sheet.getRange(cell.toString(i)).setValue(tab[i]);
    }

    // Personnalisation du fond des cellules
    for (var i = 0; i < tab.length; i++) {
      sheet.getRange(cell.toString(i)).setBackground(gris);
      sheet.getRange(cell.toString(i)).setFontColor(noir);
      sheet.getRange(cell.toString(i)).setFontWeight('bold');
      sheet.getRange(cell.toString(i)).setHorizontalAlignment('right');
      sheet.getRange(cell.toString(i)).setBorder(false, true, false, true, false, false);
    }

    // Personnalisation de l'affichage du bilan (première cellule)
    sheet.getRange(cell.toString()).setBackground((bilan < 0) ? rouge : vert);
    sheet.getRange(cell.toString()).setFontColor((bilan < 0) ? jaune : bleu);
    sheet.getRange(cell.toString()).setFontSize(11);
    sheet.getRange(cell.toString()).setFontWeight('bold');
    sheet.getRange(cell.toString()).setBorder(true, true, true, true, false, false);

    // Personnalisation de l'affichage de la dernière cellule
    sheet.getRange(cell.toString(tab.length - 1)).setBorder(null, true, true, true, false, false);

  }

  function affichageModifEnCours() {
    /**
     * Affiche le message 'CHARGEMENT' dans B1
     */

    sheet.getRange('B1').setBackground(rouge);
    sheet.getRange('B1').setFontColor(jaune);
    sheet.getRange('B1').setFontWeight('bold');
    sheet.getRange('B1').setHorizontalAlignment('center');
    sheet.getRange('B1').setValue('CHARGEMENT');
  }

  function baisseColone() {
    /**
     * Décale toutes les lignes de la colone A d'un cran vers le bas
     */
    var cell = new Cellule('A', 1);
    for (var i = 0; i < colone.length; i++) {
      sheet.getRange(cell.toString(1 + i)).setValue(colone[i]);
    }
      sheet.getRange(cell.toString()).clear();
  }

  function cleanSheet() {
    /**
     * Supprime toute trace de données hors de la première colone
     */
    sheet.getRange('B2:Y999').clear();
    sheet.setColumnWidths(2, 24, 100); // Attention : x, y, z --> y = 26-x
  }

  function getIndex(tab, mot) {
    /**
     * Retourne l'index d'un mot dans un tableau de mots
     * @param {string[]} tab - Tableau des mots d'une cellule
     * @param {string} mot - Mot dont on cherche l'index
     * @return {int} - Index du mot
     */
    for (var i = 0; i < tab.length; i++) {
      if (tab[i] == mot) return i;
    }
    return -1;
  }

  function clear(tab) {
    /**
     * Vide le tableau
     */
    var i;
    var taille = tab.length;
    for (i = 0; i < taille; i++) {
      tab.pop();
    }
  }

  function getLigneToTab(cell) {
    /**
     * Retourne un tableau de mots à partir d'un string
     * @param {string} cell - String d'une cellule
     * @return {string[]} tab - Tableau de mots
     */
    var ligne = cell + ' ';
    var tab = [];
    var mot = '';
    for (var i = 0; i < ligne.length; i++) {
      if (ligne[i] != ' ') {
        mot = mot + ligne[i];
      }
      else {
        tab.push(mot);
        mot = '';
      }
    }
    return tab;
  }

  function getAnnee(cell) {
    /**
     * Retourne l'année de la cellule passée en paramètre
     */
    var tab = getLigneToTab(cell);
    return tab[3];
  }

  function getMois(cell) {
    /**
     * Retourne le mois de la cellule passée en paramètre
     */
    var tab = getLigneToTab(cell);
    return tab[2];
  }

  function getMontant(cell) {
    /*
     * Retourne le montant d'une cellule
     * @param {string} cell - Tableau de mots d'une cellule
     * @return {float} - Montant de la cellule
     */
    var tab = getLigneToTab(cell);
    return is(cell, '€') ? parseFloat(toEnglishNumber(tab[(getIndex(tab, '€') -1)])) : 0;
  }

  function is(cell, mot) {
    /*
     * Indique si un mot se trouve dans une cellule
     * @param {string[]} cell - Tableau de mots
     * @param {string} mot - Mot à chercher
     * @return {boolean} - Booléen à true si mot a été trouvé
     */
    var tab = getLigneToTab(cell);
    for (var i = 0; i < tab.length; i++) {
      if (tab[i] == mot) return true;
    }
    return false;
  }

  function monteColone() {
    /**
     * Décale toutes les lignes de la colone A d'un cran vers le haut
     */
    var cell = new Cellule('A', 1);
    for (var i = 1; i < colone.length; i++) {
      sheet.getRange(cell.toString(i)).setValue(colone[i + 1]);
    }
    sheet.getRange(cell.toString(colone.length - 1)).clear();
    taille_colone = sheet.getLastRow();
    colone = sheet.getRange('A1:A' + taille_colone).getValues();
  }

  function toEnglishNumber(nb_fr) {
    /*
     * Normalise les écritures de nombre à virgule au format anglais
     * @param {string} nb_fr - Texte du nombre au format français ou anglais
     * @return {float} nb_eu - Nombre à virgule
     */
    var len = nb_fr.length;
    var nb_eu = '';
    for (var i = 0; i < len; i++) {
      if (nb_fr[i] == ',') nb_eu = nb_eu + '.';
      else nb_eu = nb_eu + nb_fr[i];
    }
    return nb_eu;
  }

  function traitement(fonction) {
    /**
     * Gère les traitements de la fonction 'main'
     */
    affichageModifEnCours(); // Affiche 'modif en cours'
    cleanSheet(); // Nettoyage de la feuille
    fonction();
    sheet.autoResizeColumns(1, 25); // Redimensionnement des colones
    sheet.getRange('B1').clear(); // Supprime 'affichage en cours'
  }
