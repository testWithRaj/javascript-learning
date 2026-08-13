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

//delete element from the end
marks1.pop();
console.log(marks1);
// add element at first place

marks1.unshift(29);
console.log(marks1);

//delete element from first place
marks1.shift();
console.log(marks1);


//slicing array

const array=[12,23,23,35];
console.log(array.slice(2,4));
