# Paragraphs & Text Content methodology

:::warning
This page is still under development.
:::

:::info Pasting from Word
Use the Paste from Word button to paste content from Word. This will convert formatting to Markdown and remove any unwanted artifacts.
:::

:::info Importing footnotes/endnotes from Word
References are not pasted automatically from Word: you must manually find them in the text and edit them manually. To facilitate this process, the editor will replace references with a placeholder that contains a bright orange circle: `[^🟠]`.
:::


:::info Structure in Markdown slices
There is no minimum or maximum to the length of a Markdown slice. When importing long documents, just keep in mind that structure should be built using a combination of content and Heading slices: even if the editor will allow you to import headings inside a Markdown slice, this is not recommended.
:::

:::info Invisible slice descriptors
Remember that the textual description descriptor is invisible to most users by default in the final document. This is an important distinction from the publications original Word document where the textual description is always shown.
:::

:::info Tables inside paragraphs
If the paragraph contains a table, use a table slice. There are exceptions to this rule: Markdown tables can be used inside of textual description and notes descriptors. They can also be included in Notes and references.
:::

:::info Mathematical formulas 
If the paragraph contains mathematical formulas, wrap them in $$ delimiters.
:::

:::info Multilevel bullet points
Multilevel bullet points are supported in Markdown slices. Use the appropriate number of spaces to create the desired level of indentation. Note that importing multilevel notes from Word can be tricky: you may need to manually edit the indentation of the bullet points.
:::

:::info Underlining text
Do not use underline text, use **bold** or *italic emphasis* instead. Only use underline text for links.
:::

:::info Bullet points
Prefer the - character for bullet points. The * character is also supported but should be avoided.
:::

:::info Asterisks annotations
Using the asterisk character (*) to annotate text or table cell values is not supported. If you can, use the Notes & references annotations feature instead. If, for some reason, true annotations cannot be used, use another character (such as †, §, Δ or ◊) instead of an asterisk to prevent the renderer from interpreting it as a Markdown formatting character.
:::
