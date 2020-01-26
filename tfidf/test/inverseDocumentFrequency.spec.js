describe("inverseDocumentFrequency", function() {

    it('should find 2 for 100 documents out of 10000', function() {
        expect(inverseDocumentFrequency(10000, 100)).toEqual(2);
    });

    it('should find 0 for 10000 documents out of 10000', function() {
        expect(inverseDocumentFrequency(10000, 10000)).toEqual(0);
    });
});
