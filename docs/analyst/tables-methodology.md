# Tables

:::details A table should only be used to represent data

### Reason

Facilitates conversion and reduces ambiguity

### Valid

If you use a table it is only for it to contain data

### Invalid

- Using a table to format text
- Using a table for styling

:::

:::details A table should have one column (or row) that defines the variables of the table

### Reason

To know what data is being presented

### Valid

> The first column on the left is the one that defines the variables of the table 

**Cost of proposed measure ($ millions)**

| Fiscal Year | 2023-2024 | 2024-2025 | 2025-2026 | 3-Year Total |
| :---: | :---: | :---: | :---: | :---: |
| Total cost | 7   | 7   | 7   | 21  |

### Invalid

**Cost of proposed measure ($ millions)**

| 2023-2024 | 2024-2025 | 2025-2026 | 3-Year Total |
| :---: | :---: | :---: | :---: |
| 7   | 7   | 7   | 21  |

:::

:::details A table must have an index

### Reason

A table without index or with multiple indexes is an unstructured table that is difficult to read and understand

### Valid

> The first row on the top is the one that indexes the variables of the table  

**Cost of proposed measure ($ millions)**

| Fiscal Year | 2023-2024 | 2024-2025 | 2025-2026 | 3-Year Total |
| :---: | :---: | :---: | :---: | :---: |
| Total cost | 7   | 7   | 7   | 21  |

### Invalid

**Cost of proposed measure ($ millions)**

| Total cost | 7   | 7   | 7   | 21  |
| :---: | :---: | :---: | :---: | :---: |

:::

:::details All tables must be titled individually

### Reason

Separate tables should not be title collectively because it can cause confusion as to what the table represents.

### Valid

**Table 1 - 2023–2024 Viennese Pastry Consumption Forecast (in units)**

| Person | Number of Chocolate Croissants | Number of Croissants |
| --- | --- | --- |
| Alice | 56  | 15  |
| René | 4   | 27  |

**Table 2 - 2024–2025 Viennese Pastry Consumption Forecast (in units)**

| Person | Number of Chocolate Croissants | Number of Croissants |
| --- | --- | --- |
| Alice | 43  | 2   |
| René | 1   | 26  |

### Invalid

**Table 1 - 2023–2024 and 2024–2025 Viennese Pastry Consumption Forecast (in units)**

| Person | Number of Chocolate Croissants | Number of Croissants |
| --- | --- | --- |
| Alice | 56  | 15  |
| René | 4   | 27  |

| Person | Number of Chocolate Croissants | Number of Croissants |
| --- | --- | --- |
| Alice | 43  | 2   |
| René | 1   | 26  |

:::

:::details (See exception) If your table contains merged cells, modify your table so that no merged cell is used

### Reason

Merge cells are particularily not accessible in web format

### Valid

| **Qualifying period** | **Period 20** | **Period 21** | **Period 22** |
| --- | --- | --- | --- |
| Qualifying period dates |  August 29 to September 25, 2021 | September 26 to October 23, 2021 | October 24 to November 20, 2021 |
| Subsidy rate | 40% | 30% | 20% |

**Note**
Baseline period: March 14 to April 10, 2021

### Invalid

<table>
<tbody>
<tr>
<td width="79">
<p><strong>Qualifying period</strong></p>
</td>
<td width="79">
<p><strong>Period 20</strong></p>
</td>
<td width="79">
<p><strong>Period 21</strong></p>
</td>
<td width="79">
<p><strong>Period 22</strong></p>
</td>
</tr>
<tr>
<td width="79">
<p>Qualifying period dates</p>
</td>
<td width="79">
<p>August 29 to September 25, 2021</p>
</td>
<td width="79">
<p>September 26 to October 23, 2021</p>
</td>
<td width="79">
<p>October 24 to November 20, 2021</p>
</td>
</tr>
<tr>
<td width="79">
<p>Baseline</p>
<p>period</p>
</td>
<td colspan="3" width="236">
<p>March 14 to April 10, 2021</p>
</td>
</tr>
<tr>
<td width="79">
<p>Subsidy</p>
<p>rate</p>
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

> There is an exception to this rule when you want to group variables/fields together on a table

<table>
<thead>
<tr>
<td>&nbsp;</td>
<th scope="row" width="16.666666666666664%">
<div>
<p>Fiscal Year</p>
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
<th rowspan="2" scope="rowgroup">Quebec</th>
<th scope="row" width="16.666666666666664%">
<div>
<p>Measure 1</p>
</div>
</th>
<td width="22.222222222222218%">1</td>
<td width="22.222222222222218%">1</td>
<td width="22.222222222222218%">1</td>
</tr>
<tr>
<th scope="row" width="16.666666666666664%">
<div>
<p>Measure 2</p>
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
<p>Measure 1</p>
</div>
</th>
<td width="22.222222222222218%">1</td>
<td width="22.222222222222218%">1</td>
<td width="22.222222222222218%">1</td>
</tr>
<tr>
<th scope="row" width="16.666666666666664%">
<div>
<p>Measure 2</p>
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
<p>Total cost</p>
</div>
</th>
<td width="22.222222222222218%">4</td>
<td width="22.222222222222218%">4</td>
<td width="22.222222222222218%">4</td>
</tr>
</tbody>
</table>

:::

:::details If your table contains numerical data, do not attach the units to the numbers

### Reason

This allows the table to be more readable and easier to maintain if it ever needs to be modified

### Valid

**Table 1-1 - Total GHG emissions in the agricultural sector broken down by activity**

> Millions of tonnes (Mt)

| Year | 2017 | 2018 | 2019 | 2020 | 2021 |
| --- | --- | --- | --- | --- | --- |
| Animal Production | 34.8 | 35  | 34.9 | 34.8 | 34.9 |
| Crop Production | 17.3 | 18.5 | 18.7 | 20.7 | 19.4 |
| On-Farm Fuel Use | 14.4 | 15  | 15.3 | 14.3 | 14.3 |

### Invalid

**Table 1-1 - Total GHG emissions in the agricultural sector broken down by activity**

| Year | 2017 | 2018 | 2019 | 2020 | 2021 |
| --- | --- | --- | --- | --- | --- |
| Animal Production | 34.8 Mt | 35 Mt | 34.9 Mt | 34.8 Mt | 34.9 Mt |
| Crop Production | 17.3 Mt | 18.5 Mt | 18.7 Mt | 20.7 Mt | 19.4 Mt |
| On-Farm Fuel Use | 14.4 Mt | 15 Mt | 15.3 Mt | 14.3 Mt | 14.3 Mt |

:::