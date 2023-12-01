# Tableaux

:::details Les tableaux ne doivent être utilisés que pour présenter des données

### Raison

Les tableaux ne doivent pas être utilisés pour la mise en forme ou la présentation du contenu. Ils sont destinés à présenter des données de manière structurée. Ils ne doivent également contenir que des données tabulaires.

### Valide

Si vous utilisez un tableau, c'est uniquement pour qu'il contienne des données

### Invalide

Tableaux utilisés pour la mise en forme ou la présentation du contenu

:::

:::details La première ligne et la première colonne d'un tableau doivent être utilisées pour décrire les données

### Raison

Dans un tableau, la première ligne et la première colonne d'un tableau sont des en-têtes. Ils décrivent la valeur en utilisant deux aspects différents. Par exemple, la première ligne pourrait décrire les valeurs en utilisant un aspect temporel tandis que la première colonne décrirait les valeurs en utilisant un aspect catégoriel.

Si votre tableau ne suit pas cette forme, vous devriez peut-être envisager de le diviser en plusieurs tableaux ou d'utiliser une autre méthode de présentation (comme une liste).

### Valide

| Exercice financier | 2023-2024 | 2024-2025 | 2025-2026 | Total sur 3 ans |
| :---: | :---: | :---: | :---: | :---: |
| Coût total | 7   | 7   | 7   | 21  |

### Invalide

> Un tableau avec un seul aspect

| 2023-2024 | 2024-2025 | 2025-2026 | Total sur 3 ans |
| :---: | :---: | :---: | :---: |
| 7   | 7   | 7   | 21  |

:::

:::details Tous les tableaux doivent être titrés individuellement

### Raison

Les tableaux distincts ne doivent pas être intitulés collectivement, car cela peut prêter à confusion quant à ce qu'ils représentent.

### Valide

**Tableau 1 - Prévisions de la consommation de viennoiseries pour 2023–2024 (en unités)**

| Personne | Nombre de chocolatine | Nombre de croissants |
| --- | --- | --- |
| Alice | 56  | 15  |
| René | 4   | 27  |

**Tableau 2 - Prévisions de la consommation de viennoiseries pour 2024–2025 (en unités)**

| Personne | Nombre de chocolatine | Nombre de croissants |
| --- | --- | --- |
| Alice | 43  | 2   |
| René | 1   | 26  |

### Invalide

**Tableau 1 - Prévisions de consommation de viennoiseries pour 2023-2024 et 2024-2025 (en unités)**

| Personne | Nombre de chocolatine | Nombre de croissants |
| --- | --- | --- |
| Alice | 56  | 15  |
| René | 4   | 27  |

| Person | Nombre de chocolatine | Nombre de croissants |
| --- | --- | --- |
| Alice | 43  | 2   |
| René | 1   | 26  |

:::

:::details Les cellules fusionnées sont proscrites (avec une exception)

### Raison

Les cellules fusionnées ne sont pas prises en charge par l'éditeur et peuvent être difficiles à implémenter et à maintenir en HTML. De plus, lorsqu'elles sont exportés au format PDF à partir de Word, les cellules fusionnées ne sont pas accessibles. Si votre tableau contient des cellules fusionnées, il est recommandé de diviser le tableau en plusieurs tableaux ou d'utiliser des méthodes de présentation alternatives, comme une liste.

### Valide

| **Période de référence** | **Période 20** | **Période 21** | **Période 22** |
| --- | --- | --- | --- |
| Dates de la période de référence |  Du 29 août au 25 septembre 2021 | Du 26 septembre au 23 octobre 2021 | Du 24 octobre au 20 novembre 2021 |
| Taux de subvention | 40% | 30% | 20% |

**Note**

Période de référence : Du 14 mars au 10 avril 2021

### Invalide

<table>
<tbody>
<tr>
<td width="79">
<p><strong>Période de référence</strong></p>
</td>
<td width="79">
<p><strong>Période 20</strong></p>
</td>
<td width="79">
<p><strong>Période 21</strong></p>
</td>
<td width="79">
<p><strong>Période 22</strong></p>
</td>
</tr>
<tr>
<td width="79">
<p>Dates de la période de référence</p>
</td>
<td width="79">
<p>Du 29 août au 25 septembre 2021</p>
</td>
<td width="79">
<p>Du 26 septembre au 23 octobre 2021</p>
</td>
<td width="79">
<p>Du 24 octobre au 20 novembre 2021</p>
</td>
</tr>
<tr>
<td width="79">
<p>Base de référence</p>
<p>période</p>
</td>
<td colspan="3" width="236">
<p>Du 14 mars au 10 avril 2021</p>
</td>
</tr>
<tr>
<td width="79">
<p>Subvention</p>
<p>taux</p>
</td>
<td width="79">
<p>40%</p>
</td>
<td width="79">
<p>30%</p>
</td>
<td width="79">
<p>20%</p>
</td>
</tr>
</tbody>
</table>

### Exception

Il existe une exception à cette règle : lorsqu'un aspect des données décrites peut être regroupé dans une catégorie globale, l'intégrateur peut utiliser des cellules fusionnées pour éviter de répéter les préfixes ou les suffixes dans le tableau. Cette exception est limitée ; veuillez consulter l'équipe de production si vous pensez que votre tableau peut bénéficier de cette exception.

