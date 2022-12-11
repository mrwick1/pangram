'use strict';

const string = prompt('Enter it ')
const testString = string
  .replace(/[^a-zA-Z ]/g, '')
  .toLocaleLowerCase()
  .replace(/\s/g, '');
let uniqueAlphabets =[];

for(let i = 0; i <testString.length; i++){
    !uniqueAlphabets.includes(testString[i]) && uniqueAlphabets.push(testString[i])
}
uniqueAlphabets.length === 26 ? alert('This is a pangram') : alert('This is not a pangrame');