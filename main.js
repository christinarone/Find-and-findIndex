//program to display numbers from 1 to 1000
//initialize the variable
let i = 1, n = 1000;

//while loop from i = 1 to 1000
while (i <= n) {
    // console.log(i);
    i += 1;
}
var person = {
    firstName: 'Jane',
    lastName: 'Doe',
    birthDate: 'Jan 5, 1925',
    gender: 'female'
};
const object1 = {
    firstName: 'Jane',
    lastName: 'Doe',
    birthDate: 'Jan 5, 1925',
    gender: 'female'
};
console.log(Object.keys(object1));

for(const [key, value] of Object.entries(object1)){
    console.log(`${key}: ${value}`);
}

const persons = [
    {
        // an object has key value pairs
        firstName : "Jane" , 
        lastName : "Doe" , 
        birthDate : "Jan 5, 1925"
    } ,
    {firstName : "Bob" , lastName : "Smith" , birthDate : "Feb 10, 1935"},
    {firstName : "Sally" , lastName : "Jones" , birthDate : "Mar 25, 1966"},
    {firstName : "Sally" , lastName : "Jones" , birthDate : "Mar 25, 1968"},
    {firstName : "John" , lastName : "Brown" , birthDate : "April 3, 1975"}
];


console.log('this should be sally: ' + persons[2]['firstName'])

let myFilter = function(arr,callback){
//loop through the elements in the array
//if the callback for that element returns true, it is part of the result
//otherwise it is not included in the result
}

// let result = [];
// for (let i=0; i<arr.length; i++){
//     let el = arr[i];
//     let pass = callback(el, i);
//     if (pass){
//         result.push(el);
//     }
//     return result;
// }
// Create a function that uses a for...of loop and an if statement 
// to console.log the value associated with the key birthDate of each object if the birth year is an odd number.

// const oddBirthday = () => {}
function oddBirthday(arr){

    for(const el of arr) {
        let year = el.birthDate.split(' ')[2]
        // console.log('all arrays: ', birthdateArr)
        // console.log('year: ', birthdateArr[2])

    if(year % 2 === 1){
            // return console.log(el.firstName + ' birthyear is ' +  year + ", this is an odd")
}
        // console.log(el.birthDate)
    }
}

oddBirthday(persons)

/**
 * Return the first element in the array that meets the criteria
 * @param {*} arr
 * @param {*} callback
 */
let myFind = function(arr, callback){

}
