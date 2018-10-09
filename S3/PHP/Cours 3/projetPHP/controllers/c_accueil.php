<?php
require_once(PATH_MODELS . 'CategorieDAO.php');
require_once(PATH_MODELS . 'PhotoDAO.php');

// Appel du modèle pour charger les catégories
$categorieDAO = new CategorieDAO();
$categories = $categorieDAO -> getCategories();

// Récupération de la catégorie en POST
if (isset($_POST['categorie'])) {
	if (htmlspecialchars($_POST['categorie']) != '*') {
		$catid = htmlspecialchars($_POST['categorie']);
	}
}
// Récupération de la catégorie en GET
else {
	if (isset($_GET['categorie'])) {
		$catid = htmlspecialchars($_GET['categorie']);
	}
}

// Récupération du nom de la catégorie
if (isset($catid)) {
	foreach ($categories as $categorie) {
		if ($categorie -> getCatid() == $catid) {
			$nomcat = $categorie -> getNomcat();
		}
	}
}

// Vérification des erreurs de catégorie
if (isset($catid) && !isset($nomcat)) {
	$erreur = 'categorie';
}

// Appel du modèle pour charger les photos
$photoDAO = new PhotoDAO();
if (isset($catid)) {
	$photos = $photoDAO -> getPhotosCat($catid);
}
else {
	$photos = $photoDAO -> getPhotos();
}

// Gestion des erreurs
if (isset($erreur)) {
    $alert = choixAlert($erreur);
}

// Appel de la vue
require_once(PATH_VIEWS.$page.'.php');

?>

