class Arrete():
    def __init__(self, sommet1, sommet2, valuation):
        self.s1 = sommet1
        self.s2 = sommet2
        self.valuation = valuation
        self.suiv = None

    def info(self):
        return "Arrete de",self.s1,"à",self.s2,"avec une valuation de",self.valuation

def liste_adjacence(txt):
    tab = []
    file = open(txt,"r")

    for line in file:           # pour chaque sommet
        nbarretes = 0
        i = 0
        while line[i] != ';':
            if line[i] == ':' or line[i] == ',':
                if nbarretes == 0:      # cas sommet non relié
                    if line[i+1] == ';':
                        first = None
                    else:
                        first = Arrete(line[0],line[i+1], line[i+3])
                        ref = first
                else:
                    ref.suiv = Arrete(line[0],line[i+1], line[i+3])
                    ref = ref.suiv
                nbarretes += 1 
            i += 1
        tab.append(first)

    file.close()

    return tab

def print_liste_adjacence(tab):
    i = 0
    for a in tab:
        print("sommet",i)
        while a != None:
            print(a.info())
            a = a.suiv
        i += 1

if __name__ == '__main__':
    tab = liste_adjacence("graphe.txt")
    print_liste_adjacence(tab)

    


