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
?>

<!--  En tête de page -->
<?php require_once(PATH_VIEWS.'header.php');?>

<!--  Zone message d'alerte -->
<!-- <?php require_once(PATH_VIEWS.'alert.php');?> -->

<!--  Début de la page -->
<h1>Test</h1>

<form method="post" action="<?= 'index.php' ?>">
<p><label for="login">Login :</label><input id="login" type="string" name="login" value="<?= isset($login) ? $login : '' ?>"/></p>
<p><input type="submit" value="Valider"/></p>
</form>

<!--  Liste  -->
<ul>
    <?
    if (!isset($erreur)) {
        for ($i = 0; $i < $nbrepet; $i++) {
            echo "<li>$mot $login</li>";
        }
    }
    else {
        $alert = choixAlert($erreur);
        ?>
        <div class="alert alert-danger">
            <strong><?= $alert['messageAlert'] ?></strong>
        </div>
        <?
    }
    
    ?>
</ul>

<!--  Fin de la page -->


<!--  Pied de page -->
<?php require_once(PATH_VIEWS.'footer.php'); ?>
