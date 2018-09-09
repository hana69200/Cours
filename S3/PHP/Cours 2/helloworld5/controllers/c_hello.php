<?php

//appel du modèle hello.php pour accéder à la base de données et extraire de celle-ci les données souhaitées
require_once(PATH_MODELS.$page.'.php');

//appel de la vue hello.php qui affiche les messages de bienvenue si l’utilisateur a bien été trouvé dans la base de données. Affiche de nouveau le formulaire mais avec une alerte si l’utilisateur n’existe pas dans la base de données. Ce sera également le cas en cas de problème de connexion à la base de données ou si la requête se passe mal.
require_once(PATH_VIEWS.$page.'.php');

?>
