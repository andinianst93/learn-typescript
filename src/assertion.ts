// Practical Assertion

// const year = document.getElementById('year')
// const thisYear = new Date().getFullYear()
// year.setAttribute('datetime', thisYear)
// year.textContent = thisYear

// Solution

const year = document.getElementById('year') as HTMLSpanElement
const thisYear: string = new Date().getFullYear().toString()
year.setAttribute('datetime', thisYear)
year.textContent = thisYear