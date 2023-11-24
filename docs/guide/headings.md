# Headings

There are three ways you can add a heading to your document: with a *Heading slice*, by providing a `Title` attribute to an individual slice or within the content directly (using Markdown headers). 

**It is generally preferable to use heading slices to design the structure of a document.** Documents with a single level of depth - all content being equal and contained within each slice - (such as costing notes) can be structured with slice titles only. As for headings inside of Markdown content, we do not recommand them in any situation.

## Heading Slice

A *Heading Slice* is used to represent a heading inside your document.

1.  First add a heading slice as explained in the [*Add a slice*](./structure-your-document.html#add-a-slice) guide.
2.  Choose the level for that heading.
3.  Enter the heading title content in both English and French.

### Demonstration - Using a *Heading slice*

<PbomlWidget sample="/samples/heading_slice.pboml.yaml" mode="edit"></PbomlWidget>

## Slice title

For all slices (except for heading slice), you can add a title that will label the content of that slice. When no heading slice is present in a document, the table of content of a document will be constructed from slice titles.

### Limitations

Slice titles are very limited in what they can accomplish: 

- Can only describe what is included in a single slice
  - Unlike Heading slices, slice titles cannot be used to describe a section that contains multiple slices.
- Are always at the same top level
  - They cannot be used to describe subsections.
- Will not appear in the Table of Content when used with Heading Slices
  - Only heading slices will be used by the Table of Content component to establish the structure of a given document if Heading slices are used. 
  - As a fallback, slice titles will be used to generate the table of content of flat documents that don't contain heading slices.

### When to use them

Use them in the following cases:
- The document you are editing is flat
  - When all content is at the top level of a document, such as in a Legislative Costing Note, slice titles are a convenient way to keep a document tiday and simple.
- When a slice is not in the document's main flow
  - When inserting a slices that is using a Figure/Table or Box (Aside) presentation style, setting the Title attribute on that slice provide a way to label that content.
- When designing a template
  - Templates that contain empty slices (e.g. the LEG ), ready to be filled by integrators or analysts, should use slice titles to provide context and instructions on what content should go in which slices.

To add a title label inside a slice directly you must first toggle to the slice you want to title.

1.  Click on the Gear button <Icon hero="cog-6-tooth"></Icon>.
2.  Enter the title inside the *Title* field both English and French.

<PbomlWidget sample="/samples/heading_inside_slice.pboml.yaml" mode="edit"></PbomlWidget>


## Within a slice's content

Slices which have text content usually follow the _Markdown syntax_. That syntax supports headings; headings could therefore be used inside of any Markdown content (such as inside of a Rich text (Markdown) slice). Titles in that the Markdown syntax are formatted as such:

```md
# Title Level 1 (h1)

## Title Level 2 (h2)

### Title Level 3 (h3)
```

This third option could theoretically be used to partially structure a document, with multiple caveats explained in the box below.

::: danger
Adding a title inside the actual content of a slice is **not recommended**.  The PBOML language exists to serialize content and allow the rapid and concurrent maintenance of bilingual content outside of the document structure. Creating a structure inside of slices goes again't these principles. Practically speaking, such usage would prevent the correct generation of a table of content and could have an impact on the overall accessibility tree of a document.

For these reasons, try to make sure you do not copy from Word any title or heading and instead opt for either of the two options to structure your document: [Use heading slices](./headings.html#heading-slice) or [give your slices a title](./headings.html#slice-title).
:::

