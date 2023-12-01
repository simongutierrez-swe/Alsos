// testing set up
const invokeFunctions = (arrOfArgs, fn) => {
    arrOfArgs.forEach(e => console.log(fn(e)));
};


// Write a function that tests whether a string is a palindrome.

const isPali = (str) => {
    let start = 0;
    let end = str.length - 1;

    while (start < end) {
        if (str[start] !== str[end]) return false;
        start++;
        end--;
    }

    return true;
};

const test1 = 'racecar'; // true
const test2 = ' '; // true
const test3 = '00100'; // true
const test4 = 'testfail'; // false

invokeFunctions([test1, test2, test3, test4], isPali);


// Write a function that merges two sorted lists into a new sorted list. [1,4,6],[2,3,5] → [1,2,3,4,5,6]. You can do this quicker than concatenating them followed by a sort.

const concateTwoSorted = (args) => {
    if (args.length < 2) return args.length === 0 ? [] : args[0];

    let newArr = [], p1 = 0, p2 = 0;
    const [arr1, arr2] = [args[0], args[1]];

    while (p1 < arr1.length || p2 < arr2.length) {
        if (arr1[p1] <= arr2[p2] && arr1[p1] !== undefined || arr2[p2] === undefined) {
            newArr.push(arr1[p1]);
            p1++;
        } else {
            newArr.push(arr2[p2]);
            p2++;
        }
    }

    return newArr;
};

const concat1 = [[1, 4, 6], [2, 3, 5]]; // [1,2,3,4,5,6]
const concat2 = [[6, 6, 6], [2, 3, 5]]; // [ 2, 3, 5, 6, 6, 6 ]
const concat3 = [[1, 2, 4, 5, 7, 9, 19], [2]]; // [1, 2, 2, 4, 5, 7, 9, 19]
const concat4 = []; // []
const concat5 = [[1, 2, 4]]; // [1, 2, 4]

invokeFunctions([concat1, concat2, concat3, concat4, concat5], concateTwoSorted);


// Write a function that rotates a list by k elements. For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]. Try solving this without creating a copy of the list. How many swap or move operations do you need?

const rotate = (nums, k) => {
    let start = k;
    let count = 0;
    let memo = {};

    while (count < nums.length) {
        if (nums[start] !== undefined) {
            memo[count] = nums[start];
        } else {
            start = 0;
            memo[count] = nums[start];
        }
        count++;
        start++;
    }

    // eslint-disable-next-line guard-for-in
    for (const key in memo) {
        nums[key] = memo[key];
    }

    return nums;
}

const rotateKTimes = (args) => {
    let [nums, k] = [args[0], args[1]];
    if (!nums.length || nums.length === k) return nums;
    k = k > nums.length ? k % nums.length : k;

    return rotate(nums, k);
};

const rotateTest1 = [[1, 2, 3, 4, 5, 6], 2]; // [3, 4, 5, 6, 1, 2]
const rotateTest2 = [[1, 2, 3, 4, 5, 6], 5]; // [6, 1, 2, 3, 4, 5]
const rotateTest3 = [[1, 2, 3, 4, 5, 6], 6]; // [1, 2, 3, 4, 5, 6]


invokeFunctions([rotateTest1, rotateTest2, rotateTest3], rotateKTimes);


// Write a function that computes the list of the first 100 Fibonacci numbers. The first two Fibonacci numbers are 1 and 1. The n+1-st Fibonacci number can be computed by adding the n-th and the n-1-th Fibonacci number. The first few are therefore 1, 1, 1+1=2, 1+2=3, 2+3=5, 3+5=8. Can you do it using recursion?
const nthFib = (n) => {
    if (n <= 2) return 1;

    let x = 1;
    let y = 1;

    for (let i = 2; i < n; i++) {
        let nextFib = x + y;
        x = y;
        y = nextFib;
    }

    return y;
};


console.log(nthFib(100));

// Write a function that takes a number and returns a list of its digits. So for 2342 it should return [2,3,4,2].


// Write a function that takes a list of numbers, a starting base b1 and a target base b2 and interprets the list as a number in base b1 and converts it into a number in base b2 (in the form of a list-of-digits). So for example [2,1,0] in base 3 gets converted to base 10 as [2,1].


// Write a function that translates a text to Pig Latin and back. English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word and adding ‘ay’. “The quick brown fox” becomes “Hetay uickqay rownbay oxfay”.
