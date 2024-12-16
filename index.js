// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // TODO: real code goes here!
  if (time === '0:00') {
    return 'midnight';
  }

  if (time === '12:00'){
    return 'midday'
  }

  let processed = time.split(":")

  // [0, 00]

  let hour = processed[0]

  let minute = processed[1]

  let hourEng = convertHourToWord(parseInt(hour))

  let minuteEng

  let type 

  let nextHour = convertHourToWord(parseInt(hour) + 1)

  if (parseInt(minute) <= 30){
    minuteEng = minuteMap.get(parseInt(minute))
    type = "past"
  }
  else{
    let diff = minuteDiff(minute)
    minuteEng = minuteMap.get(diff)
    type = "to"
  }

  
  return `${minuteEng} ${type} ${hourEng}`
  
}

const minuteMap = new Map([
  [0, "o'clock"],
  [1, "one"],
  [2, "two"],
  [3, "three"],
  [4, "four"],
  [5, "five"],
  [6, "six"],
  [7, "seven"],
  [8, "eight"],
  [9, "nine"],
  [10, "ten"],
  [11, "eleven"],
  [12, "twelve"],
  [13, "thirteen"],
  [14, "fourteen"],
  [15, "quarter"],
  [16, "sixteen"],
  [17, "seventeen"],
  [18, "eighteen"],
  [19, "nineteen"],
  [20, "twenty"],
  [21, "twenty one"],
  [22, "twenty two"],
  [23, "twenty three"],
  [24, "twenty four"],
  [25, "twenty five"],
  [26, "twenty six"],
  [27, "twenty seven"],
  [28, "twenty eight"],
  [29, "twenty nine"],
  [30, "half"]
]);

const hourMap = new Map ([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
  [4, 'four'],
  [5, 'five'],
  [6, 'six'],
  [7, 'seven'],
  [8, 'eight'],
  [9, 'nine'],
  [10, 'ten'],
  [11, 'eleven'],
  [12, 'twelve']
])

function minuteDiff(minute){
  let diff = 60 - minute

  return (
    diff
  )
}

function convertHourToWord(hour){
  if (hour > 12){
    return (
      "Invalid hour"
    )
  }
  else {
    return (
      hourMap.get(hour)
    )
  }
}

module.exports = { convertTimeToWords };