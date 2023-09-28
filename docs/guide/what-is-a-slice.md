# What is a slice

To enable the PBOML Visual Editor to **correctly order the document's content** and to **differentiate between the different types of content** that may exist (tables, paragraphs, images, etc.), the PBOML visual editor defines each piece of content as a slice. Each slice type is characterized by the type of content it can display.

![what-is-a-slice](/what_is_slice_example.png)

## Types of slices

There are currently **seven types of slices** that allow the PBOML Visual Editor to create any document you might need:

-	[Rich Text (Markdown) Slice](./paragraphs.html)
-	[Heading Slice](./headings.html)
-   [Table Slice](./tables.html)
-   [Chart Slice](./charts.html)
-	[SVG Vector Slice](./charts.html#with-an-svg-slice)
-	[Bitmap Slice](./images.html)
-	[Key-Value list Slice](./key-value-lists.html)

## English and French Content

Each slice represents a different type of content. However, if a slice contains text, that text must be represented in both English and French, regardless of the slice type (for more details, refer to [Note on Localized String Object](https://github.com/pbo-dpb/pboml-parser--parseur-pboml/wiki/EN:-Anatomy-of-a-PBOML-document#note-on-localized-string-object)). As you will see in later sections, you can preview each slice individually or as a whole in **English** or in **French**.
