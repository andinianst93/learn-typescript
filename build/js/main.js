"use strict";
let stringArr = ['one', 'two', 'Andini'];
let data = [
    {
        title: 'shit',
        desc: 'yeah',
        status: true,
        price: 90,
    },
];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
stringArr.push('Hello');
guitars[0] = 9800;
guitars.unshift('Nuno');
let test = [];
console.log(stringArr);
// Tuple
let myTuple = ['Dave', 42, true];
let mixed = ['Andini', 93, false];
mixed = myTuple;
const result = data.map((i, index) => {
    console.log(i, index);
});
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = guitars;
myObj = {};
const exampleObj = {
    prop1: 'ada',
    prop2: true,
};
let evh = {
    name: 'eddie',
    active: false,
    albums: [1984, 'whatever'],
};
const greet = (g) => {
    return `Hello ${g.name}`;
};
console.log(greet(evh));
const post = [
    {
        id: 1,
        title: 'Cara Meningkatkan SEO di Blog dengan Aman',
        description: 'Dalam artikel ini, kami akan memberikan tips dan trik untuk meningkatkan peringkat mesin pencari blog kamu.',
        url: 'https://namdvili.com',
        img: 'https://digiadn.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fandinianst93%2Fimage%2Fupload%2Fv1685989171%2Fiphone_13_mini_184f9f8ac5.webp&w=1920&q=75',
    },
    {
        id: 2,
        title: 'title2',
        description: 'desc2',
        url: 'https://digiadn.com',
        img: 'https://adasdaadada',
    },
    {
        id: 3,
        title: 'title3',
        description: 'desc3',
        url: 'https://digiadn.com',
        img: 'https://adasdaadada',
    },
    {
        id: 4,
        title: 'title4',
        description: 'desc4',
        url: 'https://digiadn.com',
        img: 'https://adasdaadada',
    },
    {
        id: 5,
        title: 'title5',
        description: 'desc5',
        url: 'https://digiadn.com',
        img: 'https://adasdaadada',
    },
    {
        id: 6,
        title: 'title6',
        description: 'desc6',
        url: 'https://digiadn.com',
        img: 'https://adasdaadada',
    },
    {
        id: 7,
        title: 'title7',
        description: 'desc7',
        url: 'https://digiadn.com',
        img: 'https://adasdaadada',
    },
];
const shuffledArray = [...post].sort(() => Math.random() - 0.5);
console.log(shuffledArray);
const outputElement = document.getElementById('output');
shuffledArray.forEach((obj) => {
    const listItem = document.createElement('li');
    listItem.textContent = `title: ${obj.title}`;
    outputElement === null || outputElement === void 0 ? void 0 : outputElement.appendChild(listItem);
});
document.addEventListener('DOMContentLoaded', () => {
    const allOutputElement = document.getElementById('array');
    if (allOutputElement) {
        const htmlOutput = shuffledArray
            .map((obj) => `<li>
        <img src=${obj.img} alt=${obj.title}>
        <h2>${obj.title}</h2>
        <p>${obj.description}</p>
        <a href=${obj.url}></a>
        </li>`)
            .join('');
        allOutputElement.innerHTML = `<ul>${htmlOutput}</ul>`;
    }
    return 'Comeback later';
});
// enums
