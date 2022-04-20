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

//.find

const firstMale = persons.find((person)=>{
    return person.gender === 'male'
})

// console.log(firstMale)

function scratchFind(arr, cb){
    for (const el of arr){
        let result = cb(el)
        if (result === true){
            return console.log (el)
        }
    }
}

function findCallback (element){
    return element.gender === "male"
}

scratchFind(persons, findCallback)