# Markdown Quick Reference Guide

The PBOML language and editor use the Markdown Syntax to format text in many ways. This guide provides a quick reference for common Markdown syntax and features. It is expected that integrators are familiar with Markdown to effectively use the PBOML editor.

## Tips for Using Markdown

- Markdown is designed to be as readable as plain text, so tables or advanced elements might not render properly in plain text editors.
- Use a Markdown editor or viewer to see the formatted output.
- Online platforms like GitHub, Reddit, and Stack Overflow use variations of Markdown, so abundant documentation and many examples are available online.

## Basic Syntax

### Headers

In Markdown, the `#` symbol is commonly used to create headers. The number of `#` symbols indicates the level of the header. 

```markdown
# H1
## H2
### H3
#### H4
##### H5
###### H6
```

The `=` symbol and `-` symbol can also be used to create level 1 and 2 headers.

```markdown

Heading level 1
===============


Heading level 2
---------------
```

Consequently, when importing content from Word, a series of `#` or `=` symbols indicate that a heading is present in the original document.

::: warning
While this syntax is valid in Markdown, it is highly recommanded to avoid creating headers this way in PBOML. Instead, you should use PBOML native [Heading slices](./headings.html) to define the structure of the PBOML document.
:::

### Emphasis

- **Bold**: Wrap text with two stars (`**`) or two underscores (`__`).

```markdown
**This is bold text**
__This is also bold text__
```

- *Italic*: Wrap text with a single star (`*`) or a single underscore (`_`).

```markdown
*This is italic text*
_This is also italic text_
```

- ***Bold & Italic***: Combine both.

```markdown
***This text is bold and italic***
```

### Lists
- **Unordered lists**: Use `*`, `-`, or `+` as list markers.

```markdown
* Item 1
* Item 2
  * Subitem 2.1
  * Subitem 2.2
```

- **Ordered lists**: Use numbers followed by a period.

```markdown
1. First item
2. Second item
   1. Subitem 2.1
   2. Subitem 2.2
```

### Links
Hyperlinks can be created by wrapping the text that you want to link in square brackets `[]`, immediately followed by the URL in parentheses `()`.

```markdown
[Google](https://www.google.com)
```

### Images

Images, in Markdown, are created using a syntax that is very similar to links, but with an exclamation point `!` before the square brackets. In this case, the text in the square brackets is the alt text for the image.

```markdown
![Markdown Logo](https://markdown-here.com/img/icon256.png)
```
::: warning
In PBOML, true images should be inserted using an [Image slice](./images.html) or a SVG slice instead of by using the Markdown syntax. This is especially important since image hosting on third party domains is prohibited on the PBO's main website. 
:::

::: warning
When importing content from Word, a number of elements that are not images in the original document can be recognized as images by the PBOML editor. For example, charts and inline equations will pasted as images, linking to a file on your computer. Be sure to replace these with the appropriate slice type or syntax. Finding the image syntax in the Markdown content can help you identify these elements.
:::


### Equations

The PBOML parser supports LaTeX equations, to the extent that they are supported by the KaTeX library. 

- Inline: To include an inline equation in your text, wrap the LaTeX code in single dollar signs `$`.

```markdown

The equation is $\Delta^{Hello}$.

```


- Block: To include a block (that will be centered and on it's own line) equation in your text, wrap the LaTeX code in double dollar signs `$$`.

```markdown

$$\Delta^{Hello}$$

```

::: tip
Equations are not a native feature of Markdown and are sometimes tricky to use; to learn more about how to use equations in PBOML flavored Markdown, refer to the [Equations](./equations.html) documentation.
:::


### Annotations / References

Annotations can be created using the `^` symbol, followed by the identifier of the annotation, all in square brackets `[]`. The annotation itself is defined in the *Notes & tefs* tab of the editor. A complete documentation is available on the [*Annotations Key Concepts* Page](./annotations-references.html).

```markdown
The sky is blue [^1].
```

In the example above, the annotation uses the identifier `1`.


### Horizontal Line
- Create a horizontal rule with `---`, `***`, or `___`.

```markdown
---
```

### Tables
- Use pipes (`|`) and hyphens (`-`) to create tables.

```markdown
| Header 1 | Header 2 |
| -------- | -------- |
| Row 1    | Data     |
| Row 2    | Data     |
```

::: warning
The tables created using this syntax are generally accessible and can be used to render simple tables, for example in the visual description of a figure. However, for more complex tables, it is recommended to use the [Table slice](./tables.html) in PBOML to ensure that the table is accessible and responsive.
:::


## Advanced Features

### Escaping
- Use the backslash `\` to escape Markdown characters. This backlash can be used to escape any character that has a special meaning in Markdown. This is especially useful when you want to include multiple characters that are used in the Markdown syntax, such as asterisks, backticks or, even more importantly, dollar signs.

```markdown
\*This text is not italicized\*
```

### Blockquotes
- Use `>` for blockquotes.

```markdown
> This is a blockquote.
```


### Code

The Markdown syntax allow you to include code snippets in your text. Even though code is rarely used in our publications, it can be useful to know this syntax as it can be used to format any text in a monospaced font, without interpretation of the enclosed syntax.

- Inline: Use backticks `` `code` ``.

```markdown
Here is some `inline code`.
```

- Block: Use triple backticks or indent with four spaces.

<pre markdown="1">
```
def hello_world():
    print("Hello, world!")
```
</pre>

### Task Lists
- Use `- [ ]` for tasks.

```markdown
- [x] Task 1
- [ ] Task 2
```

