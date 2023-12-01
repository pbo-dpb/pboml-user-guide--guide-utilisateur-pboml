# Méthodologie du tableau

:::warning Avertissement
Cette page est encore en cours de développement.
:::

:::info Importation de tableaux depuis Word
Si le tableau est collé depuis Word, assurez-vous que les conditions suivantes sont remplies :

- **Aucune cellule fusionnée**
- Aucune unité ($, %, etc.) n'est attachée aux données numériques.
- Pas d'annotations personnalisées (ex. astérisques renvoyant à des notes)**.
- Pas de références dans le titre du tableau.
- **Un seul tableau par titre de tableau**
:::

:::info Déclarer des unités pour les variables 
Une unité doit être déclarée pour au moins une variable du tableau. **Si toutes les variables ont la même unité, il suffit de déclarer l'unité d'une seule variable**. Si les variables ont des unités différentes, vous devez déclarer l'unité de chaque variable individuelle.
:::

:::info Unité dans le titre
Pour les tableaux dont toutes les variables partagent la même unité, les analystes sont invités à déclarer cette unité dans le titre du tableau. Il est de votre devoir de retirer l'unité du titre et de la déclarer dans la variable appropriée.
:::

:::info Plusieurs tableaux partageant des titres et/ou des descripteurs
Chaque tableau doit être intitulé individuellement. Vous ne pouvez pas utiliser un seul titre de tranche pour titrer plusieurs tableaux. De la même manière, les descripteurs de tranches (tels que les notes et les sources) doivent être déclarés pour chaque tableau individuel. Face à une liste de tableaux partageant le même titre, définissez le même titre pour chaque tableau individuel tout en générant des noms d'ancrage uniques (par exemple, tableau 1-1a, tableau 1-1b, etc.). Si cela ne peut être fait de manière logique - par exemple, si l'analyste a choisi de diviser un tableau unique évident pour qu'il tienne sur une seule page - traitez ce tableau comme un *tableau impossible*.
:::

:::info Respecter les propriétés d'une variable
Les variables doivent être des lignes de données du même type. Par exemple, si la variable est un pourcentage, toutes les valeurs doivent être des pourcentages. Si la variable est un montant en dollars, toutes les valeurs doivent être des montants en dollars. Les tableaux qui mélangent différents types de données dans la même variable doivent être traités comme des *tableaux impossibles*.
:::

:::info Tableau impossible
Parfois, les tableaux sont trop complexes pour être importés dans l'éditeur. Dans ce cas, vous devez contacter l'analyste et lui demander de reformater le tableau d'une manière acceptable. Sinon, si les ressources sont disponibles, vous pouvez demander à des développeurs Web d'écrire une tranche HTML personnalisée pour ces tableaux.
:::