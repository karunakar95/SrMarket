import { Component, OnInit } from '@angular/core';import { forEach } from '@angular/router/src/utils/collection';
import { TestBed } from '@angular/core/testing';
;

@Component({
  selector: 'app-misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.scss']
})
export class MiscComponent implements OnInit {

  count = 0;
  studentData = [
    {
      "ID" : 1,
      "Age" : 21,
      "Name" : "Maya",
      "Gender" : "female",
      "Country" : "Russia",
      "Rank" : "25"
    },
    {
      "ID" : "2",
      "Name" : "jay",
      "Age" : 23,
      "Gender" : "Male",
      "Country" : "Indonesia",
      "Rank" : "24"
    },
    {
      "ID" : "3",
      "Name" : "vijay",
      "Age" : 25,
      "Gender" : "Male",
      "Country" : "Poland",
      "Rank" : "56"
    },
    {
      "ID" : "4",
      "Name" : "Ajay",
      "Age" : 25,
      "Gender" : "Male",
      "Country" : "Australia",
      "Rank" : "34"
    },
    {
      "ID" : "5",
      "Age" : 27,
      "Name" : "Raj",
      "Gender" : "Male",
      "Country" : "Canada",
      "Rank" : "35"
    },
    {
      "ID" : "6",
      "Name" : "jayRam",
      "Age" : 26,
      "Gender" : "Male",
      "Country" : "Paris",
      "Rank" : "20"
    },
    {
      "ID" : "10",
      "Name" : "Harish",
      "Age" : 35,
      "Gender" : "Male",
      "Country" : "China",
      "Rank" : "52"
    },
    {
      "ID" : "12",
      "Name" : "Eshwar",
      "Age" : 45,
      "Gender" : "Male",
      "Country" : "Pakistan",
      "Rank" : "44"
    }
  ]
  headers = ["ID", "Name", "Age", "Gender", "Country", "Rank"];

  constructor() { }

