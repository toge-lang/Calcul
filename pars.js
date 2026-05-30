function parser(tokens) {
  let current = 0;
  function peek() {return tokens[current]};
  function peekAhead() {return tokens[current+1]};
  function eat(type) {
    const token = peek();
    if (token.type === type) {current++; return token};
    else {throw new Error("Unexpected token '" + token + "', instead of expected token '" + type + "'.")};
  };
  function parseFunctionCall() {
    const funcName = eat("IDENTIFIER");
    eat("LAB");
    let args = [];
    while(peek().type !== "RAB") {
      args.push(parseArgument());
      if(peek().type === "NORMAL_DELIM") {eat("NORMAL_DELIM"); args.push(parseArgument())};
      if(peek().type === "FUNC_DELIM") {eat("FUNC_DELIM"); args.push(parseFunctionCall())};
    };
    eat("RAB");
    return {
      type: "FunctionCall",
      name: funcName,
      arguments: args
    };
  };
  function parseArgument() {
    switch(peek().type) {
      case 'NUMBER': let token = eat("NUMBER");
        return {
          type: "Literal",
          valueType: "Number",
          value: token
        };
        break;
      case 'TEXT': let token = eat("TEXT");
        return {
          type: "Literal",
          valueType: "Text",
          value: token
        };
        break;
      case 'VARIABLE': let token = eat("VARIABLE");
        return {
          type: "VariableReference",
          name: token
        };
        break;
      case 'PARAMETER': let token = eat("PARAMETER");
        return {
          type: "ParameterReference",
          name: token
        };
        break; 
      case 'IDENTIFIER': 
        if(peekAhead().type === 'LPAREN') {return parseFunctionCall()}
        else {
          let token = eat("IDENTIFIER");
          return {
            type: "Identifier",
            name: token
          };
        };
        break;
      default:
        throw new Error("unrecognized token ' " + peek().value + " ' at line " + peek().line + ", column " + peek().column + ".");
    };
  };
};
module.exports = {parser};
