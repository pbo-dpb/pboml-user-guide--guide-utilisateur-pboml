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
3.  Click on the *Advanced settings* button  <Icon hero="adjustments-vertical"></Icon>
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

Adding data is straightforward. First, make sure the `Tabular data` tab is selected. Click on the *Add values* <Icon hero="arrow-right-circle"></Icon> button at the bottom-right of the table in the editor to add a column.

Tabular data can be filled-in to the table in a visual way that mimics how the table will be ultimately rendered (in most cases).

::: warning One cell, two fields
Values of variables that have their content type set to *Markdown* present two fields in each of the editor's table cells: one allow you to input the English content and the other one is for the French. These two fields are displayed in a similar manner as what you can encounter in other Markdown fields across multiple slice types but that presentation might be confusing in a table. Make sure to input the content in the correct field.
:::

## Emphasis columns or rows

You can emphasis columns or rows to add visual emphasis on your table.

To emphasis a column, go to the *Tabular data* section and click on the star icon <Icon hero="star"></Icon> of the column that you wish to add emphasis.

To emphasis a row, go to the *Variables section* and click on the <Icon hero="star"></Icon> of the variable you want to emphasis (which represents a row of the table).

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

1.  First, click on the *Import* button  <Icon hero="arrow-down-on-square"></Icon>. Then copy the table from Word directly in both their English and French equivalent and past them on their respective field using the *Paste from Word* button <Icon hero="clipboard-document-list"></Icon>
2.  If you don't check the *Replace existing table data* checkbox and your slice already contains variables and tabular data, the editor will attempt to merge the imported table with the existing one. This function uses the variable's names to replace existing data by the newly imported values while preserving additional metadata (such as variable units and groups). This is a convenient method to update a table that has been modified in Word. If, on the contrary, you don't want to preserve existing variables and tabular data, you can check the *Replace existing table data* checkbox; existing content will be overwritten.
3.  Then you can tell the editor the location of your index: is it the *first column* or the *first row*.
4.  When you are satisfied with the look of your table as displayed on the bottom of the editor table slice, click on the *Import* button <Icon hero="check-circle"></Icon>.
5.  But wait, you’re not over yet! You must carefully verify in the *Variables* section that the content type for each variable is correct. If your table contains number, make sure to set their associated variable to the content type *Number*.
Also, if needed, make sure that you have filled in the *Group by label* and unit fields for each variable that is concerned (see section [Adding Variables](./tables.html#adding-variables)).
