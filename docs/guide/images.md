# Images

::: warning
This page is still under development.
:::


::: info When to use a bitmap image?
It is generally preferable to use a vector image (using the SVG format, as described in [this guide's section on charts](./charts.html)). However, it is possible to add a bitmap image to a PBOML document when required. For example, a bitmap format can be used to display a photograph or, under certain conditions, a computer graphic that cannot be vectorized.
:::

There are two distinct steps involved in adding an image:
1. [Upload the image to the server](./images.html#upload-your-image-to-the-visual-supports-form) (via the *Visual Supports* form on 99Bank).
2. Use the image URL to [build a new Bitmap slice in a PBOML document](./images.html#adding-your-image-inside-a-bitmap-slice).


## Upload your image to the Visual Supports form

1.  From the _Publication page_ of the document you are working on, click on the _Visual Supports_ form.
2.  On the new page that this previous link brought you to, click on *Add a new image*.
3.  Choose *unlisted* from the list of image types.
4.  Once you have chosen the image type, you must indicate under *Language* if the image is _bilingual_, _french only_ or _english only_.
5.  Now you can finally upload your new image by clicking on _Choose File_ and selecting a file from your computer.
6.  Once uploaded, click on *Save*.

You should now see your image in the *Visual Supports* section on _99Bank_.

## Adding your image inside a Bitmap Slice

Now its time to add your image on your document directly by using the *Bitmap Slice*.

1.  On your browser, open on one tab the *Visual Supports* form on _99Bank_ of your document and on another open your _PBOML Visual Editor_ as explained in the [Opening the Editor](./getting-started.html#opening-the-editor) section.
2.  On the _PBOML Visual Editor_, add a *Bitmap Slice* as explained in the [*Add a slice*](./structure-your-document.html#add-a-slice) section.
3.  On the Visual Supports form, click on the <span class="pboml-button"><svg class="svg-inline--fa fa-people-carry-box fa-fw" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="people-carry-box" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M128 95.1c26.5 0 47.1-21.5 47.1-47.1S154.5 0 128 0S80.01 21.5 80.01 47.1S101.5 95.1 128 95.1zM511.1 95.1c26.5 0 47.1-21.5 47.1-47.1S538.5 0 511.1 0c-26.5 0-48 21.5-48 47.1S485.5 95.1 511.1 95.1zM603.5 258.3l-18.5-80.13c-4.625-20-18.62-36.88-37.5-44.88c-18.5-8-38.1-6.75-56.12 3.25c-22.62 13.38-39.62 34.5-48.12 59.38l-11.25 33.88l-15.1 10.25L415.1 144c0-8.75-7.25-16-16-16H240c-8.75 0-16 7.25-16 16L224 239.1l-16.12-10.25l-11.25-33.88c-8.375-25-25.38-46-48.12-59.38c-17.25-10-37.63-11.25-56.12-3.25c-18.88 8-32.88 24.88-37.5 44.88l-18.37 80.13c-4.625 20 .7506 41.25 14.37 56.75l67.25 75.88l10.12 92.63C130 499.8 143.8 512 160 512c1.25 0 2.25-.125 3.5-.25c17.62-1.875 30.25-17.62 28.25-35.25l-10-92.75c-1.5-13-7-25.12-15.62-35l-43.37-49l17.62-70.38l6.876 20.38c4 12.5 11.87 23.5 24.5 32.63l51 32.5c4.623 2.875 12.12 4.625 17.25 5h159.1c5.125-.375 12.62-2.125 17.25-5l51-32.5c12.62-9.125 20.5-20 24.5-32.63l6.875-20.38l17.63 70.38l-43.37 49c-8.625 9.875-14.12 22-15.62 35l-10 92.75c-2 17.62 10.75 33.38 28.25 35.25C477.7 511.9 478.7 512 479.1 512c16.12 0 29.1-12.12 31.75-28.5l10.12-92.63L589.1 315C602.7 299.5 608.1 278.3 603.5 258.3zM46.26 358.1l-44 110c-6.5 16.38 1.5 35 17.88 41.63c16.75 6.5 35.12-1.75 41.62-17.88l27.62-69.13l-2-18.25L46.26 358.1zM637.7 468.1l-43.1-110l-41.13 46.38l-2 18.25l27.62 69.13C583.2 504.4 595.2 512 607.1 512c3.998 0 7.998-.75 11.87-2.25C636.2 503.1 644.2 484.5 637.7 468.1z"></path></svg></span> button of the image you want to add to copy its associated URLs.
4.  Back on your *Bitmap* slice in the _PBOML Visual Editor_, click on <Icon hero="clipboard-document"></Icon> *Fill from clipboard* to insert the URLs that you copied previously in the correct fields on the slice
5.  If your image is not bilingual, repeat step 3 and 4 for the other corresponding language

::: info Why multiple URLs?
Multiple versions of an uploaded image are generated automatically by 99Bank. These versions allow Web browsers to pick the optimal resolution and file format for a given image based on the user's screen resolution, device type, internet connectivity (LTE, wifi, etc.), etc.
:::


