

type stringOrNumber = string | number

type strOrnmrArr = (string | number)[]

type Guitarist = {
    name?: string,
    active: boolean,
    albums: (string | number)[]
}

type UserId = stringOrNumber

//  interface is for object, type is for type

// literal types

let myName: 'Dave'
let userName: 'Dave' | 'John' | 'Amy'

userName = 'Amy'

// functions

const add = (a: number, b: number): number => {
    
    return a + b
}

const logMsg = (message: any): void => {
console.log(message);

}

logMsg('Hello')
logMsg(add(2,3))


let subtract = function (c: number, d: number): number {
    return c - d
}

type mathFunction = (a: number, b: number) => number

let multiply: mathFunction = function (c, d) {
    return c*d
}

logMsg(multiply(890, 90))


// interface mathFunc { (a: number, b: number): number}

// optional parameters

const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== 'undefined') {
        return a + b + c
    }
    return a + b
}

// default params value
const someAll = (a: number = 10, b: number, c: number = 2): number => {
  
    return a + b + c
}

logMsg(addAll(2,3,4))
logMsg(addAll(2,3))
logMsg(someAll(2,3))
logMsg(someAll(undefined, 3))

// Rest Parameters

const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr)
}

logMsg(total(1,2,3,4))

const createError = (errMsg: string): never => {
    throw new Error (errMsg)
}

const infinite = () => {
    let i: number = 1
    while (true) {
        i++
        if(i > 100) break
    }
}
// custom type guard
const isNumber = (value: any): boolean => {
    return typeof value === 'number'
    ? true : false
}

// use of the never type
const numbOrStr = (value: number | string): string => {
    if (typeof value === 'string') return 'it is a string'
    if (isNumber(value)) return 'number'
    return createError('this should never happened!')
}


