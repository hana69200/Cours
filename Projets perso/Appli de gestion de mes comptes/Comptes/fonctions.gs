function affichage(tab, cell, bilan) {
    /**
     * Gère l'affichage d'un tableau de cellules
     * @param {string[]} tab - Tableau des lignes à afficher
     * @param {Cellule} cell - Cellule de référence
     * @param {float} bilan - Valeur du bilan
     */

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

function ajoutDate(bool) {
    /**
     * Ajoute la date en début de ligne pour la cellule A1 si elle n'y est pas
     */
    if (colonne[0] != '' && lignes[0][0] != "Le") {
        var valeur = sheet.getRange('A1').getValue();
        sheet.getRange('A1').setValue(getDate(bool) + valeur);
        colonne[0] = getDate(bool) + valeur;
    }
}

function baisseColonne() {
    /**
     * Décale toutes les lignes de la colonne A d'un cran vers le bas
     */
    var cell = new Cellule('A', 1);
    for (var i = 0; i < colonne.length; i++) {
        sheet.getRange(cell.toString(1 + i)).setValue(colonne[i]);
    }
    sheet.getRange(cell.toString()).clear();
}

function cleanSheet() {
    /**
     * Supprime toute trace de données hors de la première colonne
     */
    sheet.getRange('B2:Y999').clear();
    sheet.setColumnWidths(2, 24, 100); // Attention : x, y, z --> y = 26-x
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

function decallageCelluleA1() {
    if (colonne[0] != '') {
        baisseColonne();
    }
    else if (colonne[1] == '') {
        monteColonne();
    }
    // Mise à jour des variables globales
    taille_colonne = sheet.getLastRow();
    colonne = sheet.getRange('A1:A' + taille_colonne).getValues();
    lignes = remplirLignes();
}

function getAnnee(index) {
    /**
     * Retourne l'année de la cellule passée en paramètre
     */
    return lignes[index][3];
}

function getDate(bool) {
    /**
     * Retourne la date du jour selon que 'long' soit à 'true' ou à 'false'
     * Sous la forme "Le lundi 24 janvier 2018" si 'long' est à 'true'
     * Sous la forme "Le 24 janvier 2018" si 'long' est à 'false'
     */
    var date = new Date();
    var nomJour = semaine[date.getDay()];
    var numJour = date.getDate() == 1 ? "1er" : date.getDate();
    var moisJour = mois[date.getMonth()];
    var annee = date.getFullYear();
    var dateFinale;

    // Écriture de la date dans la variable
    dateFinale = "Le ";
    dateFinale += bool ? (nomJour + " ") : "";
    dateFinale += numJour + " " + moisJour + " " + annee + " : ";

    return dateFinale;
}

function getLigneToTab(index) {
    /**
     * Retourne un tableau de mots à partir d'un string
     * @param {string} cell - String d'une cellule
     * @return {string[]} tab - Tableau de mots
     */
    var cell = colonne[index];
    var tab = cell.toString().split(' ');
    var p1 = cell.indexOf('(');
    if (p1 != -1) {
        var p2 = cell.indexOf(')');
        var debutTab = tab.splice(0, p1);
        var finTab = tab.slice(p2 + 1)
        tab = debutTab.concat(finTab);
    }
    return tab;
}

function getMois(index) {
    /**
     * Retourne le mois de la cellule passée en paramètre
     */
    return lignes[index][2];
}

function getMontant(index) {
    /*
     * Retourne le montant d'une cellule
     * @param {string} cell - Tableau de mots d'une cellule
     * @return {float} - Montant de la cellule
     */
    var tab = lignes[index];
    return is(index, '€') ? parseFloat(toEnglishNumber(tab[tab.indexOf('€') - 1])) : 0;
}

function is(index, mot) {
    /*
     * Indique si un mot se trouve dans une cellule
     * @param {string[]} cell - Tableau de mots
     * @param {string} mot - Mot à chercher
     * @return {boolean} - Booléen à true si mot a été trouvé
     */
    var tab = lignes[index];
    return (tab.indexOf(mot) != -1);
}

function monteColonne() {
    /**
     * Décale toutes les lignes de la colonne A d'un cran vers le haut
     */
    var cell = new Cellule('A', 1);
    for (var i = 1; i < colonne.length; i++) {
        sheet.getRange(cell.toString(i)).setValue(colonne[i + 1]);
    }
    sheet.getRange(cell.toString(colonne.length - 1)).clear();
}

function remplirLignes() {
    var tab = [];
    var i;
    for (i = 0; i < taille_colonne; i++) {
        tab.push(getLigneToTab(i));
    }
    return tab;
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
    sheet.autoResizeColumns(1, 25); // Redimensionnement des colonnes
    sheet.getRange('B1').clear(); // Supprime 'affichage en cours'
}
