describe("isPalindrome", function() {

    describe("with simple strings", function() {

        it('should identify palindrome', function() {
            expect(isPalindrome('sugus')).toEqual(true);
            expect(isPalindrome('madam')).toEqual(true);
            expect(isPalindrome('racecar')).toEqual(true);
        });

        it('should not identify palindrome', function() {
            expect(isPalindrome('cyril')).toEqual(false);
            expect(isPalindrome('devo')).toEqual(false);
            expect(isPalindrome('palindrome')).toEqual(false);
        });

    });

    describe("with famous palindromes", function() {

        it('should identify palindrome in "Never odd or even"', function() {
            expect(isPalindrome('Never odd or even')).toEqual(true);
        });

        it('should identify palindrome in "Madam, I\'m Adam"', function() {
            expect(isPalindrome('Madam, I\'m Adam')).toEqual(true);
        });

        it('should identify palindrome in "A man, a plan, a canal – Panama!"', function() {
            expect(isPalindrome('A man, a plan, a canal – Panama!')).toEqual(true);
        });

    });
});
