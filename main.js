// My age is 36
var myAge = 36;
// The first two years of a dog's life are the early years
var earlyYears = 2 * 10.5;
// This accounts for the first two years of a dog's life and multiplies times 4
var laterYears = (myAge - 2) * 4;
// adds the values of later years and early years to get dog years
var myAgeInDogYears = earlyYears + laterYears;
// sets my name in all lower case letters
var myName = 'Brice'.toLowerCase();
// creates a statement with interpolations of My name, my age, and age in dog years.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
