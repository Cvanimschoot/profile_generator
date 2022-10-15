const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name?  ", (name) => {
  rl.question("What's an activity you like doing?  ", (activity) => {
    rl.question("What meal is your favorite?  ", (meal) => {
      rl.question("What's your favorite thing to eat for that meal?  ", (eat) => {
        console.log(`Hi my name is ${name}. I like to ${activity}. My favorite meal of the day is ${meal} where I prefer to enjoy a nice plate of ${eat}`);

        rl.close();
      });
    });
  });
});