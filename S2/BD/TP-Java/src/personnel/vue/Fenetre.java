package personnel.vue;

import java.awt.GridLayout;
import java.io.IOException;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.sql.DataSource;
import javax.swing.*;
import personnel.dao.IAdministratifDAO;
import personnel.dao.oracle.OracleAdministratifDAO;
import personnel.dao.oracle.OracleDataSourceDAO;
import personnel.métier.Administratif;

public class Fenetre extends javax.swing.JFrame implements ActionListener {
    private final List<Administratif> listeAdministratif;
    private static IAdministratifDAO AdministratifDAO;
    private static DataSource dataSourceDAO;
    private static Connection connexionBD;


    public Fenetre() {
        listeAdministratif = AdministratifDAO.getLesObjetsClasseMétier();
    }

    private void formWindowClosing(java.awt.event.WindowEvent evt) throws SQLException {                                   
        quitter(); // fermeture de la connexion
    }
    
    private void quitter() throws SQLException{
        connexionBD.close();
    }

    private JFrame creerFenetre(){
        //~~JFrame this = new JFrame();
        this.setTitle("Exercice Évènements");
        this.setSize(400, 400);
        this.setLocationRelativeTo(null);
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setResizable(true);
        this.setContentPane(creerPanel());
        this.setVisible(true);
        return this;
    }
    
    private JPanel creerPanel() {
        JPanel panel = new JPanel();
        panel.setLayout(new BoxLayout(panel, BoxLayout.Y_AXIS));
        //JLabel label1 = new JLabel();
        
        JLabel label1 = new JLabel("LISTE DES ADMINISTRATIFS");
        JLabel label2 = new JLabel("Numéro Administratif :");
        JLabel label3 = new JLabel("Nom Administratif :");
        JLabel label4 = new JLabel("Numéro de Bureau :");
        JLabel label5 = new JLabel("Salaire mensuel :");
        
        JTextField txt1 = new JTextField();
        JTextField txt2 = new JTextField();
        JTextField txt3 = new JTextField();
        JTextField txt4 = new JTextField();
                
        JButton bouton1 = new JButton("<<");
        JButton bouton2 = new JButton(">>");
        JButton bouton3 = new JButton("Ajouter");
        JButton bouton4 = new JButton("Supprimer");
        
        
        //bouton1.addActionListener((ActionEvent e) -> {});
        
        panel.add(label1);
        panel.add(label2);
        panel.add(label3);
        panel.add(label4);
        panel.add(label5);
        
        panel.add(txt1);
        panel.add(txt2);
        panel.add(txt3);
        panel.add(txt4);
        
        panel.add(bouton1);
        panel.add(bouton2);
        panel.add(bouton3);
        panel.add(bouton4);

        
        return panel;
        
    }

    public static void main(String args[]) {

        JFrame creerFenetre = creerFenetre();
        
        
        java.awt.EventQueue.invokeLater(() -> {
            try {
                dataSourceDAO = OracleDataSourceDAO.getOracleDataSourceDAO();
                OracleAdministratifDAO AdministratifDAO = new OracleAdministratifDAO();
                AdministratifDAO.setDataSource(dataSourceDAO);
                connexionBD = dataSourceDAO.getConnection();
                AdministratifDAO.setConnection(connexionBD);
                new Fenetre().setVisible(true);
            } catch (SQLException | IOException ex) {
                Logger.getLogger(Fenetre.class.getName()).log(Level.SEVERE, null, ex);
            }
        });

    }

    @Override
    public void actionPerformed(ActionEvent e) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

}