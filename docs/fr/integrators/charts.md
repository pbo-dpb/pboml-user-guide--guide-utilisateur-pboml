# Graphiques

Il y a deux façons d'ajouter un graphique avec l'éditeur visuel PBOML : avec une *SVG Slice* ou une *Chart Slice*. 

- La *SVG Slice* contient une image `.svg` sauvegardée sur votre ordinateur. Vous pouvez exporter une image `.svg` à partir de Word.
- La tranche de graphique contient une tranche de tableau qui est présentée sous la forme d'un graphique interactif.

Les tranches de graphique offrent une meilleure expérience au lecteur, mais elles sont plus difficiles à créer. Si vous ne savez pas laquelle utiliser, nous vous recommandons de commencer par la *SVG Slice*.

## Tranche SVG

### Qu'est-ce qu'un *SVG* ?

SVG signifie *Scalable Vector Graphics*. Un SVG est une image : il peut s'agir d'un graphique, d'une carte, d'un diagramme, etc. Ils diffèrent des images bitmap (telles que `.png` ou `.jpg`) en ce qu'ils ne sont pas constitués de pixels, mais de vecteurs. Cela signifie qu'elles peuvent être mises à l'échelle à l'infini sans perte de qualité.

Elles peuvent également être exportées directement depuis Word.

Les SVG slices ne sont donc qu'une enveloppe autour de deux images SVG : l'une pour la version anglaise de la carte, l'autre pour la version française.

### Ajouter un graphique à l'aide d'une *SVG Slice*.

#### Enregistrer un graphique en tant que SVG

Chaque version (une pour chaque langue) de la carte doit d'abord être sauvegardée en tant qu'image `.svg` sur votre ordinateur. Les instructions suivantes expliquent comment procéder.

::: details Enregistrer un graphique SVG à partir de Word ou Excel

1. Cliquez avec le bouton droit de la souris sur le graphique
2. Cliquez sur `[Enregistrer sous forme d'image]`

![svg-from-word-step1](/svg_from_word_step1.png)

3. Enregistrez en tant que Scalable Vector Graphics

![svg-from-word-step2](/svg_from_word_step2.png)

⚠️ Les paramètres régionaux de votre ordinateur doivent être réglés sur English (Canada) lorsque vous exportez la version anglaise d'un graphique. Dans le cas contraire, le graphique ne sera pas exporté correctement (le formatage des nombres pourrait ne pas être correct). Il en va de même pour la version française du graphique : les paramètres régionaux de votre ordinateur doivent être réglés sur Français (Canada) lors de l'exportation.

Pour changer les paramètres régionaux de votre ordinateur, allez dans `Paramètres > Heure et langue > Région > Pays ou région` et sélectionnez la langue appropriée.

Windows exige que Word soit complètement fermé et rouvert pour que les paramètres régionaux soient appliqués. Il est donc recommandé d'exporter tous les graphiques dans une langue avant de modifier les paramètres régionaux de votre ordinateur et d'exporter les graphiques dans l'autre langue.

:::

#### Créer une *SVG Slice*

