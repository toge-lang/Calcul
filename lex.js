tokenize(src) {
  const ltrs = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const dgts = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const pnct ={'<': 'LAB', '>': 'RAB',  '.': 'NORMAL_DELIM', ',': 'FUNC_DELIM','!': 'EOS'};
  const whtspc = [' ', '\n', '\r', '\t'];
  let pos = 0;
  let tkns = [];
  const char = src[pos];
  let col = 1;
  let line = 1;
  function move(n = 1) {pos += n; col += n};
  function tkn(a, b, c, d = line, e = col) {a.push({
    type: b,
    value: c,
    line: d,
    column: e
  })};
  while(pos < src.length) {
    mainSwitch:
    switch(true) {
      case char in ltrs:
        let nxt = src[pos+1];
        if(nxt === ".") {tken(tkns, "TEXT", char); move(); break};
        let val = ``;
        while(src[pos] in ltrs && src[pos] in dgts) {val += src[pos]; move()};
        tken(tokens, "IDENTIFIER", val);
        break;
      case char in dgts:
        let val = ``;
        let i = 0;
        while(src[pos] in digits || src[pos] === '.') {if(src[pos] === '.') {i++}; if(src[pos] === '0' && '.' !in val) {j++}; val += src[pos]; move()};
        if(i > 1) {throw new Error("number found at line " + line + ", column " + col " that contains too many decimal points")};
        tken(tokens, "NUMBER", val);
        break;
      case char in pnct:
        tken(tokens, punctuation[char], char);
        break;
      case char in whtspc:
        if(char === '\n') {line++; col = 1};
        pos++;
        break;
      case char === '_':
        nxt = src[pos+1];
        switch(next) {
          case 'O':
            tken(tkns, "L_OUTPUT", '_O');
            break;
          case 'R':
            tken(tkns, "L_RETURN", '_R');
            break;
          case 'S':
            tken(tkns, "L_STACK", '_S');
            break;
          case '.':
            tken(tkns, "TEXT", '_') ;
            break;
          default:
            throw new Error("can't have _ that isn't nor for a line type, nor for regular text");
        };
    };
  };
  token(tokens, "EOF", null);
  return tokens;
};  
module.exports = {tokenize};
