const persons = [
    {
        // an object has key value pairs
        firstName: "Jane",
        lastName: "Doe",
        birthDate: "Jan 5, 1925",
        gender: 'female'
    },
    { firstName: "Bob", lastName: "Smith", birthDate: "Feb 10, 1935", gender: 'male' },
    { firstName: "Sally", lastName: "Jones", birthDate: "Mar 25, 1966", gender: 'female' },
    { firstName: "Sally", lastName: "Jones", birthDate: "Mar 25, 1968", gender: 'female' },
    { firstName: "John", lastName: "Brown", birthDate: "April 3, 1975", gender: 'male' }
];

// Use .filter() to filter the persons array and console.log 0only males in the array.

let males = persons.filter((el )=> {
    return el.gender === "male"
})

console.log(males)
