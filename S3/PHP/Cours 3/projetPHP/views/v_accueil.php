<?php
/*
 * DS PHP
 * Vue page index - page d'accueil
 *
 * Copyright 2016, Eric Dufour
 * http://techfacile.fr
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 *
 */
//  En tête de page
?>
<?php require_once(PATH_VIEWS.'header.php');?>

<!--  Zone message d'alerte -->
<?php require_once(PATH_VIEWS.'alert.php');?>

<!--  Début de la page -->
<div class = "col-md-10 col-sm-12 col-xs-12">

<?php
if (!isset($alert)) { // S'il n'y a pas eu d'erreurs
?>
	<!--  Affichage du nombre de photos -->
	<div class="alert alert-success"><?= count($photos) . ' ' . SELECTION_PHOTOS?></div>

	<!--  Affichage du formulaire -->
	<form method="post" action="index.php">
	<label for="categorie"><?= CHOIX_CATEGORIE ?></label>
	   <select name = categorie id="categorie">
			<option value="*"><?= TOUTES_PHOTOS ?></option>
			<?php
			if (isset($categories)) {
				foreach ($categories as $categorie) {
					$selected = (isset($catid) && $catid == $categorie -> getCatid()) ? ' selected' : '';
					echo '<option value="' . $categorie -> getCatid() . '"' . $selected .'>' . $categorie -> getNomcat() . '</option>' . "\n";
				}
			}
			?>
	   </select>
	<input type="submit" value="Envoyer" />
	</form>

	<!--  Affichage du message d'accueil -->
	<h1><?= isset($catid) ? PHOTOS_CATEGORIE . $nomcat : TOUTES_PHOTOS ?></h1>
		
	<!--  Affichage du tableau de photos -->
	<?php
	if (isset($photos)) {
		foreach ($photos as $photo) {
			echo '<a href="index.php?page=photo&id=' . $photo -> getPhotoid() . '" title="' . INFOS_PHOTO . '">';
			echo '<img src="' . PATH_IMAGES . $photo -> getNomFich() . '" alt="' . $photo -> getDescription() . '"/>';
			echo '</a>' . "\n";
		}
	}
}
?>

</div>

<!--  Fin de la page -->

<!--  Pied de page -->
<?php require_once(PATH_VIEWS.'footer.php'); ?>
