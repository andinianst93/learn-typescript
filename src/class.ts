class Coder {
    constructor(
        public readonly name: string,
        public music: string,
        private age: number,
        protected lang: string = 'Typescript'
    ) {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }
    public getAge() {
        return `${this.age}`
    }
}

// const Andini = new Coder('Andini', 'Rock', 30, 'JavaScript')

class WebDev extends Coder {
    constructor(public computer: string, name: string, music: string, age: number)
    {
        super(name, music, age)
        this.computer = computer
    }
    public getLang() {
        return `I write ${this.lang}`
    }
}

const Hanson = new WebDev('Mac', 'Andini', 'Van Halen', 30)

// console.log(Hanson.getLang());

interface Musician {
    name: string,
    instrument: string,
    play(action: string): string
}

class GuitaristC implements Musician {
    name: string
    instrument: string
    constructor(name: string, instrument: string) {
        this.name = name
        this.instrument = instrument
    }
    play(action: string) {
        return `${this.name} ${action} the ${this.instrument}`
    }
}

const Page = new GuitaristC('Jimmy', 'guitar')
// console.log(Page.play('strums'));


class Peeps {
    static count: number = 0

    static getCount(): number {
        return  Peeps.count
    }
    public id: number

    constructor(public name: string) {
        this.name = name
        this.id = ++Peeps.count
    }
}

const Adn = new Peeps('Andini')
const Adn2 = new Peeps('Andini2')
const Adn3 = new Peeps('Andini3')

// console.log(Peeps.count);
// console.log(Adn2.id);


// /////////////

class Bands {
    private dataState: string[]
    constructor() {
        this.dataState =[]
    }
    public get data(): string[] {
        return this.dataState
    }
    public set data(value: string[]) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value
            return
        } else throw new Error ('Param is not an array of strings')
    }
}

const MyBands = new Bands ()
MyBands.data = ['Nirvana', 'Pearl Jam']
console.log(MyBands.data);

MyBands.data = [...MyBands.data, 'ZZ Top']
console.log(MyBands.data);
