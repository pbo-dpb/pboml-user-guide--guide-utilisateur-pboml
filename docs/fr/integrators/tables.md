# Tableaux

Les tableaux peuvent être ajoutés à votre document à l'aide d'une tranche de tableau. La tranche de tableau est probablement la tranche la plus complexe que vous rencontrerez. Mais ne vous inquiétez pas, une fois que vous aurez compris cette tranche, la création d'un tableau sera facile. Comme pour toutes les tranches, vous trouverez des instructions sur l'ajout d'une tranche de tableau dans la section [*Ajouter une tranche*](./structure-your-document.html#ajouter-une-tranche).

## L'anatomie d'une tranche de tableau

La zone d'édition d'une tranche de tableau est composée de deux sections d'édition : *Données tabulaires* et *Variables*. La section *Données tabulaires* est l'endroit où vous **pouvez modifier les valeurs de votre tableau** ; la section *Variables* est l'endroit où les variables du tableau sont **définies**. Les variables décrivent le type de contenu que l'on trouve dans la section des données tabulaires.

### Démonstration - Tranche de tableau complexe

<PbomlWidget sample="/samples/lesser_complexe_table.pboml.yaml" mode="edit"></PbomlWidget>

## Variables

Lorsque vous ajoutez des variables à votre tableau, la première variable que vous ajoutez est celle qui décrira toutes les variables suivantes : la ligne d'index est la variable qui décrit le contenu des lignes suivantes.

### Définition de la variable ligne d'index

On peut comparer la variable de la ligne d'index à l'axe *y* d'un graphique. 

Souvent, cette variable contient des marqueurs de temps : par exemple, *année fiscale*, *trimestre*, *mois*, etc. Cependant, tout type de valeurs discrètes ou continues peut être contenu dans la variable de la ligne d'index. Par exemple, si chaque colonne d'un tableau décrit une personne, la variable de la ligne d'index sera nommée "Personne" et les variables suivantes pourront chacune décrire une information concernant la personne : prénom, nom, date de naissance, etc.

La variable de la ligne d'index doit être positivement différenciée des autres variables en cochant la case *Décrire le contenu de la colonne*. 

::: warning
Seule **une variable** peut décrire le contenu de la colonne.
:::

1.  Allez dans l'onglet Variables de la tranche de tableau que vous êtes en train de modifier.
2.  Trouvez la variable qui sera la colonne d'index.
3.  Cliquez sur le bouton *Paramètres avancés* <Icon hero="adjustments-vertical"></Icon>
4. Cochez la case *Décrire le contenu de la colonne*.


Vous devez également indiquer le type de contenu qui sera contenu dans la variable. Deux types de contenu sont actuellement disponibles : Markdown, qui représente du texte ; et Number, qui ne représente que des nombres décimaux ou non. Ceci sera expliqué dans la section suivante.


### Ajout de variables


L'ajout de variables suit des étapes similaires à la définition de la colonne d'index. Avant de passer aux étapes suivantes, vous devez d'abord comprendre le mécanisme de regroupement et les unités.


#### Groupes de variables
Les tranches de tableau permettent de regrouper des variables. Pour regrouper des variables, allez dans le champ *Grouper par étiquette* sous les *Paramètres avancés* et saisissez l'étiquette par laquelle vous souhaitez regrouper vos variables. Pour un bon exemple, voir la [Démo](./tables.html#demonstration-complexe-table-slice).


Toutes les variables partageant la même étiquette apparaîtront groupées - regroupées sous cette étiquette - dans le tableau. Les groupes sont créés dans l'ordre de leur première apparition parmi les variables. La réorganisation des groupes ou des variables ne peut se faire qu'en les réorganisant dans l'objet `variables` du PBOML brut.


#### Unités des variables
Chaque variable peut définir le type d'unités qu'elle contient. Vous pouvez indiquer, par exemple, dans le champ Unités qui se trouve dans les *Paramètres avancés* d'une variable que les unités peuvent être "$ Million", "$", "%", etc.


:::tip Astuce
Si toutes vos variables ont la même unité, vous ne devez définir l'unité que pour une seule variable.
:::

Maintenant que vous avez compris ce que sont le regroupement et les unités dans une tranche de tableau, voici les étapes à suivre pour ajouter de nouvelles variables :

1.  Allez dans la section *Variables
2.  Cliquez sur **➕ Nouvelle variable** pour ajouter une nouvelle variable. Vous verrez apparaître une invite qui vous demandera d'entrer le nom de cette nouvelle variable. Vous entrez ensuite la valeur de la clé de la nouvelle variable.
3.  Dans la section "Label", changez le nom de cette variable pour l'anglais et le français.
4.  Dans la zone d'édition de la variable, choisissez entre *Markdown* (pour le contenu texte riche) et *Number* (pour le contenu numérique).
5.  Si nécessaire, vous pouvez regrouper les variables en spécifiant une étiquette de groupe commune dans les champs "Grouper par étiquette".
6.  Si nécessaire, vous pouvez définir les unités décrites par la variable

## Données tabulaires

Une fois que vous avez ajouté vos variables, vous pouvez maintenant ajouter des données à votre tableau.

### Ajouter des valeurs

L'ajout de données est simple. Tout d'abord, assurez-vous que l'onglet "Données tabulaires" est sélectionné. Cliquez sur le bouton *Ajouter des valeurs* <Icon hero="arrow-right-circle"></Icon> en bas à droite du tableau dans l'éditeur pour ajouter une colonne.

