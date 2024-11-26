# Ajouter une structure à votre document

Comme mentionné dans la section [Qu'est-ce qu'une tranche?](./what-is-a-slice.md), l'élément de base d'un document PBOML est une *tranche* (*slice*). La structure d'un document dépend entièrement de la disposition de ses tranches : l'ordre dans lequel elles apparaissent, leurs propriétés (par exemple, le niveau d'une *tranche d'en-tête*), etc. Par conséquent, l'éditeur visuel PBOML représente vos documents comme une séquence ordonnée de _tranches_.  Cette liste éditable de tranches est appelée l'onglet **Tranches**.

Pour structurer votre document et sa mise en page, l'éditeur vous propose également un mode d'édition alternatif appelé l'onglet **Structure**. Cet onglet vous permet de voir toutes les tranches de votre document et de les manipuler à un niveau supérieur.

## Ajouter une tranche

### Depuis l'onglet des tranches

L'ajout d'une nouvelle tranche est très simple :

1.  Allez à l'endroit où vous souhaitez ajouter une tranche.
2.  Trouvez le bouton <Icon hero="plus-circle"></Icon> et assurez-vous qu'il est sélectionné pour que vous puissiez voir les options de la tranche.
3.  Cliquez sur le type de tranche que vous souhaitez ajouter.
4.  Vous devriez voir une zone d'édition de tranche vide pour la tranche que vous avez sélectionnée.


:::info Types de tranches avancés
Certains types de tranches, tels que les tranches LaTeX, HTML et Bitmap, nécessitent des connaissances avancées de leurs langages respectifs ou des manipulations avancées. Ces tranches sont marquées d'une icône <Icon hero="beaker"></Icon> en forme de bécher.
:::

### Depuis l'onglet de la structure

L'onglet de la structure vous permet d'ajouter plusieurs types de tranches à la fois en utilisant le langage Markdown. Ce mode vous permet ainsi de rapidement créer un document présentant une structure complexe. Il est particulièrement utile d'utiliser ce mode lorsqu'on intègre un document provenant de Microsoft Word : il suffit de copier-coller le contenu du document dans l'éditeur de texte de l'onglet de la structure pour obtenir une structure de document similaire, avec certaines limitations.

![import_structure_from_word.png](/import_structure_from_word.png)

1. Dans l'éditeur visuel, cliquez sur l'onglet **Structure**
2. Cliquez sur le bouton "Ajouter une structure depuis Markdown"
3. Collez le contenu de votre document dans l'éditeur de texte, d'abord en anglais puis en français. Si vous collez le document depuis Microsoft Word, assurez-vous de coller le contenu en utilisant le bouton "Coller depuis Microsoft Office" pour que le formatage soit correctement converti au format Markdown.
4. Un aperçu de la structure qui sera importée est affiché.
5. Cliquez sur le bouton "Importer" pour importer la structure. Notez que le contenu ne sera pas importé, seulement la structure, à l'exception des tranches de type En-Tête.

::: warning La structure doit correspondre dans les deux langues
Il est important que la structure du document soit la même dans les deux langues. Si la structure est différente, la fonction d'importation ne fonctionnera pas. Par exemple, si une tranche de type En-Tête de niveau 1 est présente en anglais, elle ne peut pas être de niveau 2 en français.
:::

::: warning Toutes les tranches ne peuvent pas être importées
Cette fonction d'importation ne reconnaîtra pas nécessairement tous les types de tranche. Par exemple, une figure pourrait ne pas être correctement importée. De la même manière, il est possible que des tranches fantômes soient créées, particulièrement si des retours de chariot sont présents entre deux titre ou tableaux. Il est essentiel de vérifier la structure du document après l'importation.
:::

## Supprimer une tranche

1.  Dans l'éditeur visuel, faites défiler jusqu'à la tranche que vous souhaitez supprimer
2.  Une fois que vous avez trouvé cette tranche, cliquez sur le bouton de suppression <Icon hero="trash"></Icon>
3.  Vous verrez une alerte vous invitant à confirmer votre décision. Pour supprimer, cliquez sur ***OK***

## Dupliquer une tranche

1.  Dans l'éditeur visuel, faites défiler jusqu'à la tranche que vous souhaitez dupliquer.
2.  Une fois que vous avez trouvé cette tranche, cliquez sur le bouton de duplication <Icon hero="document-duplicate"></Icon>
3.  Vous verrez une alerte vous invitant à confirmer votre décision. Pour dupliquer, cliquez sur ***OK***

## Déplacer une tranche

### Depuis l'onglet de la structure (recommandé)

1.  Dans l'éditeur visuel, cliquez sur l'onglet **Structure**
2.  Vous verrez une liste de toutes les tranches de votre document. Cliquez sur la tranche que vous souhaitez déplacer.
3.  Faites glisser et déposez la tranche à l'endroit où vous souhaitez qu'elle soit.

### Depuis l'onglet des tranches

1.  Dans l'éditeur visuel, faites défiler jusqu'à la tranche que vous souhaitez déplacer.
2.  Si vous voulez déplacer votre tranche vers le haut du document, cliquez sur <Icon hero="arrow-up"></Icon> ; si vous voulez déplacer votre tranche vers la fin du document, cliquez sur <Icon hero="arrow-down"></Icon>.

## Visualisez votre tranche individuellement

1.  Dans l'éditeur visuel, faites défiler jusqu'à la tranche que vous souhaitez visualiser
2.  Pour visualiser le contenu de cette tranche en anglais, cliquez sur **EN** ; pour la visualiser en français, cliquez sur **FR**.
3.  Pour revenir à la tranche d'édition, cliquez à nouveau sur le même bouton à l'étape 2.