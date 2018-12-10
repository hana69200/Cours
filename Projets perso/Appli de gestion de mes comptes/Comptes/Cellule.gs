/**
 * Cellule Spreadsheet
 * @constructor
 * @param {string} lettre - Lettre de la colone de la cellule.
 * @param {int} nombre - Numéro de la ligne de la cellule.
 */
var Cellule = function(lettre, nombre) {
  this.lettre = lettre;
  this.nombre = nombre;

  this.getLettre = function() {
    return this.lettre;
  }
  
  this.getNombre = function() {
    return this.nombre;
  }
  
  /**
   * Affiche les coordonnées de la cellule de la ligne n + k
   * n le numéro originel de la ligne de la cellule
   * k le numéro éventuellement passé en paramètre
   * @param {int} nb - Numéro éventuel à ajouter à la ligne de la cellule
   * @return {string} - Coordonnées de la cellule finale
   */
  this.toString = function(nb) {
    if (typeof(nb) == 'undefined') var nombre = 0;
    else var nombre = nb;
    return this.lettre + (this.nombre + nombre);
  }
}
