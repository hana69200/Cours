package bibliotheque;

import java.util.ArrayList;

public class CatalogueBibliotheque {
    
    ArrayList<DocBibliotheque> liste;
    private int dernier;
    
    public CatalogueBibliotheque() {
        this.liste = new ArrayList<>();
        this.liste.add(null);
        this.dernier = 0;
    }
    
    public int getDernier() {
        return this.dernier;
    }
    
    public DocBibliotheque getDoc(int indice){
        if (indice > 0 && indice <= this.dernier) { //si l'indice est possible
            return this.liste.get(indice);
        }
        return null;
    }
    
    public void ajouterDoc(DocBibliotheque doc) {
        this.liste.add(++this.dernier, doc);
    }
    
    public boolean enleverDoc(int indice) {
        if (indice > 0 && indice <= this.dernier) { //si l'indice est possible
            this.liste.remove(indice);
            dernier --;
            return true;
        }
        return false;
    }
    
    public boolean emprunterDoc(int indice, MembreBibliotheque membre) {
        return this.liste.get(indice).emprunterDoc(membre);
    }
    
    public boolean retournerDoc(int indice) {
        return this.liste.get(indice).retournerDoc(); //doc.retournerDoc()
    }
    
    public boolean reserverDoc(int indice, MembreBibliotheque membre) {
        return this.liste.get(indice).reserverDoc(membre); //doc.resereverDoc(membre)
    }
    
    public boolean annulerReservation(int indice, MembreBibliotheque membre) {
        return this.liste.get(indice).annulerReservation(membre); //doc.annulerReservation(membre)
    }
    
    public String toString(int indice) { //toString d'un document connu par son indice
        return "Document n°" + indice + " :\n" + this.liste.get(indice).toString();
    }
    
    @Override
    public String toString() { //toString minimum sur une ligne pour tous les documents
        String chaine = "";
        for (int i = 1; i <= this.dernier; i++) {
            chaine += "Document n°" + i + " : " + liste.get(i).toStringOneLine() + "\n";
        }
        return chaine;
    }
}
