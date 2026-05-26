let func = {'a', 's', 't', 'd', 'r', 'p', 'f', 'c', 'v', 'n', 'u', 'i', 'e', 'l'};
/* MATH:
a is Add, s is Subtract,
t is Times,
d is Divide(result), r is divide(Rest),
f is Floor, c is Ceiling,     
v is square root(V‾‾ looks like the sqrt symbol), p is Power,
  VARIABLES:
n is New variable, u is Update variable,
i is Increment, e is dEcrement
  TEXT:
l is Length, 
*/
token(a, b, c) {a.push({type: b, value: c})}
tokenize(src) {
  let pos = 0;
  let tokens = [];
  let char = src[pos];
  while(pos < src.length) {
    switch(true) {
      case char in func:
        tokens.push(token(tokens, "FUNC", char);
        pos++;
        break;
    };
  };
};  
  
