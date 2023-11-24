# References

## Overview

References are plain text snippets that are included in any Markdown field of a document. They are written in the following format: `[^1]`, `[^2]`, `[^3]`, etc. They reference a specific object – either a slice or an annotation – in the document, to guide the reader to the referenced object.

### General considerations

References can be included in any rich text field of a PBOML document. For example, you can add a reference to a note in the content of a markdown slice, in the textual description of a chart, in the label of a table variable, etc. In essence, any field that allows you to paste from Word will accept references.

When the renderer encounter a reference (a snippet of text that uses the format `[^1234]`) and the referenced object exists (for example, an annotation with the identifier `1234` exists), it will render a hyperlink that will send the reader to the referenced object.

## Reference an annotation

You can create a new annotation that you can reference in you document:

1.	At the top of the [Editor](./getting-started#main-editing-area) click on ***Notes & references***
2.	Click on the <Icon hero="plus-circle"></Icon> button

::: info
You must decide the format by which you want to reference your annotations:
- Let the editor *Enforce numerical order*: the annotation identifier will be decided by the editor according to the order of appearance of your annotations: for example the first annotation will be reference as `[^1]`; the second one, as `[^2]`, etc. This is the default and recommended option.
- If you uncheck the *Enforce numerical order field*, a new field called *Annotation identifier* will appear inside each annotation _slice_. You can then enter the identifier you want to use to reference your annotation. For example, you can enter `[^myannotation]` to reference your annotation.
:::

3. Decide what type of content you what to define to represent your annotation: Markdown or Bibtex.

::: info
There are currently two supported content types: markdown and bibtex. For more details on both, you can visit these ressources:
* [Markdown](https://en.wikipedia.org/wiki/Markdown)
* [Bibtext](https://en.wikipedia.org/wiki/BibTeX)
:::

4. Fill the content of your annotation in both English and French.

<PbomlWidget sample="/samples/annotation_reference.pboml.yaml" title="Annotation reference inside a Markdown slice" mode="edit"></PbomlWidget>

## Reference a Slice

::: danger
This feature is still under development.
:::

References to slices are relying on the `anchor` property common to all slice types. This property is used to define a unique identifier for a slice. This identifier can then be used to reference the slice in the document. For example, if you have a slice with the following anchor: `Figure 1`, you can reference it in the document with the following snippet: `[^Figure 1]`.

Since anchors are localized, the reference must use the same language as the anchor. For example, if the anchor is `Appendix A` in English, the reference in an English Mardown field must be `[^Appendix A]`, while the French Markdown field will need to use the French localization of that anchor (e.g. `[^Annexe A]`).