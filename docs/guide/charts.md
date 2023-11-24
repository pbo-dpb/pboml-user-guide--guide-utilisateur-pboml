# Charts

There are two way you can add a chart with the PBOML Visual Editor: with an *SVG Slice* or a *Chart Slice*. 

- *SVG Slice* contains an `.svg` image saved in your computer. You can export an `.svg` image from Word.
- *Chart Slice* contains a table slice that is rendered as an interactive chart.

Chart slices provide a better user experience for the reader, but they are more difficult to create. If you are not sure which one to use, we recommend you start with the *SVG Slice*.

## SVG slices

### What is a SVG?

SVG stands for *Scalable Vector Graphics*. A SVG is an image: it can be a chart, a map, a diagram, etc. They differ from bitmap images (such as `.png` or `.jpg`) in that they are not made of pixels, but of vectors. This means that they can be scaled to infinity without losing quality.

They can also be exported directly from Word.

SVG slices are therefore just a wrapper around two SVG images: one for the English version of the chart, and one for the French version.

### Add a chart using an *SVG Slice*

#### Saving a chart as an SVG

Each version (one for each language) of the chart must first be saved as an `.svg` image on your computer. The following instructions explain how to do this.

::: details Save an SVG chart from Word or Excel

1.  Right click on the chart
2.  Click on `[Save as Picture]`
  
![svg-from-word-step1](/svg_from_word_step1.png)

3.  Save as a Scalable Vector Graphics

![svg-from-word-step2](/svg_from_word_step2.png)

⚠️ The regional settings of your computer must be set to English (Canada) when exporting the English version of a chart. Otherwise, the chart will not be exported properly (number formatting might not be correct). The same applies to the French version of the chart: the regional settings of your computer must be set to French (Canada) when exporting them.

To change the regional settings of your computer, go to `Settings > Time & Language > Region > Country or region` and select the appropriate language.

Windows require Word to be completely closed and reopened for the regional settings to be applied. It is therefore recommended to export all charts in one language before changing the regional settings of your computer and exporting the charts in the other language.

:::

#### Creating an *SVG Slice**

 Go to the [*Add a slice*](./structure-your-document.html#add-a-slice) and chose an SVG Vector slice.

For each language, respectively:

1.  Click on *Choose File* and pick the `.svg` file that corresponds to the correct language.

If you notice that your SVG is not rendered properly, you can try the following:
1.  Click on the *SVG Tools* tab.
2.  Click on one or more of the following buttons:
    - <Icon hero="viewfinder-circle"></Icon> `Fit` will adjust the SVG image content box so everything is visible - this is useful if the chart is cropped or if there is a lot of white space around it.
    - <Icon hero="viewfinder-circle"></Icon> `Remove white` will remove the white background (or any white element) of the SVG image - use when the gray checkboard pattern background is hidden by a white background.
    - <Icon hero="viewfinder-circle"></Icon> `Remove forbidden characters` will remove characters that are not allowed in SVG images - this is most useful if an error message appears instead of your chart.

::: tip
If the problem persists, you can try saving again the SVG on your local computer.
:::

<PbomlWidget sample="/samples/svg_slice.pboml.yaml" mode="edit" title="A chart embedded in an SVG slice"></PbomlWidget>

## With a chart slice

Another way you can add a chart using the PBOML Visual Editor is by using the *Chart slice*. The *Chart slice* is very similar to the [Table slice](./tables.html); the only difference is in the visualization options that exist within the chart slice. Here is how to get started:

1.  First, go to the [*Add a slice*](./structure-your-document.html#add-a-slice) and click on *Chart*. You will see a slice very similar to the Table slice. Notice the *Text version*/*Version textuelle* section; these sections contain the table representation of the chart.

2.  You have two choices: you either create a table from scratch or import from Word. Refer to the [Table slice](./tables.html) Section for some specific instruction on both.

Once your table is created, you can now proceed to personalize the chart that is generated from it.

### Demontration - Chart using a *Chart Slice*

<PbomlWidget sample="/samples/chart_slice.pboml.yaml" mode="edit"></PbomlWidget>

### Hide variables

The table slice allows you to choose which variables to hide on the chart. For a reminder on variables see [*Tables – Variable*](./tables.html#variables).

To hide variable, go the the *Variables* section. Once you find the variable you want to hide on the chart, deselect the chart icon <Icon hero="chart-bar"></Icon>.

::: info
The variable that you wish to hide from the chart will not be hidden on the Text version section which displays the original table as if it were inside a table slice.
:::

### Hide columns

The table slice allows you to choose also which columns to hide on the chart.

To hide columns, go the the *Tabular data* section (for a reminder on tab see [*Table – Tabular data*](./tables.html#tabular-data)). Once you find the column you want to hide on the chart, deselect the chart icon <Icon hero="chart-bar"></Icon> above it.

::: info
The column that you wish to hide from the chart will not be hidden on the *Text version* section which displays the original table.
:::

### Emphasis variables

The chart slice allows you to choose which variables to emphasis on the chart. 

To emphasis a variable, go the the *Variables* section. Once you find the variable you want to emphasis on the chart, select the star icon <Icon hero="star"></Icon>.

::: info
The variable that you wish to emphasis from the chart will be emphasized on the Text version section which displays the original table as if it were inside a table slice.
:::

### Emphasis columns

The table slice allows you to choose also which tabular data to emphasis on the chart. For a reminder on variables see `[Table – Tabular data]`. 

To emphasis a column, go the the *Variables* section. Once you find the column you want to emphasis on the chart, select the star icon <Icon hero="star"></Icon> above it.

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
