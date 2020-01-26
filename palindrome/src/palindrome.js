// Utility to cleanup a string (keeping only relevant characters as per palindrome definition)
const cleanupStr = (str) => str.toLowerCase().replace(/[^A-Za-z0-9]/g, '');

/**
 * Returns true if a string is a palindrome.
 * Only considers alphabetic and numeric chars.
 *
 * @param str
 * @returns {boolean}
 */
const isPalindrome = (str) => {
    const cleanStr = cleanupStr(str);
    const strLen = cleanStr.length;


    for (let i = 0; i < strLen / 2; i++) {
        if (cleanStr[i] !== cleanStr[strLen - 1 - i]) {
            return false;
        }
    }
    return true;
};

if (typeof module === 'object' && module.exports) {
    module.exports = isPalindrome;
}
