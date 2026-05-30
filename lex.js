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
  function tkn(a, b) {tkns.push({
    type: a,
    value: b,
    line: line,
    column: col
  })};
  while(pos < src.length) {
    const char = src[pos];
    const nxt = src[pos+1];
    switch(true) {
      case ltrs.includes(char):
        let bef = src[pos-1];
        if(nxt === "," || bef === ",") {tkn("TEXT", char); move(); break};
        let val = ``;
        while(ltrs.includes(src[pos]) || dgts.includes(src[pos])) {val += src[pos]; move()};
        tkn("IDENTIFIER", val);
        break;
      case dgts.includes(char):
        let val = ``;
        let i = 0;
        while(dgts.includes(src[pos]) || src[pos] === '.') {if(src[pos] === '.') {i++}; if(src[pos] === '0' && (!('.' in val) && val.split("0").join("") === "")) {j++}; val += src[pos]; move()};
        if(i > 1) {throw new Error("number found at line " + line + ", column " + col + " that contains too many decimal points")};
        if(j > 1) {throw new Error("number found at line " + line + ", columm " + col + " that starts with multiple 0's, without a decimal.")};
        tkn("NUMBER", val);
        break;
      case char in pnct:
        let bef = src[pos-1];
        if(bef === "," || nxt === ",") {tkn(tkns, "TEXT", char)};
        tkn(pnct[char], char);
        move();
        break;
      case whtspc.includes(char):
        if(char === '\n') {line++; col = 1};
        pos++;
        break;
      case char === '#':
        let val = ``;
        while(dgts.includes(src[pos]) || ltrs.includes(src[pos]) {val += src[pos]; move};
        tkn("VARIABLE", val);
        break;
      case char === '_':
        bef = src[pos-1];
        switch(nxt) {
          case 'O':
            tkn("L_OUTPUT", '_O');
            move(2);
            break;
          case 'R':
            tkn("L_RETURN", '_R');
            move(2);
            break;
          case 'S':
            tkn("L_STACK", '_S');
            move(2);
            break;
          case ',':
            tkn("TEXT", '_');
            move();
            break;
          default:
            if(bef === ',') {tkn("TEXT", '_'); move(); break};
            else {throw new Error("can't have _ that isn't nor for a line type, nor for regular text, at line " + line + ", column " + col + ".")};
        };
        break;
      default:
        throw new Error("unrecognized char, '" + char + "', at line " + line + ", column " + col + ".");
    };
  };
  tkn("EOF", null);
  return tkns;
};  
module.exports = {lexer};
