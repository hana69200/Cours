git add --all
echo Entrez le motif du commit :
read motif
git commit --all -m "$motif"
git push
echo Appuyer sur une touche pour continuer
read michel
