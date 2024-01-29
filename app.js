console.log("Hello World!\n==========\n");


for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}






for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FIZZBUZZ');
    } else if (i % 3 === 0) {
        console.log('FIZZ');
    } else if (i % 5 === 0) {
        console.log('BUZZ');
    }
}


let i = 1;
while (i <= 100) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++;
}

let j = 1;
while (j <= 100) {
    if (j % 3 === 0 && j % 5 === 0) {
        console.log('FIZZBUZZ');
    } else if (j % 3 === 0) {
        console.log('FIZZ');
    } else if (j % 5 === 0) {
        console.log('BUZZ');
    }
    j++;
}

let k = 1;
do {
    if (k % 2 !== 0) {
        console.log(k);
    }
    k++;
} while (k <= 100);


let f = 1;
do {
    if (k % 2 !== 0) {
        console.log(k);
    }
    f++;
} while (f <= 100);



let y = 1;
do {
    if (n % 3 === 0 && n % 5 === 0) {
        console.log('FIZZBUZZ');
    } else if (y % 3 === 0) {
        console.log('FIZZ');
    } else if (y % 5 === 0) {
        console.log('BUZZ');
    }
    n++;
} while (n <= 100);

//Exercise 4 Section
let value = Math.round((Math.random() * 500)); 
let n = Math.round(Math.random() * (500 - 100) + 100); 

let found = false; 


for (let i = 1; i <= n; i++) {
    if (i === value) {
        console.log("Found value!");
        found = true;
        break; 
    }
}


if (!found) {
    console.log("Did not find value");
}

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let x = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);


for (let i = start; i <= n; i++) {
    
    if (i % fizzDivisor === 0 && i % buzzDivisor === 0) {
        console.log("FIZZBUZZ");
    } else if (i % fizzDivisor === 0) {
        console.log("FIZZ");
    } else if (i % buzzDivisor === 0) {
        console.log("BUZZ");
    } else {
        console.log(i); 
    }
}