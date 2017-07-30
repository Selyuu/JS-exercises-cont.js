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
