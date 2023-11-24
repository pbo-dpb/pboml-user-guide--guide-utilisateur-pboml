# Heading Methodology

:::warning
This page is still under development.
:::

:::info Appropriate heading method
Depending on the document's structure, use the appropriate heading method: either Heading slices for complex documents or slice titles for *flat* documents. Mixing both methods for objects on the main document flow is not possible.
:::

:::info Slice titles must be provided for non-inline slices
Elements outside of the main document flow (Figure/Tables and Box (Aside)) must always be titled using the slice titles. This is true even if the document uses Heading slices.
:::

:::info References cannot be used in headings
Since headings are used to generate the table of contents, they cannot contain references. This applies to both Heading slices and slice titles.
:::

:::info Markdown is not allowed in headings
Markdown is not allowed in headings. This applies to both Heading slices and slice titles.
:::

:::info Flat documents' slices are self contained
If your publication only uses slice titles as it's supporting structure, each slice must be self contained. In other words, all content labeled by a given slice title must be contained within that slice. This is not the case for Heading slices-based documents: the content described by a Heading slice is contained in all the slices that follow it until the next Heading slice.
:::

:::info Anchors
Some headings have an anchor (i.e. *Table 1-1*, *Figure 1-1*, *Appendix A*, etc.). The anchor is not part of the slice title nor the heading's content: it needs to be carefully recorded in the *anchor* localized field. Do not merge the anchor with the rest of the heading as it won't be properly recorded in the table of content and annotations.
:::
