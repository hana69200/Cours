<?php
require_once(PATH_MODELS . 'PhotoDAO.php');
require_once(PATH_MODELS . 'CategorieDAO.php');

// Récupération de la photo en GET
if (isset($_GET['id'])) {
	$id = htmlspecialchars($_GET['id']);
}

// Appel du modèle pour charger la photo
if (isset($id)) {
	$photoDAO = new PhotoDAO();
	$photo = $photoDAO -> getPhotoId($id);
}

if (!isset($photo) || is_null($photo)) {
	$alert = choixAlert('photo');
}

// Appel du modèle pour charger les catégories
if (!isset($alert)) {
$categorieDAO = new CategorieDAO();
$categorie = $categorieDAO -> getCategorie($photo -> getCatid());
}

// Appel de la vue
require_once(PATH_VIEWS.$page.'.php');

?>