const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

// 2. Bolt the horse wandered off, assign the remaining animals.
const [bessie, , dolly, babe, little] = farmAnimals.split(' ');

// 3. Chicken leaves, assign the remaining animals with descriptive color variables.
const [blackAndWhite, , black, pink] = farmAnimals.split(' ');

// Arrays

// 4. Destructure to assign all rainbow color names.
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// 5. Leave out indigo, use first letters as variables.
const [r, o, y, g, b, , v] = colors;

// 6. Only assign indigo.
const [, , , , , indg] = colors;

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names.
const { muppetName, color, song, job, partner } = muppet;

// 8. Assign songs 2 and 4, and Kermit's job and partner.
const { 
  album: { 
    theMuppetMovie: { song2, song4 } 
  },
  nestedJob, 
  nestedPartner 
} = nestedMuppet;