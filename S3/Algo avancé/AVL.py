# AVL = ABR équilibré (dont la hauteur est minimale)

def isEquilibre(ABR)
    return (getHauteur(ABR.fg)-gethauteur(ABR.fd))**2 <= 1 # ** pour mettre à la puissance

def equilibre(ABR):
    if isEquilibre(ABR):
        return
    
