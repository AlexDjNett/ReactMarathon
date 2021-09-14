function longestLogin(loginList) {
let longest = loginList.reduce(function(a, b) { 
  return a.length > b.length ? a : b
}, '');
return longest;
}

console.log(longestLogin(["maxxx", "NewUser", "admin111" , "Administrator"]));

console.log(longestLogin(["User123", "Steven Dobson", "qwerty12345"]));

console.log(longestLogin(["Carl1999", "ivan@gmail.com", "nick-name"]));

console.log(longestLogin(["user1", "user2", "333", "user4", "aa"]));

console.log(longestLogin(["larian", "questttt", "longest_user_name", "Nick Nickson"]));
