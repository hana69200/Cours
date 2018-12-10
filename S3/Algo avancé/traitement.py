class Arrete():
    # Création de la classe arrête
    def __init__(self, sommet, valuation):
        self.sommet = sommet
        self.valuation = valuation
        self.suiv = None

    # Création d'une fonction pour afficher les informations d'une arrête
    def info(self):
        print(" → sommet", self.sommet, "valuation", self.valuation, end='')
    
    # Création d'une fonction qui renvoit la valeur d'un attribut (pour tester si c'est à None)
    def test(self):
        return self.sommet

tab = []
file = open("graphe.txt", "r")
for line in file:
    i = 0
    nbarretes = 0
    while line[i] != ';': # Pour parcourir chaque caractère des lignes
        if line[i] == ':' or line[i] == ',':
            # S'il s'agit d'une nouvelle ligne, on initialisa la première arrête
            if nbarretes == 0:
                # On se trouve devant la forme ":x.y"
                first = Arrete(int(line[i+1]), int(line[i+3]))
                ref = first
            else:
                ref = first
                # On parcourt la liste qui se trouve à tab[i] pour y ajouter la nouvelle arrête
                while ref.suiv != None:
                    ref = ref.suiv 
                ref.suiv = Arrete(int(line[i+1]), int(line[i+3]))
            nbarretes += 1 
        i += 1
    # Si l'arrête est valide, on l'ajoute à la liste
    if first.test() != None:
        tab.append(first)
file.close()

# Affichage de la liste d'adjacence
i = 0
for element in tab:
    print("Sommet", i, ":", end='')
    a = element
    while a != None:
        a.info()
        a = a.suiv
    print('')
    i += 1