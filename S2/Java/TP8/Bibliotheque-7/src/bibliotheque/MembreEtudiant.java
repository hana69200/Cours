package bibliotheque;

import exceptions.EmprunterDocException;
import java.util.Scanner;

public class MembreEtudiant extends MembreBibliotheque {
    
    public MembreEtudiant(String nom , String prenom, String tel, String adresse) {
        super(nom , prenom, tel, adresse);
    }
    
    @Override
    public boolean peutEmprunterAutreDocument() {
        return super.getNbDocEmprunte() < 4;
    }
    
    @Override
    public String toString() {
        return super.toString() + "\nType de membre : membre étudiant";
    }
    
    @Override
    public void docDisponible(DocBibliotheque doc) {
        
        System.out.println("Le document \"" + doc.getTitre() + "\" que vous avez réservé est disponible."
                + "Désirez-vous l’emprunter maintenant ? (oui/non) : ");
        Scanner entree = new Scanner(System.in);
        String rep = entree.nextLine();
        switch (rep) {
            case "oui":
                try {
                    if (!doc.emprunterDoc(this)) {
                        throw new EmprunterDocException();
                    }
                } catch (EmprunterDocException probleme) {
                    System.out.println(probleme);
                }   break;
            default:
                System.out.println("Document non emprunté");
                break;
        }
    }
    
}
