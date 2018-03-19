#include<stdio.h>

void afficher(int jeu[9][9])
{
	int i, j;
	for(i=0; i<9; i++)
	{
		for(j=0; j<9; j++)
		{
			printf(" %d ", jeu[i][j]);
		}
		printf("\n");
	}
}

void initialiser(int jeu[9][9])
{
	int i, j;
	for(i=0; i<9; i++)
	{
		printf("Ligne %d :\n", i+1);
		for(j=0; j<9; j++)
		{
			scanf("%d", &jeu[i][j]);
		}
	}
}


int main()
{
	int jeu[9][9];
	initialiser(jeu);
	afficher(jeu);
}