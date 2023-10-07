# Headings

There are three ways you can add a heading to your document: with a *Heading slice*, inside a slice directly or within the content directly. **The use of the heading slice is preferred over the one within the paragraph.**

## With a Heading Slice

A *Heading Slice* is used to represent a heading inside your document.

1.  First add a title slice as explained in the [*Add a slice*](./structure-your-document.html#add-a-slice).
2.  Choose the level for that heading.
3.  Enter the heading title content in both English and French.

### Demonstration - Using a *Heading slice*

<PbomlWidget sample="/samples/heading_slice.pboml.yaml" mode="edit"></PbomlWidget>

## Inside a Slice directly

For all slices except the heading slice (_for obvious reasons_), you can add a title that will label the content of that slice.

To add a title label inside a slice directly you must first toggle to the slice you want to title.

1.  Click on the Gear button <span class="pboml-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-4 h-4"><path fill-rule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clip-rule="evenodd"></path></svg></span>.
2.  Enter the title inside the *Title* field both English and French.

<PbomlWidget sample="/samples/heading_inside_slice.pboml.yaml" mode="edit"></PbomlWidget>


## Within the content of the Slice

::: warning
Adding a title inside the actual content of a slice is **not recommended** because it Visual PBOML Editor might generate an invalid table of content for the document that has title within the content of slices. For example, if your paragraph contained in the Markdown slice has text that follows that syntax, title will appear on the final document.

For these reasons, try to make sure you do not copy from Word any title or heading and instead opt for either of the two options: [With a Heading Slice](./headings.html#with-a-heading-slice) or [Inside a Slice directly](./headings.html#inside-a-slice-directly).

:::

Slices which have text content usually follow the _Markdown syntax_. You can find a quick summary of that simple syntax in the [Markdown Guide]. Titles in that syntax are formatted as such:

```md
# Title Level 1 (h1)

## Title Level 2 (h2)

### Title Level 3 (h3)
```