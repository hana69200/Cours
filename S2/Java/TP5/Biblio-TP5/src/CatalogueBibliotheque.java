import java.util.ArrayList;

public class CatalogueBibliotheque {
    ArrayList<DocBibliotheque> catalogue;
    private int indice;
    
    public CatalogueBibliotheque() {
         this.catalogue = new ArrayList<>();
         this.indice = 0;
    }
    
    public void ajouterDoc(DocBibliotheque newDoc) {
        catalogue.set(indice++, newDoc);
    }
    
}