# Equations

The PBOML parser supports LaTeX equations, to the extent that they are [supported by the KaTeX library](https://katex.org/docs/supported.html). While the syntax to insert them in a document is fairly simple, equations can sometimes be tricky to use. This document will provide a brief overview of how to include equations in your Markdown documents.

## Equations syntax in Markdown

### Inline equations

To include an inline equation in your text, wrap the LaTeX code in single dollar signs `$`.

```markdown

The equation is $\Delta^{2}$.

```

### Block equations

To include a block (that will be centered and on its own line) equation in your text, wrap the LaTeX code in double dollar signs `$$`.

```markdown

$$\Delta^{2}$$

```

## Exporting equations from Word

### Setting up Word

By default, Word equations are copied as Unicode characters, which are not supported by the PBOML parser. Before attempting to copy an equation from Word, you must first convert it to LaTeX. To do this, follow these steps:

1. Select the equation in Word.
2. Click on the `Equation` tab in the Word ribbon.
3. Click on the `LaTeX` button.

![Exporting equations from Word](/equation-word-unicode-to-latex.png)

::: warning
Converting an equation from Unicode to LaTeX can break it. Make sure to verify that the equation did not change during the conversion process.
:::

### Copying the equation

1. Select the equation in Word by clicking on the three dots that appear when you hover over it.
2. Use the copy command (`Ctrl+C` or `Cmd+C`).
3. In your Markdown field, paste the equation using the `Ctrl+v` or `Cmd+v` keyboard shortcut. **Do not use the `Paste from Word` button in the editor.**
4. Preview the equation and compare it to the original to ensure that it was copied correctly.

::: tip
When a long paragraph contains multiple equations, it is often easier to copy and paste the entire paragraph at once, rather than copying each equation individually. To do this, select the entire paragraph in Word and copy it using the `Ctrl+c` or `Cmd+c` keyboard shortcut. Then, paste it into the Markdown field using the `Ctrl+v` or `Cmd+v` keyboard shortcut (do not use the "Paste from Word" button). The equations will be pasted as LaTeX code, but will not be enclosed in dollar signs. You will need to add the dollar signs manually. Note that any reference to a note or another annotation will have to be added manually as well (using the `[^#]` syntax).
:::


### Rewriting equations

Some equations may be fundamentally incompatible with the PBOML parser, due to the limitations of the KaTeX library. In such cases, you may need to rewrite the equation in a different form, or use an image of the equation instead.

### Convert the equation using AI

If you are unable to rewrite the equation, you can use an AI tool to convert it to LaTeX. For example, the [Mathpix Snip](https://mathpix.com/) tool can convert images of equations to LaTeX code.

Alternatively, most commercially available LLMs (like GPT-4) can easily convert equations to LaTeX. To do so, take a screenshot of the equation (you can zoom in to make it clearer), and then upload the image to the LLM using a prompt like `Convert this equation to a KaTeX-compatible LaTeX format`.

Always verify the output of these tools, as they may not always provide the correct LaTeX code. It is particularly import to check the case of letters (e.g. was the variable `z` or `Z`), as AI tools may not always correctly interpret the case of letters in the equation.

### Convert or fix the equation by writing LaTeX yourself

Using the [KaTex documentation](https://katex.org/docs/supported.html) can help you understand how to rewrite LaTeX code that is compatible with the PBOML parser. You can also use online LaTeX editors like [Overleaf](https://www.overleaf.com/) to write and test your equations.

### Use an image of the equation

If you are unable to convert the equation to a compatible LaTeX format, you can use an image of the equation instead. To do this, take a screenshot of the equation and insert it into your document as an image slice.

Alternatively, you can convert the equation to an image (e.g. of the png format) and convert it to base64. Then, you can insert the base64 string into the Markdown document using the following syntax:

```markdown

![Equation](data:image/png;base64, <base64 string>)

```

::: warning
Using images of equations can make your document less accessible to screen readers and other assistive technologies. Whenever possible, use LaTeX code instead.
:::

## Troubleshooting

### Normal text being interpreted as LaTeX

It is possible that the PBOML parser will interpret normal text as LaTeX code if it contains the dollar sign character. To avoid this, you can escape the dollar signs by prefixing them with backticks.

```markdown

This symbol represents the average taxable earnings of those making over \$500,000, minus \$500,000, which is taxed at a different rate.

```

### Equation not rendering or appearing in red

There can be several reasons why an equation is not rendering correctly, especially when it is copied from Word. For example, the equation may contain unsupported LaTeX commands (that don't follow the conventions supported by the KaTeX library), or may have been copied incorrectly.

If you encounter an issue with an equation, try the following:

- Verify that the equation is correctly formatted in LaTeX and not in Unicode.
- Try to rewrite the equation in a KaTeX-compatible format.
- Discuss the issue with the person who wrote the equation, to see if they can provide a corrected version that is compatible with the PBOML parser.