public class MembreBibliotheque {
 
    private String nom;
    private String prenom;
    private int numTelephone;
    private String adresse;
    private int numAbonne;
    private static int dernierNumeroAbonne = 1;
    
    public MembreBibliotheque(String newNom, String newPrenom, int newNumTelephone, String newAdresse) {
        this.nom = newNom;
        this.prenom = newPrenom;
        this.numTelephone = newNumTelephone;
        this.adresse = newAdresse;
        this.numAbonne = ++dernierNumeroAbonne;
    }
    
    public String getNom() {
        return this.nom;
    }
    
    public String getPrenom() {
        return this.prenom;
    }
    
    public int getNumTelephone() {
        return this.numTelephone;
    }
    
    public String getAdresse() {
        return this.adresse;
    }
    
    public int getNumAbonne() {
        return this.numAbonne;
    }
    
    public String setNom() {
        return this.nom;
    }
    
    public String setPrenom() {
        return this.prenom;
    }
    
    public int setNumTelephone() {
        return this.numTelephone;
    }
    
    public String setAdresse() {
        return this.adresse;
    }
    
    public int setNumAbonne() {
        return this.numAbonne;
    }
    
    public String toString() {
        return "nom : " + this.nom +
                "\nprenom : " + this.prenom +
                "\nnumTelephone : " + this.numTelephone +
                "\nadresse : " + this.adresse +
                "\nnumAbonne : " + this.numAbonne;
    }
}
