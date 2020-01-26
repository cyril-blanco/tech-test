const termFrequency = (term, str) => {
    const termsArray = str.replace(/[^A-Za-z0-9]/g, ' ').toLowerCase().split(/\s+/);
    const termsMap = {};

    termsArray.forEach(function (key) {
        if (termsMap.hasOwnProperty(key)) {
            termsMap[key]++;
        } else {
            termsMap[key] = 1;
        }
    });

    return term in termsMap ? termsMap[term] / termsArray.length : 0;
};

if (typeof module === 'object' && module.exports) {
    module.exports = termFrequency;
}
