___
Welcome to the Calcul manual! This is the full documentation for Calcul, the esolang, ball scrunched up into a huge file.\
<sub>tip: use the table of contents to get to specific topics easier than just scrolling 10 hours.</sub>
___
___
# Table of Contents
0.5. [**Hello, World!**](#hello-world)
***
1. [**Basics**](#basics)\
&ensp;1.0.5. [*Grammar*](#grammar)\
&ensp;1.1. [*Functions*](#functions)\
&ensp;1.2. [*Text Usage*](#text-usage)\
&ensp;1.3. *Line Stuff*\
&ensp;1.4. *Variables*\
&emsp; 1.4.1. *Creation & Updating*\
&emsp; 1.4.2. *Data Types*\
&emsp; 1.4.3. *Methods*\
&ensp;1.5. *Reevaluation: Chapter 1*\
___
___
# Hello, World!
In Calcul, a Hello World program looks like this:
```
a<h.e.l.l.o.,.w.o.r.l.d.!> _O
```
Going through every part, we return with:
* `a<>` => add function for Calcul, with  <> being the paranthesis, and A standing for Add.
* `h.e.l.l.o.,. .w.o.r.l.d.!` => the addition of `h`, `e`, `l`... all together into a single string, `.` acting like a `,`, the argument delimiter.
* `_O` => ends the current line, while also outputing it(O for output). If the line should be treated as normal code, then put `_R`, which just returns any values established. However, you can't put `_R` on all lines. If a piece of code is only a piece of a puzzle, you can put `_S`, S for Stack, to 'stack' code ontop of more code until it reaches a point where the puzzle is finished, where you either `_R` or `_O`.
___
___
# Basics
  ## Grammar
  The second thing aside from a hello world program you need to know about Calcul is the grammar.
  How about a table for 'em all?
  | Symbol | Name | Use |
  | ------ | ---- | --- |
  | `_O` |  Line Output | Both returns and outputs whatever data and info is on the current line.
  | `_R` |  Line Return | Just returns whatever data and info is on the current line. Needed for lines like where a variable is declared.
  | `_S` |  Line Stack  | 'Stacks' lines together up until a certain `_R` or `_O`, returning or outputing the result of all lines stacked plus the final one.
  | `!`  | End of Statement(EOS) | Used after the final line symbol (`_R`/`_S`/`_O`)of a statement, to mark the end of it.
  | `.`  | Normal Delimiter | The usual comma equivalent for function arguments.
  | `,`  | Big Delimiter | If a function needs to be the argument of another function, the preceding `.` turns into a `,`, and if there's two arguments of strings(put letter by letter), they need to be seperated via this.
  | `<>` | Right/Left Angle Brackets | Both used as comparison operators inside conditions, and outside are just normal paranthesis.
  ## Functions
  Calcul has got lots of functions, each being one letter long.\
  Most are the first letter of what it does, e.g. `s<>` is `subtract()`, but some start with the same letter, so we get creative.\
  Here's the list for all of them:
  | Function | Usage |
  | --- | --- |
  | `a<x.y>` | Adding x and y together
  | `s<x.y>` | Subtracting y from x
  | `t<x.y>` | multiplying x by y (x Times y)
  | `d<x.y>` | dividing x by y (having result as value) 
  | `r<x.y>` | dividing x by y (having rest as value)
  | `p<x.y>` | multiplying x by x, y times (the Power of x)
  | `f<x>` | rounding down x (to it's Floor)
  | `c<x>` | rounding up x (to it's Ceiling)
  | `z<x>` | rounds x to the nearest integer(inside ℤ)
  | `v<x>` | square root of a number(becausw V‾‾‾ looks similar to the symbol)
  | `n<x,y,z>` | Creating a new variable x, with type y, and value z
  | `u<x,y>` | Updating a variable x with the new value y
  | `l<x>` | Length of x
  | `i<x,y,z>` | slIces a part of x, from the yth to the zth character
  ___
  ## Text Usage
  Even if calcul is mainly made only as a calculator, it can also use and manipulate text.
  You can use `l<>` and `i<>` for only manipulating text, but there's other stuff too:
  * `a<>` can add text letters together(and variables);
  * `s<>` can subtract parts of text from a string(or variable);
  * `d<>` to see how many times a part of text is inside a string;
  * `z<>`, `f<>` and `c<>` all transform any strings into numbers;
  * 
