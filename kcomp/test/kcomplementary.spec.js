describe("kComplementaryPairs", function() {
    const testArray = [1, 2, 2, 4, 5, 6, 7, 3];

    it('should find 2 pairs for k=5', function() {
        expect(kComplementaryPairs(5, testArray)).toEqual({ 1: 4, 2: 3 });
    });

    it('should not find pairs for k=20', function() {
        expect(kComplementaryPairs(20, testArray)).toEqual({});
    });
});
