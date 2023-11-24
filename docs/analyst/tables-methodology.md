# Tables

:::details Tables are only used to present data

### Reason

Tables are not meant to be used for styling or formatting content. They are meant to present data in a structured manner. They should also only contain tabular data.

### Valid

If you use a table it is only for it to contain data

### Invalid

Tables that are used to create a layout or to arrange content.

:::

:::details The first row and the first column of a table must be used to describe the data

### Reason

In a table both the first row and column of a table are headers. They describe the value using two different aspects. For example, the first row could describe the values using a temporal aspect while the first column would describe the values using a categorical aspect.

If your table doesn't follow this form, you might want to consider splitting it into multiple tables or use another presentation method (such as a list).

### Valid

| Fiscal Year | 2023-2024 | 2024-2025 | 2025-2026 | 3-Year Total |
| :---: | :---: | :---: | :---: | :---: |
| Total cost | 7   | 7   | 7   | 21  |

### Invalid

> A table with a single aspect

| 2023-2024 | 2024-2025 | 2025-2026 | 3-Year Total |
| :---: | :---: | :---: | :---: |
| 7   | 7   | 7   | 21  |

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

:::details Merge cells are prohibited (with one exception)

### Reason

Merge cells are not supported by the editor and can be challenging to implement and maintain in HTML. Additionally, when exported to PDF from Word, merge cells are not accessible. If your table contains merge cells, it is recommended to split the table into multiple tables or use alternative presentation methods, such as a list.

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

There is one exception to this rule: when one aspect of the described data can be grouped in a overarching category, merged cells can be used by the integrator to avoid repeating prefixes or suffixes in the table. This exception if limited in scope; please consult the production team if you think your table might be eligible for this exception.

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

:::details Do not include units with the data

### Reason

This allows the table to be more readable. It also facilitates the conversion process.

If your table contain aspects that have different units, you can include the unit in the heading cell of the column or row. If your table data share the same unit, you can include the unit in the title of the table or by indicating the unit above the table.


### Valid


| Year | 2030 | 2031 | 2032 | 2033 | 2034 |
| --- | --- | --- | --- | --- | --- |
| Attendance (%) | 25 | 26 | 23 | 24 | 24 |
| Cost ($) | 300 | 305 | 308 | 312 | 317 |


**Table 1-1 - Total GHG emissions in the agricultural sector broken down by activity**

> Millions of tonnes (Mt)

| Year | 2017 | 2018 | 2019 | 2020 | 2021 |
| --- | --- | --- | --- | --- | --- |
| Animal Production | 34.8 | 35  | 34.9 | 34.8 | 34.9 |
| Crop Production | 17.3 | 18.5 | 18.7 | 20.7 | 19.4 |
| On-Farm Fuel Use | 14.4 | 15  | 15.3 | 14.3 | 14.3 |

### Invalid


| Year | 2030 | 2031 | 2032 | 2033 | 2034 |
| --- | --- | --- | --- | --- | --- |
| Attendance | 25% | 26% | 23% | 24% | 24% |
| Cost | $300 | $305 | $308 | $312 | $317 |




| Year | 2017 | 2018 | 2019 | 2020 | 2021 |
| --- | --- | --- | --- | --- | --- |
| Animal Production | 34.8 Mt | 35 Mt | 34.9 Mt | 34.8 Mt | 34.9 Mt |
| Crop Production | 17.3 Mt | 18.5 Mt | 18.7 Mt | 20.7 Mt | 19.4 Mt |
| On-Farm Fuel Use | 14.4 Mt | 15 Mt | 15.3 Mt | 14.3 Mt | 14.3 Mt |

:::



:::details Cell A1 should describe the either the row or column

### Reason

The first cell of your table is for tabular data: it should describe the either the row or column. Do not leave it blank or use it for any other purpose, as it might trip screen readers.

### Valid

> $ millions

| Year | 2017 | 2018 | 2019 | 2020 | 2021 |
| --- | --- | --- | --- | --- | --- |
| Animal Production | 34.8 | 35  | 34.9 | 34.8 | 34.9 |
| Crop Production | 17.3 | 18.5 | 18.7 | 20.7 | 19.4 |
| On-Farm Fuel Use | 14.4 | 15  | 15.3 | 14.3 | 14.3 |

### Invalid

| $ millions | 2023-2024 | 2024-2025 | 2025-2026 | 3-Year Total |
| :---: | :---: | :---: | :---: | :---: |
| Total cost | 7   | 7   | 7   | 21  |

:::

