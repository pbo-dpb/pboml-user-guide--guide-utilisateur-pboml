# Table Methodology

:::warning
This page is still under development.
:::

:::info Importing tables from Word
If the table is pasted from Word, make sure that the following is satisfied:

- **No merged cells**
- **No units ($, %, etc.) attached to the numerical data**
- **No custom annotations (eg. asterisks refering to notes)**
- **No references in the title of the table**
- **Only one table per table title**
:::

:::info Declaring units for variables 
A unit should be declared for at least one variable in the table. **If all variables have the same unit, you only need to declare the unit of a single variable**. If the variables have different units, you must declare the unit for each individual variable.
:::

:::info Unit in title
For tables where all variables share the same unit, analysts are instructed to declare this unit in the table's title. It is your duty to remove the unit from the title and declare it in the appropriate variable.
:::

:::info Multiple tables sharing titles and/or descriptors
Every table must be individually titled. You cannot use a single slice title to title multiple tables. In the same way, slice descriptors (such as notes and sources) must be declared for each individual table. Presented with a list of tables sharing the same title, set the same title for each individual table while generating unique anchor names (eg. Table 1-1a, Table 1-1b, etc.). If this cannot be done in a logical manner - for example, if the analyst chose to split an obvious single tables so it fits on a single page - treat this table as an *impossible table*.
:::

:::info Respecting the propreties of a variable
Variable should be rows of data of the same type. For example, if the variable is a percentage, all values should be percentages. If the variable is a dollar amount, all values should be too. Tables that mix different types of data in the same variable should be treated as *impossible tables*.
:::

:::info Impossible table
Sometimes, tables are too complex to be imported into the editor. In this case, you must contact the analyst and ask them to reformat the table in an acceptable manner. Alternatively - if the resources are available - you can ask Web developers to write a custom HTML slice for these tables.
:::