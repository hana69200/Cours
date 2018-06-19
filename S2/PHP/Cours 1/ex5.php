<?php
if (isset($_POST['nbEnfant']) && isset($_POST['salaire'])) {
    $nbEnf = (int) $_POST['nbEnfant'];
    $marie = isset((int) $_POST['marie'] == '1' ? true : false;
    $salaire = (int) $_POST['salaire'];
}
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charsert="utf-8"/>
        <title>Impots</title>
    </head>
  
    <body>
        <form action="ex5.php" method="post">
            <p>Nombre d'enfants : <input type="text" name="nbEnfant"></p>
            <p>Marié : <input type="checkbox" name="marie" value="1"></p>
            <p>Salaire annuel : <input type="text" name="salaire"></p>
            <input type="submit" value="calculer">
            <?php
            if (isset($nbEnf)) {
                echo "<p>Ça marche !</p>";
            }
            else {
                echo "<p>sadness</p>";
            }
            ?>
        </form>
    </body>
    
</html>
