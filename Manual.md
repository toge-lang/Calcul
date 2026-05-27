___
# Calcul Manual

Welcome to the Calcul manual! This is the full documentation for Calcul, the esolang, ball scrunched up into a huge file.\
<sub>tip: use the table of contents to get to specific topics easier than just scrolling 10 hours.</sub>
___
___
## Table of Contents
0.5. (**Hello, World!**)[## Hello, World!]
***
1. [**Basics**](# Basics)\
&ensp;1.1. *Functions*\
&ensp;1.2. *Text Usage*\
&ensp;1.3. *- O VS - R*\
&ensp;1.4. *Variables*\
&emsp; 1.4.1. *Creation & Updating*\
&emsp; 1.4.2. *Data Types*\
&emsp; 1.4.3. *Methods*\
&ensp;1.5. *Reevaluation: Chapter 1*\
___
2. **Beyond Basics**\
&ensp;2.1. Conditionals\
&emsp; 2.1.1. If/Else/Else If\
&emsp; 2.1.2. While/For\
&emsp; 2.1.3. When\
&ensp;2.2. Errors\
&emsp; 2.2.1. Handling\
&emsp; 2.2.2. Making\
&ensp; 2.3. Function Creation\
&ensp;2.4. Modules + Import/Export\
&ensp;2.5. Reevaluation: Chapter 2\
___
___
## Hello, World!

In Calcul, a Hello World program looks like this:
```
a<h.e.l.l.o.,.w.o.r.l.d.!> _O
```
Going through every part, we return with:
* `a<>` => add function for Calcul, with  <> being the paranthesis, and A standing for Add.
* `h.e.l.l.o.,. .w.o.r.l.d.!` => the addition of `h`, `e`, `l`... all together into a single string, `.` acting like a `,`.
* `_O` => ends the current line, while also outputing it(O for output). If the line should be treated as normal code, then put `_R`, which just returns any values established. However, you can't put `_R` on all lines. If a piece of code is only a piece of a puzzle, you can put `_S`, S for Stack, to 'stack' code ontop of more code until it reaches a point where the puzzle is finished, where you either `_R` or `_O`.
___
___
## Basics
  ### Functions
  Calcul has got lots of functions, each being one letter long.
  Most are the first letter of what it does, e.g. `s<>` is `subtract()`, but some start with the same letter, so we get creative.
  Here's the list for all of them:
  | Function | Usage |
  | --- | --- |
  | `a<>` | adding numbers and strings together
  | `s<>` | subtracting numbers and removing parts from strings
  | `t<>` | multiplying numbers
  | `d<>` | dividing numbers (having result as value) and seeing how many times a substring is in a string
  | `r<>` | dividing numbers (having rest as value)
  | `p<>` | multiplying a number by itself a certain amount of time
  | `f<>` | rounding down a number
  | `c<>` | rounding up a number
  | `v<
