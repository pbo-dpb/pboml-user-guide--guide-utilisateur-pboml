# Annotations & References

The PBOML Editor allows you to add many types of annotations to any slice you have created, for example: [references](./annotations#reference), [textual descriptions](./annotations#textual-descriptions), [sources](./annotations#sources), and [notes](./annotations#notes).

There are *two types* of objects you can reference: theses are slices and annotations. When you reference either of them, the final publication will display a hyperlink that will send the reader to annotation you are referencing.

## Reference an annotation

Referencing an annotation is more common. Its inside the `[Notes & references]` section that you can create a new annotation that you can reference in you document:

1.	Go to the top of the [Editor View Section](./getting-started#main-editing-area) and click on ***Notes & references***
2.	Similarly, to slices, you must add a new annotation by clicking on the <span class="pboml-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-6 h-6"><path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clip-rule="evenodd"></path></svg></span> button
3. Decide if you what to enforce numerical order or not by checking the *Enforce numerical order* field on the top of the Editor View Section

::: info
Now you must decide the format by which you want to reference your annotations. You can either check the *Enforce numerical order* field or not. If you enforce numerical order the annotation identifier will be decided by the editor according to the order of appearance of your annotations: for example the first annotation will be reference as `[^1]`; the second one, as `[^2]`, etc.

If you uncheck the *Enforce numerical order field*, a new field called *Annotation identifier* will appear inside each annotation _slice_. You will then have the option of deciding how you want to reference each annotation inside your document.
:::

4. Decide what type of content you what to define to represent your annotation: Markdown or Bibtex

::: info
There are currently two supported content types: markdown and bibtex. For more details on both, you can visit these ressources:
* [Markdown](https://en.wikipedia.org/wiki/Markdown)
* [Bibtext](https://en.wikipedia.org/wiki/BibTeX)
:::

5. Finally enter your annotation for each language in their respective text field inside the annotation slice.

### Demonstration - Annotation reference inside a [Markdown slice](./paragraphs.html)

<PbomlWidget sample="/samples/annotation_reference.pboml.yaml" title="Add a paragraph using the Markdown slice" mode="edit"></PbomlWidget>


## Reference a Slice

::: warning
This feature is still under development.
:::
<!---
To reference a slice, you first need to set a reference name for that same slice:

1.  Go to the slice you wish to reference.
2.  Click on the little [Settings Icon] located towards to upper-right corner of the slice editing area
3.  Enter whatever name in both languages by which you want to reference your slice with

Then, to reference that slice, within any other section of you document, you simply need to use the reference name inside any text field as follows.


RV: This feature might be implemented in another way: any use of the exact anchor's name of a slice [eg. Figure 1] could be automatically linked. Alternatively, a positive enrolment by integrators (such as by using the same syntax as other references but with a slice anchor, eg. [^Figure 1]) might be used.
-->
## In-slice Annotations

These types of annotations can be done directly inside the slice.

### Textual descriptions

Textual descriptions might be used to provide supplementary or contextual information to users, in addition of allowing the literal inclusion of textual descriptions. As such, textual descriptions, in a few cases, could allow the author of a report or the integrator to skip the addition of a formal annotation.

1.  Go to the slice in which you want to add a textual description
2.  Reveal the *Textual Descriptions* tab
3.  Similar to slices, you can add a new textual description with its content in both English and French. Just click on the ➕ sign.

If you wish to delete a textual description, simply click on the trash symbol 🗑️ on the left of it.

Note that Textual Descriptions are not displayed by default to sighted users. Avoid including information in them if that information cannot be found in the described chart, table, paragraph, etc.

### Sources

Instead of including references or other type of atribution at the document level, sources can be attached directly to the scope of a slice. This practice should generally be avoided in regular reports (except for content out of the document main flow, such as for asides and figures) as it can conflict with the general structure of the document. Readers may wonder why this note is placed directly after a paragraph, while others are placed at the end of the document.

It is however good to keep this option in mind, especially when converting a Word document that could contain both endnotes and footnotes.

To attach oe or multiple sources to a slice:

1.  Go to the slice in which you want to add a source to
2.  Reveal the *Sources* tab
3.  Similar to textual descriptions, you can add sources with its content in both English and French. Just click on the ➕ sign.

If you wish to delete a source, simply click on the trash symbol 🗑️ on the left of it.

### Notes

In the same way as for sources, notes can be attached to a slice. The same considerations regarding document structure should apply here.

1.  Go to the slice in which you want to add a source to
2.  Reveal the *Notes*
3.  Similar to textual descriptions, you can add sources with its content in both English and French. Just click on the ➕ sign.

If you wish to delete a note, simply click on the trash symbol 🗑️ on the left of it.
