package bibliotheque;

import java.util.ArrayList;

public class ListeMembres {
    
    ArrayList<MembreBibliotheque> liste;
    
    public ListeMembres() {
        this.liste = new ArrayList<>();
    }
    
    public boolean ajouterMembre(MembreBibliotheque membre) {
        if (membre != null) {
            this.liste.add(membre);
            return true;
        }
        return false;
    }
    
    public MembreBibliotheque getMembre(int numAbonne) {
        for (int i = 0; i < this.liste.size(); i++) { //pour tous les membre de la liste
            if (this.liste.get(i).getNumAbonne() == numAbonne) { //si les num correspondent
                return this.liste.get(i);
            }
        }
        return null;
    }
    
    public String toString(int numAbonne) { //toString d'un membre connu par son numéro d'abonné
        if (getMembre(numAbonne) != null) {
            return getMembre(numAbonne).toString();
        }
        return "aucun";
    }
    
    @Override
    public String toString() { //toString minimum sur une ligne pour tous les membres
        String chaine = "";
        for (int i = 0; i < this.liste.size(); i++) {
            chaine += "Membre abonné n°" + this.liste.get(i).getNumAbonne() + " : "
                + this.liste.get(i).getPrenom() + " " + this.liste.get(i).getNom() + "\n";
        }
        return chaine;
    }
    
}
