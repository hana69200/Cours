<?php

require_once(PATH_MODELS.'DAO.php');
require_once(PATH_ENTITY.'Utilisateur.php');

//retourne un Utilisateur ou null
class UtilisateurDAO extends DAO {
    public function getUser($login) {  
        $res = $this -> queryRow('SELECT * FROM Utilisateur WHERE login = ?', array($login));
        if($res) {
            return new Utilisateur($res['login'], $res['mot'], $res['nbRepet']);
        }
        else return null;
    }
}