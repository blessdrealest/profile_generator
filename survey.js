const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer1) => {

  rl.question('What\'s an activity you like doing? ', (answer2) => {

    rl.question('What do you listen to while doing that? ', (answer3) => {

      rl.question('Which meal is your favorite (eg: dinner, brunch, etc) ', (answer4) => {

        rl.question('What\'s your favorite thing to eat for that meal?  ', (answer5) => {

          rl.question('Which sport is your absolute favourite? ', (answer6) => {

            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer7) => {
              console.log(`Thank you for your valuable feedback ${answer1}. I am glad to hear you enjoy ${answer2}. Great choice on tunes. I am also a big fan of ${answer3}.
              ${answer4} sounds like a formidable choice. ${answer5} is so versatile with what you can do with it. ${answer6} is definitely the most growing sport in Canada. ${answer7} is such an amazing talent. Thank you for your time!`);


              rl.close();
            });
          });
        });
      });
    });
  });

});














