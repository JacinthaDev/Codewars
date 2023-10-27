function isPalindrome(x) {
    return x.toLowerCase() === Array.from(x.toLowerCase()).reverse().join('') ? true : false
}