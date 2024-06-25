export function longestCommonPrefix(strs: readonly string[]) {

    const firstStr = strs[0]

    let prefix = ""

    for (let i = 0; i < firstStr.length; i++) {
        const compareChar = firstStr[i]
        for (let x = 1; x < strs.length; x++) {
            if (strs[x][i] !== compareChar) return prefix;
        }
        prefix += compareChar
    }

    return prefix
}