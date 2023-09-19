# Tables

Tables can be added to your document with a table slice. The table slice is probably the most complex slice you’ll encounter. But don’t worry, once you understand this slice, creating a table will be easy. Like with any slice, to add a table slice go to the `[Add a slice section]` and click on `[Table]`.

## The Anatomy of a Table Slice

The table slice editing area is composed of two editing section: Tabular data, and Variables. The `[Tabular data section]` is where you can modify the values of your table; the `[Variables]` section is where the variables of the table are defined. Variables describe the type of content found in the tabular data section.

  `[ Show picture of a complete table slice in the variables section | Show picture of final rendered result ]`

  `[Insert picture of the difference between Tabular data and Variables]`

## Variables

When adding variable for your graph, the first variable you add is the one that will describe all subsequent variables: the index column is the variable that describes the column contents. A variable can be, for example, “Years”, “Cost” or “Total cost”. You could compare it to the $y$ axis of a graph.

### Defining the index column

The variable that often is used to describe the column content is time: for example, “Fiscal Year”, “Quarter”, “months”, etc.

  `[Show example of table with fiscal year]`

Qualitative information can also be the variable that is used to describe the column content: for instance, if each row describes a person, then each column could describe a piece of information regarding that person: first name, last name, date of birth, City of birth, etc.

  `[Show example of persons table]`

That variable must be the first that appears in the Variables section and must be properly differentiated from the others by checking the `[Describe column contents]` check box. 

  `[show editor] ~ [Show rendered result]`

You must also indicate the type of content that will be contained in the variable. Two content types are currently available: Markdown, which represents text; and, Number, which only represents numbers decimal or not.

With all that in mind here are the **steps for defining the index column**:

1. Go to the Variables editing section.
  `[Show empty variables editing section]`
2. Click on `[+ new variable]` to add a new variable. You will see a prompt appear that will ask you to enter the name of that new variable.
  `[Show prompt that appear]`
3. Under the “Label” section, if needed, change the name of that variable for both English and French
4. In the variable editing area, choose between Markdown (for text content) and Number (for numerical content)
5. Define as the column index by first clicking on “Advanced Settings” and then checking the “Describes column contents”
  `[Show completed index column]`

### Adding variables

Adding variables follows similar steps to defining the index column. Before we go into the steps, you first need to understand the grouping mechanism and units.

Table slices allow you to group variables together. Here a good example of its usage:

  `[Show field grouping example with two variables grouped together] ~ [Show rendered result]`

Each variable can define the type of units it contains. For example, “$ Million”, “$”, “$USD”, “$CAD”, etc.

  `[Show example of units added to a table for individual variables] ~ [Show example of global units added to a table for all variables]`

Now that you understand what grouping and units are in a table slice, here are the steps that you can follow in order to add new variables:

- Go to the Variables editing section
`[Show empty variables editing section]`
- Click on `[+ new variable]` to add a new variable. You will see a prompt appear that will ask you to enter the name of that new variable. You enter the new variable key value.

  `[Show prompt that appear]`

-	Under the “Label” section, if needed, change the name of that variable for both English and French
-	In the variable editing area, choose between Markdown (for text content) and Number (for numerical content)
-	If needed, you can group variables that have the same content in the Group by label field in both English and French
-	If needed, you can define the units that are described by the variable

  `[Show completed variable editing section]`

## Tabular data

Once you have added your variable you can now add data to your table.

  `[ [Show variables editing field] | Show result on the Tabular data field ]`

### Add values

Adding data is straightforward, to add a column click on the `[Add values]` button on the bottom of the table slice editor.

  `[Show before adding a column] | [Show after adding a column]`

the editor visualizes for us how the table will look like. So, depending on the final look of our table we can fill in the data in the correct fields.

  `[Show example of filling the correct fields] | [Show result of the example]`
