# Algorithme de Kruskal

# Trier les arêtes dans l'ordre croissant de leur poids
# Tant que le nombre d'arête de l'arbre courant est différent de n-1,
# Ajouter les arêtes dans l'ordre croissant dans l'arbre courant sauf si elles créent un cycle

# On part d'un tableau à deux dimentions, la première dimention représentant la ligne de la matrice d'adjacence

# Début de l'algo
taille
elements = []
arbre = None

# On rempli une liste d'éléments avec les arêtes
for i in range(taille):
    for j in range(taille):
        if tab[i][j] != None:
            element.add(creerArete(i, j, tab[i][j]))

while not estTrie(elements
