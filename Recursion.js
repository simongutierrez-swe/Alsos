// print from 1 to nth number
const prinTotNth = (n) => {

    if (n === 0) return; // base case

    prinTotNth(n - 1); // hypothosis
    console.log(n); // induction
};

console.log(prinTotNth(7)); // 1 -> 7

// print nth number to 1;
const printFromNth = (n) => {

    if (n === 0) return; // base case

    console.log(n); // induction
    printFromNth(n - 1); // hypothosis
};

console.log(printFromNth(7)); // 7 -> 1

// find the height of a tree
const maxDepth = (root) => {
    if (!root) return 0; // base case

    // hypothesis
    const left = maxDepth(root.left);
    const right = maxDepth(root.right);

    // induction
    return Math.max(left, right) + 1;
};

// Sort an array recursively

