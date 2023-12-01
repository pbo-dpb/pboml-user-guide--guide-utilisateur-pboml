# Paragraphes et contenu textuel

:::details Tout le texte doit être aligné à gauche

### Raison

Les changements d'alignement du texte ne sont pas pris en charge, y compris dans les tableaux.

### Valide

Tous les textes doivent être alignés à gauche.

:::

:::details Les URL complètes ne doivent pas être incluses dans le texte : seul le texte du lien doit être inclus

### Raison

Les URLs devraient lier des mots, dans le cadre du flux de texte ininterrompu. Les lecteurs d'écran liront l'URL complète si elle est insérée dans le texte.

### Valide

> Lorem ipsum [dolor sit amet](https://www.example.com).

### Invalide

> Lorem ipsum dolor sit amet (https://www.example.com/).

:::

:::details Si votre texte contient des annotations, vérifiez que les annotations sont numérotées avec des numéros standard (1, 2, 3, 4, ...)

### Raison

Cela permet de maintenir l'uniformité entre les différentes publications. De plus, les intégrateurs devront ignorer les références non numériques et utiliser à la place des chiffres arabes séquentiels.

### Valide

> “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”<sup>11</sup>

### Invalide

> “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.” <sup><i>XI</i></sup>

:::

:::details Si votre texte utilise le souligement pour créer une emphase, utilisez plutôt le gras

### Raison

Il est conseillé de ne pas utiliser le soulignement pour créer une emphase dans votre texte, car cette convention est généralement réservée aux URL sur les sites Web. L'utilisation du soulignement pour créer une emphase peut entraîner des confusions et doit être évitée. Il est également recommandé d'éviter d'utiliser l'italique pour créer une emphase, car cela peut être difficile à lire pour certains utilisateurs. Le texte en gras, lorsqu'il est utilisé avec parcimonie, peut être utilisé pour créer une emphase.

### Valide

> **Lorem ipsum dolor sit amet** Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
>
> **Ut enim ad minim veniam**
>
> Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

## Invalide

> <u>Lorem ipsum dolor sit amet</u> Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
> 
> <u>Ut enim ad minim veniam</u>
>
> Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

:::

:::details Si votre texte contient des listes à puces à plusieurs niveaux, envisagez d'utiliser des titres à la place

### Raison

Les listes à puces à plusieurs niveaux peuvent causer des problèmes d'intégration et leur structure est difficile à saisir au premier coup d'oeil. Bien qu'elles puissent être utilisées avec des structures simples et des listes courtes, les analystes devraient envisager des alternatives telles que les titres chaque fois que cela est possible.

### Valide

> -	Alléger la dette des étudiants pendant le remboursement des prêts étudiants Lorem (LSL) et des prêts aux apprentis Lorem (LAL) :
>     -	Fixer les taux d'intérêt à zéro pour l'exercice 2022-23 ; et
>     -	Élargir les seuils d'éligibilité et les niveaux de soutien du système d'aide au remboursement Lorem (LRAS) à partir de l'année de prêt 2022-23.


### Invalide

> - Alléger la dette des étudiants pendant le remboursement des prêts étudiants Lorem (LSL) et des prêts aux apprentis Lorem (LAL) :
>     -	Fixer les taux d'intérêt à zéro pour l'exercice 2022-23 ;
>       -   Cette mesure devrait permettre aux emprunteurs d'économiser jusqu'à 2 000 dollars au cours de leur période de remboursement.
>            - Les calculs sont basés sur un prêt de 25 000 $ avec un taux d'intérêt de 5,5 %.
>       -   En fonction du montant du prêt, cette mesure pourrait réduire la période de remboursement de 2 ans maximum.
>            - Cela suppose une période de remboursement de 10 ans.
>               -	Cet aspect de la mesure ne s'applique pas aux emprunteurs qui ont déjà remboursé leur prêt.
>     -	Élargir les seuils d'éligibilité et les niveaux de soutien du système d'aide au remboursement Lorem (LRAS) à partir de l'année de prêt 2022-23.

:::