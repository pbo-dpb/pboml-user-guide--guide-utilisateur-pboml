# Guide de Référence Rapide Markdown

Le langage et l'éditeur PBOML utilisent la syntaxe Markdown pour formater le texte de plusieurs façons. Ce guide fournit une référence rapide pour la syntaxe et les fonctionnalités courantes de Markdown. Il est attendu que les intégrateurs soient familiers avec Markdown pour utiliser efficacement l'éditeur PBOML.

## Syntaxe de Base

### En-têtes

En Markdown, le symbole `#` est couramment utilisé pour créer des en-têtes. Le nombre de symboles `#` indique le niveau de l'en-tête.

```markdown
# H1
## H2
### H3
#### H4
##### H5
###### H6
```

Le symbole `=` et le symbole `-` peuvent également être utilisés pour créer des en-têtes de niveau 1 et 2.

```markdown

Niveau d'en-tête 1
==================


Niveau d'en-tête 2
------------------
```

Par conséquent, lors de l'importation de contenu depuis Word, une série de symboles `#` ou `=` indique qu'un en-tête est présent dans le document original.

::: warning
Bien que cette syntaxe soit valide en Markdown, il est fortement recommandé d'éviter de créer des en-têtes de cette manière dans PBOML. À la place, vous devriez utiliser les [tranches d'en-tête](./headings.html) natives de PBOML pour définir la structure du document PBOML.
:::

### Emphase

- **Gras** : Entourez le texte avec deux étoiles (`**`) ou deux underscores (`__`).

```markdown
**Ceci est un texte en gras**
__Ceci est aussi un texte en gras__
```

- *Italique* : Entourez le texte avec une étoile (`*`) ou un underscore (`_`).

```markdown
*Ceci est un texte en italique*
_Ceci est aussi un texte en italique_
```

- ***Gras & Italique*** : Combinez les deux.

```markdown
***Ce texte est en gras et en italique***
```

### Listes
- **Listes non ordonnées** : Utilisez `*`, `-`, ou `+` comme marqueurs de liste.

```markdown
* Élément 1
* Élément 2
    * Sous-élément 2.1
    * Sous-élément 2.2
```

- **Listes ordonnées** : Utilisez des chiffres suivis d'un point.

```markdown
1. Premier élément
2. Deuxième élément
     1. Sous-élément 2.1
     2. Sous-élément 2.2
```

### Liens
Les hyperliens peuvent être créés en entourant le texte que vous souhaitez lier avec des crochets `[]`, immédiatement suivis de l'URL entre parenthèses `()`.

```markdown
[Google](https://www.google.com)
```

### Images

Les images, en Markdown, sont créées en utilisant une syntaxe très similaire aux liens, mais avec un point d'exclamation `!` avant les crochets. Dans ce cas, le texte dans les crochets est le texte alternatif pour l'image.

```markdown
![Logo Markdown](https://markdown-here.com/img/icon256.png)
```
::: warning
Dans PBOML, les vraies images doivent être insérées en utilisant une [tranche d'image](./images.html) ou une tranche SVG au lieu d'utiliser la syntaxe Markdown. Cela est particulièrement important car l'hébergement d'images sur des domaines tiers est interdit sur le site principal de PBO.
:::

::: warning
Lors de l'importation de contenu depuis Word, un certain nombre d'éléments qui ne sont pas des images dans le document original peuvent être reconnus comme des images par l'éditeur PBOML. Par exemple, les graphiques et les équations en ligne seront collés comme des images, avec un lien vers un fichier sur votre ordinateur. Assurez-vous de remplacer ces éléments par le type de tranche ou la syntaxe appropriée. Trouver la syntaxe de l'image dans le contenu Markdown peut vous aider à identifier ces éléments.
:::

### Citations
- Utilisez `>` pour les citations.

```markdown
> Ceci est une citation.
```

### Équations

Le parseur PBOML prend en charge les équations LaTeX, dans la mesure où elles sont prises en charge par la bibliothèque KaTeX.

- En ligne : Pour inclure une équation en ligne dans votre texte, entourez le code LaTeX avec des signes dollar simples `$`.

```markdown

L'équation est $\Delta^{Hello}$.

```


- Bloc : Pour inclure une équation en bloc (qui sera centrée et sur sa propre ligne) dans votre texte, entourez le code LaTeX avec des signes dollar doubles `$$`.

```markdown

$$\Delta^{Hello}$$

```

::: tip
Les équations ne sont pas une fonctionnalité native de Markdown et sont parfois difficiles à utiliser ; pour en savoir plus sur l'utilisation des équations dans le Markdown PBOML, consultez la documentation [Équations](./equations.html).
:::

### Code

La syntaxe Markdown vous permet d'inclure des extraits de code dans votre texte. Même si le code est rarement utilisé dans nos publications, il peut être utile de connaître cette syntaxe car elle peut être utilisée pour formater tout texte en police à espacement fixe, sans interprétation de la syntaxe incluse.

- En ligne : Utilisez des accents graves `` `code` ``.

```markdown
Voici du `code en ligne`.
```

- Bloc : Utilisez des accents graves triples ou indentez avec quatre espaces.

<pre markdown="1">
```
def bonjour_monde():
        print("Bonjour, le monde !")
```
</pre>

### Ligne Horizontale
- Créez une règle horizontale avec `---`, `***`, ou `___`.

```markdown
---
```

### Tableaux
- Utilisez des pipes (`|`) et des tirets (`-`) pour créer des tableaux.

```markdown
| En-tête 1 | En-tête 2 |
| --------- | --------- |
| Ligne 1   | Donnée    |
| Ligne 2   | Donnée    |
```

::: warning
Les tableaux créés en utilisant cette syntaxe sont généralement accessibles et peuvent être utilisés pour rendre des tableaux simples, par exemple dans la description visuelle d'une figure. Cependant, pour des tableaux plus complexes, il est recommandé d'utiliser la [tranche de tableau](./tables.html) dans PBOML pour garantir que le tableau soit accessible et réactif.
:::

### Listes de Tâches
- Utilisez `- [ ]` pour les tâches.

```markdown
- [x] Tâche 1
- [ ] Tâche 2
```

## Fonctionnalités Avancées

### Échappement

Utilisez le backslash `\` pour échapper les caractères Markdown. Ce backlash peut être utilisé pour échapper n'importe quel caractère qui a une signification spéciale en Markdown. C'est particulièrement utile lorsque vous voulez inclure plusieurs caractères utilisés dans la syntaxe Markdown, comme les astérisques, les backticks ou, plus important encore, les signes de dollar.

```markdown
\*Ce texte n'est pas en italique\*
```

## Conseils pour Utiliser Markdown

- Markdown est conçu pour être aussi lisible que du texte brut, donc les tableaux ou les éléments avancés pourraient ne pas s'afficher correctement dans les éditeurs de texte brut.
- Utilisez un éditeur ou un visualiseur Markdown pour voir le rendu formaté.
- Les plateformes en ligne comme GitHub, Reddit et Stack Overflow utilisent des variations de Markdown, de la documentation abondante et de nombreux exemples sont donc disponibles sur le Web.