# Graphiques

:::details Utiliser des graphiques natifs dans Word

Lorsque vous collez un graphique d'Excel dans Word, vous avez l'option de le coller en tant que graphique natif de Word. Cela vous permettra de modifier le graphique dans Word (minimalement). Ne collez jamais un graphique en tant qu'image.

### Raison

Les graphiques basés sur des images ne s'adapteront pas correctement à l'échelle lors de l'impression du document ou de sa visualisation sur différents appareils : ils peuvent apparaître flous ou pixélisés. Les graphiques natifs s'adapteront correctement car ils peuvent être exportés dans un format d'image vectorielle (SVG).

### Valide

1. Utilisez Excel ou Word pour générer votre graphique.
2. À partir de là, copiez votre graphique généré.
3. Collez-le dans votre document Word en tant que graphique natif de Word.

### Invalide


- Prendre une capture d'écran du graphique, puis la coller dans Word
- Utiliser un graphique Word non natif

### Notes

- Il n'est pas impossible d'utiliser des graphiques basés sur des images dans la publication PBO ; cependant, ce n'est pas recommandé. Si vous avez une bonne raison d'utiliser un graphique basé sur une image, veuillez contacter l'équipe de production avant la publication et expliquer votre cas d'utilisation.

:::

:::details Utiliser des graphiques Excel dans Word

### Raison

Word ne considère pas les zones de texte flottantes comme faisant partie des graphiques, même si elles peuvent flotter *au-dessus* de la zone du graphique. Lors de l'enregistrement au format SVG, Word n'inclura pas les zones de texte flottantes dans le fichier SVG. Il y a un risque élevé que l'intégrateur ne remarque pas les zones de texte manquantes et publie le document sans elles.

### Valide

1. Dans Excel, sélectionnez la zone du graphique.
2. Créez la zone de texte à l'intérieur de la zone du graphique.
3. Copiez et collez le graphique dans Word.

### Invalide

-    Créer la zone de texte dans Word, puis copier et coller le graphique dans Word.
-    Créer n'importe quel autre type d'objet flottant au-dessus du graphique.

:::