import {myCollection} from './collection.js';
import chalk from 'chalk';

// console.log(chalk.blue('Hello world!'));

function describeItem(item){
    if(item.count === 1){
        console.log(`I have a ${chalk.cyan(item.name)}. Here is what I like about it: ${chalk.green(item.whatILike)}`);
    }else{
        console.log(`I have some ${chalk.cyan(item.name)}'` + chalk.yellow(`s`) + `. ` +  chalk.grey(`Here`) + ` is what I like about them: ${chalk.green(item.whatILike)}.`);
    }
}

function someCheck(item) {
  const word = "cute";
  // check if the value of "cute" is within the key "whatILike"
  if(item.whatILike.includes(word)) {
    console.log(chalk.magenta(`I have a ${item.name}. Here is what I like about it: ${item.whatILike}`));
  }else {
    console.log(`I have a ${item.name}. Here is what I like about it: ${item.whatILike}`);
  }
  // if cute is in whatilike
    //change the colour of string to mangeta using chalk modules
  // else 
    //keep string the same colour
}

myCollection.forEach(describeItem);
// call someCheck using forEach method on "mycollection"
// myCollection.forEach(someCheck);

//   describeItem(myCollection[1].name, myCollection[1].count, myCollection[1].whatILike);




// describeItem(myCollection[1]);

// 2c. Create a function called `describeItem`, which should take in an item as a parameter (the argument handed to this function would be an item from our collection). The function should `console.log` a message according to how many of the item you have.


//   console.log(myCollection[1].name);

// describeItem(myCollection[0].name, myCollection[0].count,);
// 2d. Now make a function called `describeCollection` that takes in an array as a parameter. The function should loop through the array, and for each item, it should call the `describeItem` function so it displays a message according to how many you have in your collection.

// Call your function below where you've defined it, handing in the `myCollection` array.

// Run the file again to see the output and check that it outputs the correct message for each item in your collection (i.e. each object in your `myCollection` array).
// function describeCollection(item, count) {
    
//     console.log(item, count)
// }

//using a for...each loop with a for...in




// myCollection.forEach(item => {
//     for(let key in item) {
//         describeItem(key, item[key]);
//     } 
// });




// "I have a School of Code mug. Here's what I like about it: It has my cute pixel character on it!"
// "I have `count` `name`s. Here's what I like about them: `whatILike`".