<?php
// Implémente le pattern Singleton
class Connexion {
    private $_bdd = null;
    private static $_instance = null;

    // Appelée par new
    private function __construct() {
        $this -> _bdd = new PDO('mysql:host=' . BD_HOST . '; dbname=' . BD_DBNAME . '; charset=utf8', BD_USER, BD_PWD);
        $this -> _bdd -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }

    // Appelée par clone
    private function __clone() {}

    // Appelée par unserialize
    private function __wakeup() {}

    public static function getInstance() {
        if(is_null(self::$_instance)) {
            self::$_instance = new Connexion();
        }
        return self::$_instance;
    }

    public function getBdd() {
        return $this -> _bdd;
    }
}
?>