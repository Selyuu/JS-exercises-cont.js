
// Month days
let checkMonth = {
	january: 31,
	february: 28,
	march: 31,
	april: 30,
	may: 31,
	june: 30,
	july: 31,
	august: 31,
	september: 30,
	october: 31,
	november: 30,
	december: 31
}

function monthDays(month) {
	for (let key in checkMonth) {
		if (key === month) {
			console.log('This month has ' + checkMonth[key] + ' days')
		}
	}
}

// Following second
function followingSecond(timeString) {
	// 1. Split into an array ['11h', '19m', '27s']
	let splitContent = timeString.match(/.{1,3}/g)

	// 2. Remove 'h, m, s' from each array item ['11', '19', '27']
	let changeToNum = splitContent.map(function(num) {
		return num.substring(0, 2)
	})

	// 3. Change each array item to a number [11, 19, 27]
	let numberType = changeToNum.map(function(num) {
		return Number(num)
	})

	// 4. Check array number and return the time 1s later
	if (numberType[2] === 59) {
		if (numberType[1] === 59) {
			if (numberType[0] === 23) {
				return '0h0m0s'
			} else {
				return `${numberType[0] + 1}h0m0s`
			}
		} else {
			return `${numberType[0]}h${numberType[1] + 1}m0s`
		}
	} else {
		return `${numberType[0]}h${numberType[1]}m${numberType[2] + 1}s`
	}
}

// Carousel
function carousel(numberOfTurns) {
	for (let i = 1; i <= numberOfTurns; i++) {
		console.log(`We are on turn number: ${i}`)
	}
}

function carousel(numberOfTurns) {
	let count = 1
	while (count <= numberOfTurns) {
		console.log(`We are on turn number: ${count}`)
		count++
	}
}

// Number Parity
function parityNum(num) {
	for (let i = 0; i <= num; i++) {
		if (i === 0) {
			console.log('0 is neither odd nor even')
		} else if (i % 2 === 0) {
			console.log(`${i} is even`)
		} else {
			console.log(`${i} is odd`)
		}
	}
}

// Input Validation
function checkInput() {
	let num = 101
	while (num >= 100) {
		num = prompt('Give me a number')
	}
	return num
}

// Multiplication Table
function returnMulti() {
	let num 
	let result = []
	if (num === undefined) {
		num = prompt('Give me a number between 2 and 9')
		while (num > 10) {
			num = prompt('Give me a number between 2 and 9')
		}
	}
	for (let i = 1; i <= 10; i++) {
		result.push(num * i)
	}
	return result
}

// Neither Y or N
function yesNorNo() {
	let yesNoCheck = true
	let result = ''
	while (yesNoCheck) {
		result = prompt('Please provide a string')
		if ((result === 'yes') || (result === 'no')) {
			yesNoCheck = false
		}
	}
	return result
}

// Say hello to the user
function sayHello(firstName, lastName) {
  const message = `Hello, ${firstName} ${lastName}!`;
  return message;
}

const personName = () => {
	const first = prompt('What is your first name?')
	const last = prompt('What is your last name?')
	return sayHello(first, last)
}

// Square the given number x
function square1(x) {
  return x * x
}

// Square the given number x
const square2 = x => x * x

// Square every number
let squared = []
const squareAll = x => {
	for (let i = 0; i < 11; i++) {
		squared.push(i * i)
	}
}

// Minimum Number
const minimumNum = (numOne, numTwo) => {
	if (numOne > numTwo) {
		return numTwo
	}
	return numOne
}

// Calculator Program
 calc(1, '+', two)

const calc = (numOne, operator, numTwo) => {
	if (Number.isInteger(numOne) && Number.isInteger(numTwo))

	switch (operator) {
		case '+':
			return numOne + numTwo
		case '-':
			return numOne - numTwo
		case '*':
			return numOne * numTwo
		case '/':
			return numOne / numTwo
		default:
			return 'No operator specified'
	}
}

// Circumference Circle
const circleCircumference = diameter => Math.PI * diameter

// Area Circle
const circleArea = radius => Math.PI * (radius ** 2)

// Array Sum (filter/map/reduce)
var arrays = [[1, 4], [11], [3, 5, 7]]

