//Object is used to store the values in key value pairs

let person ={
    name :"Raj",
    age:31,
    location :"hyderabad"
}

console.log(person.location);


//Accesing objects, we can do using 2 methods

// Changing the property 
// objects are mutable

person.age =36;

console.log(person.age);

// Adding new element 
person.job = "QA";

console.log(person.job);

//Deleting element

delete person.location;

console.log(person);

// Object can contain different data types

let person2 =
{
    name2:"Kumar",
    age: 35,
    isMarried: true,
    salary: 10000
}

console.log(person2);

//object with an array

let person3 = {
    name: "Raj",
    age: 31,
    skills: ["Java", "JavaScript", "SQL"]
};

console.log(person3.skills);

console.log(person3.skills[1]);

//Object inside an object 

let person4 = {
    name: "Raj",
    address: {
        city: "Hyderabad",
        state: "Telangana"
    }
};

console.log(person4.address);

let person5 = {
    name: "Aarti",
    address: {
        city: "Hyderabad",
        state: "Telangana"
    }
};

console.log(person5.address);

let person6 = {
    name: "Kumar",
    address: {
        city: "Dhanbad",
        state: "Jharkhand"
    }
};

console.log(person6.address);

let person7 = {
    name: "Kumar",
    address: {
        city: "Dhanbad",
        state: "Jharkhand"
    }
};

console.log(person7.address);