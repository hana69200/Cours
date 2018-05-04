package bibliotheque;

import java.util.Scanner;

public class TestBibliotheque {
    
    public static void main(String[] args) {
        
        //créer des documents
        DocBibliotheque Doc1 = new DocBibliotheque("004. 178 K20PM",
                "Introduction à Java", "J. Leblanc", 2015);
        DocBibliotheque Doc2 = new DocBibliotheque("967. 4987 T248O",
                "Structures de Données", "M. Machin", 2017);
        
        //créer des membres
        MembreBibliotheque Membre1 = new MembreBibliotheque("Bernard", "Alfred",
                "06 74 38 27 49", "6 rue des Fleures");
        MembreBibliotheque Membre2 = new MembreBibliotheque("Lambert", "Paul",
                "07 41 68 75 78", "6 rue des Fleures");
        
        boolean menu = true;
        Scanner entree = new Scanner(System.in);
        Scanner entree2 = new Scanner(System.in);
        int choix;
        String pause;
        
        while (menu) {
            affichageMenu();
            choix = entree.nextInt();
            
            switch(choix) {
                
                case 1:
                    //Afficher les informations d'un document
                    nettoyerAffichage(10);
                    System.out.print("\nChoisissez le numéro d'un document : ");
                    choix = entree.nextInt();
                    if (choix == 1) System.out.println("Doc 1 : \"Introduction à Java\" de J. Leblanc");
                    else System.out.println("Doc 2 : \"Structures de Données\" de M. Machin");
                    System.out.print("Appuyer sur un chiffre pour continuer");
                    pause = entree2.nextLine();
                    nettoyerAffichage(10);
                    break;
                
                case 2:
                    //Connaître l’état d’un document
                    nettoyerAffichage(10);
                    System.out.print("\nChoisissez le numéro d'un document : ");
                    choix = entree.nextInt();
                    if (choix == 1) {
                        switch(Doc1.getEtatDoc()) {
                            case 0:
                                System.out.println("\nDoc 1 : sur les étagères");
                                break;
                            case 1:
                                System.out.println("\nDoc 1 : sur la pile des retours");
                                break;
                            case 2:
                                System.out.println("\nDoc 1 : sur la section réservations");
                                break;
                            case 3:
                                System.out.println("\nDoc 1 : emprunté");
                                break;
                        }
                    }
                    else {
                        switch(Doc2.getEtatDoc()) {
                            case 0:
                                System.out.println("\nDoc 2 : sur les étagères");
                                break;
                            case 1:
                                System.out.println("\nDoc 2 : sur la pile des retours");
                                break;
                            case 2:
                                System.out.println("\nDoc 2 : sur la section réservations");
                                break;
                            case 3:
                                System.out.println("\nDoc 2 : emprunté");
                                break;
                        }
                    }
                    System.out.print("Appuyer sur un chiffre pour continuer");
                    pause = entree2.nextLine();
                    nettoyerAffichage(10);
                    break;
                
                case 3:
                    //Changer l’état d’un document
                    break;
                
                case 4:
                    //Faire une réservation
                    break;
                
                case 5:
                    //Annuler une réservation
                    break;
                
                case 6:
                    //Afficher le nombre de documents empruntés
                    break;
                
                case 7:
                    //Afficher le nombre de documents sur la pile des retours
                    break;
                
                case 8:
                    //Afficher le nombre de documents dans la section spéciale réservations
                    break;
                
                case 9:
                    //À faire
                    break;
                
                case 10:
                    //Quitter
                    menu = false;
                    break;
                
            }
            
        }
        
    }
    
    public static void affichageMenu() {
        nettoyerAffichage(10);
        System.out.println(
                  "1  : Afficher les informations d'un document\n"
                + "2  : Connaître l’état d’un document\n"
                + "3  : Changer l’état d’un document\n"
                + "4  : Faire une réservation\n"
                + "5  : Annuler une réservation\n"
                + "6  : Afficher le nombre de documents empruntés\n"
                + "7  : Afficher le nombre de documents sur la pile des retours\n"
                + "8  : Afficher le nombre de documents dans la section spéciale réservations\n"
                + "9  : À faire\n"
                + "10 : Quitter\n");
        System.out.print("Entrer votre choix : ");
    }
    
    public static void nettoyerAffichage(int lignes) {
        for (int i = 0; i < lignes; i++) System.out.println("\n");
    }
    
}
