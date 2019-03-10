<?php

require_once(PATH_MODELS.'DAO.php');
require_once(PATH_ENTITY.'Categorie.php');

//retourne un tableau de catégories ou null
class CategorieDAO extends DAO {
    public function getCategories() {
        $res = $this -> queryAll('SELECT * FROM categorie');
        $i = 0;
        if ($res) {
            foreach ($res as $ligne) {
                $tab[$i] = new Categorie($ligne['catid'], $ligne['nomcat']);
                $i++;
            }
            return $tab;
        }
        return null;
    }
	
	public function getCategorie($catid) {
		$res = $this -> queryRow('SELECT * FROM categorie WHERE catid = ' . $catid);
		return ($res) ? new Categorie($res['catid'], $res['nomcat']) : null;
	}
		
}
?>