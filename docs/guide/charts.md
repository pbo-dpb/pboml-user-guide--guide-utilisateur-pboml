# Charts

There are two way you can add a chart with the PBOML Visual Editor: with an SVG Slice or a Chart Slice. Using the latter is more complex than using the former. We will start with the easiest and most common way to add a chart in a document.

## With an SVG slice

The SVG slice allows the PBOML Visual Editor to insert Scalable Vector Graphics (SVG) in your final document. Scalable Vector Graphics (SVG) have many advantages especially in terms of accessibility, most notably:

- They can be scaled to infinity
- Always sharp whatever the device
-	Can be exported directly from Word

  `[[Show example SVG chart on Word]]`

To add a chart using the SVG slice you first need to have your chart either in a Word document or as an `[.svg]` image saved in your computer. To export from Word your chart as an SVG, follow these steps:

**If you want to start with the English version of the chart, you will need to first change your Language Settings on Windows. When you finish saving the [svg] in English on your computer, repeat for the French Language.**

  `[SHOW steps to change language in English and French]`

- Right click on the SVG image
- Click on `[Save as Picture]`
  
  `[Show what the box that appears when you right click a chart on Word with an emphasis on the Save as Picture]`

- Save as a Scalable Vector Graphics

  `[Show the save as Type box in the File Explorer]`
  `[Show the final svg]`

Once you have your chart saved as an SVG, you can then insert it in the SVG Slice on the PBOML Editor.

-	Go to the [Add a slice section] and click on [SVG]

  `[Show empty SVG Slice]`

-	For each language respectively. click on [choose File] and choose the [.svg] file that corresponds to the correct language

  `[Show Example with that chart]`

-	Click on the SVG tools tab

  `[Show the three tools]`

-	If you notice an error importing the [SVG], try clicking on each option. If the problem persists, you can try saving again the [SVG] on your local computer.

-	If needed, clean up the SVG by doing the following: removing the white background by clicking on `[Remove white]`; fitting the image by clicking on `[Fit]`; and remove forbidden characters with `[Remove forbidden characters]`.

  `ForEach([Show before clean])	ForEach([Show after clean])`

  `[Show result]`

You have now inserted a chart using the SVG slice in the PBOML Visual Editor.

## With a chart slice

Another way you can add a chart using the PBOML Visual Editor is by using the chart slice. The chart slice has a very similar editing area to the [Table slice]; the only difference is in the visualization options that exist within the chart slice. Here is how to get started:

-	First, go to the [Add a slice section] and click on [Chart]. You will see a slice very similar to the Table slice. Notice the [text version/Version textuelle] section; these sections contain the original table that is being displayed as a chart.

  `[Show empty chart slice]`

-	You have two choices: either create a table from scratch and follow the [steps to create a table from scratch]; or import from Word and follow the `[steps to import from Word]`.

Once your table is created, you can now proceed to personalize the chart that is generated from it.

### Hide variables

The table slice allows you to choose which variables to hide on the chart. For a reminder on variables see [Table – Variable]. The variable that you wish to hide from the chart will not be hidden on the Text version section which displays the original table as if it were inside a table slice.

  `[Show before hiding variable]	[Show after hiding variable]`

### Hide tabular data

The table slice allows you to choose also which tabular data to hide on the chart. For a reminder on variables see [Table – Tabular data]. The variable that you wish to hide from the chart will not be hidden on the Text version section which displays the original table as if it were inside a table slice.

  `[Show before hiding tabular data]	[Show after hiding tabular data]`

### Emphasis variables

The table slice allows you to choose which variables to emphasis on the chart. For a reminder on variables see [Table – Variable]. The variable that you wish to emphasis from the chart will be emphasized on the Text version section which displays the original table as if it were inside a table slice.

  `[Show emphasis hiding variable]	[Show after emphasis variable]`

### Emphasis tabular data

The table slice allows you to choose also which tabular data to emphasis on the chart. For a reminder on variables see `[Table – Tabular data]`. The variable that you wish to emphasis from the chart will be emphasized on the Text version section which displays the original table as if it were inside a table slice.

  `[Show emphasis hiding tabular data]	[Show after emphasis tabular data]`

### Define the type of chart

The PBOML Visual editor allows you the decide how each variable is displayed on the chart; there are currently three ways that you can draw a variable across the chart: using a bar chart, line chart or scatter chart.

To define the display method of a variable, first go the `[Variables]` section. 

  `[Show a variable on the chart]`

To change the display type you can click on the drop-down selection box and select the draw method. Notice the variable that is used to describe column content does not have that optionality because that variable describes the y axis of the chart (see `[Table section index column]` for more information).

  `[Show options]`

Here are the effects of each option:

  `[ForEach([Show option])]	[ForEach([Show result])]`

To make your line chart more readable, you can add curve to it by adjusting the tension field that appears under a variable who has his `[Draw as...]` field set to line:

  `[show example of tension field]`

As you can see the tension field can be set to any number between 0 and 1. The closer to 1, the more curve you add to the line. However you can simply write monotone if you want a well balance curve to your line.

  `ForEach([show tension option])	ForEach([show tension result output])`
