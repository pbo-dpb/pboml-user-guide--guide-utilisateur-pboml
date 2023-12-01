# Images
::: info Quand utiliser une image bitmap ?
Il est généralement préférable d'utiliser une image vectorielle (en utilisant le format SVG, tel que décrit dans [la section de ce guide sur les graphiques](./charts.html)). Toutefois, il est possible d'ajouter une image bitmap à un document PBOML lorsque cela est nécessaire. Par exemple, le format bitmap peut être utilisé pour afficher une photographie ou, sous certaines conditions, une image de synthèse qui ne peut être vectorisée.
:::

L'ajout d'une image se fait en deux étapes distinctes :
1. [Télécharger l'image sur le serveur](./images.html#upload-your-image-to-the-visual-supports-form) (via le formulaire *Supports visuels* sur 99Bank).
2. Utilisez l'URL de l'image pour [créer une nouvelle tranche Bitmap dans un document PBOML](./images.html#adding-your-image-inside-a-bitmap-slice).


## Téléchargez votre image dans le formulaire Supports visuels

1.  Depuis la _Page de publication_ du document sur lequel vous travaillez, cliquez sur le formulaire _Supports visuels_.
2.  Sur la nouvelle page à laquelle ce lien précédent vous a amené, cliquez sur *Ajouter une nouvelle image*.
3.  Choisissez *non listé* dans la liste des types d'images.
4.  Une fois le type d'image choisi, vous devez indiquer sous *Langue* si l'image est _bilingue_, _français seulement_ ou _anglais seulement_.
5.  Vous pouvez enfin télécharger votre nouvelle image en cliquant sur _Choisir un fichier_ et en sélectionnant un fichier sur votre ordinateur.
6.  Une fois le fichier téléchargé, cliquez sur *Sauvegarder*.

Vous devriez maintenant voir votre image dans la section *Supports visuels* de la _99Bank_.

## Ajouter votre image à l'intérieur d'une tranche bitmap

Il est maintenant temps d'ajouter votre image sur votre document directement en utilisant le *Bitmap Slice*.

1.  Sur votre navigateur, ouvrez sur un onglet le formulaire *Supports visuels* sur _99Bank_ de votre document et sur un autre ouvrez votre _PBOML Visual Editor_ comme expliqué dans la section [Ouverture de l'éditeur](./getting-started.html#opening-the-editor).
2.  Sur le _PBOML Visual Editor_, ajoutez une *Slice Bitmap* comme expliqué dans la section [*Ajouter une tranche*](./structure-your-document.html#add-a-slice).
3. Dans le formulaire Supports visuels, cliquez sur le bouton <span class="pboml-button"><svg class="svg-inline--fa fa-people-carry-box fa-fw" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="people-carry-box" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M128 95.1c26.5 0 47.1-21.5 47.1-47.1S154.5 0 128 0S80.01 21.5 80.01 47.1S101.5 95.1 128 95.1zM511.1 95.1c26.5 0 47.1-21.5 47.1-47.1S538.5 0 511.1 0c-26.5 0-48 21.5-48 47.1S485.5 95.1 511.1 95.1zM603.5 258.3l-18.5-80.13c-4.625-20-18.62-36.88-37.5-44.88c-18.5-8-38.1-6.75-56.12 3.25c-22.62 13.38-39.62 34.5-48.12 59.38l-11.25 33.88l-15.1 10.25L415.1 144c0-8.75-7.25-16-16-16H240c-8.75 0-16 7.25-16 16L224 239.1l-16.12-10.25l-11.25-33.88c-8.375-25-25.38-46-48.12-59.38c-17.25-10-37.63-11.25-56.12-3.25c-18.88 8-32.88 24.88-37.5 44.88l-18.37 80.13c-4.625 20 .7506 41.25 14.37 56.75l67.25 75.88l10.12 92.63C130 499.8 143.8 512 160 512c1.25 0 2.25-.125 3.5-.25c17.62-1.875 30.25-17.62 28.25-35.25l-10-92.75c-1.5-13-7-25.12-15.62-35l-43.37-49l17.62-70.38l6.876 20.38c4 12.5 11.87 23.5 24.5 32.63l51 32.5c4.623 2.875 12.12 4.625 17.25 5h159.1c5.125-.375 12.62-2.125 17.25-5l51-32.5c12.62-9.125 20.5-20 24.5-32.63l6.875-20.38l17.63 70.38l-43.37 49c-8.625 9.875-14.12 22-15.62 35l-10 92.75c-2 17.62 10.75 33.38 28.25 35.25C477.7 511.9 478.7 512 479.1 512c16.12 0 29.1-12.12 31.75-28.5l10.12-92.63L589.1 315C602.7 299.5 608.1 278.3 603.5 258.3zM46.26 358.1l-44 110c-6.5 16.38 1.5 35 17.88 41.63c16.75 6.5 35.12-1.75 41.62-17.88l27.62-69.13l-2-18.25L46.26 358.1zM637.7 468.1l-43.1-110l-41.13 46.38l-2 18.25l27.62 69.13C583.2 504.4 595.2 512 607.1 512c3.998 0 7.998-.75 11.87-2.25C636.2 503.1 644.2 484.5 637.7 468.1z"></path></svg></span> de l'image que vous souhaitez ajouter pour copier les URL associées.
4.  De retour sur votre tranche *Bitmap* dans l'_Éditeur visuel PBOML_, cliquez sur <Icon hero="clipboard-document"></Icon> *Fill from clipboard* pour insérer les URL que vous avez copiés précédemment dans les champs corrects de la tranche.
5.  Si votre image n'est pas bilingue, répétez les étapes 3 et 4 pour l'autre langue correspondante.

::: info Pourquoi plusieurs URL ?
Plusieurs versions d'une image téléchargée sont générées automatiquement par 99Bank. Ces versions permettent aux navigateurs Web de choisir la résolution et le format de fichier optimaux pour une image donnée en fonction de la résolution de l'écran de l'utilisateur, du type d'appareil, de la connectivité Internet (LTE, wifi, etc.), etc.
:::