#include<stdio.h>
#include<stdlib.h>
#include <unistd.h>

void fill(int nb, int tab[nb], int larg)
/*
:entree : nb, taille du tableau d'entier
:entree : tab, tableau d'entier
:entree : larg, plus grande valeur d'entier possible
:post-cond : remplir le tableau de nombre aleatoires
*/
{
	int i;
	for(i=0; i<nb; i++) tab[i]=rand()%larg;
}

void print(int nb, int tab[nb])
/*
:entree : nb, taille du tableau d'entier
:entree : tab, tableau d'entier
:post-cond : afficher les nombres du tableau sur une ligne
*/
{
	int i;
	for(i=0; i<nb; i++)  printf("%d ", tab[i]);
	printf("\n");
}

void xprint(int nb, int tab[nb])
/*
:entree : nb, taille du tableau d'entier
:entree : tab, tableau d'entier
:post-cond : afficher sur chaque ligne les nombres du tableau sous forme d'un nombre de points
*/
{
	int i, j;
	for(i=0; i<nb; i++)
	{
		for(j=0; j<tab[i]; j++) printf(".");
		printf("\n");
	}
	printf("\n");
}

int vmin(int nb, int tab[nb])
/*
:entree : nb, taille du tableau d'entier
:entree : tab, tableau d'entier
:post-cond : retourner la valeur du plus petit nombre du tableau
*/
{
	int i, min;
	for(i=0; i<nb; i++)
	{
		if (i==0) min=tab[i];
		else if (tab[i]<min) min=tab[i];
	}
	return min;
}

int vmax(int nb, int tab[nb])
/*
:entree : nb, taille du tableau d'entier
:entree : tab, tableau d'entier
:sortie : max, valeur du plus grand nombre du tableau
:post-cond : retourner la valeur du plusgrand nombre du tableau
*/
{
	int i, max;
	for(i=0; i<nb; i++)
	{
		if (i==0) max=tab[i];
		else if (tab[i]>max) max=tab[i];
	}
	return max;
}

void yprint(int nb, int tab[nb])
/*
:entree : nb, taille du tableau d'entier
:entree : tab, tableau d'entier
:post-cond : afficher sur chaque colone les nombres du tableau sous forme d'un nombre de barres
*/
{
	int i, j, min=vmin(nb, tab), max=vmax(nb, tab);
	for(i=max; i>=min; i--)
	{
		for(j=0; j<nb; j++)
		{
			if (tab[j]>=i) printf("|");
			else printf(" ");
		}
		printf("\n");
	}
}

int not_good(int nb, int tab[nb])
/*
:entree : nb, taille du tableau d'entier
:entree : tab, tableau d'entier
:sortie : bouleen
:post-cond : retourne 0 si le tableau est trie du plus petit au plus grand nombre, 1 sinon
*/
{
	int i;
	for(i=0; i<nb-1; i++) if (tab[i]>tab[i+1]) return 1;
	return 0;
}

void bubble(int nb, int tab[nb])
/*
:entree : nb, taille du tableau d'entier
:entree : tab, tableau d'entier
:post-cond : trier les nombres du tableau par ordre croissant
			 avec un tri a bulle
*/
{
	int i, j, temp;
	while(not_good(nb, tab)) for(i=0; i<nb-1; i++) if (tab[i]>tab[i+1])
	{
		temp=tab[i];
		tab[i]=tab[i+1];
		tab[i+1]=temp;
		system("clear");
		yprint(nb, tab);
		usleep(25*1000);
	}
}

void insertion(int nb, int tab[nb])
/*
:entree : nb, taille du tableau d'entier
:entree : tab, tableau d'entier
:post-cond : trier les nombres du tableau par ordre croissant
			 avec un tri par insertion
*/
{
	int i, j, pmin, temp;
	for(i=0; i<nb-1; i++)
	{
		for(j=i; j<nb; j++)
		{
			if (j==i) pmin=j;
			if (tab[j]<tab[pmin]) pmin=j;
		}
		temp=tab[i];
		tab[i]=tab[pmin];
		tab[pmin]=temp;

		//system("clear");
		//yprint(nb, tab);
		//usleep(100*1000);
	}
}

