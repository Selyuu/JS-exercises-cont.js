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
	let splitContent = timeString.match(/.{1,3}/g)
	let changeToNum = splitContent.map(function(num) {
		return num.substring(0, 2)
	})
	let numberType = changeToNum.map(function(num) {
		return Number(num)
	})
	console.log(numberType)

	if (numberType[2] === 59) {
		if (numberType[1] === 59) {
			if (numberType[0] === 23) {
				return '24h00m00s'
			} else {
				return `${numberType[0] + 1}h00m00s`
			}
		}
	}
}