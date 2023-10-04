# Annotations

The PBOML Editor allows you to add many types of annotations to any slice you have created, for example: [references](./annotations#reference), [textual descriptions](./annotations#textual-descriptions), [sources](./annotations#sources), and [notes](./annotations#notes).

## Reference

There are *two types* of objects you can reference: theses are slices and annotations. When you reference either of them, the final publication will display a hyperlink that will send the reader to annotation you are referencing.

### Reference an annotation

Referencing an annotation is more common. Its inside the `[Notes & references]` section that you can create a new annotation that you can reference in you document:

1.	Go to the top of the [Editor View Section](./getting-started#main-editing-area) and click on ***Notes & references***
2.	Similarly, to slices, you must add a new annotation by clicking on the <span class="pboml-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-6 h-6"><path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clip-rule="evenodd"></path></svg></span> button
3. Decide if you what to enforce numerical order or not by checking the *Enforce numerical order* field on the top of the Editor View Section

::: info
Now you must decide the format by which you want to reference your annotations. You can either check the *Enforce numerical order* field or not. If you enforce numerical order the annotation identifier will be decided by the editor according to the order of appearance of your annotations: for example the first annotation will be reference as `[^1]`; the second one, as `[^2]`, etc.

If you uncheck the *Enforce numerical order field*, a new field called *Annotation identifier* will appear inside each annotation _slice_. You will then have the option of deciding how you want to reference each annotation inside your document.
:::

To create a annotation that is complete, you must fill in the required fields on the annotation editor:

  `[Show annotation editing section]`

There are two ways you can display the reference: Markdown or Bibtex. You can choose which you want to use by changing the `[content type]`

  `[show markdown reference example] | [show bibtex reference example]`

After adding a new annotation with all the necessary fields filled out, you can then reference that annotation in your document. The editor tells you how you can reference that annotation in the document:

  `[Show picture of editor showing]`

**Annotation reference inside a paragraph of text**

  `[Show annotation reference example]`

### Reference a Slice

To reference a slice, you first need to set a reference name for that same slice:

1.  Go to the slice you wish to reference.
2.  Click on the little [Settings Icon] located towards to upper-right corner of the slice editing area
3.  Enter whatever name in both languages by which you want to reference your slice with

Then, to reference that slice, within any other section of you document, you simply need to use the reference name inside any text field as follows:

  `[insert reference format for a slice]`

### Textual descriptions

Another way to annotate, is by adding textual descriptions. This is especially useful if you want to explain a graph, a table or any visual reference.

1.  Go to the slice in which you want to add a text description to
2.  Reveal the `[Textual Description tab]`
3.  Similar to slices, you can add a new textual description with its content in both English and French. Just click on the `[+]` sign.

If you wish to delete a textual description, simply click on the trash can on the left of it:

  `[show delete textual description]`

### Sources

Another way to annotate, is by adding your sources.

1.  Go to the slice in which you want to add a source to
2.  Reveal the [Sources tab]
3.  Similar to textual descriptions, you can add sources with its content in both English and French. Just click on the [+] sign.

If you wish to delete a source, simply click on the trash can on the left of it:

  `[show delete sources]`

### Notes

Another way to annotate, is by adding relevant notes.

1.  Go to the slice in which you want to add a source to
2.  Reveal the [Sources tab]
3.  Similar to textual descriptions, you can add sources with its content in both English and French. Just click on the [+] sign.

If you wish to delete a source, simply click on the trash can on the left of it.

  `[show delete notes]`
