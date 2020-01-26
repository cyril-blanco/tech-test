const inverseDocumentFrequency = (totalDocs, totalDocsWithTerm) => {
    return Math.log10(totalDocs / totalDocsWithTerm);
};

if (typeof module === 'object' && module.exports) {
    module.exports = inverseDocumentFrequency;
}
