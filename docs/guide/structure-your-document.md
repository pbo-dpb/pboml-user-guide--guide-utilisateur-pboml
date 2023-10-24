# Add structure to your document

As mentionned in the [What is A Slice](./what-is-a-slice.md) section, the basic building block of a PBOML document is a *slice*. The structure of a document depends entirely on the arrangement of its slices: the order in which they appear, their properties (for example, the level of a *header slice*), etc. Consequently, the PBOML Visual Editor represents your documents as an ordered sequence of _slices_. 

To structure your document and its layout, the editor allows you to do many things on your _slices_, more specificaly: *adding*, *deleting*, *duplicating*, *moving*, and *visualizing*.

## Add a slice

Adding a new slice is very simple:

1.  Go to the location where you want to add a slice.
2.  Find the <Icon hero="plus-circle"></Icon> button  and make sure it is selected so that you can see the slice options
3.  Click on the type of slice you want to add.
4.  You should see an empty slice editing area of that slice you selected.


:::info Advanced slice types
Some slice types, such as LaTeX and HTML slices, are not visible by defaut in the list of slices you can add to a given document. To create one of these slice types, you will have to create a new slice directly in code. See the [PBOML language documentation](https://github.com/pbo-dpb/pboml-parser--parseur-pboml/wiki) for more information.
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

::: tip
This can be usefull if you want to *reorder* the slices in your document.
:::

1.  On the visual editor, scroll to the slice you want to move
2.  If you want to move your slice towards the top of the document, click <Icon hero="arrow-up"></Icon>; if you want to move your slice towards the end of the document, click <Icon hero="arrow-down"></Icon>.

## Visualize your slice individually

1.  On the visual editor, scroll to the slice you want to visualize
2.  To visualize the content of that slice in English, click on **EN**; to visualize in French, click on the **FR**
3.  To go back to the editing slice, click again on that same button on step 2.
