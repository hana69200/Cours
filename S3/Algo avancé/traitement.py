class Arrete():
    def __init__(self, sommet, valuation):
        self.sommet = sommet
        self.valuation = valuation
        self.suiv = None

    def info(self):
        print("sommet ", self.sommet, "valuation ", self.valuation)

tab = []
file = open("graphe.txt", "r")
for line in file:
    i = 0
    nbarretes = 0
    while line[i] != ';':
        if line[i] == ':' or line[i] == ',':
            if nbarretes == 0:
                first = Arrete(int(line[i+1]), int(line[i+3]))
                ref = first
            else:
                ref = first
                while ref.suiv != None:
                    ref = ref.suiv 
                ref.suiv = Arrete(int(line[i+1]), int(line[i+3]))
            nbarretes += 1 
        i += 1
    if first.info() != None:
        tab.append(first)

i = 0
for a in tab:
    ref = a
    print("sommet hhhhhhh", i)
    while ref != None:
        print(ref.info())
        ref = ref.suiv
    i += 1

file.close()

