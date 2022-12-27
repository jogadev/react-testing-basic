// This means tests for global file

const text = "Hello world";
const fruits = ['Apple', 'Orange', 'Watermelon', 'Banana', 'Cantaloupe'];

test('Should contain text', () => {
    expect(text).toMatch(/world/);
});

test('Do we have Banana?', () => {
    expect(fruits).toContain('Banana')
});

test('Cancha reglamentaria', () => {
    expect(20).toBeGreaterThan(18);
});

test('Boolean', () => {
    expect(10 === 10).toBeTruthy();
});

const promise = str =>  {
    return new Promise((resolve, reject) => {
        if(!str) reject(Error('No string'));

        resolve(str.split("").reverse().join(""));
    });
}

test("Promise", () => {
    return promise("Hola")
        .then(stg => {
            expect(stg).toBe("aloH");
        })
});

test("Async_await", async () => {
    const result = await promise("ASDF");
    expect(result).toBe("FDSA");
});

// afterEach(() => {
//     console.log("After each test");
// });

// afterAll(() => {
//     console.log("TESTS DONE");
// });

// beforeEach(() => {
//     console.log("Ready for next test");
// });

// beforeAll(() => {
//     console.log("Begin test suite");
// });