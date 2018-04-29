package bibliotheque;

public class MembreBibliotheque {
    private String nom;
    private String prenom;
    private String tel; //numéro de téléphone du membre
    private String adresse;
    private int num; //numéro d'abonné
    private static int dernierNumeroAbonne = 0;
    
    public MembreBibliotheque(String newNom, String newPrenom, String newTel, String newAdresse) {
        this.nom = newNom;
        this.prenom = newPrenom;
        this.tel = newTel;
        this.adresse = newAdresse;
        this.num = dernierNumeroAbonne++;
    }
    
    public String getNom() {
        return this.nom;
    }
    
    public boolean setNom(String newNom) {
        /*
        Si :
            la nouvelle valeur du nom n'est pas "null"
            et qu'elle est différente de l'ancienne
        Alors :
            changer la valeur du nom
            et retourner "true"
        Sinon :
            retourne "false"
        */
        if (newNom != null && !newNom.equals(this.nom)) {
            this.nom = newNom;
            return true;
        }
        else {
            return false;
        }
    }
    
    public String getPrenom() {
        return this.prenom;
    }
    
    public boolean setPrenom(String newPrenom) {
        /*
        Si :
            la nouvelle valeur du prénom n'est pas "null"
            et qu'elle est différente de l'ancienne
        Alors :
            changer la valeur du prénom
            et retourner "true"
        Sinon :
            retourne "false"
        */
        if (newPrenom != null && !newPrenom.equals(this.prenom)) {
            this.prenom = newPrenom;
            return true;
        }
        else {
            return false;
        }
    }
    
    public String getTel() {
        return this.tel;
    }
    
    public boolean setTel(String newTel) {
        /*
        Si :
            la nouvelle valeur du téléphone n'est pas "null"
            et qu'elle est différente de l'ancienne
        Alors :
            changer la valeur du téléphone
            et retourner "true"
        Sinon :
            retourne "false"
        */
        if (newTel != null && !newTel.equals(this.tel)) {
            this.tel = newTel;
            return true;
        }
        else {
            return false;
        }
    }
    
    public String getAdresse() {
        return this.adresse;
    }
    
    public boolean setAdresse(String newAdresse) {
        /*
        Si :
            la nouvelle valeur de l'adresse n'est pas "null"
            et qu'elle est différente de l'ancienne
        Alors :
            changer la valeur de l'adresse
            et retourner "true"
        Sinon :
            retourne "false"
        */
        if (newAdresse != null && !newAdresse.equals(this.adresse)) {
            this.adresse = newAdresse;
            return true;
        }
        else {
            return false;
        }
    }

}