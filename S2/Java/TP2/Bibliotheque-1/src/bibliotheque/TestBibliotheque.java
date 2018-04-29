package bibliotheque;

public class TestBibliotheque {
    
    public static void main(String[] args) {
        DocBibliotheque Doc1 = new DocBibliotheque("004. 178 K20PM",
                "Introduction à Java", "J. Leblanc", 2015);
        DocBibliotheque Doc2 = new DocBibliotheque("967. 4987 T248O",
                "Structures de Données", "M. Machin", 2017);
        
        System.out.println(Doc1.toString());
        
        
    }
    
}