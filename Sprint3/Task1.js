const teams = [
  { name: 'TEam 1', members: ['Paul', 'Liza'] },
  { name: 'TEam 2', members: ['Psssl', 'Miza'] }
];

function* getMembers(members) {
  for (let i = 0; i < members.lenght; i++) {
    yield members[i];
  }
};
 
function* getTeams(teams) {
  for (let i = 0; i < teams.lenght; i++) {
  
    return yield getMembers(teams[i].members);
  }
};
 
const obj = getTeams(teams);
console.log(obj.next());
console.log(obj.next());