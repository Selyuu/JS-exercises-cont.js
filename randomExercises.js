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
var studentGrades = students => students.map(student => student.grades)
var flatten = arr => {
	return arr.reduce((flat, arr) => {
		return flat.concat(Array.isArray(arr) ? flatten(arr) : arr)
	},[])
}
var averageGrade = students => students.map(arr => {
	return flatten(arr).reduce((acc, val) => acc + val, 0)
})