const totalSum = arr => {
	var result = 0

	for (var i = 0; i < arr.length; i++) {
		if (typeof arr[i] === 'object') {
			result += totalSum(arr[i])
		} else {
			result += arr[i]
		}
	}
	return result
}

var arrays = [[1, 4], [11], [3, 5, 7]]
var sums = arrays.reduce((acc, val, i) => {
	if (arrays[i].length > 1) {
		for (var j = 0; j < arrays[i].length; j++) {
			acc += arrays[i][j]
		}
	} else {
		acc += val[0]
	}
	return acc
}, 0)

console.log(sums)

// Students FP
const students = [
  {
    name: "Anna",
    sex: "f",
    grades: [4.5, 3.5, 4]
  },
  {
    name: "Dennis",
    sex: "m",
    country: "Germany",
    grades: [5, 1.5, 4]
  },
  {
    name: "Martha",
    sex: "f",
    grades: [5, 4, 2.5, 3]
  },
  {
    name: "Brock",
    sex: "m",
    grades: [4, 3, 2]
  }
]

// Filter female students
var femaleStudents = students => students.filter(student => student.sex === 'f')
var femaleStudentsName = students => students.map(student => student.name)
var studentGrades = students => students.map(student => student.grades)
var flatten = arr => {
	return arr.reduce((flat, arr) => {
		return flat.concat(Array.isArray(arr) ? flatten(arr) : arr)
	},[])
}
var sumGrade = students => students.map(arr => {
	return flatten(arr).reduce((acc, val) => acc + val, 0) / arr.length
})

// Female Student Objects
class Student {
	constructor(avgGrade, name) {
		this.avgGrade = avgGrade
		this.name = name
	}
}

var femalesName = femaleStudentsName(femaleStudents(students))
var averageSum = sumGrade(studentGrades(femaleStudents(students)))


var anna = new Student(averageSum[0], femalesName[0])
var martha = new Student(averageSum[1], femalesName[1])

var femaleArr = []
femaleArr.push(anna, martha)

// Show child node
const showChild = (parentNode, childNodeIndex) => {
	if (childNodeIndex > parentNode.childNodes.length) {
		console.error('Incorrect Index')
	} else if (childNodeIndex < 0) {
		console.error('Incorrect Index')
	} else if (parentNode.nodeType !== document.ELEMENT_NODE) {
		console.error('Incorrect Node Type')
	} else {
		console.log(parentNode.childNodes[childNodeIndex])
	}
}

// Count elements
const countElements = selector => querySelectorAll(selector).length

// Link Information
const linkInfo = () => {
	let links = document.querySelectorAll('a')
	console.log(links.length)
	console.log(links[0].getAttribute('href'))	
	console.log(links[links.length - 1].getAttribute('href'))
}

// Handling classes
const has = (id, someClass) => {
	if (!document.getElementById(id)) {
		console.error(`No Element has id '${id}'`)
	} else {
		let idCheck = document.getElementById(id).classList.contains(someClass)
		if (idCheck) {
			return true
		} else {
			return false
		}
	}
}

// Adding a paragraph
newPara = `<p>Here is a more complete <a href="https://en.wikipedia.org/wiki/List_of_programming_languages">list</a> of languages</p>`

const addPara = (paragraph, id) => {
	let paragraphElement = document.createElement('p')
	paragraphElement.id = id
	paragraphElement.innerHTML = paragraph
	document.getElementById('content').appendChild(paragraphElement)
}

// Newspaper reel
const newspapers = ["https://www.nytimes.com", "https://www.washingtonpost.com", "http://www.economist.com"]

const showPapers = arrayOfNewspapers => {
	arrayOfNewspapers.forEach(newspaper => {
		let newspaperElement = document.createElement('a')
		newspaperElement.innerHTML = `<a href=${newspaper}>${newspaper}</a><br />`
		document.getElementById('content').appendChild(newspaperElement)
	})
}

//Mini-dictionary
const words = [{
  term: "Procrastination",
  definition: "Avoidance of doing a task that needs to be accomplished"
}, {
  term: "Tautology",
  definition: "logical argument constructed in such a way that it is logically irrefutable"
}, {
  term: "Oxymoron",
  definition: "figure of speech that juxtaposes elements that appear to be contradictory"
}]

