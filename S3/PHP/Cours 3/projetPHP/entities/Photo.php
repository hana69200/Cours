<?php
class Photo {
    private $_photoid;
    private $_nomfich;
    private $_description;
    private $_catid;
    
    public function __construct($photoid, $nomfich, $description, $catid) {
        $this -> _photoid = $photoid;
        $this -> _nomfich = $nomfich;
        $this -> _description = $description;
        $this -> _catid = $catid;
    }
    
    public function setPhotoid($photoid) {
        $this -> _photoid = $photoid;
    }
    
    public function getPhotoid() {
        return $this -> _photoid;
    }
    
    public function setNomfich($nomfich) {
        $this -> _nomfich = $nomfich;
    }
    
    public function getNomfich() {
        return $this -> _nomfich;
    }
    
    public function setDescription($description) {
        $this -> _description = $description;
    }
    
    public function getDescription() {
        return $this -> _description;
    }
    
    public function setCatid($catid) {
        $this -> _catid = $catid;
    }
    
    public function getCatid() {
        return $this -> _catid;
    }
}
?>
