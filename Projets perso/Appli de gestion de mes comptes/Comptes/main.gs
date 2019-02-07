function main() {

    // Déclaration des variables globales
    sheet = SpreadsheetApp.getActiveSheet();
    taille_colonne = sheet.getLastRow();
    colonne = sheet.getRange('A1:A' + taille_colonne).getValues();
    lignes = remplirLignes();
    alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    semaine = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
    mois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
    
    // Déclaration des couleurs
    noir = '#000000';
    bleu = '#0000ff';
    gris = '#ebebeb';
    jaune = '#ffff00';
    rouge = '#ff0000';
    vert = '#00ff00';
    blanc = '#ffffff';
    
    // Appel de la fonction de la feuille si elle existe
    switch(sheet.getName()) {
  
      case 'Vente de cubes' :
        traitement(VenteCube);
        break;
  
      case 'Manger' :
        traitement(Manger);
        break;
  
      case 'Entrées Sorties' :
        traitement(EntreeSortie);
        break;
  
      case 'Test' :
        traitement(Test);
  
      default :
        return;
  
    }
  
  }
  