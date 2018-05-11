package newpackage;

import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class Calculatrice extends JFrame implements ActionListener{
    
    private JPanel panel;
    
    private JPanel opPanel;
    private JPanel calculPanel;
    private JPanel resultPanel;
    
    private JTextField nbre1;
    private JTextField nbre2;
    private JComboBox operateur;
    private JLabel opLabel;
            
    private JButton bEffectuerCalcul;
    
    private JLabel resultat;
    
    public Calculatrice(){
        super();
        creerFenetre();
    }
    
    private void creerFenetre(){
        this.setTitle("Calculatrice");
        this.setSize(400, 150);
        this.setLocationRelativeTo(null);
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setResizable(false);
        
        creerPanel();
        this.setContentPane(panel);
        this.setVisible(true);
    }
    
    public void creerPanel(){
        this.panel=new JPanel();
        this.panel.setLayout(new BorderLayout());
        
        this.opPanel=new JPanel();
        
        this.nbre1=new JTextField("15");
        this.nbre2=new JTextField("25");
        this.operateur=new JComboBox();
        
        this.opLabel=new JLabel("Operateur");
        opPanel.add(nbre1);
        ajouterOperateur(opPanel, opLabel, operateur);
        opPanel.add(nbre2);
        panel.add(opPanel, BorderLayout.NORTH);
        
        this.calculPanel=new JPanel();
        this.bEffectuerCalcul = new JButton("Resultat");
        bEffectuerCalcul.addActionListener(this);
        this.calculPanel.add(bEffectuerCalcul);
        panel.add(calculPanel, BorderLayout.CENTER);
        
        this.resultPanel=new JPanel();
        this.resultat=new JLabel("Résultat");
        this.resultPanel.add(resultat);
        this.panel.add(resultPanel, BorderLayout.SOUTH);
        
        
    }
    
    public void ajouterOperateur(JPanel opPanel, JLabel opLabel, JComboBox operateur){
        operateur.addItem("+");
        operateur.addItem("-");
        operateur.addItem("/");
        operateur.addItem("x");
        opPanel.add(opLabel);
        opPanel.add(operateur);
        
    }
    
    @Override
    public void actionPerformed(ActionEvent arg0){
        resultat.setText(this.nbre1.toString());
    }

}