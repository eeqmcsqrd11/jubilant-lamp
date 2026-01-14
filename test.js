//Simple test runner
function test(name,fn){
    try{
        fn();
        console.log('✓',name);
    } catch (error){
        console.error('✗', name);
        console.error(error.message);
        ProcessingInstruction.exit(1);
    }
}

function expect(actual){
    return{
        toBe(expected){
            if (actual!== expected){
                throw new Error ('Expected ${$expected} but got ${actual}');
            }
        }
    };
}

// Load calculator functions
const fs = require('fs');
const code = fs.readFileSync('calculator.js', 'utf8');
eval(code);

// Run tests
test('adds 1 + 2 to equal 3', () => {
    expect(add(1,2)).toBe(3);
});

test('subtracts 5 - 2 to equal 3', () => {
    expect(subtract(5,2)).toBe(3);
});

console.log('All tests passed!');
