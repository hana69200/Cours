def afficherMatrice(mat):
    for ligne in mat:
        for element in ligne:
            print(element, end=' ')
        print('\n', end='')

file = open("graphe.txt", "r")

taille = 0
for i in file:
    taille += 1

matrice = []
for i in range(taille):
    matrice.append([])
for i in range(taille):
    for j in range(taille):
        matrice[i].append(0)
    
file = open("graphe.txt", "r")
numLine = 0
for ligne in file:
    i = 0
    while ligne[i] != ';':
        if ligne[i] == ':' or ligne[i] == ",":
            matrice[int(ligne[0])][int(ligne[i+1])] = int(ligne[i+3])
        i += 1
    numLine += 1
file.close()

afficherMatrice(matrice)