void insertion_one_for(int nb, int tab[nb])
/*
:entree : nb, taille du tableau d'entier
:entree : tab, tableau d'entier
:post-cond : trier les nombres du tableau par ordre croissant
			 avec un tri par insertion avec une seule boucle 'for'
*/
{
	int i=0, j, temp;
	while(i<nb-1)
	{
		if (tab[i]>tab[i+1])
		{
			temp=tab[i];
			tab[i]=tab[i+1];
			tab[i+1]=temp;
			i=i-2;
			//for(j=0; j<10; j++) printf("\n");
			system("clear");
			yprint(nb, tab);
			usleep(50*1000);
		}
		i=i+1;
	}
}

void gravity_print(int nb, int max, char tabc[nb][max])
/*
:entree : nb, taille du tableau de caractere 'tabc'
:entree : max, taille de chaque colone de 'tabc'
:entree : tabc, tableau de caractere
:post-cond : afficher 'tabc'
*/
{
	int i, j;
	for(i=nb-1; i>0; i--) //dans le sens de la gravite
	//for(i=0; i<nb; i++) //dans le sens du tableau
	{
		for(j=0; j<max; j++) printf("%c", tabc[i][j]);
		printf("\n");
	}
}

void gravity_fill(int nb, int max, int tab[nb], char tabc[nb][max])
/*
:entree : nb, taille du tableau d'entier 'tab'
			  taille du tableau de caractere 'tabc'
:entree : max, valeur maximale contenue dans 'tab'
			   taille de chaque colone de 'tabc'
:entree : tab, tableau d'entier
:entree : tabc, tableau de caractere
:post-cond : converti 'tab' a une dimension en 'tabc' a deux dimensions
			 chaque colone (nb) contient 'max' caracteres
			 la valeur, contenue dans chaque colone correspond a la somme des '.'
			 les autres caracteres sont des ' '
			 les points vont de l'indice le plus petit vers le plus grand
*/
{
	int i, j;
	for(i=0; i<nb; i++) for(j=0; j<max; j++)
	{
		if (j<tab[i]) tabc[i][j]='.';
		else tabc[i][j]=' ';
	}
}

void gravity_tab_fill(int nb, int max, int tab[nb], char tabc[nb][max])
/*
:entree : nb, taille du tableau d'entier 'tab'
			  taille du tableau de caractere 'tabc'
:entree : max, valeur maximale contenue dans 'tab'
			   taille de chaque colone de 'tabc'
:entree : tab, tableau d'entier
:entree : tabc, tableau de caractere
:post-cond : converti 'tabc' a deux dimensions en 'tab' a une dimension
			 la conversion fonctionne dans l'ordre inverse de 'gravity_fill()'
*/
{
	int i, j, valeur;
	for(i=0; i<nb; i++)
	//for(i=nb-1; i>=0; i--)
	{
		valeur=0;
		for(j=0; j<max; j++)
		{
			if (tabc[i][j]=='.') valeur++;
		}
		tab[nb-1-i]=valeur; //pour mettre les valeurs de la plus petite a la plus grande
	}
}