const dictionary = descriptionList => {
	descriptionList.forEach(item => {
		let descriptiveElement = document.createElement('dl')
		descriptiveElement.innerHTML = `<dt><strong>${item.term}</strong></dt><dd>${item.definition}</dd>`
  	document.getElementById('content').appendChild(descriptiveElement)
	})
}

// Color text/background change
const newColorInputs = () => {
	let newTextColor = prompt(`Provide text color`)
	let newBackgroundColor = prompt(`Provide background color`)
	return {
		textColor: newTextColor,
		backgroundColor: newBackgroundColor
	}
}

const changeColorDivs = (func) => {
	colorObject = func()
	console.log(colorObject)
	let divElements = document.querySelectorAll('div')
	console.log(divElements)
	divElements.forEach(item => {
		item.style.color = colorObject.textColor
		item.style.backgroundColor = colorObject.backgroundColor
	})
}

changeColorDivs(newColorInputs)

// Provide element sizes
const elementSizes = () => {
	let infosDiv = document.querySelector('.infos')
	// find height of id 'content'
	// find width of id 'content'
	// add textContent of height/width to 'infos' id
}

const hashTagTriangle = () => {
	let e = 0
	let a = ''
	while (e < 7) {
		a += '#'
		console.log(a)
		e++
	}
}

const chessBoardTile = () => {
	let e = 0
	while (e < 8) {
		e % 2 === 0 
		? console.log(' # # # #\n')
		: console.log('# # # # \n')
		e++
	}
}

// return Min
const min = (numOne, numTwo) => numOne > numTwo ? numTwo : numOne

if (numOne > numTwo) {
	return numTwo;
} else {
	return numOne;
}

// is Even recursion
function isEven(number) {
	if (number >= 0) {
		if (number === 0) {
			return true;
		} else if (number === 1) {
			return false;
		} else {
			return isEven(number - 2);
		}
	} else {
		return 'Number is less than 0';
	}
}

// bean counting
function countBs(string) {
	//split string
	let splitStr = string.split('');
	//loop over split array
	let result = splitStr.filter(letter => letter === 'B');
	return result.length;
}

function countChar(string, character) {
	//split string
	let splitStr = string.split('');
	//loop over split array
	let result = splitStr.filter(letter => letter === character);
	return result.length;
}

// Jacque's Log
function addEntry(eventsArr, squirrelChange) {
	journal.push({
		events: eventsArr,
		squirrel: squirrelChange
	})
}

// range function
function range(firstNum, secondNum) {
	let count = firstNum
	let result = []
	while (count <= secondNum) {
		result.push(count)
		count++
	}
	return result
}

// sum function
function sum(firstNum, secondNum) {
	let result = range(firstNum, secondNum)
	return result.reduce((acc, num) => acc + num, 0)
}

// range function with step parameter
function range(firstNum, secondNum, step) {
	let count = firstNum
	let result = []
	if (step) {
		if (step > 0) {
			whileNumPos(count, secondNum, result, step)
		} else {
			whileNumNeg(count, secondNum, result, step)
		}
	} else {
		whileNumPos(count, secondNum, result)
	}
	return result
}

function whileNumPos(count, secondNum, result, step) {
	while (count <= secondNum) {
		result.push(count)
		if (step) {
			count += step
		} else {
			count++
		}
	}
}

function whileNumNeg(count, secondNum, result, step) {
	while (count >= secondNum) {
		result.push(count)
		count += step
	}
}

// reverse array function
function reverseArray(arr) {
	let result = []
	arr.map(item => result.unshift(item))
	return result
}

// reverse array in place function
function reverseArrayInPlace(arr) {
	let holdItem
	for (let i = 0; i < Math.floor(arr.length / 2); i++) {
		holdItem = arr[i] // 1
		arr[i] = arr[arr.length - 1 - i] // 5
		arr[arr.length - 1 - i] = holdItem
	}
	return arr
}

// array list function
function arrayToList(arr) {
	let list
	for (let i = arr.length; i > 0; i--) {
		list = {
			value: arr[i - 1],
			rest: list
		}
	}
	return list
}

