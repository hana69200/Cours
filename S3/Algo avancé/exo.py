def supprDroit(tree):
    courant = tree
    precedent = None
    while courant.fd != None and courant.fg != None:
        if courant.fd == None:
            precedent = courant
            courant = courant.fg
        else:
            precedent = courant
            courant = courant.fd
    if precedent.fg == courant:
        precedent.fg = None
    else:
        precedent.fd = None
    free(courant)

def getMirror(racine):
    courant = racine
    if racine != None :
        tmp = courant.fg
        courant.fg = courant.fd
        courant.fd = tmp
        
        courant.fd = getMirror(courant.fd)
        courant.fg = getMirror(courant.fg)
    return courant

def supprVal(racine, val):

