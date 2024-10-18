// Array in programming is simply a list of data. For example:

let studentNumberA = '2020-1923'
let studentNumberB = '2020-1924'
let studentNumberC = '2020-1925'
let studentNumberD = '2020-1926'

// but with array, we can simply write the code above like this:

let studentNumbers = ['2020-1923', '2020-1924', '2020-1925', '2020-1926']

/*

	- Arrays are used to store multiple related values in a single variable
	- they are declared using square brackets ([]) also known as 'Array Literals'

	- array also provide access to a number of functions/methods that help in achieving

	- a method term for functions associated with an object and is used to execute statements that are relevant to specific object

	- the main difference of arrays with an object is that it contains information in a form of a 'list' unlike objects which is used properties

*/

let grades = [90, 91, 92 ,93]
let computerBrands = ['Acer', 'Asus', 'Lenovo', 'RedFox'];

console.log(grades);
console.log(computerBrands);

//alternative way to write

let myTask = [
	'drink html',
	'eat javascript',
	'inhale css',
	'nake nodejs'
];

console.log(myTask);

//create an array with values from variables

let city1 = 'Tokyo';
let city2 = 'Jakarta';
let city3 = 'Manila';

let cities = [city1, city2, city3];
console.log(cities.length)

// .length property allows us to get and set the the total number of items in an array

let blackArr = []
console.log(blackArr);

let fullName = 'Bean Salvador';
console.log(fullName.length);

// length property on strings show the number of characters in a string. Spaces are counted as characters in strings.

// length property can also set the total number if items in an array, meaning we can actually delte the last item in array or shorten the array by simply updating the length of the array

myTask.length = myTask.length - 1
console.log(myTask.length);
console.log(myTask);

// to delete a specific item in an array we can employ array methods

cities.length---
console.log(cities)

fullName.length---
console.log(fullName)

// if you can shorten the array by setting the length property, you can also lengthen it by adding a number into the length property. since, we lengthen the array forcibly, there will be another item in tthe array, however, it will be empty or underfined. like adding another seat but having no one sit on it.

let theBeatles = ['John', 'Paul', 'Ringo', 'George']

theBeatles.length++
console.log(theBeatles)


