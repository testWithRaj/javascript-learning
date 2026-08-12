marks =[100,80,98,78,99];

console.log(marks); //print the array
console.log(marks[1]); // access the array based on index
console.log(marks.length); // to know the length

// we can store different data type as well , since its hetrogeneous

marks1 =[12,true,"Raj"];
console.log(marks1);
console.log(typeof marks1); // type of array is object
//can we change the value from the array? Yes we can
marks1[0]=100;
console.log(marks1);

// add new element at the end of an array > we can do that using push operations
marks1.push("kumar");
console.log(marks1);
