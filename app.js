// ---1---
// Дана строка; нужно написать функцию, которая позволяет вернуть значение true, если строка является палиндромом, и false — если нет. При этом нужно учитывать пробелы и знаки препинания.

// const palindrome = str => {
// 	str = str.toLowerCase()
// 	return str === str.split('').reverse().join('')
// }

// console.log(palindrome('racecar'));
// console.log(palindrome('table'));

// ---2---

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.

// function arrayDiff(a, b) {
// 	for (let i = 0; i < b.length; i++) {
// 		a = a.filter(el => el !== b[i])
// 	}
// 	return a
// }

// console.log(arrayDiff([1,2,3], [1,2]));

// ---3---

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// function findOutlier(integers) {
// 	let evenNumbers = 0;
// 	for (let i = 0; i < 3; i++) {
// 		if (integers[i] % 2 === 0) evenNumbers++
// 	}
// 	if (evenNumbers > 1) {
// 		return integers.find(number => number % 2 !== 0)
// 	} else {
// 		return integers.find(number => number % 2 === 0)
// 	}
// }

// ---4---

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str) {
	let arr = str.split(" ");
	console.log(arr);
	let newArr = arr.map(item => {
		let temp = item[0];
		item = item.slice(1,);
		item = item + temp + "ay";
		return item
	})
	return newArr.join(" ");
}

console.log(pigIt('O tempora o mores !'))