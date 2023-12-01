# Méthodologie des paragraphes et du contenu textuel

:::warning Avertissement
Cette page est encore en cours de développement.
:::


:::info Coller à partir de Word
Utilisez le bouton Coller à partir de Word pour coller du contenu à partir de Word. Cela convertira le formatage en Markdown et supprimera tout artefact indésirable.
:::


:::info Importer des notes de bas de page/de fin de document depuis Word
Les références ne sont pas collées automatiquement à partir de Word : vous devez les trouver manuellement dans le texte et les éditer manuellement. Pour faciliter ce processus, l'éditeur remplacera les références par un espace réservé contenant un cercle orange vif : `[^🟠]`.
:::


:::info Structure en tranches Markdown
Il n'y a pas de minimum ou de maximum à la longueur d'une tranche Markdown. Lorsque vous importez de longs documents, gardez à l'esprit que la structure doit être construite en utilisant une combinaison de tranches de contenu et de rubriques : même si l'éditeur vous permet d'importer des rubriques à l'intérieur d'une tranche de Markdown, cela n'est pas recommandé.
:::


:::info Descripteurs de tranches invisibles
Rappelez-vous que le descripteur de description textuelle est invisible pour la plupart des utilisateurs par défaut dans le document final. Il s'agit d'une distinction importante par rapport au document Word original des publications où la description textuelle est toujours affichée.
:::


:::info Tableaux dans les paragraphes
Si le paragraphe contient un tableau, utilisez une tranche de tableau. Il existe des exceptions à cette règle : Les tableaux Markdown peuvent être utilisés à l'intérieur de la description textuelle et des descripteurs de notes. Ils peuvent également être inclus dans les notes et les références.
:::


:::info Formules mathématiques 
Si le paragraphe contient des formules mathématiques, il faut les entourer de délimiteurs $$.
:::


:::info Puces à plusieurs niveaux
Les puces à plusieurs niveaux sont prises en charge dans les tranches Markdown. Utilisez le nombre approprié d'espaces pour créer le niveau d'indentation souhaité. Notez que l'importation de notes à plusieurs niveaux à partir de Word peut s'avérer délicate : vous devrez peut-être modifier manuellement l'indentation des puces.
:::


:::info Souligner du texte
N'utilisez pas de texte souligné, utilisez plutôt **gras** ou *accentuation en italique*. N'utilisez le texte souligné que pour les liens.
:::


:::info Puces
Préférez le caractère - pour les puces. Le caractère * est également supporté mais doit être évité.
:::


:::info Annotations avec astérisques
L'utilisation du caractère astérisque (*) pour annoter du texte ou des valeurs de cellules de tableau n'est pas prise en charge. Si vous le pouvez, utilisez plutôt la fonction d'annotation Notes et références. Si, pour une raison quelconque, il n'est pas possible d'utiliser de véritables annotations, utilisez un autre caractère (tel que †, §, Δ ou ◊) à la place de l'astérisque pour éviter que le moteur de rendu ne l'interprète comme un caractère de formatage Markdown.
:::