// list to array function
function listToArray(list) {
	let result = []
	for (let node = list; node; node = node.rest) {
		result.push(node.value)
	}
	return result
}

// prepend list function
function prepend(element, list) {
	if ((list === undefined) || (list === null)) {
		return rest = {
			value: element,
			rest: list
		}
	} else {
		return {
			value: element,
			rest: prepend(list.value, list.rest)
		}
	}
}

// function nth
function nth(list, number) {
	if (!list) {
		return undefined
	} else if (number === 0) {
		return list.value
	} else {
		return nth(list.rest, number - 1)
	}
}

// deepEqual function
function deepEqual(itemOne, itemTwo) {
	if (itemOne === itemTwo) return true

	if (itemOne === null || typeof(itemOne) !== 'object' ||
			itemTwo === null || typeof(itemTwo) !== 'object') {
		return false
	}

	let propsInOne = 0, propsInTwo = 0

	for (let prop in itemOne) {
		propsInOne++
	}

	for (let prop in itemTwo) {
		propsInTwo++
		if (!(prop in itemOne) || !deepEqual(itemOne[prop], itemTwo[prop])) {
			return false
		}
	}
	return propsInOne === propsInTwo
}

// reduce function
function reduce(arrayList, combineFunc, startingValue) {
	let current = startingValue
	for (let i = 0; i < arrayList.length; i++) {
		current = combineFunc(current, arrayList[i])
	}
	return current
}

function sum(numberOne, numberTwo) {
	return numberOne + numberTwo
}

// average function
function average(arr) {
	function add(a, b) { return a + b }
	return arr.reduce(add) / arr.length
}

// age/gender of each item
function age(person) { return person.died - person.born }
function male(person) { return person.sex === 'male' }
function female(person) { return person.sex === 'female' }

// byName function
let byName = {}
ancestryArray.forEach(function(person) {
	byName[person.name] = person
})

// reduce ancestors recursively
function reduceAncestors(person, func, defaultVal) {
	function valueFor(person) {
		debugger
		if (person === null) {
			return defaultVal
		} else {
			func(person, valueFor(byName[person.mother],
									 valueFor(byName[person.father])))
		}
		return valueFor(person)
	}
}

// flattening array 
let arrays = [[1, 2, 3], [4, 5], [6]]
arrays.reduce(function(acc, curr) {
	return acc.concat(curr)
})


////////////////////////////////////
// -- Mother Child difference -- //
///////////////////////////////////

function average(array) {
  function plus(a, b) { return a + b }
  return array.reduce(plus) / array.length
}

// create mothers array function (remove duplicates)
function findMothers(arr) {
	let result = arr.map(item => item.mother)
	result = new Set(result)
	return stringFilter([...result])
}

// Filter array to strings only
function stringFilter(arr) {
	let result = arr.filter(item => typeof(item) === 'string')
	return result
}

// create array of names from ancestry JSON
function nameArray(arr) {
	let result = arr.map(item => item.name)
	return result
}

// check if mother array item exists in ancestry array
function motherAncestryCheck(motherArr, ancestryArr) {
	let result = motherArr.filter(item => ancestryArr.indexOf(item) >= 0)
	return result
}

// function to create an array of age differences between Child born/Mother age
function motherChildCheck(motherArr, ancestryArr) {
	// loop over ancestry array
	let arr = ancestryArr.filter(item => motherArr.indexOf(item.mother) >= 0)
	// if mother is found
	// calculate age difference
	let result = arr.map(item => Number(item.born) - mothersDOB(ancestryArr, item.mother))
	return average(result)
}

// Obtain mother's DOB
function mothersDOB(arr, mothersName) {
	let result = arr.filter(item => item.name === mothersName)
									.map(item => item.born)
	console.log(result)
	return result
}


//////////////////////////////////////
// -- Historical Life Expectancy -- //
//////////////////////////////////////

// Object of centuries
let centuriesObj = {}

// Calculate person's century
function century(person) {
	return Math.ceil(person.died / 100)
}

// Group persons by century
function groupedCenturies(arr) {
	arr.forEach(function(item) {
		let numberCentury = century(item)
		
		if (numberCentury in centuriesObj) {
			centuriesObj[numberCentury].push(item)
		} else {
			centuriesObj[numberCentury] = [item]
		}
	})
}

