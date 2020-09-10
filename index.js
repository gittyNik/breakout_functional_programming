// Add a person to db and github

// function addUser () {
// 	const user = getUser();
// 	addToDb(user);
// 	const username = fetchGithubUserName(user);
// 	addtoGithubTeam(username);
// }

// Pure functions - cache, easier to understnd
// Transparency  - constants not variable
// No shared global state
// Immutability
// reusability

// Imperative
function double(array) {
	for (let i = 0; i < array.length; i++) {
		array[i] = array[i] * 2;
	}
	return array;
}

double([1, 2, 3, 4, 5, 6]);

// Functional

let double = (n) => n * 2;
let array = [1, 2, 3, 4];
map(array, double);
