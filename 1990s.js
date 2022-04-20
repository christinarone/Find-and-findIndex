const persons = [
    {
        // an object has key value pairs
        firstName: "Jane",
        lastName: "Doe",
        birthDate: "Jan 5, 1925"
    },
    { firstName: "Bob", lastName: "Smith", birthDate: "Feb 10, 1935" },
    { firstName: "Sally", lastName: "Jones", birthDate: "Mar 25, 1966" },
    { firstName: "Patty", lastName: "Jones", birthDate: "Mar 25, 1968" },
    { firstName: "John", lastName: "Brown", birthDate: "April 3, 1999" }
];
// Create a function that returns true if the value of birthDate is before Jan 1, 1990.
function generation(arr){
    for(const el of arr){
        if(Number(el.birthDate.split(' ')[2]) < 1990){
            console.log (el)
        }
    }
}

generation(persons)