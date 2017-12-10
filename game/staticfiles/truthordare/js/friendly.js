let truth = [
'What is your favourite color?',
'What is your favourite animal?',
'What is your favourite food?',
'What is your favourite school subject?',
'Who is your favourite teacher, and why?',
'What is your favourite song?',
'Who is your favourite Disney character?',
'What is your favourite TV show?',
'What is your pet’s name?',
'What is your shoe size?',
'What is your favourite movie?',
'Who is your favourite singer?',
'Do you like bugs?',
'What is your favourite vegetable?',
'Would you rather be a chicken or duck?',
'Would you rather be a pig or snake?',
'What is your favourite game to play?',
'Do you like doing chores?',
'What is your favourite thing to do on the weekends?',
'Do you know how to dance?',
'Do you know how to cook?',
'Can you speak a different language?',
'What is your favourite thing to do after school?',
'Are you in any sports?',
'What is your favourite sport?',
'What animal are you scared of?',
'Are you scared of monsters?',
'Do you have an imaginary friend?',
'Who is your best friend?',
'When did you learn how to ride a bike?',
'Can you use a pogo stick?',
'What do you want to be when you grow up?',
'What is your favourite sport in the Olympics?',
'What is the capital of the state that you live in?',
'If you could go anywhere in the world, where would you go?',
'If you a million dollars, what would you do with all of your money?',
'If you could dye your hair any colour, what colour would you pick?',
'How many brothers and sisters do you have?',
'If you could be any animal, which one would you be?',
'What is your favourite place to go out to eat?',
'What is the most annoying thing that your mom does?',
'What is the most annoying thing that your dad does?',
'Have you ever snuck anyone into to the house?',
'How many times have you snuck out of the house?',
'What is the best dish that you mom makes for dinner?',
'If you could change any of the house rules, what would it be?',
'Would you rather be a horse or a cow?',
'What is the funniest thing your grandparents have ever said?',
'If you could get rid of one household chore, what would it be?',
'What is your favourite cartoon from your generation?',
'What is your favourite childhood song?',
'What is your favourite board game to play with your family?',
'If you could put one person in your family on mute for a day, who would it be?',
'At what age did you learn to ride a bike?',
'Do you know how to swim?',
'Describe your dream home',
'What is the funniest dream that you have ever had?',
'Have you ever had a dream about one of your relatives?',
'Who is your celebrity husband or wife?',
'Who taught you how to tie your shoes?',
'What is the longest that you have ever been without taking a shower?',
'Have you ever worn the same clothes for more than three days?',
'What is your favourite holiday and why?',
'If you could be any dinosaur, which would it be?',
'How long could you without eating your favourite food?',
'Who in your family tells the corniest jokes?',
'Would you rather be a bumblebee or a slug?',
'Have you ever eaten a worm?',
'Have you ever picked your nose when you thought no one was looking?',
'If you could be any super villain, who would you be?',
];
let truthNum = [];
let dare = [
'Do the silliest dance that you can think of',
'Act like an old lady or an old man',
'Spin around 10 times, when you get done try to walk in a straight line',
'Do 10 jumping jacks, and then do 10 pushups',
'Say the alphabet backwards in 30 seconds',
'Go a whole minute without blinking',
'Hold your breath for 10 seconds',
'Act like a chicken for 1 minute',
'Jump up and down until it’s your turn again',
'Close your eyes until it’s your turn again',
'Sing “Itsy Bitsy Spider” while standing on your head',
'Do 5 cartwheels in a row',
'Do a backbend',
'Act like your favourite Disney person',
'Say “banana” after everything you say until it is your turn again',
'Make up a poem about the colour blue',
'Act like a monkey until it is your turn again',
'Do a handstand',
'Cross your eyes',
'Lick your nose',
'Eat a spoonful of peanut butter',
'Tickle the person to your right',
'Tie your shoe strings together and try to walk to the door and back',
'Act like a baby until your next turn',
'Moo like a cow as loud as you can',
'Do the sprinkler dance',
'Act like your favourite superhero',
'Go 10 minutes without saying the words: but, a, the, or',
'Act like a statue until it is your turn again (no talking or moving)',
'Meow like cat',
'Put your leg behind you head',
'Sing your favourite song',
'Make a fish face',
'Pretend that you are an airplane for 2 minutes',
'Dance like a ballerina',
'Say the alphabet in a different language',
'Do your best hip hop dance',
'Try to lick your elbow',
'Paint your fingernails with a crayon',
'Sit upside down in a chair until your next turn',
'Put peanut butter on your nose, and try to to lick it off',
'Do a headstand',
'Stand on one leg for the next three rounds',
'Cross your eyes and walk to front yard and back',
'Do an impression of your favourite relative, do not stop until everyone can guess who you are',
'Act like the family pet until it is your turn again',
'For the next 2 rounds, you must do whatever the person to your right says',
'Quack and walk like a duck',
'Do your best impression of Mickey Mouse',
'Spin around for 10 seconds and run out the mailbox and back',
'Balance a spoon on your nose until the next round',
'Do your best evil laugh, as loud as you can',
'Make a funny face, take a selfie, and post it on Facebook',
'Call a random person and sing happy birthday to them',
'Blindfolded, go to the kitchen and make sandwich',
'Give the person to your left a wet willy',
'Wiggle your ears without using your hands',
'Talk like a baby for the next 3 rounds',
'Record yourself doing the silliest dance you can do, and post it to Facebook',
'Tell a funny knock knock joke, everyone must laugh',
'Hold your breath for 15 seconds',
'Do a headstand while you sing your favourite nursery rhyme',
'Try to spin on your head like a break dancer',
'Balance the object to your left on your head for the next three rounds',
'Do your best hula dance',
'Tapdance on the couch',
'Stand up and spin around for the next two rounds',
'Do 150 jumping jacks',
'Use the person to your right’s stomach as a drum and make up a tribal dance',
'Stand like a flamingo for the next four rounds',
];
let dareNum = [];

//selects random truth prompt from chosen action
function pickTruthPrompt(truthArray){
  //random number between 0 and array.length-1 generated to represent index for prompt
  let ranNum = Math.floor((Math.random() * truthArray.length-1));

  //ensures random number has not already been used
  while (truthNum.indexOf(ranNum) > -1) {
    ranNum = Math.floor((Math.random() * truthArray.length-1));
  }
  //adds random number to array of used indices
  truthNum.push(ranNum);
  //return random prompt
  return truthArray[ranNum];
}

//selects random truth prompt from chosen action
function pickDarePrompt(dareArray){
  //random number between 0 and array.length-1 generated to represent index for prompt
  let ranNum = Math.floor((Math.random() * dareArray.length-1));

  //ensures random number has not already been used
  while (dareNum.indexOf(ranNum) > -1) {
    ranNum = Math.floor((Math.random() * dareArray.length-1));
  }
  //adds random number to array of used indices
  dareNum.push(ranNum);
  //return random prompt
  return dareArray[ranNum];
}
