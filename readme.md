## tsc main.ts => to set the build folder file

## tsc -w => to run the compiler like nodemon

## tsc --init => to make tsconfig.json

## terminology:

- Demand the specification of data type

## Basic Type:

```
let myName: string
let meaningOfLife: number
let isLoading: boolean
let album: any

myName = 'Andini'
meaningOfLife = 30
isLoading = true
album = 'feast'

const sum = (a: number, b: number) => {
return a + b
}

let postId: string | number
let isActive: number | boolean

let re: RegExp = /\w+/g

```

## Arrays and Objects
let stringArr = ['aff', 'stas', 'hu']
let guitars = ['Strat', 'tele', 9]
let mixedData = ['EVH', 1984, true]

stringArr[0]='aff'
stringArr.push('Andini')

guitars[0] = 1984
guitars.unshift(89)

// objects

let myObj: object

interface Guitarist {
    name: string,
    active: boolean,
    albums: (string | number )[]
}

let evh: Guitarist = {
    name: 'Eddie',
    active: false,
    albums: [1984, 'whatever', 96321]
}

const greetGuitarist = (guitarist: Guitarist) => {
    return `Hello ${guitarist.name}!`
}

console.log(greetGuitarist(evh));

// enums

enum Grade {
    U,
    D,
    C,
    B,
    A
}

console.log(Grade.U);