void gravity_count(int nb, int max, int min, int tab[], char tabc[nb][max])
/*
:entree : nb, taille du tableau d'entier 'tab'
			  taille du tableau de caractere 'tabc'
:entree : max, valeur maximale contenue dans 'tab'
			   taille de chaque colone de 'tabc'
:entree : tabc, tableau de caractere
:post-cond : fait la gravite sur les '.' de 'tabc'
*/
{
	int i, j, k, valeur, temp;
	for(j=min; j<max; j++) //j parcours le tableau de bas en haut
	//for(j=max-1; j>=min; j--) //parcours le tableau de haut en bas
	{
		valeur=0;
		for(i=0; i<nb; i++) //i parcours les differents nombres dans 'tabc'
		{
			if (tabc[i][j]=='.')
			{
				valeur++;
			}
		}
		//valeur contient le nombre d'elements d'au moins j caracteres
		for(i=nb-1; i>=0; i--) //dans le sens de la gravite -- de gauche a droite
		//for(i=0; i<nb; i++) //dans le sens du tableau -- de droite a gauche
		{
			if (i<valeur)
			{
				if (tabc[i][j]!='.') //pas de changements inutiles
				{
					tabc[i][j]='.';
					//debut affichage dans la partie lente
					//
					gravity_tab_fill(nb, max, tab, tabc);
					for(k=0; k<44; k++) printf("\n");
					yprint(nb, tab);
					usleep(25*1000);
					//
					//fin affichage dans la partie lente
				}
			}
			else
			{
				if (tabc[i][j]!=' ') //pas de changements inutiles
				{
					tabc[i][j]=' ';
					//debut affichage dans la partie lente
					//
					gravity_tab_fill(nb, max, tab, tabc);
					for(k=0; k<44; k++) printf("\n");
					yprint(nb, tab);
					usleep(25*1000);
					//
					//fin affichage dans la partie lente
				}
			}
			//debut affichage dans la partie moyen
			/*
			gravity_tab_fill(nb, max, tab, tabc);
			for(k=0; k<44; k++) printf("\n");
			yprint(nb, tab);
			usleep(1000*1000);
			*/
			//fin affichage dans la partie moyen
		}
		//debut affichage dans la partie rapide
		/*
		gravity_tab_fill(nb, max, tab, tabc);
		for(k=0; k<44; k++) printf("\n");
		yprint(nb, tab);
		usleep(100*1000);
		*/
		//fin affichage dans la partie rapide
	}
}

void gravity(int nb, int tab[nb])
{
	int i;
	int max=vmax(nb, tab);
	int min=vmin(nb, tab);
	//max est la plus grande valeur contenue dans le tableau 'tab'
	char tabc[nb][max];
	//'tabc' est un tableau de caractere, contenant 'nb' colones de 'max' caracteres
	gravity_fill(nb, max, tab, tabc);
	//remplit 'tabc' en fonction de 'tab'
	gravity_count(nb, max, min, tab, tabc);
	//fait la gravite sur les '.' du tableau
	gravity_tab_fill(nb, max, tab, tabc);
}


void quicksort(int tab[], int taille)
{
    int i;
    if (taille>1)
    {
        int taille1=0, taille2=0, pivot=tab[taille-1];
        for(i=0; i<taille-1; i++)
            if (tab[i]<=pivot) taille1++;
            else taille2++;
        int tab1[taille1], tab2[taille2];
        int itab1=0, itab2=0;
        for(i=0; i<taille-1; i++)
        {
            if (tab[i]<=pivot)
            {
                tab1[itab1]=tab[i];
                itab1++;
            }
            else
            {
                tab2[itab2]=tab[i];
                itab2++;
            }
        }
        yprint(taille, tab);
        usleep(100*1000);
        quicksort(tab1, taille1);
        quicksort(tab2, taille2);
        for(i=0; i<taille1; i++) tab[i]=tab1[i];
        tab[taille1]=pivot;
        for(i=0; i<taille2; i++) tab[taille1+1+i]=tab2[i];
    }
}

int main()
{
	int nb=133; //nombre d'entier, taille sur x, 133 au maximum ou 43
	int larg=44; //valeur maximale des entiers, taille sur y, 44 au maximum ou 135
	int tab[nb];
	while (1)
	{
		fill(nb, tab, larg);
		gravity(tab, nb);
		yprint(nb, tab);
		//insertion(nb, tab);
		sleep(10);
	}
		return 0;
}















