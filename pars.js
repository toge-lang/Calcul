function parser(tokens) {
  let current = 0;
  function peek() {
    return tokens[current];
  };
  function peekAhead() {
    return tokens[current+1];
  };
  function eat(type) {
    const token = peek();
    if (token.type === type) {current++; return token};
    else {throw new Error("Unexpected token '" + token + "', instead of expected token '" + type + "'.")};
  };
  function parseArgument() {
    switch(peek().type) {
      case 'NUMBER':
        let token = eat("NUMBER");
        return {
          type: "Literal",
          valueType: "Number",
          value: token
        };
        break;
      case 'TEXT':
        let token = eat("TEXT");
        return {
          type: "Literal",
          valueType: "Text",
          value: token
        };
        break;
      case 'VARIABLE':
        let token = eat("VARIABLE");
        return {
          type: "VariableReference",
          name: token
        };
        break;
      case 'PARAMETER':
        let token = eat("PARAMETER");
        return {
          type: "ParameterReference",
          name: token
        };
        break; 
      case 'IDENTIFIER':
        if(peekAhead().type === 'LPAREN') {return parseFunctionCall()},
        else {
          let token = eat("IDENTIFIER");
          return {
            type: "Identifier",
            name: token
          };
        break;
      default:
        //TODO: complete
    };
};
module.exports = {parser};
