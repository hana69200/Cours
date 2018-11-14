# Calculs de complexité (1)
def fonction1(tab, n):
    for i in range(0, n - 1): # O(n)
        tab[i] = i # O(1)
# --> O(n)
