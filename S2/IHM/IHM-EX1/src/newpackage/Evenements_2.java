package newpackage;

import java.awt.GridLayout;
import java.awt.event.*;
import javax.swing.*;

public class Evenements_2 extends JFrame{
    
     public Evenements_2(){
        creerFenetre();
    }
     
     private void creerFenetre(){
        this.setTitle("L'exercice de la rage");
        this.setSize(400, 400);
        this.setLocationRelativeTo(null);
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setResizable(true);
        
        
        this.setContentPane(creerPanel());
        this.setVisible(true);
    }
     
    private JPanel creerPanel() {
        JPanel panel = new JPanel();
        panel.setLayout(new GridLayout(5, 1));

        JLabel label1 = new JLabel();
     
         String[] tab = new String[] {"c'est beau le texte", "c'est sympa chez vous"};
        
        
        ModeleCBString model1 = new ModeleCBString(tab);
        ModeleCBString model2 = new ModeleCBString();
        
        JComboBox<String> jcb1 = new JComboBox<>(model1);
        JComboBox<String> jcb2 = new JComboBox<>(model2);
        
        
        JButton bouton1 = new JButton("copier un élément du premier jcb");
        bouton1.addActionListener((ActionEvent e) -> {
            model2.ajoutString((String)model1.getSelectedItem());
        });
        
        JButton bouton2 = new JButton("supprimer un élément du second jcb");
        bouton2.addActionListener((ActionEvent e) -> {
           model2.effaceString((String)model2.getSelectedItem());
        });
        
        JButton bouton3 = new JButton("vider tout le second jcb");
        bouton3.addActionListener((ActionEvent e) -> {
            model2.effaceTout();
        });
        
        panel.add(jcb1);
        panel.add(jcb2);
        panel.add(bouton1);
        panel.add(bouton2);
        panel.add(bouton3);
        
        return panel;
        
    }

    
}
