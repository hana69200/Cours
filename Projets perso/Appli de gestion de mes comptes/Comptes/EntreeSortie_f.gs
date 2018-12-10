function getBilanMoisActuel() {
  var total = 0;
  var i = 1;
  var mois = getMois(colone[i]);
  var moisLigne = mois;
  var tmp = 0;
  while (moisLigne == mois) {
    tmp = getMontant(colone[i]);
    tmp = tmp * getSigneES(colone[i]);
    tmp = tmp * getRembourse(colone[i++]);
    total = total + tmp;
    moisLigne = getMois(colone[i]);
  }
  return total.toFixed(2);
}

function getBilanMoisDernier() {
  var i = 1;
  var moisActuel = getMois(colone[i]);
  var moisDernier = moisActuel;
  var mois = moisActuel; // Pour être du bon type
  var tmp = 0;
  var total = 0;
  while (moisDernier == moisActuel) {
    i++;
    moisDernier = getMois(colone[i]);
  }
  mois = moisDernier;
  while (mois == moisDernier) {
    tmp = getMontant(colone[i]);
    tmp = tmp * getSigneES(colone[i]);
    tmp = tmp * getRembourse(colone[i++]);
    total = total + tmp;
    mois = getMois(colone[i]);
  }
  return total;
}

function getNbRemboursement() {
  var total = parseInt(0);
  for (var i = 0; i < taille_colone; i++) {
    if (is(colone[i], 'remboursable')) {
      total = total + 1;
    }
  }
  return total;
}

function getRemboursable(cell) {
  return (is(cell, 'remboursable')) ? 0 : 1; 
}

function getRembourse(cell) {
  return (is(cell, 'remboursé')) ? 0 : 1; 
}

function getSigneES(cell) {
  return (is(cell, 'entrée') && !is(cell,'sortie')) ? 1 : -1;
}

function getTotalActuel() {
  var total = 0;
  var tmp = 0;
  for (var i = 0; i < taille_colone; i++) {
    tmp = getMontant(colone[i]);
    tmp = tmp * getSigneES(colone[i]);
    tmp = tmp * getRembourse(colone[i]);
    total = total + tmp;
  }
  return total.toFixed(2);
}

function getTotalDu() {
  return (getTotalPotentiel() - getTotalActuel()).toFixed(2);
}

function getTotalPotentiel() {
  var total = 0;
  var tmp = 0;
  for (var i = 0; i < taille_colone; i++) {
    tmp = getMontant(colone[i]);
    tmp = tmp * getSigneES(colone[i]);
    tmp = tmp * getRembourse(colone[i]);
    tmp = tmp * getRemboursable(colone[i]);
    total = total + tmp;
  }
  return total.toFixed(2);
}
