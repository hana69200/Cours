<?php
class Categorie {
    private $_catid;
    private $_nomcat;
    
    public function __construct($catid, $nomcat) {
        $this -> _catid = $catid;
        $this -> _nomcat = $nomcat;
    }
    
    public function setCatid($catid) {
        $this -> _catid = $catid;
    }
    
    public function getCatid() {
        return $this -> _catid;
    }
	
	public function setNomcat($nomcat) {
        $this -> _nomcat = $nomcat;
    }
    
    public function getNomcat() {
        return $this -> _nomcat;
    }
}
?>
