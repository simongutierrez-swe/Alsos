/**
 * 56. Merge Intervals
 *
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

Constraints:

1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104
 */

var merge = function(intervals) {
    intervals.sort((a, b) => {
            if (a[0] === b[0]) {
                return a[1] - b[1];
            } else {
                return a[0] - b[0];
            }
        });

    let res = [], currInterval = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        const nxtInterval = intervals[i];

        if (currInterval[1] >= nxtInterval[0] && currInterval[1] <= nxtInterval[1]) {
            currInterval = [currInterval[0], nxtInterval[1]];
        } else if (currInterval[1] >= nxtInterval[1]){
            continue;
        } else {
            res.push(currInterval);
            currInterval = nxtInterval;
        }
    }

    res.push(currInterval);

    return res;
};


const test1 = [[1, 3], [2, 6], [8, 10], [15, 18]]
const test2 = [[1, 4], [4, 5]]

console.log(merge(test1)) // [[1,6],[8,10],[15,18]]
console.log(merge(test2)) // [[1,5]]
