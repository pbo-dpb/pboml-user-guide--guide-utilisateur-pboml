# Tables

Tables can be added to your document with a table slice. The table slice is probably the most complex slice you’ll encounter. But don’t worry, once you understand this slice, creating a table will be easy. Like with any slice, you can find instructions on how to add a Table slice in the section [*Add a slice*](./structure-your-document.html#add-a-slice).

## The Anatomy of a Table Slice

The table slice editing area is composed of two editing sections: *Tabular data*, and *Variables*. The *Tabular data* section is where you **can modify the values of your table**; the *Variable* section is where the variables of the table are **defined**. Variables describe the type of content found in the tabular data section.

### Demonstration - Complexe Table Slice

<PbomlWidget sample="/samples/lesser_complexe_table.pboml.yaml" mode="edit"></PbomlWidget>

## Variables

When adding variables for your table, the first variable you add is the one that will describe all subsequent variables: the index row is the variable that describes the content of subsequent rows' content.

### Defining the index row variable

You could compare the index row variable to the *y* axis of a graph. 

Often, this variable will contain markers of time: for example, *Fiscal Year*, *Quarter*, *months*, etc. However, any type of discrete or continuous values can be contained within the index row variable. For instance, if each column of a table describes a person, then the index row variable would be named `Person` while subsequent variables could each describe a piece of information regarding the persons: first name, last name, date of birth, etc.

The index row variable must be positively differentiated from the other variables by checking the *Describe column contents* checkbox. 

::: warning
Only **one variable** can describe the column contents.
:::

1.  Go to the Variables tab of the Table slice you're editing.
2.  Find the variable that will be the index column.
3.  Click on the *Advanced settings* button <span class="pboml-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-4 w-4"><path d="M6 12a.75.75 0 01-.75-.75v-7.5a.75.75 0 111.5 0v7.5A.75.75 0 016 12zM18 12a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0v7.5A.75.75 0 0118 12zM6.75 20.25v-1.5a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0zM18.75 18.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 011.5 0zM12.75 5.25v-1.5a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0zM12 21a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0v7.5A.75.75 0 0112 21zM3.75 15a2.25 2.25 0 104.5 0 2.25 2.25 0 00-4.5 0zM12 11.25a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zM15.75 15a2.25 2.25 0 104.5 0 2.25 2.25 0 00-4.5 0z"></path></svg></span>
4. Check the *Describes column contents* checkbox

You must also indicate the type of content that will be contained in the variable. Two content types are currently available: Markdown, which represents text; and, Number, which only represents numbers decimal or not. This will be explained in the following section.

### Adding variables

Adding variables follows similar steps to defining the index column. Before we go into the steps, you first need to understand the grouping mechanism and units.

#### Variable groups
Table slices allow you to group variables together. To group variables together, go to the *Group by label* field under the *Advanced settings* and enter the label by which you want to group your variables. For a good example of how that looks, see the [Demo](./tables.html#demonstration-complexe-table-slice).

All variables sharing the same label will appear as grouped together - grouped under that label - in the table. Groups will be created in order of first appearance amongst variables. Reordering of groups or variables can only be accomplished by reordering them in the raw PBOML's `variables` object.

#### Variable units
Each variable can define the type of units it contains. You can state, for example, in the Units field found in the *Advanced settings* of a variable that the units can be “$ Million”, “$”, “%”, etc.

::: tip
If all your variables have the same unit, you only need to define the unit for a single variable.
:::

Now that you understand what grouping and units are in a table slice, here are the steps that you can follow in order to add new variables:

1.  Go to the *Variables* section
2.  Click on **➕ New variable** to add a new variable. You will see a prompt appear that will ask you to enter the name of that new variable. You then enter the new variable's key value
3.  Under the “Label” section, change the name of that variable for both English and French
4.  In the variable editing area, choose between *Markdown* (for rich text content) or *Number* (for numeric content)
5.  If needed, you can group variables by specifying a common group label in the Group by label fields
6.  If needed, you can define the units that are described by the variable

## Tabular data

Once you have added your variables, you can now add data to your table.

### Add values

Adding data is straightforward. First, make sure the `Tabular data` tab is selected. Click on the *Add values* <span class="pboml-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-4 w-4"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h4.59l-2.1 1.95a.75.75 0 001.02 1.1l3.5-3.25a.75.75 0 000-1.1l-3.5-3.25a.75.75 0 10-1.02 1.1l2.1 1.95H6.75z" clip-rule="evenodd"></path></svg></span> button at the bottom-right of the table in the editor to add a column.

Tabular data can be filled-in to the table in a visual way that mimics how the table will be ultimately rendered (in most cases).

::: warning One cell, two fields
Values of variables that have their content type set to *Markdown* present two fields in each of the editor's table cells: one allow you to input the English content and the other one is for the French. These two fields are displayed in a similar manner as what you can encounter in other Markdown fields across multiple slice types but that presentation might be confusing in a table. Make sure to input the content in the correct field.
:::

## Emphasis columns or rows

You can emphasis columns or rows to add visual emphasis on your table.

To emphasis a column, go to the *Tabular data* section and click on the star icon <span class="pboml-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-4 w-4"><path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd"></path></svg></span> of the column that you wish to add emphasis.

To emphasis a row, go to the *Variables section* and click on the <span class="pboml-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-4 w-4"><path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd"></path></svg></span> of the variable you want to emphasis (which represents a row of the table).

## Delete columns or rows

You can delete columns or rows on your table.

To delete a column, go to the *Tabular data* section and click on the trash icon 🗑️ of the column that you wish to delete.

To delete a row, go to the “Variables” section and click on the trash icon 🗑️ of the variable you want to delete (which represents a row of the table).

## Converting a table from Word to the PBOML Editor

::: tip
Follow along with the [Demo](./tables.html#demonstration-complexe-table-slice). You can use a table that you created on Word, as long as it uses a compatible data structure:
-  The first column or row must contain the variables
-  Merged cells are not supported
-  Variable groups cannot be imported using this method.

The following table is a good example of a table that can easily be imported from Word using the PBOML Editor:

| Fiscal year | 2023-2024 | 2024-2025 | 2025-2026 | 2026-2027 | 2027-2028 | Total |
| --- | --- | --- | --- | --- | --- | --- |
| Total cost | 52  | 0   | 0   | 0   | 0   | 52  |

The first column will be used by the editor to create two variables: *Fiscal year* and *Total cost*.
The *Fiscal year* variable will be marked as describing column's values as it is the index row variable. It will contain *2023-2024*, *2024-2025*, etc. as its tabular data.
The *Total cost* variable will contain *52*, *0*, etc. as its tabular data.

:::

Since it can be very tedious to create or update a complete table on the editor (especially when there are many rows and columns), the PBOML Visual Editor allows you to import a table from Word using a simple copy and paste. The conversion process, however, doesn't have much tolerance for edge cases. You might be required to modify certain variables and tabular data directly to avoid introducing errors or dropping content in the process.

1.  First, click on the *Import* button <span class="pboml-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-6 w-6"><path d="M12 1.5a.75.75 0 01.75.75V7.5h-1.5V2.25A.75.75 0 0112 1.5zM11.25 7.5v5.69l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V7.5h3.75a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9a3 3 0 013-3h3.75z"></path></svg></span>. Then copy the table from Word directly in both their English and French equivalent and past them on their respective field using the *Paste from Word* button <span class="pboml-button"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"></path></svg></span>
2.  An error might show up if there was already a table contained in the table slice. If you no longer need that previous table, check the *Replace existing table data* checkbox. This will override what was previously inside that table slice. If you don't check this checkbox, the editor will attempt to merge the new table with the existing one using the variable's names. This is a convenient method to update a table that has been modified in Word.
3.  Then you can tell the editor the location of your index: is it the *first column* or the *first row*.
4.  When you are satisfied with the look of your table as displayed on the bottom of the editor table slice, click on the *Import* button <span class="pboml-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-4 h-4"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"></path></svg></span>.
5.  But wait, you’re not over yet! You must carefully verify in the *Variables* section that the content type for each variable is correct. If your table contains number, make sure to set their associated variable to the content type *Number*.
Also, if needed, make sure that you have filled in the *Group by label* and unit fields for each variable that is concerned (see section [Adding Variables](./tables.html#adding-variables)).