<table>
<thead>
<tr>
<td>&nbsp;</td>
<th scope="row" width="16.666666666666664%">
<div>
<p>Exercice financier</p>
</div>
</th>
<th scope="col" width="22.222222222222218%">
<p>2023&shy;-2024</p>
</th>
<th scope="col" width="22.222222222222218%">
<p>2024&shy;-2025</p>
</th>
<th scope="col" width="22.222222222222218%">
<p>2025&shy;-2026</p>
</th>
</tr>
</thead>
<tbody>
<tr>
<th rowspan="2" scope="rowgroup">Québec</th>
<th scope="row" width="16.666666666666664%">
<div>
<p>Mesure 1</p>
</div>
</th>
<td width="22.222222222222218%">1</td>
<td width="22.222222222222218%">1</td>
<td width="22.222222222222218%">1</td>
</tr>
<tr>
<th scope="row" width="16.666666666666664%">
<div>
<p>Mesure 2</p>
</div>
</th>
<td width="22.222222222222218%">1</td>
<td width="22.222222222222218%">1</td>
<td width="22.222222222222218%">1</td>
</tr>
</tbody>
<tbody>
<tr>
<th rowspan="2" scope="rowgroup">Ontario</th>
<th scope="row" width="16.666666666666664%">
<div>
<p>Mesure 1</p>
</div>
</th>
<td width="22.222222222222218%">1</td>
<td width="22.222222222222218%">1</td>
<td width="22.222222222222218%">1</td>
</tr>
<tr>
<th scope="row" width="16.666666666666664%">
<div>
<p>Mesure 2</p>
</div>
</th>
<td width="22.222222222222218%">1</td>
<td width="22.222222222222218%">1</td>
<td width="22.222222222222218%">1</td>
</tr>
</tbody>
<tbody>
<tr>
<th rowspan="1" scope="rowgroup">&nbsp;</th>
<th scope="row" width="16.666666666666664%">
<div>
<p>Coût total</p>
</div>
</th>
<td width="22.222222222222218%">4</td>
<td width="22.222222222222218%">4</td>
<td width="22.222222222222218%">4</td>
</tr>
</tbody>
</table>

:::

:::details Ne pas inclure d'unités dans les données

### Raison

Cela permet au tableau d'être plus lisible. Cela facilite également le processus de conversion.

Si votre tableau contient des aspects qui ont des unités différentes, vous pouvez inclure l'unité dans la cellule d'en-tête de la colonne ou de la ligne. Si les données de votre tableau partagent la même unité, vous pouvez inclure l'unité dans le titre du tableau ou en indiquant l'unité au-dessus du tableau.


### Valide


| Année | 2030 | 2031 | 2032 | 2033 | 2034 |
| --- | --- | --- | --- | --- | --- |
| Fréquentation (%) | 25 | 26 | 23 | 24 | 24 |
| Coût ($) | 300 | 305 | 308 | 312 | 317 |


**Tableau 1-1 - Émissions totales de GES dans le secteur agricole, ventilées par activité**

> Millions de tonnes (Mt)

| Année | 2017 | 2018 | 2019 | 2020 | 2021 |
| --- | --- | --- | --- | --- | --- |
| Production animale | 34,8 | 35  | 34,9 | 34,8 | 34,9 |
| Production végétale | 17,3 | 18,5 | 18,7 | 20,7 | 19,4 |
| Utilisation de carburant à la ferme | 14,4 | 15  | 15,3 | 14,3 | 14,3 |

### Invalide


| Année | 2030 | 2031 | 2032 | 2033 | 2034 |
| --- | --- | --- | --- | --- | --- |
| Fréquentation | 25% | 26% | 23% | 24% | 24% |
| Coût | $300 | $305 | $308 | $312 | $317 |




| Année | 2017 | 2018 | 2019 | 2020 | 2021 |
| --- | --- | --- | --- | --- | --- |
| Production animale | 34,8 Mt | 35 Mt | 34,9 Mt | 34,8 Mt | 34,9 Mt |
| Production végétale | 17,3 Mt | 18,5 Mt | 18,7 Mt | 20,7 Mt | 19,4 Mt |
| Utilisation de carburant à la ferme | 14,4 Mt | 15 Mt | 15,3 Mt | 14,3 Mt | 14,3 Mt |

:::



:::details La cellule A1 doit décrire la ligne ou la colonne.

### Raison

La première cellule de votre tableau est destinée aux données tabulaires : elle doit décrire la ligne ou la colonne. Ne la laissez pas vide et ne l'utilisez pas à d'autres fins, car elle pourrait perturber les lecteurs d'écran.

### Valide

> Millions de dollars

| Exercice financier | 2023-2024 | 2024-2025 | 2025-2026 | Total sur 3 ans |
| :---: | :---: | :---: | :---: | :---: |
| Coût total | 7   | 7   | 7   | 21  |

### Invalide

| Millions de dollars | 2023-2024 | 2024-2025 | 2025-2026 | Total sur 3 ans |
| :---: | :---: | :---: | :---: | :---: |
| Coût total | 7   | 7   | 7   | 21  |

:::

