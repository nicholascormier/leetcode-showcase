import { isValid } from "../src/validParenthesis"
// 20. Valid Parentheses
// Easy
// Topics
// Companies
// Hint
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

// function signature = function isValid(s: string): boolean

// case 1: s = "()"
// case 2: s = ""()[]{}""
// case 3: s = "(]"

const case1 = "()"
const case2 = "()[]{}"
const case3 = "(]"

test("Valid Parenthesis.", () => {
    expect(isValid(case1)).toBe(true)
    expect(isValid(case2)).toBe(true)
    expect(isValid(case3)).toBe(false)
})