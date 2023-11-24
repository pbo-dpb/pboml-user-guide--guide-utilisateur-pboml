# Paragraphs & Text Content

:::details All text is to be aligned on the left

### Reason

Changes in any text alignment are not supported, including in tables.

### Valid

All text should be uniformly aligned to the left.

:::

:::details Full URLs should not be included in the text: only the link text should be included

### Reason

URLs should link words, as part of the uninterrupted text flow. Screen readers will read the full URL if it is inserted in the text.

### Valid

> Lorem ipsum [dolor sit amet](https://www.example.com).

### Invalid

> Lorem ipsum dolor sit amet (https://www.example.com/).

:::

:::details If your text contains annotations, verify that the annotations are numbered with standard numbers (1, 2, 3, 4, …)

### Reason

This is to maintain uniformity across different publication. Additionnaly, the integrators will have to discard non-numeric references and use sequential Arabic numerals instead.

### Valid 

> “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”<sup>11</sup>

### Invalid

> “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.” <sup><i>XI</i></sup>

:::

:::details If your text contains underlines to create emphasis, use bold instead

### Reason 

### Recommendation

It is advised to refrain from using underlines to create emphasis in your text, as this convention is typically reserved for URLs on websites. Using underlines for emphasis can lead to confusion and should be avoided. It is also recommended to avoid using italics for emphasis, as this can be difficult to read for some users. Bold text, when used sparingly, can be used for emphasis.

### Valid

> **Lorem ipsum dolor sit amet** Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
>
> **Ut enim ad minim veniam**
>
> Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

## Invalid

> <u>Lorem ipsum dolor sit amet</u> Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
> 
> <u>Ut enim ad minim veniam</u>
>
> Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

:::

:::details If your text contains multilevel bullet points, consider using headings instead

### Reason 

Multilevel bullet points can cause integration issues and their structure difficult to grasp. While they can be used with simple structures and short lists, analysts should consider alternatives such as headings whenever possible.

### Valid:

> -	Providing student debt relief during the repayment of Lorem Student Loans (LSL) and Lorem Apprentice Loans (LAL) by:
>     -	Setting interest rates to zero, for the 2022-23 fiscal year; and
>     -	Expanding the Lorem Repayment Assistance Scheme (LRAS) eligibility thresholds and levels of support starting in the 2022-23 loan year.


### Invalid

> -	Providing student debt relief during the repayment of Lorem Student Loans (LSL) and Lorem Apprentice Loans (LAL) by:
>     -	Setting interest rates to zero, for the 2022-23 fiscal year;
>       -   This measure should allow borrowers to save up to $2,000 over the course of their repayment period.
>            - Calculations are based on a $25,000 loan with a 5.5% interest rate.
>       -   Depending on the size of the loan, this measure could reduce the repayment period by up to 2 years.
>            - This assumes a 10-year repayment period.
>               -	This aspect of the measure is not applicable to borrowers who have already repaid their loans.
>     -	Expanding the Lorem Repayment Assistance Scheme (LRAS) eligibility thresholds and levels of support starting in the 2022-23 loan year.

:::