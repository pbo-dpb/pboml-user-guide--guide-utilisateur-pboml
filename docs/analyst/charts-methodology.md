# Charts

:::details Use native charts in Excel or Word

When pasting a chart from Excel into Word, you have the option to paste it as a native Word chart. This will allow you to (minimally) edit the chart in Word. Never paste a chart as an image.

### Reason

Image based charts will not scale up or down properly when the document is printed or viewed on different devices: they might appear as blurry or pixilated. Native charts will scale properly as they can exported to a vector image format (SVG).

### Valid

1. Use Excel or Word to generate your chart.
2. From there, copy your generated chart.
3. Paste it in your Word document as a native Word chart.

### Invalid

-	Taking a screenshot of the chart and then pasting it into Word
-	Using any non-native Word chart

### Notes

-	It is not impossible to use image-based charts in PBO publication; however, it is not recommended. If you have a good reason to use an image-based chart, please contact the production team ahead of publication and explain your use case.

:::


:::details Floating text boxes will be lost when saving as an SVG

### Reason

Word don't consider floating text boxes as part of charts, even though they might float *over* the chart area. When saving as an SVG, Word will not include the floating text boxes in the SVG file. There is a high risk that the integrator will not notice the missing text boxes and will publish the document without them.

### Valid

1. In Excel, select the chart area.
2. Create the text box inside the chart area.
3. Copy and paste the Chart in Word.

### Invalid

-	Create a text box in Word, floating over the chart.
-	Create any other type of floating object over the chart.
:::