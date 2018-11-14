#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/wait.h>
#include "ligne_commande.h"

int main(int argc, char* argv[]) {

    int retourFils;

    do {
        printf("____$");
        fflush(stdout);
        
        // Récupération de l'entrée utilisateur
        char** l = lis_ligne();
        int i;
        
        // Affichage de l'entrée de l'utilisateur
        for (i = 0; l && l[i]; i++) {
            printf("<%s>\n", l[i]);
        }
        
        //printf("c'est tout %d %d\n", fin_de_fichier(l), l && ligne_vide(l));
        
        // Si ctrl+d → on quitte le programme
        if (fin_de_fichier(l) == 1) break;
        
        // Si l'entrée utilisateur est vide, ça reboucle tout seul
        
        // Si l'entrée utilisateur n'est pas vide, exécution de la commande par le fils créé
        if (ligne_vide(l) == 0) {
            int retourFork = fork();
            switch (retourFork) { // Manque la gestion des erreurs (-1 pour erreurs)
                case 0: // Traitement du fils
                    execvp(l[0], l);
                    break; //gérer l'erreur de execvp, si pas d'erreur le break et le reste est supprimé
                
                default: // Traitement du père
                    wait(&retourFils); // Traiter erreur wait si pas de fils
            
            } // Fin switch
            
        } // Fin if ligne_vide()
        
    } // Fin do
    while (1);
    
    printf("\n");
    return 0;
}
