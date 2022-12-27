const randomStrings = require('../index');



describe('Random LATAM City', () => {
    test("Returns a string", () => {
        expect(typeof(randomStrings())).toBe('string')
    });

    test("Cordova is missing", () => {
        expect(randomStrings()).not.toMatch(/Cordova/);
    });
});