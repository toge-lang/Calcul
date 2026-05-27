___
# Calcul Manual

Welcome to the Calcul manual! This is the full documentation for Calcul, the esolang, ball scrunched up into a huge file.\
<sub>tip: use the table of contents to get to specific topics easier than just scrolling 10 hours.</sub>
___
___
## Table of Contents
0.5. [**Hello, World!**](#hello,world!)
***
1. [**Basics**](#basics)\
&ensp;1.1. [*Functions*](#functions)\
&ensp;1.2. *Text Usage*\
&ensp;1.3. *_O VS _R*\
&ensp;1.4. *Variables*\
&emsp; 1.4.1. *Creation & Updating*\
&emsp; 1.4.2. *Data Types*\
&emsp; 1.4.3. *Methods*\
&ensp;1.5. *Reevaluation: Chapter 1*\

___
## Hello, World!

In Calcul, a Hello World program looks like this:
```
a<h.e.l.l.o.,.w.o.r.l.d.!> _O
```
Going through every part, we return with:
* `a<>` => add function for Calcul, with  <> being the paranthesis, and A standing for Add.
* `h.e.l.l.o.,. .w.o.r.l.d.!` => the addition of `h`, `e`, `l`... all together into a single string, `.` acting like a `,`, the argument delimiter.
* `_O` => ends the current line, while also outputing it(O for output). If the line should be treated as normal code, then put `_R`, which just returns any values established. However, you can't put `_R` on all lines. If a piece of code is only a piece of a puzzle, you can put `_S`, S for Stack, to 'stack' code ontop of more code until it reaches a point where the puzzle is finished, where you either `_R` or `_O`.
___
## Basics
  ### Functions
  Calcul has got lots of functions, each being one letter long.
  Most are the first letter of what it does, e.g. `s<>` is `subtract()`, but some start with the same letter, so we get creative.
  Here's the list for all of them:
  | Function | Usage |
  | --- | --- |
  | `a<x.y>` | adding x and y together, regardless if theyre strings or numbers
  | `s<x.y>` | subtracting numbers and removing parts from strings
  | `t<x.y>` | multiplying x by y
  | `d<x.y>` | dividing x by y (having result as value) and seeing how many times a substring is in a string
  | `r<x.y>` | dividing x by y (having rest as value)
  | `p<x.y>` | multiplying x by x, y times
  | `f<x>` | rounding down x
  | `c<x>` | rounding up x
  | `z<x>` | rounds x to the nearest whole number
  | `v<x>` | square root of a number(becausw V‾‾‾ looks similar to the symbol)
  | `n<x.y.z>` | creating a new variable x, with type y, and value z
  | `u<x.y>` | updating a variable x with the new value y
  | `l<x>` | length of x
  
