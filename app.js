// Exercise 1: Ignore Even
console.log("Exercise 1: Ignore Even");
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// Exercise 2: FIZZBUZZ
console.log("\nExercise 2: FIZZBUZZ");
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FIZZBUZZ');
    } else if (i % 3 === 0) {
        console.log('FIZZ');
    } else if (i % 5 === 0) {
        console.log('BUZZ');
    }
}

// Exercise 3: Repeat with While
console.log("\nExercise 3: Repeat with While");
let j = 1;
while (j <= 100) {
    if (j % 2 !== 0) {
        console.log(j);
    }
    j++;
}

// Exercise 3: Repeat with Do/While
console.log("\nExercise 3: Repeat with Do/While");
let k = 1;
do {
    if (k % 2 !== 0) {
        console.log(k);
    }
    k++;
} while (k <= 100);

// Exercise 4: Find Value
console.log("\nExercise 4: Find Value");
let value = Math.round(Math.random() * 500); 
let n = Math.round(Math.random() * (500 - 100) + 100);
let found = false;
for (let i = 0; i <= n; i++) {
    if (i === value) {
        console.log("Found value!");
        found = true;
        break;
    }
}
if (!found) {
    console.log("Did not find value");
}

// Exercise 5: Customized FIZZBUZZ
console.log("\nExercise 5: Customized FIZZBUZZ");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let m = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);
for (let i = start; i <= m; i++) {
    let output = '';
    if (i % fizzDivisor === 0) {
        output += 'FIZZ';
    }
    if (i % buzzDivisor === 0) {
        output += 'BUZZ';
    }
    console.log(output || i);
}
