/*
First Question:
- given a string reverse the string
- then replace letters in string to its complements

complements: (and vice versa)
 - 'A' -> 'T'
 - 'C' -> 'G'

 Example:
- input = 'AATTACGC'
- ouput = 'GCGTAATT'
*/

const revAndRepComps = (string) => {
    let complements = {
        A: 'T',
        C: 'G',
        T: 'A',
        G: 'C',
    };

    let reversed = string.split('').reverse();
    let replaced = reversed.map((elem) => complements[elem]);

    return replaced.join('');
}

console.log(revAndRepComps('AATTACGC')) // GCGTAATT


/*
Second Question:
- Given a list of products with a name, price, and weight find all the douplicate products
- a doup is defined as having the same name, price and weight

Example:
- input:
    - Names: ['Ball', 'Box', 'Ball', 'Ball'];
    - Prices: [ 1,      2,     1,      1   ];
    - Weights:[ 2,      2,     2,      2   ];
- Output:
    2 - there are two doups for the ball all at the same Name, price and weight
*/

const findDoups = (names, prices, weights) => {
    let set = new Set();
    let count = 0;

    for (let i = 0; i < names.length; i++) {
        let name = names[i];
        let price = prices[i];
        let weight = weights[i];

        if (set.has(`${name}, ${price}, ${weight}`)) {
            count++;
        } else {
            set.add(`${name}, ${price}, ${weight}`);
        }
    }

    return count;
}

let names1 = ['Ball', 'Box', 'Ball', 'Ball'];
let prices1 = [ 1, 2, 1, 1];
let weights1 = [ 2, 2, 2, 2];

console.log(findDoups(names1, prices1, weights1)) // 2


/*
2D Matrix:
    - find all avail moves for a certain start point
    - valid moves right, down, left, up
    - pos avail only if board[r][c] === 0
    - return all avail moves in an array
*/

const board1 = [
    [0,  0,  0, -1,  -1],
    [0,  0, -1,  0,   0],
    [0, -1,  0, -1,   0],
    [0,  0, -1,  0,   0],
    [0,  0,  0,  0,   0],
    [0,  0,  0,  0,   0],
    [0,  0,  0,  0,   0],
];

const start1 = [1, 1];
const start2 = [5, 3];
const start3 = [6, 0];

const findAvailMoves = (board, start) => {
    let res = [];

    const posDirRow = [0, 1, 0, -1];
    const posDirCol = [1, 0, -1, 0];

    for (let i = 0; i < posDirCol.length; i++) {
        let [row, col] = start;
        let nextMove = [row + posDirRow[i], col + posDirCol[i]];

        if (board[nextMove[0]] !== undefined) {
            if (board[nextMove[0]][nextMove[1]] === 0) res.push(nextMove);
        }
    }

    return res;
}

console.log(findAvailMoves(board1, start1)) // [ [1, 0], [0, 1] ]
console.log(findAvailMoves(board1, start2)) // [ [ 5, 4 ], [ 6, 3 ], [ 5, 2 ], [ 4, 3 ] ]
console.log(findAvailMoves(board1, start3)) // [ [ 6, 1 ], [ 5, 0 ] ]
