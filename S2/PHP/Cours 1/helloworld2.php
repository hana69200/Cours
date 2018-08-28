<!DOCTYPE html>
<html>
    <head>
        <title>Page Title</title>
    </head>
    <body>
        <ul>
            <?php
            if ($_GET['nb'] > 0 && $_GET['nb'] <= 100) {
                for($i=1;$i<=$_GET['nb'];$i++) {
                    echo "<li>hello world</li>";
                }
            }
            else {
                echo "<p style=\"color : red\"><strong>Erreur</strong></p>";
            }
            ?>
        </ul>
    </body>
</html>
