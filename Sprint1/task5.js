function checkAdult(age) {

try {
    if (age === undefined) {
    throw new Error("Please, enter your age");
  } else if (age < 0) {
    throw new Error("Please, enter positive number");
  } else if (isNaN(age)) {
    throw new Error("Please, enter number");
  } else if (age % 1 !== 0) {
    throw new Error("Please, enter Integer number"); 
  } else if (age < 18) {
    throw new Error("Access denied - you are too young!");
  } else {
    console.log("Access allowed");
  }
} catch(exception) {
  console.log(exception.name + " " + exception.message);
} finally {
  console.log("Age verification complete");
}
};

checkAdult();

checkAdult(-22);

checkAdult("a25");

checkAdult(33.3);

checkAdult(16);

checkAdult(20);