Aller à la [*Ajouter une tranche*](./structure-your-document.html#add-a-slice) et choisir une tranche SVG.

Pour chaque langue, respectivement :

1. Cliquez sur *Choisir un fichier* et sélectionnez le fichier `.svg` correspondant à la langue appropriée.

Si vous remarquez que votre SVG n'est pas rendu correctement, vous pouvez essayer ce qui suit :

1. Cliquez sur l'onglet *Outils SVG*.

2. Cliquez sur l'un ou plusieurs des boutons suivants :
    - <Icon hero="viewfinder-circle"></Icon> `Ajuster` ajustera la boîte de contenu de l'image SVG afin que tout soit visible - c'est utile si le graphique est rogné ou s'il y a beaucoup d'espace blanc autour.
    - <Icon hero="viewfinder-circle"></Icon> `Éliminer le blanc` supprimera l'arrière-plan blanc (ou tout autre élément blanc) de l'image SVG - utilisez-le lorsque le fond à motif de damier gris est caché par un fond blanc.
    - <Icon hero="viewfinder-circle"></Icon> `Retirer les caractères interdits` supprimera les caractères qui ne sont pas autorisés dans les images SVG - c'est le plus utile si un message d'erreur apparaît à la place de votre graphique.

:::tip Astuce
Si le problème persiste, vous pouvez essayer de sauvegarder à nouveau le SVG sur votre ordinateur.
:::



<PbomlWidget sample="/samples/svg_slice.pboml.yaml" mode="edit" title="Un graphique intégré dans une tranche SVG"></PbomlWidget>

## Avec une tranche de graphique

Une autre façon d'ajouter un graphique à l'aide de l'éditeur visuel PBOML est d'utiliser la *tranche graphique*. Cette dernière est très semblable à la [tranche de tableau](./tables.html) ; la seule différence réside dans les options de visualisation qui existent dans la tranche de tableau. Voici comment commencer :

1.  Tout d'abord, allez à la [*Ajouter une tranche*](./structure-your-document.html#add-a-slice) et cliquez sur *Graphique*. Vous verrez une tranche très similaire à la tranche de tableau. Remarquez la section *Text version*/*Version textuelle* ; ces sections contiennent la représentation tabulaire du graphique.

2. Vous avez deux choix : soit vous créez un tableau à partir de zéro, soit vous l'importez à partir de Word. Reportez-vous à la section [Tranche tableau](./tables.html) pour des instructions spécifiques sur les deux.

Une fois votre tableau créé, vous pouvez maintenant procéder à la personnalisation du graphique qui en est généré.

### Démo - Tranche graphique

<PbomlWidget sample="/samples/chart_slice.pboml.yaml" mode="edit"></PbomlWidget>

### Cacher des variables

Les tranche de graphique vous permettent de choisir quelles variables masquer sur le graphique. Pour plus d'informations sur les variables, voir [*Tables – Variable*](./tables.html#variables).

Pour masquer une variable, allez à la section *Variables*. Une fois que vous avez trouvé la variable que vous souhaitez masquer sur le graphique, désélectionnez l'icône du graphique <Icon hero="chart-bar"></Icon>.

::: info
La variable que vous souhaitez masquer sur le graphique ne sera pas masquée dans la section *Version textuelle* qui affiche le tableau d'origine comme s'il était à l'intérieur d'une tranche de tableau.
:::


### Cacher des colonnes

La tranche de tableau vous permet également de choisir quelles colonnes masquer sur le graphique.

Pour masquer une colonne, allez à la section *Données tabulaires* (pour un rappel sur l'onglet, voir [*Table – Données tabulaires*](./tables.html#tabular-data)). Une fois que vous avez trouvé la colonne que vous souhaitez masquer sur le graphique, désélectionnez l'icône du graphique <Icon hero="chart-bar"></Icon> au-dessus de celle-ci.


::: info
La colonne que vous souhaitez masquer sur le graphique ne sera pas masquée dans la section *Version textuelle* qui affiche le tableau d'origine comme s'il était à l'intérieur d'une tranche de tableau.
:::


### Mettre en évidence les variables


La tranche de graphique vous permet de choisir les variables à mettre en évidence sur le graphique. 

Pour mettre en évidence une variable, allez dans la section *Variables*. Une fois que vous avez trouvé la variable que vous voulez mettre en évidence sur le graphique, sélectionnez l'icône étoile <Icon hero="star"></Icon>.

::: info
La variable que vous souhaitez mettre en évidence dans le graphique sera mise en évidence dans la section Version texte qui affiche le tableau original comme s'il se trouvait à l'intérieur d'une tranche de tableau.
:::

### Mettre en évidence des colonnes

La tranche de tableau vous permet également de choisir les données tabulaires à mettre en valeur sur le graphique. Pour un rappel sur les variables, voir `[Tableau - Données tabulaires]`. 

Pour mettre en évidence une colonne, allez dans la section *Variables*. Une fois que vous avez trouvé la colonne que vous voulez mettre en évidence sur le graphique, sélectionnez l'icône étoile <Icon hero="star"></Icon> au-dessus de celle-ci.


::: info
La variable que vous souhaitez mettre en évidence dans le graphique sera mise en évidence dans la section Version texte qui affiche le tableau original comme s'il se trouvait à l'intérieur d'une tranche de tableau.
:::

### Définir le type de graphique

L'éditeur PBOML Visual vous permet de décider comment chaque variable est affichée sur le graphique ; il y a actuellement trois façons de dessiner une variable sur le graphique : en utilisant un *graphique à barres*, un *graphique linéaire* ou un *graphique en nuage de points*.

Pour définir la méthode d'affichage d'une variable, allez d'abord dans la section *Variables* de la tranche de graphique que vous souhaitez modifier. 

Pour modifier le type d'affichage, vous pouvez cliquer sur la boîte de sélection déroulante située sous le champ *Drawn as...* et sélectionner la méthode d'affichage.

::: info
Notez que la variable utilisée pour décrire le contenu de la colonne n'a pas cette option car elle décrit l'axe des y du graphique.
:::

#### Le champ de tension

Pour rendre votre *graphique à lignes* plus lisible, vous pouvez lui ajouter une courbe en ajustant le champ *Tension* dans les *Paramètres avancés* qui n'apparaît que si une variable dont le champ *Dessiner comme...* est réglé sur *ligne* :

Le champ tension détermine la courbe de la ligne. A 0 elle est complètement droite entre les points, à 0.4 elle est équilibrée. Cependant, vous pouvez simplement écrire "*monotone*" si vous voulez une courbe bien équilibrée pour votre ligne.