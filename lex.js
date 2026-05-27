let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let punctuation ={'<': 'LAB', '>': 'RAB',  '.': 'DELIM', '!': 'EOS'};
let whitespace = [' ', '\n', '\r', '\t'];
function token(a, b, c) {a.push({type: b, value: c})}
tokenize(src) {
  let pos = 0;
  let tokens = [];
  const char = src[pos];
  let col = 1;
  let line = 1;
  function move(n = 1) {pos += n; col += n};
  while(pos < src.length) {
    switch(true) {
      case char in alphabet:
        let val = ``;
        while(src[pos] in alphabet && src[pos] in digits) {val += src[pos]; move()};
        token(tokens, "IDENTIFIER", val);
        break;
      case char in digits:
        let val = ``;
        let i = 0;
        while(src[pos] in digits || src[pos] === '.') {if(src[pos] === '.') {i++}; val += src[pos]; move()};
        if(i > 1) {throw new Error("number found at line " + line + ", column " + col " contains too many decimal points")};
        token(tokens, "NUMBER", val);
        break;
      case char in punctuation:
        token(tokens, punctuation[char], char);
        break;
      case char in whitespace:
        if(char === '\n') {line++; col = 1};
        pos++;
        break; 
    };
  };
};  
  
