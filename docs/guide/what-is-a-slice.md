# What is a slice

A PBOML document is a structured document that can contain many different types of content, represented by different types of slices. Therefore, the base unit of a PBOML document is a slice.

Slices can be added, deleted, duplicated, moved, and previewed individually. The PBOML Visual Editor allows you to do all of these things.

The type of content that a slice can contain is determined by the type of slice. For example, a *Rich Text (Markdown) Slice* can contain text formatted using Markdown syntax, while a *Bitmap Slice* can contain an image.

![what-is-a-slice](/what_is_slice_example.png)

## Types of slices

PBOML Documents can contain a variety of different types of slices. The following sections describe each type of slice in detail:

-	[Rich Text (Markdown) Slice](./paragraphs.html)
-	[Heading Slice](./headings.html)
-   [Table Slice](./tables.html)
-   [Chart Slice](./charts.html)
-	[SVG Vector Slice](./charts.html#with-an-svg-slice)
-	[Bitmap Slice](./images.html)
-	[Key-Value list Slice](./key-value-lists.html)

Exceptionnaly, you may also encouter other types of advanced slices:

-  LaTeX Slice
-  HTML Slice

These slice types are not visible by default in the list of slices you can add to a given document. To create or to edit one of these slice types, you will have to or edit them directly in code (raw PBOML).

## In PBOML, English and French are intertwined

One of the fundational principle of PBOML is the separation of structure and content. In the context of preparing documents for Canada's official languages, this means that the structure and organization of a PBOML document doesn't have to be done twice : a single PBOML document contains both the English and French versions.

This stands in contrast to the traditional approach of preparing bilingual documents, where you'd have to maintain an English version of the document independantly from a French version.

Practically speaking:
-   All free text fields (for example, all fields that support Markdown content) in the editor allow users to provide content in both languages.
-   All numeric fields will automatically be localized (eg. using the correct thousands separator) by the renderer at runtime.

As you will see in later sections, you can preview each slice individually or a document as a whole in **English** or in **French** directly from the visual editor.