public class Test {

    public static void main(String[] args) {
        String txt1 = "Théo, est un connard !";
        String txt2 = "em couplet. ";
        String test = "";
        for (int i = 2; i <= 100; i++) {
            test = test + txt1 + " " + txt1 + " " + i + txt2;
        }
        System.out.println(test);
    }
}