// Function to calculate average age per object
function averageAge(obj) {
	let result = []
	for (key in obj) {
		let item = obj[key]
		let age = item.died - item.born
		result.push(age)
	}
	let lengthOfArr = result.length
	return result.reduce((acc, val) => acc + val) / lengthOfArr
}

// Iterate over each object and return average
function averageObject(obj) {
	for (key in obj) {
		console.log(`${key}: ${averageAge(obj[key])}`)
	}
}


///////////////////////////////
// -- Every and then Some -- //
///////////////////////////////

// every function
function every(arr, test) {
	let result = arr.map(item => test(item))
									.filter(item => item === false)
	return result.length > 0 ? false : true
}

// some function
function some(arr, test) {
	let result = arr.map(item => test(item))
									.filter(item => item === true)
	return result.length > 0 ? true : false
}

/////////////////////////
// -- A vector type -- //
/////////////////////////

// Constructor Vector Object
function Vector(x, y) {
	this.x = x
	this.y = y
}

// Add method PLUS + MINUS to Vector prototype
Vector.prototype.plus = function(vector) {
	return {
		x: this.x + vector.x,
		y: this.y + vector.y
	}
}

Vector.prototype.minus = function(vector) {
	return {
		x: this.x - vector.x,
		y: this.y - vector.y
	}
}

// Add 'getter' function for read
Object.defineProperty(Vector.prototype, 'length', {
	get: function() {
		return Math.sqrt(this.x) + Math.sqrt(this.y)
	}
})

// Add 'setter' function for write
Object.defineProperty(Vector.prototype, 'setVector', {
	set: function() {
		return `Ignoring set values of ${setVector} for this vector`
	}
})


////////////////////////
// -- Another Cell -- //
////////////////////////

// Stretch cell object
function stretchCell(inner, width, height) {
	this.inner = inner,
	this.width = width,
	this.height = height
}

stretchCell.prototype.minWidth = function() {
	return Math.max(this.width, this.inner.minWidth())
}

stretchCell.prototype.minHeight = function() {
	return Math.max(this.height, this.inner.minHeight())
}

strechCell.prototype.draw = function(width, height) {
	return this.inner.draw(width, height)
}

////////////////////////////////////
// -- PROJECT: Electronic Life -- //
////////////////////////////////////

// Vector Object
function Vector(x, y) {
	this.x = x
	this.y = y
}

// Plus method
Vector.prototype.plus = function(otherVector) {
	return new Vector(this.x + otherVector.x, this.y + otherVector.y)
}

// Grid Object
function Grid(width, height) {
	this.space = new Array(width * height)
	this.width = width
	this.height = height
}

// isInside method
Grid.prototype.isInside = function(vector) {
	return vector.x >= 0 && vector.x < this.width &&
				 vector.y >= 0 && vector.y < this.height
}

// get & set methods
Grid.prototype.get = function(vector) {
	return this.space[vector.x + this.width * vector.y]
}

Grid.prototype.set = function(vector, value) {
	return this.space[vector.x + this.width * vector.y] = value
}

// Directions object
var directions = {
	'n': 	new Vector(0, -1),
	'ne':	new Vector(1, -1),
	'e':	new Vector(1, 0),
	'se':	new Vector(1, 1),
	's':	new Vector(0, 1),
	'sw':	new Vector(-1, 1),
	'w':	new Vector(-1, 0),
	'nw':	new Vector(-1, -1)
}

// Random element
function randomElement(array) {
	return array[Math.floor(Math.random() * array.length)]
}

var directionNames = "n ne e se s sw w nw".split(" ");

// Critter object
function BounceCritter() {
	this.direction = randomElement(directionNames)
}

BouncingCritter.prototype.act = function(view) {
	
}

