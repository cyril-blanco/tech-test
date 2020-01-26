describe("termFrequency", function() {
    const testStr = `
        In information retrieval, tf–idf or TFIDF, short for term frequency–inverse document frequency, is a numerical 
        statistic that is intended to reflect how important a word is to a document in a collection or corpus.[1] It is 
        often used as a weighting factor in searches of information retrieval, text mining, and user modeling. The 
        tf–idf value increases proportionally to the number of times a word appears in the document and is offset by the
        number of documents in the corpus that contain the word, which helps to adjust for the fact that some words 
        appear more frequently in general. tf–idf is one of the most popular term-weighting schemes today; 83% of 
        text-based recommender systems in digital libraries use tf–idf.
    `;

    it('should find 0.0625 for the term "the"', function() {
        expect(termFrequency('the', testStr)).toEqual(0.0625);
    });

    it('should find 0.046875 for the term "a"', function() {
        expect(termFrequency('a', testStr)).toEqual(0.046875);
    });

    it('should find 0.03125 for the term "tf"', function() {
        expect(termFrequency('tf', testStr)).toEqual(0.03125);
    });

    it('should find 0.03125 for the term "idf"', function() {
        expect(termFrequency('idf', testStr)).toEqual(0.03125);
    });
});
