package bibliotheque;

public class DocBibliotheque {
    private String code; //code d'archivage
    private String titre;
    private String auteur; //auteur principal
    private int annee; //année de publication
    private int etatDoc;
    //sur les étagères = 0
    //sur la pile des retours = 1
    //sur la section spéciale "réservations" = 2
    //emprunté = 4
    private boolean reserve; //true si est réservé
    private static int nbDocEmprunte = 0; //nombre de documents empruntés
    private static int nbDocPile = 0; //nombre de documents sur la pile des retours
    private static int nbDocReserve = 0; //nombre de documents réservés
    
    public DocBibliotheque (String newCode, String newTitre, String newAuteur, int newAnnee) {
        this.code = newCode;
        this.titre = newTitre;
        this.auteur = newAuteur;
        this.annee = newAnnee;
        this.etatDoc = 0;
        this.reserve = false;
    }
    
    public String getCode() {
        return this.code;
    }
    
    public boolean setCode(String newCode) {
        /*
        Si :
            la nouvelle valeur du code n'est pas "null"
            et qu'elle est différente de l'ancienne
        Alors :
            changer la valeur du code
            retourner "true"
        Sinon :
            retourne "false"
        */
        if (newCode != null && !newCode.equals(this.code)) {
            this.code = newCode;
            return true;
        }
        else {
            return false;
        }
    }
        
    public String getTitre() {
        return this.titre;
    }
    
    public boolean setTitre(String newTitre) {
        /*
        Si :
            la nouvelle valeur du titre n'est pas "null"
            et qu'elle est différente de l'ancienne
        Alors :
            changer la valeur du titre
            retourner "true"
        Sinon :
            retourne "false"
        */
        if (newTitre != null && !newTitre.equals(this.titre)) {
            this.titre = newTitre;
            return true;
        }
        else {
            return false;
        }
    }
    
    public String getAuteur() {
        return this.auteur;
    }
    
    public boolean setAuteur(String newAuteur) {
        /*
        Si :
            la nouvelle valeur de l'auteur n'est pas "null"
            et qu'elle est différente de l'ancienne
        Alors :
            changer la valeur de l'auteur
            retourner "true"
        Sinon :
            retourne "false"
        */
        if (newAuteur != null && !newAuteur.equals(this.auteur)) {
            this.auteur = newAuteur;
            return true;
        }
        else {
            return false;
        }
    }
    
    public int getAnnee() {
        return this.annee;
    }
    
    public boolean setAnnee(int newAnnee) {
        /*
        Si :
            la nouvelle valeur de l'année n'est égale à 0
            et qu'elle est différente de l'ancienne
        Alors :
            changer la valeur de l'année
            retourner "true"
        Sinon :
            retourne "false"
        */
        if (newAnnee != 0 && newAnnee != this.annee) {
            this.annee = newAnnee;
            return true;
        }
        return false;
    }
    
    public int getEtatDoc() {
        return this.etatDoc;
    }
    
    public boolean emprunterDoc() {
        /*
        Si :
            le doc est sur les étagères (= 0)
        Ou si :
            le doc est sur la section spéciale "réservations" (= 2)
            et l'emprunteur est celui qui a réservé ATTENTION : NE MARCHE PAS ENCORE
        Alors :
            le doc est emprunté (= 4)
            ajouter 1 aux docs empruntés
            retourner "true"
        Sinon :
            retourner "false"
        */
        if (this.etatDoc == 0 || this.etatDoc == 2 /*&& emprunteur == this.emprunteur*/) {
            this.etatDoc = 4;
            nbDocEmprunte ++;
            return true;
        }
        return false;
    }
    
    public boolean retournerDoc() {
        /*
        Si :
            le doc est emprunté (= 4)
        Alors :
            le doc est sur la pile des retours (= 1)
            enlever 1 aux docs empruntés
            ajouter 1 aux docs sur la pile des retours
            retourner "true"
        Sinon :
            retourner "false"
        */
        if (this.etatDoc == 4) {
            this.etatDoc = 1;
            nbDocEmprunte --;
            nbDocPile ++;
            return true;
        }
        return false;
    }
    
    public boolean getReserve() {
        return this.reserve;
    }
    
    public boolean reserverDoc() {
        /*
        Si :
            le doc est emprunté (= 4)
            ou le doc est sur la pile des retours (= 1)
            et le doc n'est pas déjà réservé
        Alors :
            le doc est réservé
            ajouter 1 aux docs réservés
            retourner "true"
        Sinon :
            retourner "false"
        */
        if ((this.etatDoc == 4 || this.etatDoc == 1) && this.reserve == false) {
            this.reserve = true;
            nbDocReserve ++;
            return true;
        }
        return false;
    }
    
    public boolean annulerReservation() {
        /*
        Si :
            le doc est réservé
        Alors :
            Si :
                le doc est sur la pile des retours (= 1)
                ou le doc est emprunté (= 4)
            Alors :
                le doc n'est plus réservé
                enlever 1 aux docs réservés
                retourner "true"
            Sinon si :
                le doc est sur la section spéciale "réservations" (= 2)
            Alors :
                le doc n'est plus réservé
                le doc est sur les étagères (= 0)
                enlever 1 aux docs réservés
                retourner "true"
        Sinon :
            retourner "false"
        */
        if (this.reserve == true) {
            if (this.etatDoc == 1 || this.etatDoc == 4) {
                this.reserve = false;
                nbDocReserve --;
                return true;
            }
            if (this.etatDoc == 2) {
                this.reserve = false;
                this.etatDoc = 0;
                nbDocReserve --;
                return true;
            }
        }
        return false;
    }
    
    public boolean rangerDoc() {
        /*
        Si :
            le doc est sur la pile des retours (= 1)
            et le doc n'est pas réservé
        Alors :
            le doc est sur les étagères (= 0)
            enlever 1 aux docs sur la pile des retours
            retourner "true"
        Sinon si :
            le doc est sur la pile des retours (= 1)
            et le doc est réservé
        Alors :
            le doc est sur la section spéciale "réservations" (= 2)
            enlever 1 aux docs sur la pile des retours
            retourner "true"
        Sinon :
            retourner "false"
        */
        if (this.etatDoc == 1) {
            if (this.reserve == false) {
                this.etatDoc = 0;
                return true;
            }
            if (this.reserve == true) {
                this.etatDoc = 2;
                return true;
            }
            nbDocPile --;
        }
        return false;
    }
    
    @Override
    public String toString() {
        return "Code d'archivage : " + this.code +
                "\nTitre : " + this.titre +
                "\nAuteur principal : " + this.auteur +
                "\nAnnée de publication : " + this.annee +
                "\nÉtat physique du document : " + this.etatDoc +
                "\nÉtat de réservation du document : " + this.reserve;
    }
}