  ngOnInit() {

/*************** slice() ************/

// Copies elements from an array
// Returns them as a new array
// Doesn’t change the original array
// Starts slicing from … until given index: array.slice (from, until)
// Slice doesn’t include “until” index parameter
// Can be used both for arrays and strings

//let arr = [40,20,30,12,89,96,67,"Abc", "ghi", "lmn",37, '67'];
//let arr1 = arr.slice(2,4); //30,12
//let arr1 = arr.slice(3,5); //12,89
//let arr1 = arr.slice(2,5); //30,12,89
//let arr2 = arr.slice(4,9); //89, 96,67, Abc,ghi
//console.log('Sliced array',arr1,arr2);


/**************** splice()  *************/

// Used for adding/removing elements from array
// Returns an array of removed elements
// Changes the array
// For adding elements: array.splice (index, number of elements, element)
// For removing elements: array.splice (index, number of elements)
// Can only be used for arrays

//let arr3 = arr.splice(2,5); //30,12,89,96,67
//let arr3 = arr.splice(3,6) //12,89,96,67,"Abc","ghi"
//let arr3 = arr.splice(1,2,'a','b');
//let arr3 = arr.splice(4,2,55,45);

//console.log('array', arr); //[40,20,30,12,55,45,67,"Abc", "ghi", "lmn",37, '67'];
//console.log('Spliced array', arr3); //89,96


/****************  split()  *****************/

// Divides a string into substrings
// Returns them in an array
// Takes 2 parameters, both are optional: string.split(separator, limit)
// Doesn’t change the original string
// Can only be used for strings

// var arr1 = "Karunakar Reddy"
// let arr2 = arr1.split(' ');
// console.log('Splitted Array', arr2); //["Karunakar", "Reddy"]
// console.log('Splitted reverse Array', arr2.reverse()); //["Reddy", "Karunakar"]
// console.log('Splitted joined Array', arr2.join('')); //ReddyKarunakar


/******************* forEach() ******************/

//forEach() may be preferable when you’re not trying to change the data in your array,
//but instead want to just do something with it.
//like saving it to a database or logging it out.
//Just about anything you can do with forEach(). you can do with map(), and vise versa.
//map() allocates memory and stores return values. forEach() throws away return values and always returns undefined.
//forEach() will allow a callback function to mutate the current array. map() will instead return a new array.

 //var arr1 = [7,3,2,6];

// var arr2 = arr1.forEach((element)=>{
//   console.log('forEach() Output', element); //7,3,2,6
// })

// var arr2 = arr1.forEach((element)=>{
//    return element * element;
// })
// console.log('forEach() output', arr2); //undefined.

// this.studentData.forEach((student)=> {
//   if(student.Age > 30){
//   console.log(student.Name,'is Above 30 years'); // Harish is Above 30 years //Eshwar is Above 30 years
//   }
// })
//console.log('MiscComponent -> ngOnInit -> this.studentDataAfterforeach()', this.studentData);


/********************* map() *************************/

//The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// var arr1 = [7,3,2,6];
// var arr2 = arr1.map((element)=> element*element);
// console.log('map() Output', arr2);


/********************* filter() **********************/
//The filter() method creates a new array with all elements
//that pass the test implemented by the provided function.

// var filterResult = this.studentData.filter(student=> student.Age >30);
// console.log('MiscComponent -> ngOnInit -> filterResult', filterResult);
//const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

//const result = words.filter(word => word.length > 6);

//console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

/********************** find() ************************/
//The find() method returns the value of the first element
// in the provided array that satisfies the provided testing function.

// var findResult = this.studentData.find(student => student.Age === 45);
// console.log('MiscComponent -> ngOnInit -> findResult', findResult);
//const array1 = [5, 12, 8, 130, 44];

//const found = array1.find(element => element > 10);

//console.log(found);
// expected output: 12

/********************** findIndex() *************************/

//The findIndex() method returns the index of the first element in the array that satisfies the provided testing function.
// Otherwise, it returns -1, indicating that no element passed the test

// const array1 = [5, 12, 8, 130, 44];

// const isLargeNumber = (element) => element > 13;

// console.log(array1.findIndex(isLargeNumber));
// expected output: 3

/********************** from() *************************/

//static method creates a new, shallow-copied Array instance from an array-like or iterable object.

//var fromresult = Array.from('Karunakar Reddy');
//console.log('MiscComponent -> ngOnInit -> fromresult', fromresult);
//var arr4 = [3,5,2,8,7];
//console.log(Array.from(arr4, x => x + x)); //[6, 10, 4, 16, 14]

/*******************  Array.isArray()      ***************************/
//The Array.isArray() method determines whether the passed value is an Array.
// Array.isArray([1, 2, 3]);  // true
// Array.isArray({foo: 123}); // false
// Array.isArray('foobar');   // false
// Array.isArray(undefined);  // false

/*******************  Array.of()   ***************************/
//The Array.of() method creates a new Array instance from a variable number of arguments,
//regardless of number or type of the arguments.
// Array.of(7);       // [7]
// Array.of(1, 2, 3); // [1, 2, 3]
// Array(7);          // array of 7 empty slots
// Array(1, 2, 3);    // [1, 2, 3]

/*******************  concat()    ****************************/
//The concat() method is used to merge two or more arrays.
//This method does not change the existing arrays, but instead returns a new array.
// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);
// console.log('MiscComponent -> ngOnInit -> array3', array3);

/********************  copyWithin() ***************************/
//The copyWithin() method shallow copies part of an array to another location in the same array.
//and returns it without modifying its length

// var arr1 = ['a','b','c','d','e','f'];
// var arr2 = arr1.copyWithin(1,2,4); //['a','c','d','d','e','f']
// console.log('MiscComponent -> ngOnInit -> arr2', arr2);

/********************  entries() *******************************/
//The entries() method returns a new Array Iterator object that contains
// the key/value pairs for each index in the array.

// var arr1 = ['a','b','c','d','e','f'];
// var arr2 = arr1.entries();
// console.log('MiscComponent -> ngOnInit -> arr2', arr2);
// arr1.forEach((e)=> {
//   console.log(arr2.next().value); // [0, "a"] [1, "b"] [2, "c"] [3, "d"] [4, "e"] [5, "f"]
// })

/*********************  every()   *******************************/
//The every() method tests whether all elements in the array pass
//the test implemented by the provided function. It returns a Boolean value.

// const isBelowThreshold = (currentValue) => currentValue < 40;
// const array1 = [1, 30, 39, 29, 10, 13];
// console.log(array1.every(isBelowThreshold)); //true

/********************* fill()  *********************************/
//The fill() method changes all elements in an array to a static value,
//from a start index (default 0) to an end index (default array.length). It returns the modified array.

//const array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
//console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
//console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]

//console.log(array1.fill(6));
// expected output: [6, 6, 6, 6]

/************************** includes() ******************************/
//The includes() method determines whether an array includes a certain value among its entries,
//returning true or false as appropriate

//const array1 = [1, 2, 3];

//console.log(array1.includes(2));
// expected output: true

//const pets = ['cat', 'dog', 'bat'];

//console.log(pets.includes('cat'));
// expected output: true

//console.log(pets.includes('at'));
// expected output: false

/***************************** indexOf() ********************************/
//The indexOf() method returns the first index at which a given element can be found in the array,
//or -1 if it is not present.

//const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

//console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
//console.log(beasts.indexOf('bison', 2));
// expected output: 4

//console.log(beasts.indexOf('giraffe'));
// expected output: -1

/******************************* keys() ***********************************/
//The keys() method returns a new Array Iterator object that contains
//the keys for each index in the array.

// const array1 = ['a', 'b', 'c'];
// const keys = array1.keys();
// console.log('MiscComponent -> ngOnInit -> keys', keys);
// array1.forEach((e)=> {
//   console.log(keys.next());
// })

/********************************* values() ***********************************/
//The values() method returns a new Array Iterator object that contains
//the values for each index in the array.

// const array1 = ['a', 'b', 'c'];
// const values = array1.values();
// console.log('MiscComponent -> ngOnInit -> keys', values);
// array1.forEach((e)=> {
//   console.log(values.next());
// })

/********************************** lastIndexOf() ********************************/
//The lastIndexOf() method returns the last index at which a given element can be found in the array,
// or -1 if it is not present. The array is searched backwards, starting at fromIndex.

//const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

//console.log(animals.lastIndexOf('Dodo'));
// expected output: 3

//console.log(animals.lastIndexOf('Tiger'));
// expected output: 1


/************************************ pop() ***************************************/
//The pop() method removes the last element from an array and returns that element.
// This method changes the length of the array.

//const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

//console.log(plants.pop());
// expected output: "tomato"

//console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

//plants.pop();

//console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]


/***************************************** push() *************************************/
//The push() method adds one or more elements to the end of an array and returns the new length of the array.
//const animals = ['pigs', 'goats', 'sheep'];

//const count = animals.push('cows');
//console.log(count);
// expected output: 4
//console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

//animals.push('chickens', 'cats', 'dogs');
//console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]


/******************************************* reduce() *************************************/
//The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.

 //const arr = [3,4,2,5];
 //const reducer = (accumulator, currentValue) => accumulator+currentValue;
 //console.log(arr.reduce(reducer)); //14
 // 3 4
 // 7 2
 // 9 5
 // 14
//const array1 = [1, 2, 3, 4];
//const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
//console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
//console.log(array1.reduce(reducer, 5));
// expected output: 15


/******************************************** reduceRight() ***********************************/
//The reduceRight() method applies a function against an accumulator and each value of
// the array (from right-to-left) to reduce it to a single value

// const array1 = [[0, 1], [2, 3], [4, 5]].reduceRight(
//   (accumulator, currentValue) => accumulator.concat(currentValue)
// );

//console.log(array1);
// expected output: Array [4, 5, 2, 3, 0, 1]


/********************************************* shift() ***************************************/
//The shift() method removes the first element from an array and returns that removed element.
// This method changes the length of the array.

//const arr = [3,4,5,6,2,8,9];
//console.log(arr.shift()); //3
//console.log(arr); //[4,5,6,2,8,9]


/********************************************* unshift() **************************************/
//The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

// const arr = [3,4,5,6,2,8,9];
// console.log(arr.unshift(89)); //8
// console.log(arr); //[89, 3, 4, 5, 6, 2, 8, 9];


/*********************************************** some() ***************************************/
//The some() method tests whether at least one element in the array passes
// the test implemented by the provided function. It returns a Boolean value.
//const even = (element)=> element%2 == 0;
//const arr = [1,5,9,7];
//console.log(arr.some(even)); //false


/*********************************************** sort() ***************************************/
//The sort() method sorts the elements of an array in place and returns the sorted array.
//The default sort order is ascending, built upon converting the elements into strings,
//then comparing their sequences of UTF-16 code units values.


//const months = ['March', 'Jan', 'Feb', 'Dec'];
//months.sort();
//console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

//const array1 = [1, 30, 4, 21, 100000];
//array1.sort((a,b) => a-b);
//console.log(array1);
//expected output: [1, 4, 21, 30, 100000];


/*********************************************** toLocaleString() ******************************/
//The toLocaleString() method returns a string representing the elements of the array.
//The elements are converted to Strings using their toLocaleString methods.
//and these Strings are separated by a locale-specific String (such as a comma “,”).

//const array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
//const localeString = array1.toLocaleString();
//console.log(localeString); //1,a,12/21/1997, 6:12:00 AM


/************************************************* toString() ************************************/
//The toString() method returns a string representing the specified array and its elements.
//const array1 = [1, 2, 'a', '1a'];
//console.log(array1.toString()); //1,2,a,1a
}



 /************************************************  sort()  ***************************************/
 asc = true;
   sortBy(header){
     if(this.asc) {
       this.studentData.sort((a,b) => {
         return `${a[header]}`.localeCompare(`${b[header]}`)}); //ASC
     } else {
       this.studentData.sort((a,b) => `${b[header]}`.localeCompare(`${a[header]}`)); //DSC
     }
     this.asc = !this.asc;
   }
  }
