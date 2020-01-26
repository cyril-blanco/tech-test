/**
 * Find k-complementary pairs in a list of integers for a given k value.
 *
 * @param k
 * @param intArray
 * @returns {{}}
 */
const kComplementaryPairs = (k, intArray) => {
    const uniqueIntegers = {};
    const pairs = {};

    intArray.forEach(int => {
        if (!uniqueIntegers[int]) {
            uniqueIntegers[int] = 1;
        } else {
            uniqueIntegers[int] += 1;
        }
    });

    Object.keys(uniqueIntegers).forEach(key => {
        const compl = k - key;
        if (compl in uniqueIntegers && !(compl in pairs)) {
            pairs[key] = compl;
        }
    });

    return pairs;
};

if (typeof module === 'object' && module.exports) {
    module.exports = kComplementaryPairs;
}
