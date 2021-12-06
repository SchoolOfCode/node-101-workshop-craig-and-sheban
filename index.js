let myCollection = [
    {
      name: "School of Code mug",
      count: 1,
      whatILike: "It has my cute pixel character on it!"
    },
    {
      name: "School of Code hat",
      count: 2,
      whatILike: "An often overlooked fashion accessory"
    },
    {
      name: "School of Code pillow",
      count: 1,
      whatILike: "Eat. Sleep. Code. Repeat :)"
    }
  ];

  function describeItem(item, count){
      
      console.log(`You have ${count} ${item}`);

  }

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


myCollection.forEach(item => {
    for(let key in item) {
        console.log(`${key}: ${item[key]}`);
    }
});

