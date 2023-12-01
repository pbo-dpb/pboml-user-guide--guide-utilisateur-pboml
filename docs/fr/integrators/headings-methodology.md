# Méthodologie des en-têtes


:::warning Avertissement
Cette page est encore en cours de développement.
:::


:::info Méthode d'intitulé appropriée
En fonction de la structure du document, utilisez la méthode d'intitulé appropriée : soit des tranches d'intitulé pour les documents complexes, soit des titres de tranche pour les documents *plats*. Il n'est pas possible de mélanger les deux méthodes pour les objets du flux principal du document.
:::


:::info Les titres de tranches doivent être fournis pour les tranches non en ligne.
Les éléments situés en dehors du flux principal du document (figures/tables et boîtes (apartés)) doivent toujours être titrés à l'aide des titres de tranche. Ceci est vrai même si le document utilise des tranches de type Heading.
:::


:::info Les références ne peuvent pas être utilisées dans les titres
Les titres étant utilisés pour générer la table des matières, ils ne peuvent pas contenir de références. Ceci s'applique à la fois aux tranches Heading et aux titres de tranches.
:::


:::info Le format Markdown n'est pas autorisé dans les titres
Le format Markdown n'est pas autorisé dans les titres. Ceci s'applique à la fois aux tranches de titres et aux titres de tranches.
:::


:::info Les tranches des documents plats sont autonomes
Si votre publication n'utilise que des titres de tranches comme structure de soutien, chaque tranche doit être autonome. En d'autres termes, tout le contenu étiqueté par un titre de tranche donné doit être contenu dans cette tranche. Ce n'est pas le cas pour les documents basés sur des tranches de titre : le contenu décrit par une tranche de titre est contenu dans toutes les tranches qui la suivent jusqu'à la tranche de titre suivante.
:::


:::info Ancres
Certains titres ont une ancre (par exemple *Tableau 1-1*, *Figure 1-1*, *Annexe A*, etc.) L'ancre ne fait pas partie du titre de la tranche ni du contenu de la rubrique : elle doit être soigneusement enregistrée dans le champ localisé *anchor*. Ne fusionnez pas l'ancre avec le reste de la rubrique, car elle ne serait pas correctement enregistrée dans la table des matières et les annotations.
:::