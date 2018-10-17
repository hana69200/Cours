# Arbres Binaires de Recherche (ABR) aussi appelés arbres ordonnés

# Pour trier un tableau de valeurs il suffit de les mettre dans un ABR puis de lire l'ABR en infixe en réécrivant dans le tableau

def planter(ABR, val):
    if val > ABR.val:
        if ABR.fg != None:
            planter(ABR.fg, val)
        else:
            ABR.fg = newNoeud(None, val, None)
    else:
        if ABR.fd != None:
            planter(ABR.fd, val)
        else:
            ABR.fd = newNoeud(None, val, None)

def exist(ABR, val):
    if ABR == None:
        return False
    if ABR.val == val:
        return True
    if val > ABR.val:
        return exist(ABR.fg)
    else:
        return exist(ABR.fd)

def suppr(ABR, val):
    