// Alphabet String
function alphabetPosition(str) {

	var isLetter = (letter) => {
		return letter.toLowerCase() != letter.toUpperCase();
	};

	var alphabetObj = {
		a: 1,
		b: 2,
		c: 3,
		d: 4,
		e: 5,
		f: 6,
		g: 7,
		h: 8,
		i: 9,
		j: 10,
		k: 11,
		l: 12,
		m: 13,
		n: 14,
		o: 15,
		p: 16,
		q: 17,
		r: 18,
		s: 19,
		t: 20,
		u: 21,
		v: 22,
		w: 23,
		x: 24,
		y: 25,
		z: 26
	};

	var testStr = str.toLowerCase().split('');
	var result = [];

	testStr.map(item => {
		if (isLetter(item)) {
			result.push(alphabetObj[item]);
		}
	});
	return result.join(' ');
}

// Sorted check
function isSortedAndHow(array) {
	let isAscending = (arr) => arr.every((value, i) => i === 0 || value >= arr[i - 1]);

	let isDescending = (arr) => arr.every((value, i) => i === 0 || value <= arr[i - 1]);

	if (isAscending(array)) {
		return 'yes, ascending';		
	} else if (isDescending(array)) {
		return 'yes, descending';
	} else {
		return 'no';
	}
}

// Same squared arrays
function comp(array1, array2) {

	if (!array1 || !array2) {
		return false;
	} else if (array1.length === 0 && array2.length === 0) {
		return true;
	}

  let result = [];
  let numCheck = 0;

  for (let i = 0; i < array1.length; i++) {
  	numCheck = Math.pow(array1[i], 2);

  	if (array2.indexOf(numCheck) !== -1) {
  		result.push(array1[i]);
  	}
  }

  if (result.length === array1.length && result.length === array2.length) {
  	return true;
  } else {
  	return false;
  }
};

// Capitalise each word
String.prototype.toJadenCase = function () {
  return this.toLowerCase().split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ');
};

// Return sorted array as a string
function liftoff(instructions) {
	let result = '';
	instructions.sort((a, b) => b - a)
							.map(number => {
								let item = number;
								item.toString();
								result += item + ' '
							});
	return result.substring(0, result.length - 1) + ' liftoff!'
}

// Sum of a sequence
const sequenceSum = (begin, end, step) => {
	if (begin > end) {
		return 0;
	}

	let result = [begin];
	let sumNum = begin;

	for (let i = begin; i < end; i = i + step) {
		result.push(sumNum += step);
	}

	if (result[result.length - 1] > end) {
		result.pop();
	}

	return result.reduce((val, acc) => val + acc);
};

// Sum of a sequence (recursive)
const sequenceSum = (begin, end, step) => {
	if (begin > end) {
		return 0;
	}
	return sequenceSum(begin + step, end, step);
}

// Deodorant Evaporator
function evaporator(content, evap_per_day, threshold){ 
	let result = 0;
	let calculation = 0;

	while (threshold >= 0) {
		calculation = (evap_per_day / 100) * threshold;
		threshold -= calcuation;
		result++;
	};
}

// Duplicate Count
function duplicateCount(text) {
	let resultCount = 0;
	let objCount = {};
	let testArr = text.toLowerCase().split('');

	testArr.forEach(item => {
		if (objCount.hasOwnProperty(item)) {
			objCount[item]++;
		} else {
			objCount[item] = 1;
		}
	});

	for (let key in objCount) {
		if (objCount.hasOwnProperty(key)) {
			if (objCount[key] >= 2) {
				resultCount++;
			}
		}
	}
	return resultCount++;
}

// WeIrD StRiNg CaSe
function toWeirdCase(string) {
  return string.toLowerCase().split(' ').map(item => item.split('').map((letter, i) => i % 2 === 0 ? letter.toUpperCase() : letter).join('')).join(' ');
}

// Double Cola
function whoIsNext(names, r) {
	let item;
	if (r === 1) {
		return names[0];
	} else if (r > 1) {
		item = names[0];
		names.splice(0, 1);
		names.push(item, item);
		return whoIsNext(names, r - 1)
	}
}

// Double Cola
function whoIsNext(names, r) {
	let item;

	while (r > 0) {
		if (r === 1) {
			return names[0];
		} else {
			r--;
			item = names[0];
			names.splice(0, 1);
			names.push(item, item);
		}
	}
	return result[0];
}

