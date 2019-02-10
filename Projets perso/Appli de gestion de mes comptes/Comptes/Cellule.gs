var Cellule = function (lettre, nombre) {
    /**
     * Cellule Spreadsheet
     * @constructor
     * @param {string} lettre - Lettre de la colonne de la cellule.
     * @param {int} nombre - Numéro de la ligne de la cellule.
     */
    this.lettre = lettre;
    this.nombre = nombre;

    this.getLettre = function () {
        return this.lettre;
    }

    this.setLettre = function (newLettre) {
        this.lettre = newLettre;
    }

    this.getNombre = function () {
        return this.nombre;
    }

    this.setNombre = function (newNombre) {
        this.nombre = newNombre;
    }

    this.toString = function (nb) {
        /**
         * Affiche les coordonnées de la cellule de la ligne n + k
         * n le numéro originel de la ligne de la cellule
         * k le numéro éventuellement passé en paramètre
         * @param {int} nb - Numéro éventuel à ajouter à la ligne de la cellule
         * @return {string} - Coordonnées de la cellule finale
         */
        var nombre = nb;
        if (typeof (nb) == 'undefined') nombre = 0;
        return this.lettre + (this.nombre + nombre);
    }

}
