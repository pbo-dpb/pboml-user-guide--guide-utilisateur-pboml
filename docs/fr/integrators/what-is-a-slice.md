# Qu'est-ce qu'une tranche ?

Un document PBOML est un document structuré qui peut contenir de nombreux types de contenus différents, représentés par différents types de tranches. Par conséquent, l'unité de base d'un document PBOML est une tranche (parfois appellée par son nom anglais, *slice*).

Les tranches peuvent être ajoutées, supprimées, dupliquées, déplacées et visualisées individuellement. L'éditeur visuel PBOML vous permet de faire tout cela.

Le type de contenu qu'une tranche peut contenir est déterminé par le type de tranche. Par exemple, une *tranche de texte riche (Markdown)* peut contenir du texte formaté à l'aide de la syntaxe Markdown, tandis qu'une *tranche de bitmap* peut contenir une image.

![what-is-a-slice](/what_is_slice_example.png)

## Types de tranches

Les documents PBOML peuvent contenir différents types de tranches. Les sections suivantes décrivent chaque type de tranche en détail :

- [Tranche de texte riche (Markdown)](./paragraphes.html)
- [Tranche d'en-tête](./headings.html)
- [Tranche de tableau](./tables.html)
- [Tranche de graphique](./charts.html)
- [Tranche vectorielle SVG](./charts.html#with-an-svg-slice)
- [Tranche Bitmap](./images.html)
- [Tranche de liste clé-valeur](./key-value-lists.html)

Exceptionnellement, vous pouvez également rencontrer d'autres types de tranches avancées :

- Tranche LaTeX
- Tranche HTML

Ces types de tranches ne sont pas visibles par défaut dans la liste des tranches que vous pouvez ajouter à un document donné. Pour créer ou éditer l'un de ces types de tranches, vous devrez les éditer directement dans le code (PBOML brut).

## En PBOML, l'anglais et le français sont intimement liés

L'un des principes fondamentaux du PBOML est la séparation de la structure et du contenu. Dans le contexte de la préparation de documents pour les langues officielles du Canada, cela signifie que la structure et l'organisation d'un document PBOML n'ont pas besoin d'être faites deux fois : un seul document PBOML contient à la fois les versions anglaise et française.

Cela contraste avec l'approche traditionnelle de la préparation de documents bilingues, où il faut maintenir une version anglaise du document indépendamment de la version française.

En pratique :
- Tous les champs de texte libre (par exemple, tous les champs qui prennent en charge le contenu Markdown) dans l'éditeur permettent aux utilisateurs de fournir du contenu dans les deux langues.
- Tous les champs numériques seront automatiquement localisés (par exemple en utilisant le séparateur de milliers correct) par le moteur de rendu au moment de l'exécution.

Comme vous le verrez dans les sections suivantes, vous pouvez prévisualiser chaque tranche individuellement ou un document dans son ensemble en **anglais** ou en **français** directement à partir de l'éditeur visuel.