// Checking Groups
function groupCheck(s) {
	let testArr;

	if (typeof(s) === 'string') {
		testArr = s.split('');
	}

	let removeFirstItem = arr => arr.shift();
	let removeLastItem = arr => arr.pop();

	let oppositeItem = item => {
		switch (item) {
			case '(':
				return ')';
			case ')':
				return '(';
			case '{':
				return '}';
			case '}':
				return '{';
			case '[':
				return ']';
			case ']':
				return '[';
		}
	}

  if (testArr.length === 0) {
  	return true;
  } else if (oppositeItem(removeFirstItem(testArr)) !== removeLastItem(testArr)) {
  	return false;
  } else {
  	testArr.splice(0, 1);
  	testArr.splice(testArr.length - 1, 1);
  	console.log(testArr)
  	return groupCheck(testArr);
  }
}

//First non-repeating letter
function firstNonRepeatingLetter(s) {
	let resultArr = s.split('');
	let testArr = s.toLowerCase().split('');
	let result = testArr.filter((letter, i) => testArr.indexOf(letter) === i && testArr.indexOf(letter, i + 1) === -1);

  if (result.length === 0) {
    return '';
  } 

  let upperCaseItem = result[0].toUpperCase();

  if (resultArr.indexOf(upperCaseItem) !== -1) {
  	return upperCaseItem;
  }
  return result[0];
}

//////////////////////////
// Catching car mileage //
//////////////////////////

function isInteresting(number, awesomePhrases) {

	console.log(number, awesomePhrases)

	// 0 check
	let zeroCheck = arr => {
		let result = [];
		let returnResult = [];
		arr.filter((item, i) => i > 0 ? result.push(item) : false);
		result.filter((item) => item === 0 ? returnResult.push(item) : false);
		return result.length === returnResult.length ? true : false;
	}

	// Same number
	let sameNumberCheck = arr => {
		return arr.every((curr, i, list) => i === 0 || curr === list[i - 1]);
	}

	// Sequential plus check
	let seqPlusCheck = arr => {
		return arr.every((curr, i, list) => {
			if (((curr === 9) && (list[i + 1] === 0)) || ((curr === 0) && (list[i - 1] === 9))) {
				return true;
			} else if ((i === 0 && curr !== 9) || curr === (list[i - 1] + 1)) {
				return true;
			}
			return false;
		});
	}

	// Sequential minus check
	let seqMinusCheck = arr => {
		return arr.every((curr, i, list) => {
			if (((curr === 1) && (list[i + 1] === 0)) || ((curr === 0) && (list[i - 1] === 1))) {
				return true;
			} else if (i === 0 && (curr === 1 && (list[i + 1] - 1 === curr))) {
				return true;
			} else if ((i === 0 && curr !== 1) || curr === (list[i - 1] - 1)) {
				return true;
			}
			return false;
		});
	}

	// Palindrome check
	let palindromeCheck = arr => {
		let el = arr;
		let str = el.join('').toLowerCase();
		let reverseStr = el.reverse().join('').toLowerCase();
		return str === reverseStr ? true : false;
	}

	// Awesome array check
	let awesomeArrCheck = (num, arr) => arr.indexOf(num) !== -1 ? true : false;

	let allFunctionChecks = (num, awesomeArr) => {
		let result = [];
		let testArr = num.toString().split('').map(Number);

		let resultPushFunc = (list, arrayValues, awesomeArr, num) => list.push(zeroCheck(arrayValues), sameNumberCheck(arrayValues), seqPlusCheck(arrayValues), seqMinusCheck(arrayValues), palindromeCheck(arrayValues), awesomeArrCheck(num, awesomeArr));
		
		resultPushFunc(result, testArr, awesomeArr, num);


		if (result.indexOf(true) !== -1 && num > 99) {
			return 2;
		} else {
			num++;
			result = [];
			testArr = num.toString().split('').map(Number);
			resultPushFunc(result, testArr, awesomeArr, num);
		}

		if (result.indexOf(true) !== -1 && num > 99) {
			return 1;
		} else {
			num++;
			result = [];
			testArr = num.toString().split('').map(Number);
			resultPushFunc(result, testArr, awesomeArr, num);
		}

		if (result.indexOf(true) !== -1 && num > 99) {
			return 1;
		}
		return 0;
	}
	return allFunctionChecks(number, awesomePhrases);
}