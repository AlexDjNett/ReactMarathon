/* Task 1
Implement the getPromise(delay, message) function, which takes an integer number delay 
 (between 0 and 2000) and string message and returns a Promise that waits for specified 
 amount of time (using delay argument) and resolves with the message.
*/

function getPromise(delay, message) {
  if (0 <= delay && delay <= 2000) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve(message);
      }, delay);
    }); 
  } else {
      return new Promise(function(resolve, reject) {
        reject("Enter correct delay");
      }); 
  }
}

/* Task 2
Write an add(x, y) function that takes two arguments x and y. The function should return 
a Promise that resolves with the sum of the two arguments if they are Numbers, 
or rejects with the message "Error!" otherwise.
*/

function add(x, y) {
  return new Promise((resolve, reject) => {
    if (typeof (x) === "number" && typeof (y) === "number") {
      let res = resolve(x * y);
      return res;
    } else {
      return reject('Error!');
    }
});
}

/* Task 3
Implement the getAge() function to get user age. To find his age you need to call
 a getUser() async function that return a user object in format {role: "somerole", id: 1}. 
 To get the actual user info you need to call another function getUserProfile(id), 
 that uses id returned from the previous function and return user info as an object 
{name: "Petro", age: 15}. The getAge() must return the age of the user.
*/

const {getUser, getUserProfile} = require('./Helper.js');

async function getAge() {
    let getProfile = await getUser();
    let getPerson = await getUserProfile(getProfile.id);
    return getPerson.age;
}

/* Task 4
Implement the take() function that converts a sequence of iterated values into a sequence of length n.

Example usage:

const arr = ['a', 'b', 'c', 'd'];
for (const x of take(2, arr)) {
console.log(x);
}
// Output:
// a
// b
*/

function* take(n, iterable) {
 for (let i = 0; i < n; i++){
    yield iterable[i];
  }
}
