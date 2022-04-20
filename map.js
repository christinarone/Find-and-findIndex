const persons = [
    {
        // an object has key value pairs
        firstName: "Jane",
        lastName: "Doe",
        birthDate: "Jan 5, 1925"
    },
    { firstName: "Bob", lastName: "Smith", birthDate: "Feb 10, 1935" },
    { firstName: "Sally", lastName: "Jones", birthDate: "Mar 25, 1966" },
    { firstName: "Sally", lastName: "Jones", birthDate: "Mar 25, 1968" },
    { firstName: "John", lastName: "Brown", birthDate: "April 3, 1975" }
];

// Use .map() to map over the arrayOfPersons and console.log() their information.

// persons.map(function(){})
// .map is an array method, it expects a callback that takes 3 paramters: identifier, index, and original array
persons.map((el, i, arr)=>{
    console.log(el)
    console.log('index: ', i)
    console.log('array: ', arr)
})
