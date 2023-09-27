# PBOML User Guide Website


## Custom PbomlWidget

The `<PbomlWidget></PbomlWidget>` component can be inserted inline markdown documentation.

It takes the following arguments:

| Argument | Required? | Default | Description                                                                                                                         |
|----------|-----------|---------|-------------------------------------------------------------------------------------------------------------------------------------|
| sample   | True      |         | The absolute URL of a `.pboml.yaml` file that will be sampled. Static files that should be bundled with the guide can in `public/`. |
| mode     | False     | `edit`  | Either `edit` or `preview`.                                                                                                         |
| title    | False     | null    | A custom title for the preview widget. Can be used to describe what's contained in this widget.                                     |

A PBOML document in `preview` mode will always be rendered in the page's current language.

The arguments can be specified as follows :
`<PbomlWidget sample="/samples/leg0.pboml.yaml" title="My test slice" mode="preview"></PbomlWidget>`