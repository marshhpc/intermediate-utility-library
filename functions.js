// Your functions go here!
// Counting cards
var count = 0; //card count set to zero(new game)
function countingCards(card) {
   if (card <= 6) {
      //cards 2,3,4,5,6 are asigned +1 (++)
      count++;
   } else if (card <= 9) {
      //cards 7,8,9 are asigned +0 (+= 0)
      count += 0;
   } else {
      // anything above 9 will are asigned -1 (--)
      count--;
   }
   if (count <= 0) {
      return count + " Hold"; /* Return here */
   } else {
      return count + " Bet"; /* and here */
   }
}
// Profile Lookup with example contacts
var contacts = [
   {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
   },
   {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
   },
   {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
   },
   {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
   },
];

function lookUpProfile(name, prop) {
   for (var x = 0; x < contacts.length; x++) {
      //The for loop runs, starting at the first object in the contacts list.
      if (contacts[x].firstName === name) {
         //If the firstName parameter passed into the function matches the value of the "firstName" key in the first object, the if statement passes.
         if (contacts[x].hasOwnProperty(prop)) {
            //Then, we use .hasOwnProperty() method (checks if there’s a given property and returns a boolean) with prop as an argument. If it’s true, the value of prop is returned.
            return contacts[x][prop];
         } else {
            return "No such property"; //If the second if statement fails, No such property is returned
         }
      }
   }
   return "No such contact"; //If the firstName parameter isn’t matched by the final contacts object, the for loop exits and No such contact is returned.
}

// Generate a random whole number with Javascript
function randomWholeNum() {
   return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum());
//console.log would show 0
// Math.floor is used to round the number down to its nearest whole number
// Math.random gives you a random decimal between 0-1

// Generate Random Whole Numbers within a range
function randomRange(myMin, myMax) {
   return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
/* Code Explanation
Math.random() generates our random number between 0 and ≈ 0.9.
Before multiplying it, it resolves the part between parenthesis (myMax - myMin + 1) because of the grouping operator ( ).
The result of that multiplication is followed by adding myMin and then “rounded” to the largest integer less than or equal to it (eg: 9.9 would result in 9)
If the values were myMin = 1, myMax= 10, one result could be the following:

Math.random() = 0.8244326990411024
(myMax - myMin + 1) = 10 - 1 + 1 -> 10
a * b = 8.244326990411024
c + myMin = 9.244326990411024
Math.floor(9.244326990411024) = 9 */

//Remove items using splice()
// any number of consecutive elements can be removed
function removeSplice(anArray) {
   anArray.splice(0, 1);
   anArray.splice(-1, 1);
   return anArray;
}
// Add items using splice()
// add new elements
function addItemSplice(array, start, end, addOn) {
   //  elements in start to end range will be removed and replaced with addOn
   array.splice(start, end, addOn);
   console.log(array);
   return array;
}

//Check For The Presence of an Element With indexOf()
function checking(theArray, searchArray) {
   if (theArray.indexOf(searchForThis) !== -1) {
      return "It's in there";
   } else return "Not in here";
}

//Use typeof to Check the Type of a Variable
function findTheType(someVar) {
   return typeof someVar;
}
