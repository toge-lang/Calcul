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
        case: break;
        case: break;
        case: break;
        case: break;
        case: break;
        default:
    };
};
module.exports = {parser};
