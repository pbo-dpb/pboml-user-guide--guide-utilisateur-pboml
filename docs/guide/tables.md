# Tables

Tables can be added to your document with a table slice. The table slice is probably the most complex slice you’ll encounter. But don’t worry, once you understand this slice, creating a table will be easy. Like with any slice, to add a Table slice as explained in the section [*Add a slice*](./structure-your-document.html#add-a-slice).

## The Anatomy of a Table Slice

The table slice editing area is composed of two editing section: *Tabular data*, and *Variables*. The *Tabular data* section is where you **can modify the values of your table**; the *Variable* section is where the variables of the table are **defined**. Variables describe the type of content found in the tabular data section.

### Demonstration - Complexe Table Slice

<PbomlWidget sample="/samples/lesser_complexe_table.pboml.yaml" mode="edit"></PbomlWidget>

## Variables

When adding variable for your graph, the first variable you add is the one that will describe all subsequent variables: the index column is the variable that describes the column contents. A variable can be, for example, *Years*, *Cost* or *Total cost*. You could compare it to the *y* axis of a graph.

### Defining the index column

The variable that often is used to describe the column content is time: for example, *Fiscal Year*, *Quarter*, *months*, etc.

Qualitative information can also be the variable that is used to describe the column content: for instance, if each row describes a person, then each column could describe a piece of information regarding that person: first name, last name, date of birth, City of birth, etc.

That variable must be properly differentiated from the others by checking the *Describe column contents* check box. 

::: warning
Only **one variable** can describe the column contents.
:::

1.  Go to the Variables section of the Table slice your editing
2.  Find the variable that will be the index column
3.  Click on the *Advanced settings* button <span class="pboml-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-4 w-4"><path d="M6 12a.75.75 0 01-.75-.75v-7.5a.75.75 0 111.5 0v7.5A.75.75 0 016 12zM18 12a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0v7.5A.75.75 0 0118 12zM6.75 20.25v-1.5a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0zM18.75 18.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 011.5 0zM12.75 5.25v-1.5a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0zM12 21a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0v7.5A.75.75 0 0112 21zM3.75 15a2.25 2.25 0 104.5 0 2.25 2.25 0 00-4.5 0zM12 11.25a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zM15.75 15a2.25 2.25 0 104.5 0 2.25 2.25 0 00-4.5 0z"></path></svg></span>
4. Select the *Describes column contents* checkbox

You must also indicate the type of content that will be contained in the variable. Two content types are currently available: Markdown, which represents text; and, Number, which only represents numbers decimal or not. This will be explained in the following section.

### Adding variables

Adding variables follows similar steps to defining the index column. Before we go into the steps, you first need to understand the grouping mechanism and units.

Table slices allow you to group variables together. To group variables together, go to the *Group by label* field under the *Advanced settings* and enter the label by which you want to group your variables. For a good example of how that looks, see the [Demo](./tables.html#demonstration-complexe-table-slice).

Each variable can define the type of units it contains. You can state, for example, in the Units field found in the *Advanced settings* of a variabel that the units can be “$ Million”, “$” or “$USD”, etc.

::: tip
If all your variables have the same unit, you only need to define the unit for a single variable.
:::

Now that you understand what grouping and units are in a table slice, here are the steps that you can follow in order to add new variables:

1.  Go to the *Variables* section
2.  Click on **➕ New variable** to add a new variable. You will see a prompt appear that will ask you to enter the name of that new variable. You then enter the new variable's key value
3.  Under the “Label” section, change the name of that variable for both English and French
4.  In the variable editing area, choose between *Markdown* (for text content) or *Number* (for numerical content)
5.  If needed, you can group variables that have the same content in the Group by label field in both English and French
6.  If needed, you can define the units that are described by the variable

## Tabular data

Once you have added your variables, you can now add data to your table.

### Add values

Adding data is straightforward. First, add a column click on the *Add values* <span class="pboml-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-4 w-4"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h4.59l-2.1 1.95a.75.75 0 001.02 1.1l3.5-3.25a.75.75 0 000-1.1l-3.5-3.25a.75.75 0 10-1.02 1.1l2.1 1.95H6.75z" clip-rule="evenodd"></path></svg></span> button on the bottom of the table slice editor.

the editor visualizes for us how the table will look like. So, depending on the final look of our table we can fill in the data in the correct fields.

::: info
For the variables that have their unit set to *Markdown*. You will notice an English and French field similar to what you see inside the Markdown slice. Make sure you enter the correct information for the data contained inside that variable.
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
Follow along with the [Demo](./tables.html#demonstration-complexe-table-slice). You can use a table that you created on Word.
:::

Since it can be very tedious to create a complete table on the editor (especially when there are many rows and columns), the PBOML Visual Editor allows you to import from Word a table. However, the conversion can be loose, and you might be required to modify certain variables directly. If so, you can always refer to the previous section on this page.

1.  First, click on the *Import* button <span class="pboml-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-6 w-6"><path d="M12 1.5a.75.75 0 01.75.75V7.5h-1.5V2.25A.75.75 0 0112 1.5zM11.25 7.5v5.69l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V7.5h3.75a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9a3 3 0 013-3h3.75z"></path></svg></span>. Then copy the table from Word directly in both their English and French equivalent (exclude any column that defines groups within the table) and past them on their respective field using the *Paste from Word* button <span class="pboml-button"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"></path></svg></span>
2.  An error might show up if there was already a table contained in the table slice. If you no longer need that previous table, check the *Replace existing table data* checkbox. This will override what was previously inside that table slice.
3.  Then you can tell the editor the location of your index: is it the *first column* or the *first row*.
4.  When you are satisfied with the look of your table as display on the bottom of the editor table slice, click on the second at the bottom *Import* <span class="pboml-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-4 h-4"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"></path></svg></span>.
5.  But wait, you’re not over yet! You must verify in the *Variables* section that the content type for each variable is correct. If your table contains number, make sure to set their associated variable to the content type *Number*. 
Also, if needed, make sure that you have fill in the *Group by label* fields for each variable that is concerned (see section [Adding Variables](./tables.html#adding-variables)).
