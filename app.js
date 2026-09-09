    console.log("Hello World!\n==========\n");

// Exercise 1: Ignore Even Numbers

for (let i = 1; i <= 100; i++)
    {
    if (i % 2 == 0) {
        continue;
    }
    else
    {
        console.log(i);
    }

// Exercise 2: FIZZBUZZ

    for (let i = 1; i <= 100; i++)

    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FIZZBUZZ");
    } else if (i % 3 == 0) {
        console.log("FIZZ");
    } else if (i % 5 == 0) {
        console.log("BUZZ");
    } else {
        console.log(i);
    }


    // Exercise 3: Repeat Exercises 1 & 2 with While and Do/While Loops

    let i = 1;

    while (i <= 100)
            {
            if (i % 2 == 0)
                {
                    i++;
                    continue;
                }

            else
                {
                    console.log(i);
                }
                    i++;
            }

    let i = 1;

    do
       {
        if (i % 2 == 0)
            {
                i++;
                continue;
            }
        else
            {
                console.log(i);
            }
                i++;
       }
    while (i <= 100);


    let i = 1;

    while (i <= 100) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FIZZBUZZ");
        } else if (i % 3 == 0) {
            console.log("FIZZ");
        } else if (i % 5 == 0) {
            console.log("BUZZ");
        } else {
            console.log(i);
        }
        i++;
    }

    let i = 1;

    do {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FIZZBUZZ");
        } else if (i % 3 == 0) {
            console.log("FIZZ");
        } else if (i % 5 == 0) {
            console.log("BUZZ");
        } else {
            console.log(i);
        }
        i++;
    }
    while (i <= 100);

// Exercise 4 Section  Find Value: In this exercise, you will count from iterate from 1 to n.If you iterate over a given value, then break out the loop and print "Found value!".If you do not find the value in the given range, print "Did not find value".

    let value = Math.round((Math.random() * 500)); 
    let n = Math.round(Math.random() * (500 - 100) + 100);

    for (let i = 0; i <= n; i++)
    {
        if (i == value)
        {
            console.log("Found value!");
            break;
        }

        if (i == n)
        {
            console.log("Did not find value");
        }
    }

// Exercise 5 Section

    let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
    let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
    let n = Math.round(Math.random() * (1000 - 1) + 1);
    let start = Math.round(Math.random() * (10 - 1) + 1);

    for (let i = start; i <= n; i++) {
        if (i % fizzDivisor == 0 && i % buzzDivisor == 0) {
            console.log("FIZZBUZZ");
        }
        else if (i % fizzDivisor == 0) {
            console.log("FIZZ");
        }
        else if (i % buzzDivisor == 0) {
            console.log("BUZZ");
        }
        else {
            console.log(i);
        }
    }