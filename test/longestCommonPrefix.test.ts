import { longestCommonPrefix } from "../src/longestCommonPrefix";

// 14. Longest Common Prefix
// Easy
// Topics
// Companies
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

const case1 = ["flower","flow","flight"]
const case2 = ["dog","racecar","car"]
const case3 = ["tower", "tool", "top"]

test("Longest common prefix", () => {
    expect(longestCommonPrefix(case1)).toBe("fl")
    expect(longestCommonPrefix(case2)).toBe("")
    expect(longestCommonPrefix(case3)).toBe("to")
})