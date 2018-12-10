function getBilanOfficielManger() {
  var total = 0;
  for (var i = 0; i < taille_colone; i++) {
    if (is(colone[i], '#ru')) {
      total = total -3.25;
    }
    else if (is(colone[i], 'manger')) {
      total = total + getMontant(colone[i]);
    }
  }
  return total.toFixed(2);
}

function getBilanPersoManger() {
var total = 0;
  for (var i = 0; i < taille_colone; i++) {
    total = total + getMontant(colone[i])*getSigneManger(colone[i]);
  }
  return total.toFixed(2);
}

function getBilanRepas() {
  return (getBilanPersoManger() - getBilanOfficielManger()).toFixed(2);
}

function getNombreDeRepas() {
  var total = parseInt(0);
  for (var i = 0; i < taille_colone; i++) {
    if (is(colone[i], 'en') || is(colone[i], 'au')) {
      total = total + 1;
    }
  }
  return total;
}

function getSigneManger(ligne) {
  if (is(ligne, 'manger')) {
    return 1;
  }
  return -1;
}

function getTotalDepenseOfficiel() {
  var total = 0;
  for (var i = 0; i < taille_colone; i++) {
    if (is(colone[i], '#ru')) {
      total = total + 3.25;
    }
  }
  return total.toFixed(2);
}

function getTotalDepenseReel() {
  var total = 0;
  for (var i = 0; i < taille_colone; i++) {
    if (!is(colone[i], 'manger')) {
      total = total + getMontant(colone[i]);
    }
  }
  return total.toFixed(2);
}

function getTotalIzly() {
  var total = 0;
  for (var i = 0; i < taille_colone; i++) {
    if (is(colone[i], 'izly')) {
      total = total + getMontant(colone[i]);
    }
  }
  return total.toFixed(2);
}

function getTotalRecu() {
  var total = 0;
  for (var i = 0; i < taille_colone; i++) {
    if (is(colone[i], 'manger')) {
      total = total + getMontant(colone[i]);
    }
  }
  return total.toFixed(2);
}
