lexer(src) {
  const ltrs = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const dgts = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const pnct = {'<': 'LAB', '>': 'RAB',  ',': 'NORMAL_DELIM', '|': 'FUNC_DELIM', '!': 'EOS'};
  const whtspc = [' ', '\n', '\r', '\t'];
  let pos = 0;
  let tkns = [];
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
    const char = src[pos];
    const nxt = src[pos+1];
    mainSwitch:
    switch(true) {
      case ltrs.includes(char):
        let bef = src[pos-1];
        if(nxt === "," || bef === ",") {tken(tkns, "TEXT", char); move(); break};
        let val = ``;
        while(src[pos] in ltrs || src[pos] in dgts) {val += src[pos]; move()};
        tken(tokens, "IDENTIFIER", val);
        break;
      case dgts.includes(char):
        let val = ``;
        let i = 0;
        while(src[pos] in digits || src[pos] === '.') {if(src[pos] === '.') {i++}; if(src[pos] === '0' && (!('.' in val) && val.split("0").join("") === "")) {j++}; val += src[pos]; move()};
        if(i > 1) {throw new Error("number found at line " + line + ", column " + col + " that contains too many decimal points")};
        if(j > 1) {throw new Error("number found at line " + line + ", columm " + col + " that contains starts with multiple 0's, withot a decimal.")};
        tken(tokens, "NUMBER", val);
        break;
      case char in pnct:
        tken(tkns, punctuation[char], char);
        move();
        break;
      case whtspc.includes(char):
        if(char === '\n') {line++; col = 1};
        pos++;
        break;
      case char === '#':

      case char === '_':
        bef = src[pos-1];
        switch(nxt) {
          case 'O':
            tken(tkns, "L_OUTPUT", '_O');
            move(2);
            break;
          case 'R':
            tken(tkns, "L_RETURN", '_R');
            move(2);
            break;
          case 'S':
            tken(tkns, "L_STACK", '_S');
            move(2);
            break;
          case ',':
            tken(tkns, "TEXT", '_');
            move();
            break;
          default:
            if(bef === ',') {tken(tkns, "TEXT", '_'); move(); break};
            else {throw new Error("can't have _ that isn't nor for a line type, nor for regular text, at line " + line + ", column " + col + ".")};
        };
        break;
      default:
        throw new Error("unrecognized char, '" + char + "' at line " + line + ", column " + col + ".");
    };
  };
  token(tkns, "EOF", null);
  return tkns;
};  
module.exports = {lexer};
