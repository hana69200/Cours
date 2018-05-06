package bibliotheque;

import java.util.Scanner;

public class TestBibliotheque {
    
    public static void main(String[] args) {
        
        //créer un catalogue de documents
        CatalogueBibliotheque catalogue = new CatalogueBibliotheque(); //création du catalogue
        catalogue.ajouterDoc(new DocBibliotheque("004. 178 K20PM",
                "Introduction à Java", "J. Leblanc", 2015)); //ajout de Doc1 au catalogue
        catalogue.ajouterDoc(new DocBibliotheque("967. 4987 T248O",
                "Structures de Données", "M. Machin", 2017)); //ajout de Doc2 au catalogue
        
        //créer une liste de membres
        ListeMembres membres = new ListeMembres(); //création de la liste
        membres.ajouterMembre(new MembreBibliotheque("Bernard", "Alfred",
                "06 74 38 27 49", "6 rue des Fleures")); //ajout de Membre1
        membres.ajouterMembre(new MembreBibliotheque("Lambert", "Paul",
                "07 41 68 75 78", "6 rue des Fleures")); //ajout de Membre2
        
        boolean menu = true;
        Scanner entree = new Scanner(System.in);
        Scanner entree2 = new Scanner(System.in);
        int choix, choix2;
        String pause;
        
        String nom, prenom, tel, adresse, code, titre, auteur;
        int annee;
        while (menu) {
            affichageMenu();
            choix = entree.nextInt();
            
            switch(choix) {
                
                case 0: //Quitter
                    menu = false;
                    break;
                    
                case 1: //Ajouter un nouveau membre
                    nettoyerAffichage();
                    
                    System.out.print("\nEntrer le nom du nouveau membre : ");
                    nom = entree2.nextLine();
                    nettoyerAffichage();
                    
                    System.out.print("\nEntrer le prénom du nouveau membre : ");
                    prenom = entree2.nextLine();
                    nettoyerAffichage();
                    
                    System.out.print("\nEntrer le numéro de téléphone du nouveau membre : ");
                    tel = entree2.nextLine();
                    nettoyerAffichage();
                    
                    System.out.print("\nEntrer l'adresse du nouveau membre : ");
                    adresse = entree2.nextLine();
                    nettoyerAffichage();
                    
                    membres.ajouterMembre(new MembreBibliotheque(nom, prenom, tel, adresse));
                    
                    System.out.print("\nAppuyer sur une touche pour continuer");
                    pause = entree2.nextLine();
                    pause += "";
                    nettoyerAffichage();
                    break;
                    
                case 2: //Afficher les informations d'un membre
                    nettoyerAffichage();
                    
                    //affichage de la liste des membres
                    System.out.println(membres.toString());
                    
                    System.out.print("\nChoisissez le numéro d'abonné d'un membre : ");
                    choix = entree.nextInt();
                    nettoyerAffichage();
                    
                    System.out.println(membres.liste.get(choix).toString());
                    
                    System.out.print("\nAppuyer sur une touche pour continuer");
                    pause = entree2.nextLine();
                    pause += "";
                    nettoyerAffichage();
                    break;
                    
                case 3: //Modifier les informations d'un membre
                    nettoyerAffichage();
                    
                    //affichage de la liste des membres
                    System.out.println(membres.toString());
                    
                    System.out.print("\nChoisissez le numéro d'abonné d'un membre : ");
                    choix = entree.nextInt();
                    nettoyerAffichage();
                    
                    System.out.println("1 : Modifier le nom du membre\n"
                            + "2 : Modifier le prénom du membre\n"
                            + "3 : Modifier le numéro de téléphone du membre\n"
                            + "4 : Modifier l'adresse du membre");
                    
                    System.out.print("\nChoisissez l'élément que vous souhaitez modifier : ");
                    choix2 = entree.nextInt();
                    nettoyerAffichage();
                    
                    switch(choix2) {
                        case 1:
                            System.out.print("Entrer le nouveau nom du membre : ");
                            nom = entree2.nextLine();
                            membres.getMembre(choix).setNom(nom);
                            break;
                        case 2:
                            System.out.print("Entrer le nouveau prénom du membre : ");
                            prenom = entree2.nextLine();
                            membres.getMembre(choix).setPrenom(prenom);
                            break;
                        case 3:
                            System.out.print("Entrer le nouveau numéro de téléphone du membre : ");
                            tel = entree2.nextLine();
                            membres.getMembre(choix).setTel(tel);
                            break;
                        case 4:
                            System.out.print("Entrer la nouvelle adresse du membre : ");
                            adresse = entree2.nextLine();
                            membres.getMembre(choix).setAdresse(adresse);
                            break;
                    }
                    
                    System.out.print("\nAppuyer sur une touche pour continuer");
                    pause = entree2.nextLine();
                    pause += "";
                    nettoyerAffichage();
                    break;
                    
                case 4: //Ajouter un nouveau document
                    nettoyerAffichage();
                    
                    System.out.print("\nEntrer le code du nouveau document : ");
                    code = entree2.nextLine();
                    nettoyerAffichage();
                    
                    System.out.print("\nEntrer le titre du nouveau document : ");
                    titre = entree2.nextLine();
                    nettoyerAffichage();
                    
                    System.out.print("\nEntrer l'auteur du nouveau document : ");
                    auteur = entree2.nextLine();
                    nettoyerAffichage();
                    
                    System.out.print("\nEntrer l'année de publication du nouveau document : ");
                    annee = entree.nextInt();
                    nettoyerAffichage();
                    
                    catalogue.ajouterDoc(new DocBibliotheque(code, titre, auteur, annee));
                    
                    System.out.print("\nAppuyer sur une touche pour continuer");
                    pause = entree2.nextLine();
                    pause += "";
                    nettoyerAffichage();
                    break;
                    
                case 5: //Supprimer un document
                    nettoyerAffichage();
                    
                    //affichage de la liste des documents
                    System.out.println(catalogue.toString());
                    
                    System.out.print("\nChoisissez le numéro d'un document : ");
                    choix = entree.nextInt();
                    nettoyerAffichage();
                    
                    catalogue.enleverDoc(choix);
                    
                    System.out.print("\nAppuyer sur une touche pour continuer");
                    pause = entree2.nextLine();
                    pause += "";
                    nettoyerAffichage();
                    break;
                
                case 6: //Afficher les informations d'un document
                    nettoyerAffichage();
                    
                    //affichage de la liste des documents
                    System.out.println(catalogue.toString());
                    
                    System.out.print("\nChoisissez le numéro d'un document : ");
                    choix = entree.nextInt();
                    nettoyerAffichage();
                    
                    System.out.println("\n" + catalogue.toString(choix));
                    
                    System.out.print("\nAppuyer sur une touche pour continuer");
                    pause = entree2.nextLine();
                    pause += "";
                    nettoyerAffichage();
                    break;
                    
                case 7: //Modifier les informations d'un document
                    nettoyerAffichage();
                    
                    //affichage de la liste des documents
                    System.out.println(catalogue.toString());
                    
                    System.out.print("\nChoisissez le numéro d'un document : ");
                    choix = entree.nextInt();
                    nettoyerAffichage();
                    
                    System.out.println("1 : Modifier le code du document\n"
                            + "2 : Modifier le titre du document\n"
                            + "3 : Modifier l'auteur du document\n"
                            + "4 : Modifier l'année de publication du document");
                    
                    System.out.print("\nChoisissez l'élément que vous souhaitez modifier : ");
                    choix2 = entree.nextInt();
                    nettoyerAffichage();
                    
                    switch(choix2) {
                        case 1:
                            System.out.print("Entrer le nouveau code du document : ");
                            code = entree2.nextLine();
                            catalogue.getDoc(choix).setCode(code);
                            break;
                        case 2:
                            System.out.print("Entrer le titre du document : ");
                            titre = entree2.nextLine();
                            catalogue.getDoc(choix).setTitre(titre);
                            break;
                        case 3:
                            System.out.print("Entrer le nouvel auteur du document : ");
                            auteur = entree2.nextLine();
                            catalogue.getDoc(choix).setAuteur(auteur);
                            break;
                        case 4:
                            System.out.print("Entrer la nouvelle année de publication du document : ");
                            annee = entree.nextInt();
                            catalogue.getDoc(choix).setAnnee(annee);
                            break;
                    }
                    
                    System.out.print("\nAppuyer sur une touche pour continuer");
                    pause = entree2.nextLine();
                    pause += "";
                    nettoyerAffichage();
                    break;
                
                case 8: //Afficher l’état d’un document
                    nettoyerAffichage();
                    
                    //affichage de la liste des documents
                    System.out.println(catalogue.toString());
                    
                    System.out.print("\nChoisissez le numéro d'un document : ");
                    choix = entree.nextInt();
                    nettoyerAffichage();
                    
                    System.out.print("Le document n°" + choix + " est ");
                    switch(catalogue.getDoc(choix).getEtatDoc()) {
                        case 0:
                            System.out.println("sur les étagères.");
                            break;
                            
                        case 1:
                            System.out.println("sur la pile des retours.");
                            break;
                            
                        case 2:
                            System.out.println("sur la section réservations.");
                            break;
                            
                        case 3:
                            System.out.println("emprunté.");
                            break;
                    }
                    
                    System.out.print("\nAppuyer sur une touche pour continuer");
                    pause = entree2.nextLine();
                    pause += "";
                    nettoyerAffichage();
                    break;
                
                case 9: //Emprunter un document
                    nettoyerAffichage();
                    
                    //affichage de la liste des documents
                    System.out.println(catalogue.toString());
                    
                    System.out.print("\nChoisissez le numéro d'un document : ");
                    choix = entree.nextInt();
                    nettoyerAffichage();
                    
                    //affichage de la liste des membres
                    System.out.println(membres.toString());
                    
                    System.out.print("\nChoisissez le numéro d'abonné d'un membre : ");
                    choix2 = entree.nextInt();
                    nettoyerAffichage();
                    
                    catalogue.emprunterDoc(choix, membres.getMembre(choix2));
                    
                    System.out.print("\nAppuyer sur une touche pour continuer");
                    pause = entree2.nextLine();
                    pause += "";
                    nettoyerAffichage();
                    
                    break;
                
                case 10: //Rendre un document
                    nettoyerAffichage();
                    
                    //affichage de la liste des documents
                    System.out.println(catalogue.toString());
                    
                    System.out.print("\nChoisissez le numéro d'un document : ");
                    choix = entree.nextInt();
                    nettoyerAffichage();
                    
                    catalogue.retournerDoc(choix);
                    
                    System.out.print("\nAppuyer sur une touche pour continuer");
                    pause = entree2.nextLine();
                    pause += "";
                    nettoyerAffichage();
                    
                    break;
                
                case 11: //Ranger un document
                    nettoyerAffichage();
                    
                    //affichage de la liste des documents
                    System.out.println(catalogue.toString());
                    
                    System.out.print("\nChoisissez le numéro d'un document : ");
                    choix = entree.nextInt();
                    nettoyerAffichage();
                    
                    catalogue.getDoc(choix).rangerDoc();
                    
                    System.out.print("\nAppuyer sur une touche pour continuer");
                    pause = entree2.nextLine();
                    pause += "";
                    nettoyerAffichage();
                    
                    break;
                
                case 12: //Faire une réservation
                    nettoyerAffichage();
                    
                    //affichage de la liste des documents
                    System.out.println(catalogue.toString());
                    
                    System.out.print("\nChoisissez le numéro d'un document : ");
                    choix = entree.nextInt();
                    nettoyerAffichage();
                    
                    //affichage de la liste des membres
                    System.out.println(membres.toString());
                    
                    System.out.print("\nChoisissez le numéro d'abonné d'un membre : ");
                    choix2 = entree.nextInt();
                    nettoyerAffichage();
                    
                    catalogue.reserverDoc(choix, membres.getMembre(choix2));
                    
                    System.out.print("\nAppuyer sur une touche pour continuer");
                    pause = entree2.nextLine();
                    pause += "";
                    nettoyerAffichage();
                    
                    break;
                
                case 13: //Annuler une réservation
                    nettoyerAffichage();
                    
                    //affichage de la liste des documents
                    System.out.println(catalogue.toString());
                    
                    System.out.print("\nChoisissez le numéro d'un document : ");
                    choix = entree.nextInt();
                    nettoyerAffichage();
                    
                    //affichage de la liste des membres
                    System.out.println(membres.toString());
                    
                    System.out.print("\nChoisissez le numéro d'abonné d'un membre : ");
                    choix2 = entree.nextInt();
                    nettoyerAffichage();
                    
                    catalogue.annulerReservation(choix, membres.getMembre(choix2));
                    
                    System.out.print("\nAppuyer sur une touche pour continuer");
                    pause = entree2.nextLine();
                    pause += "";
                    nettoyerAffichage();
                    
                    break;
                
                case 14: //Afficher le nombre de documents empruntés
                    nettoyerAffichage();
                    System.out.println("Il y a " + DocBibliotheque.getNbDocEmprunte()
                            + " documents empruntés");
                    
                    System.out.print("\nAppuyer sur une touche pour continuer");
                    pause = entree2.nextLine();
                    pause += "";
                    nettoyerAffichage();
                    break;
                
                case 15: //Afficher le nombre de documents sur la pile des retours
                    nettoyerAffichage();
                    System.out.println("Il y a " + DocBibliotheque.getNbDocPile()
                            + " documents sur la pile des retours");
                    
                    System.out.print("\nAppuyer sur une touche pour continuer");
                    pause = entree2.nextLine();
                    pause += "";
                    nettoyerAffichage();
                    break;
                
                case 16: //Afficher le nombre de documents dans la section spéciale réservations
                    nettoyerAffichage();
                    System.out.println("Il y a " + DocBibliotheque.getNbDocSectionReservation()
                            + " documents sur la section réservation");
                    
                    System.out.print("\nAppuyer sur une touche pour continuer");
                    pause = entree2.nextLine();
                    pause += "";
                    nettoyerAffichage();
                    break;
                
            } //fin du switch
            
        } //fin du while
        

        
    } //fin du main
    
    public static void affichageMenu() {
        nettoyerAffichage();
        System.out.println(
                  "1  : Ajouter un nouveau membre\n"
                + "2  : Afficher les informations d'un membre\n"
                + "3  : Modifier les informations d'un membre\n"
                + "4  : Ajouter un nouveau document\n"
                + "5  : Supprimer un document\n"
                + "6  : Afficher les informations d'un document\n"
                + "7  : Modifier les informations d'un document\n"
                + "8  : Afficher l’état d’un document\n"
                + "9  : Emprunter un document\n"
                + "10 : Rendre un document\n"
                + "11 : Ranger un document\n"
                + "12 : Faire une réservation\n"
                + "13 : Annuler une réservation\n"
                + "14 : Afficher le nombre de documents empruntés\n"
                + "15 : Afficher le nombre de documents sur la pile des retours\n"
                + "16 : Afficher le nombre de documents dans la section réservations\n"
                + "\n0  : Quitter\n");
        System.out.print("Entrer votre choix : ");
    }
    
    public static void nettoyerAffichage() {
        for (int i = 0; i < 20; i++) System.out.println("\n");
    }
    
}
