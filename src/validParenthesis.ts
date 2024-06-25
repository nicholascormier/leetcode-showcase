export function isValid(s: string) {
    let openParenthesis = 0    
    let openBracket = 0    
    let openBrace = 0    

    s.split("").forEach(char => {
        if (char == "(") openParenthesis++;
        if (char == "{") openBracket++;
        if (char == "[") openBrace++;

        if (char == ")") openParenthesis--;
        if (char == "}") openBracket--;
        if (char == "]") openBrace--;
    })

    console.log(`Parenthesis: ${openParenthesis}`)
    console.log(`Bracket: ${openBracket}`)
    console.log(`Brace: ${openBrace}`)
    
    return (openParenthesis == 0 && openBracket == 0 && openBrace == 0) 
}