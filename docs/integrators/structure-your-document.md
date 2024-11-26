# Add structure to your document

As mentionned in the [What is A Slice](./what-is-a-slice.md) section, the basic building block of a PBOML document is a *slice*. The structure of a document depends entirely on the arrangement of its slices: the order in which they appear, their properties (for example, the level of a *header slice*), etc. Consequently, by default the PBOML Visual Editor represents your documents as an ordered sequence of _slices_. This editable list of slices is called the **Slices** tab.

To structure your document and its layout, the editor also provides you an alternative edition mode called the **Structure** tab. This tab allows you to see all the slices in your document and to manipulate them from a higher level.

## Add a slice

Adding a new slice is very simple:

1.  Go to the location where you want to add a slice.
2.  Find the <Icon hero="plus-circle"></Icon> button  and make sure it is selected so that you can see the slice options
3.  Click on the type of slice you want to add.
4.  You should see an empty slice editing area of that slice you selected.


:::info Advanced slice types
Some slice types, such as LaTeX, HTML and Bitmap slices, require advanced knowledge of their respective languages or advanced manipulations. These slices are marked with a beaker <Icon hero="beaker"></Icon> icon.
:::


### From the structure tab

The structure tab allows you to add multiple slice types at once using Markdown language. This mode allows you to quickly create a document with a complex structure. It is particularly useful when integrating a document from Microsoft Word: simply copy-paste the content of the document into the text editor of the structure tab to get a similar document structure, with some limitations.

![import_structure_from_word.png](/import_structure_from_word.png)

1. In the visual editor, click on the **Structure** tab
2. Click on the "Add structure from Markdown" button
3. Paste the content of your document into the text editor, first in English then in French. If you are pasting the document from Microsoft Word, make sure to paste the content using the "Paste from Microsoft Office" button so that the formatting is correctly converted to Markdown format.
4. A preview of the structure that will be imported is displayed.
5. Click on the "Import" button to import the structure. Note that the content will not be imported, only the structure, except for Header slices.

::: warning The structure must match in both languages
It is important that the document structure is the same in both languages. If the structure is different, the import function will not work. For example, if a Header slice of level 1 is present in English, it cannot be level 2 in French.
:::

::: warning Not all slices can be imported
This import function will not necessarily recognize all slice types. For example, a figure might not be correctly imported. Similarly, it is possible that ghost slices are created, particularly if carriage returns are present between two titles or tables. It is essential to check the document structure after import.
:::


## Delete a slice

1.  On the visual editor, scroll to the slice you want to delete
2.  Once you find that slice, click on the delete button <Icon hero="trash"></Icon>
3.  You will see an alert prompting you to confirm you decision. To delete, click ***OK***

## Duplicate a slice

1.  On the visual editor, scroll to the slice you want to duplicate
2.  Once you find that slice, click on the duplicate button <Icon hero="document-duplicate"></Icon>
3.  You will see an alert prompting you to confirm you decision. To duplicate, click ***OK***

## Move a slice

### From the structure tab (recommanded)

1.  On the visual editor, click on the **Structure** tab
2.  You will see a list of all the slices in your document. Click on the slice you want to move.
3.  Drag and drop the slice to the location you want it to be.

### From the slices tab

1.  On the visual editor, scroll to the slice you want to move
2.  If you want to move your slice towards the top of the document, click <Icon hero="arrow-up"></Icon>; if you want to move your slice towards the end of the document, click <Icon hero="arrow-down"></Icon>.

## Visualize your slice individually

1.  On the visual editor, scroll to the slice you want to visualize
2.  To visualize the content of that slice in English, click on **EN**; to visualize in French, click on the **FR**
3.  To go back to the editing slice, click again on that same button on step 2.
