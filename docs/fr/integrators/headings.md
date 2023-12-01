# En-têtes

Il y a trois façons d'ajouter un titre à votre document : avec une *tranche de titre*, en fournissant un attribut `Title` à une tranche individuelle ou dans le contenu directement (en utilisant les en-têtes Markdown). 

**Il est généralement préférable d'utiliser des tranches d'en-tête pour concevoir la structure d'un document **Les documents ayant un seul niveau de profondeur - tout le contenu étant égal et contenu dans chaque tranche - (comme les notes de calcul des coûts) peuvent être structurés avec des titres de tranche uniquement. Quant aux titres à l'intérieur d'un contenu Markdown, nous ne les recommandons en aucun cas.

## Tranche d'en-tête

Une *tranche d'en-tête* est utilisée pour représenter un en-tête dans votre document.

1.  Ajoutez d'abord une tranche d'en-tête comme expliqué dans le guide [*Ajouter une tranche*](./structure-your-document.html#add-a-slice).
2.  Choisissez le niveau de ce titre.
3.  Saisissez le contenu du titre de la rubrique en anglais et en français.

### Démonstration - Utilisation d'une *tranche de titre*

<PbomlWidget sample="/samples/heading_slice.pboml.yaml" mode="edit"></PbomlWidget>

## Titre de la tranche

Pour toutes les tranches (à l'exception de la tranche d'en-tête), vous pouvez ajouter un titre qui indiquera le contenu de cette tranche. Si aucune tranche d'en-tête n'est présente dans un document, la table des matières du document sera construite à partir des titres des tranches.

### Limites

Les titres de tranche sont très limités dans ce qu'ils peuvent accomplir : 

- Ils ne peuvent décrire que ce qui est inclus dans une seule tranche.
  - Contrairement aux titres de rubriques, les titres de tranches ne peuvent pas être utilisés pour décrire une section qui contient plusieurs tranches.
- Ils se situent toujours au même niveau supérieur
  - Ils ne peuvent pas être utilisés pour décrire des sous-sections.
- n'apparaissent pas dans la table des matières lorsqu'ils sont utilisés avec des tranches d'en-tête.
  - Seules les tranches d'en-tête seront utilisées par le composant Table des matières pour établir la structure d'un document donné si des tranches d'en-tête sont utilisées. 
  - En revanche, les titres des tranches seront utilisés pour générer la table des matières des documents plats qui ne contiennent pas de tranches d'en-tête.

### Quand les utiliser

Utilisez-les dans les cas suivants :
- Le document que vous éditez est plat
  - Lorsque tout le contenu se trouve au niveau supérieur d'un document, comme dans une note de calcul des coûts législatifs, les titres de tranche sont un moyen pratique de conserver un document simple et rapide.
- Lorsqu'une tranche ne fait pas partie du flux principal du document
  - Lors de l'insertion d'une tranche utilisant un style de présentation de type Figure/Table ou Boîte (Aside), la définition de l'attribut Title sur cette tranche permet d'étiqueter ce contenu.
- Lors de la conception d'un modèle
  - Les modèles qui contiennent des tranches vides (par exemple la LEG ), prêtes à être remplies par des intégrateurs ou des analystes, doivent utiliser des titres de tranche pour fournir un contexte et des instructions sur le contenu à placer dans telle ou telle tranche.

Pour ajouter une étiquette de titre à l'intérieur d'une tranche directement, vous devez d'abord basculer vers la tranche que vous souhaitez titrer.

1.  Cliquez sur le bouton Engrenage <Icon hero="cog-6-tooth"></Icon>.
2.  Saisissez le titre dans le champ *Titre* en anglais et en français.

<PbomlWidget sample="/samples/heading_inside_slice.pboml.yaml" mode="edit"></PbomlWidget>


## Dans le contenu d'une tranche

Les tranches qui ont un contenu textuel suivent généralement la syntaxe _Markdown_. Cette syntaxe prend en charge les titres ; les titres peuvent donc être utilisés à l'intérieur de tout contenu Markdown (comme à l'intérieur d'une tranche Rich text (Markdown)). Les titres dans cette syntaxe Markdown sont formatés comme suit :

``md
# Titre Niveau 1 (h1)


## Titre Niveau 2 (h2)


### Titre Niveau 3 (h3)
```

Cette troisième option pourrait théoriquement être utilisée pour structurer partiellement un document, avec plusieurs mises en garde expliquées dans l'encadré ci-dessous.

Danger ::: danger
L'ajout d'un titre à l'intérieur du contenu d'une tranche n'est **pas recommandé**.  Le langage PBOML existe pour sérialiser le contenu et permettre la maintenance rapide et simultanée du contenu bilingue en dehors de la structure du document. La création d'une structure à l'intérieur des tranches va à l'encontre de ces principes. En pratique, une telle utilisation empêcherait la génération correcte d'une table des matières et pourrait avoir un impact sur l'arbre d'accessibilité global d'un document.

Pour ces raisons, veillez à ne pas copier de titre ou d'en-tête à partir de Word et optez plutôt pour l'une des deux options suivantes pour structurer votre document : [Utiliser des tranches de titre](./headings.html#heading-slice) ou [donner un titre à vos tranches](./headings.html#slice-title).
:::