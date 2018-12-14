#git remote set-url origin https://LicorneMagique:motDePasse@github.com/LicorneMagique/Cours.git
git pull
git add --all
echo Entrez le motif du commit :
read motif
git commit -a -m "$motif"
git push
echo Terminé.
