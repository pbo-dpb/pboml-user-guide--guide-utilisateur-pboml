# Charts

There are two way you can add a chart with the PBOML Visual Editor: with an *SVG Slice* or a *Chart Slice*. Using the latter is more complex than using the former. We will start with the easiest and most common way to add a chart in a document.

## With an SVG slice

The *SVG* slice allows the *PBOML Visual Editor* to insert *Scalable Vector Graphics (SVG)* in your final document. SVGs have many advantages especially in terms of accessibility, most notably:

- They can be scaled to infinity
- Always sharp whatever the device
-	Can be exported directly from Word

To add a chart using the SVG slice you first need to have your chart either in a Word document or as an `.svg` image saved in your computer. To export from Word your chart as an SVG, follow these steps:

Once you have your chart saved as an SVG, you can then insert it in the SVG Slice on the PBOML Editor.

::: details Steps to export from Word your chart to an SVG

If you want to start with the English version of the chart, you will need to first change your Language 
Settings on Windows. When you finish saving your SVG in English on your computer, repeat for the French Language.

1.  Right click on the SVG image
2.  Click on `[Save as Picture]`
  
![svg-from-word-step1](/svg_from_word_step1.png)

3.  Save as a Scalable Vector Graphics

![svg-from-word-step2](/svg_from_word_step2.png)
:::

Now that you have your chart saved as an SVG. Go to the [*Add a slice*](./structure-your-document.html#add-a-slice) and click on SVG.

1.  For each language respectively. click on *Choose File* and choose the `.svg` file that you saved that corresponds to the correct language

2.  Click on the *SVG Tools* tab

3.  If you notice that your SVG is not rendered properly, try clicking on each option <span class="pboml-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-4 h-4"><path d="M6 3a3 3 0 00-3 3v1.5a.75.75 0 001.5 0V6A1.5 1.5 0 016 4.5h1.5a.75.75 0 000-1.5H6zM16.5 3a.75.75 0 000 1.5H18A1.5 1.5 0 0119.5 6v1.5a.75.75 0 001.5 0V6a3 3 0 00-3-3h-1.5zM12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zM4.5 16.5a.75.75 0 00-1.5 0V18a3 3 0 003 3h1.5a.75.75 0 000-1.5H6A1.5 1.5 0 014.5 18v-1.5zM21 16.5a.75.75 0 00-1.5 0V18a1.5 1.5 0 01-1.5 1.5h-1.5a.75.75 0 000 1.5H18a3 3 0 003-3v-1.5z"></path></svg></span>. 

::: tip
If the problem persists, you can try saving again the SVG on your local computer.
:::

4.  If needed, clean up the SVG by doing the following: removing the white background by clicking on *Remove white*; fitting the image by clicking on *Fit*; and remove forbidden characters with *Remove forbidden characters*.

_You have now inserted a chart using the SVG slice in the PBOML Visual Editor._

### Demonstration - Adding a chart using an *SVG Slice*

<PbomlWidget sample="/samples/svg_slice.pboml.yaml" mode="edit"></PbomlWidget>

## With a chart slice

Another way you can add a chart using the PBOML Visual Editor is by using the *Chart slice*. The *Chart slice* is very similar to the [Table slice](./tables.html); the only difference is in the visualization options that exist within the chart slice. Here is how to get started:

1.  First, go to the [*Add a slice*](./structure-your-document.html#add-a-slice) and click on *Chart*. You will see a slice very similar to the Table slice. Notice the *Text version*/*Version textuelle* section; these sections contain the table representation of the chart.

2.  You have two choices: you either create a table from scratch or import from Word. Refer to the [Table slice](./tables.html) Section for some specific instruction on both.

Once your table is created, you can now proceed to personalize the chart that is generated from it.

### Demontration - Chart using a *Chart Slice*

<PbomlWidget sample="/samples/chart_slice.pboml.yaml" mode="edit"></PbomlWidget>

### Hide variables

The table slice allows you to choose which variables to hide on the chart. For a reminder on variables see [*Tables – Variable*](./tables.html#variables).

To hide variable, go the the *Variables* section. Once you find the variable you want to hide on the chart, deselect the chart icon <span class="pboml-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-4 w-4"><path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z"></path></svg></span>.

::: info
The variable that you wish to hide from the chart will not be hidden on the Text version section which displays the original table as if it were inside a table slice.
:::

### Hide columns

The table slice allows you to choose also which columns to hide on the chart.

To hide columns, go the the *Tabular data* section (for a reminder on tab see [*Table – Tabular data*](./tables.html#tabular-data)). Once you find the column you want to hide on the chart, deselect the chart icon <span class="pboml-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-4 w-4"><path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z"></path></svg></span> above it.

::: info
The column that you wish to hide from the chart will not be hidden on the *Text version* section which displays the original table.
:::

### Emphasis variables

The chart slice allows you to choose which variables to emphasis on the chart. 

To emphasis a variable, go the the *Variables* section. Once you find the variable you want to emphasis on the chart, select the star icon <span class="pboml-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-4 w-4"><path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd"></path></svg></span>.

::: info
The variable that you wish to emphasis from the chart will be emphasized on the Text version section which displays the original table as if it were inside a table slice.
:::

### Emphasis columns

The table slice allows you to choose also which tabular data to emphasis on the chart. For a reminder on variables see `[Table – Tabular data]`. 

To emphasis a column, go the the *Variables* section. Once you find the column you want to emphasis on the chart, select the star icon <span class="pboml-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-4 w-4"><path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd"></path></svg></span> above it.

::: info
The variable that you wish to emphasis from the chart will be emphasized on the Text version section which displays the original table as if it were inside a table slice.
:::

### Define the type of chart

The PBOML Visual editor allows you the decide how each variable is displayed on the chart; there are currently three ways that you can draw a variable across the chart: using a *bar chart*, *line chart* or *scatter chart*.

To define the display method of a variable, first go the *Variables* section on the chart slice you want to edit. 

To change the display type you can click on the drop-down selection box under the *Drawn as...* field and select the draw method.

::: tip
Experiment the different display methods on the [Chart Slice Demo](./charts.html#demontration-chart-using-a-chart-slice).
:::

::: info
Notice the variable that is used to describe column content does not have that optionality because that variable describes the y axis of the chart (see [Tables - Defining the index column](./tables.html#defining-the-index-column) for more information).
:::

#### Tension field

To make your *line chart* more readable, you can add curve to it by adjusting the *Tension* field under the *Advanced settings* that appears only if a variable who has his *Draw as...* field set to *line*:

The tension field determines the curve of the line. At 0 it's completely straight between points, at 0.4 it's balanced. However you can simply write "*monotone*" if you want a well balance curve to your line.
