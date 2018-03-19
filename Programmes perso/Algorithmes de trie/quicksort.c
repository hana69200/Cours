#include<stdio.h>
#include<stdlib.h>


void fill(int tab[], int nb, int larg)
{
	int i;
	for(i=0; i<nb; i++) tab[i]=rand()%larg;
}

void afficher(int tab[], int nb)
{
    int i;
    for(i=0; i<nb; i++) printf("%d ", tab[i]);
    printf("\n");
}

void quicksort(int tab[], int nb, int idebut, int ifin)
{
    if (ifin-idebut>1)
        {
            int i, itab1=0, itab2=0;
            int pivot=tab[ifin];
            printf("debut : %d, fin : %d\npivot : %d\n", idebut, ifin, pivot);
            int tab1[ifin-idebut+1];
            int tab2[ifin-idebut+1];
            for(i=0; i<ifin-idebut; i++)
            {
                if (tab[idebut+i]<=pivot)
                {
                    tab1[itab1]=tab[idebut+i];
                    itab1++;
                }
                else
                {
                    tab2[itab2]=tab[idebut+i];
                    itab2++;
                }
            }
            
            for(i=0; i<itab1; i++) tab[idebut+i]=tab1[i];
            tab[idebut+itab1]=pivot;
            for(i=0; i<itab2; i++) tab[idebut+itab1+i+1]=tab2[i];
            
            printf("itab1 : %d, tab1 : ", itab1);
            afficher(tab1, nb);
            printf("itab2 : %d, tab2 : ", itab2);
            afficher(tab2, nb);
            printf("tab apres tri de tab1+tab2 : ");
            afficher(tab, nb);
            
            //quicksort(tab, nb, idebut+1, idebut+itab1);
            //quicksort(tab, nb, idebut+itab1+1, idebut+itab2);
        }
}




int main()
{
	int nb=6; //nombre d'entier, taille sur x, 133 au maximum ou 43
	int larg=100; //valeur maximale des entiers, taille sur y, 44 au maximum ou 135
	int tab[nb];
	fill(tab, nb, larg);
	printf("tab avant tri : ");
    afficher(tab, nb);
	quicksort(tab, nb, 0, nb-1);
	printf("tab apres tri : ");
	afficher(tab, nb);
	return 0;
}
