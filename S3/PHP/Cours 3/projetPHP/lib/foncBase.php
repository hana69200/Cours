<?php

function choixAlert($message)
{
  $alert = array();
  switch($message)
  {
    case 'query' :
      $alert['messageAlert'] = ERREUR_QUERY;
      break;
    case 'url_non_valide' :
      $alert['messageAlert'] = TEXTE_PAGE_404;
      break;
	case 'categorie' :
	  $alert['messageAlert'] = ERREUR_ID_CATEGORIE;
	  break;
	case 'photo' :
	  $alert['messageAlert'] = ERREUR_ID_PHOTO;
	  break;
    default :
      $alert['messageAlert'] = MESSAGE_ERREUR;
  }
  return $alert;
}