Les données tabulaires peuvent être ajoutées au tableau d'une manière visuelle qui imite le rendu final du tableau (dans la plupart des cas).

::: warning Une cellule, deux champs
Les valeurs des variables dont le type de contenu est *Markdown* présentent deux champs dans chacune des cellules du tableau de l'éditeur : l'un permet de saisir le contenu anglais et l'autre le contenu français. Ces deux champs sont affichés de manière similaire à ce que vous pouvez rencontrer dans d'autres champs Markdown à travers plusieurs types de tranches, mais cette présentation peut être déroutante dans un tableau. Veillez à saisir le contenu dans le bon champ.
:::

## Mettre en évidence des colonnes ou des lignes

Vous pouvez mettre l'accent sur des colonnes ou des lignes afin d'accentuer visuellement votre tableau.


Pour mettre en valeur une colonne, allez dans la section *Données du tableau* et cliquez sur l'icône en forme d'étoile <Icon hero="star"></Icon> de la colonne que vous souhaitez mettre en valeur.


Pour mettre en valeur une ligne, allez dans la section *Variables* et cliquez sur l'icône <Icon hero="star"></Icon> de la variable que vous souhaitez mettre en valeur (qui représente une ligne du tableau).


## Supprimer des colonnes ou des lignes


Vous pouvez supprimer des colonnes ou des lignes de votre tableau.


Pour supprimer une colonne, allez dans la section *Données du tableau* et cliquez sur l'icône de la corbeille 🗑️ de la colonne que vous souhaitez supprimer.


Pour supprimer une ligne, allez dans la section "Variables" et cliquez sur l'icône corbeille 🗑️ de la variable que vous souhaitez supprimer (qui représente une ligne du tableau).


## Convertir un tableau de Word vers l'éditeur PBOML


:::tip Astuce
Suivez la [Démo](./tables.html#demonstration-complexe-table-slice). Vous pouvez utiliser un tableau que vous avez créé sur Word, à condition qu'il utilise une structure de données compatible :
- La première colonne ou ligne doit contenir les variables
- Les cellules fusionnées ne sont pas prises en charge.
- Les groupes de variables ne peuvent pas être importés à l'aide de cette méthode.


Le tableau suivant est un bon exemple de tableau qui peut facilement être importé de Word à l'aide de l'éditeur PBOML :


| Exercice financier | 2023-2024 | 2024-2025 | 2025-2026 | 2026-2027 | 2027-2028 | Total |
| --- | --- | --- | --- | --- | --- | --- |
| Coût total | 52 | 0 | 0 | 0 | 0 | 52 |


La première colonne sera utilisée par l'éditeur pour créer deux variables : *Année fiscale* et *Coût total*.
La variable *Année fiscale* sera marquée comme décrivant les valeurs de la colonne puisqu'il s'agit de la variable de la ligne d'index. Elle contiendra les données tabulaires suivantes : *2023-2024*, *2024-2025*, etc.
La variable *Coût total* contiendra *52*, *0*, etc. comme données tabulaires.


:::


Comme il peut être très fastidieux de créer ou de mettre à jour un tableau complet dans l'éditeur (surtout lorsqu'il y a beaucoup de lignes et de colonnes), l'éditeur visuel PBOML vous permet d'importer un tableau à partir de Word au moyen d'un simple copier-coller. Le processus de conversion n'offre toutefois pas beaucoup de tolérance pour les cas particuliers. Vous devrez peut-être modifier certaines variables et données tabulaires directement pour éviter d'introduire des erreurs ou de supprimer du contenu au cours du processus.


1.  Tout d'abord, cliquez sur le bouton *Importer* <Icon hero="arrow-down-on-square"></Icon>. Copiez ensuite directement le tableau de Word dans son équivalent anglais et français et collez-le dans son champ respectif à l'aide du bouton *Coller de Word* <Icon hero="clipboard-document-list"></Icon>.
2.  Si vous ne cochez pas la case *Remplacer les données du tableau existant* et que votre tranche contient déjà des variables et des données tabulaires, l'éditeur tentera de fusionner le tableau importé avec le tableau existant. Cette fonction utilise les noms des variables pour remplacer les données existantes par les valeurs nouvellement importées tout en préservant les métadonnées supplémentaires (telles que les unités et les groupes de variables). Il s'agit d'une méthode pratique pour mettre à jour un tableau qui a été modifié dans Word. Si, au contraire, vous ne souhaitez pas préserver les variables et les données tabulaires existantes, vous pouvez cocher la case *Remplacer les données existantes du tableau* ; le contenu existant sera écrasé.
3.  Vous pouvez ensuite indiquer à l'éditeur l'emplacement de votre index : s'agit-il de la *première colonne* ou de la *première ligne* ?
4.  Lorsque vous êtes satisfait de l'aspect de votre tableau tel qu'il apparaît au bas de la tranche de tableau de l'éditeur, cliquez sur le bouton *Importer* <Icon hero="check-circle"></Icon>.
5.  Mais attendez, vous n'êtes pas encore au bout de vos peines ! Vous devez soigneusement vérifier dans la section *Variables* que le type de contenu de chaque variable est correct. Si votre tableau contient des nombres, assurez-vous de définir leur variable associée au type de contenu *Nombre*.
De plus, si nécessaire, assurez-vous que vous avez rempli les champs *Group by label* et unit pour chaque variable concernée (voir la section [Adding Variables](./tables.html#adding-variables)).