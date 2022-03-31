// big o complexity types

// O(1) 1 iteration
// regardless the time, iterations is constant

const getLast = items => items[items.length - 1];

// O(N) -> Linear-Time Algorithm
// worst case, grows on par with the nubmer of items

const findIndex = (items, match) => {
    for (let i = 0, total = items.length; i < total; i++) {
        if (items[i] == match)
            return i;
    }
    return -1;
};

// O(N 2) Order N squared
// worst case -> square of the number of inputs
// time grows exponentially related to the number of inputs

const builtSquareMatrix = items => {
    let matrix = [];

    for (let i = 0, total = items.length; i < total; i++) {
        matrix[x] = []; // create brand new nested array
        /*
         [
             []
             ...
         ]
         */ 
        for (let j = 0, total = items.length; j < total; j++) {
            matrix[i].push(items[j]); 
            // [
                // [j....]
            // ]
        }    
    }
    return matrix;
};

// O(n log n) - "Order N log N"

const quickSort = list => {
    if (list.length < 2) {
        return list;
    }

    let pivot = list[0];
    let left = [];
    let right = [];

    for (let i = 1, total = list.length; i < total; i++) {
        if (list[i] < pivot) {
            left.push(list[i]);
        } else {
            right.push(list[i]);
        }
    }

    return [
        ...quickSort(left),
        pivot,
        ...quickSort(right)
    ];

};

/**
 *  - - - - -
 *  0 1 ... 99
 * 
 * x - x -
 * 0 1 2 3 4 
 * 
 * - x - - 
 * 0 1 2 3 
 */


/*

    R - - 
    0 1 2 

    [R] - - 
    0 1 2 

    R [-] -    - R -  
    0 1 2      0 1 2 


    R - [-] 
    0 1 2 

    what do I know
    - the rabbit can't stay at one hole
    so if I check N, I'm sure they're not at N
    - I also know that if they were at M, they can only be at M+1 or M-1
    - 3 -> 2, 4 

    50 -> T+1, T+2

    assuume the rabbit starts on an even index 0, 2, 4, 6 ... 48
    -> you know ever other guess the rabit is on an even index

    check then bunny hops

    - - - -
    0 1 2 3

            T+1         T+2
    50 -> [49, 51] -> [48, 50, 52] -> []




*/


let pos = 50;
let len = 100;
console.log("The rabbit started", pos);
function step() {

    let prev = pos;
    if (pos === len) {
        pos--;
    } else if (pos === 0) {
        pos++;
    } else {

        // rabbit position back and forth
        if (Math.random() > 0.5) {
           
            pos++;
        }else {
    
            pos--;
        }
    }

    console.log("The rabbit jumped from", prev, "to", pos)
}


function guess(attempt) {
    return attempt === pos;
}

// - - - - 
// when rabbit is on even index vs odd index

/*



- you start counting at even -> you find even rabbit
- you start counting at odd -> you find odd rabbit

1 pass even, 1 pass odd

    - - - -
    0 1 2 3 

    rabbit starts at 2
    check 0

    rabbit can go to 1 or 3

    if 1 
        check 1

    if 3
        check 1
        rabbit can go to 2
            check 2


*/

let found = false;

for (let i = 0; i < len; i++) {
    
    let attempt = i;
    console.log("Gonna check", attempt);
    if (attempt === pos) {
        found = true;
        console.log('Found the rabbit at', pos);
        break;
       
    }
    step();
}

if(!found){
    for (let i = 1; i < len; i++) {
    
        let attempt = i;
        console.log("Gonna check", attempt);
        if (attempt === pos) {
            found = true;
            console.log('Found the rabbit at', pos);
            break;
           
        }
        step();
    }
    
}

if (!found) {
    console.log("Tough luck :-(");
}

// dan abramov

// 10s
/*
    
*/

// two pointers technique

function isPaiSum(A, N, X) {
    
    var firstPointer = 0;

    var secondPointer = N - 1;

    while(firstPointer < secondPointer) {

        // if we find a pair
        if (A[firstPointer] + A[secondPointer] == X)
            return true;
        
        // If sum of elements at current
        // pointers is less, we move towards
        // higher values by doing i++
        else if (A[firstPointer] + A[secondPointer] < X) {
            i++;
        }

        else
            j--;
    }

    return false;
}

console.log(' - Binary Gap - ');
// Binary Gap

function solution1(N) {
    const asBinary = (N >>> 0).toString(2);
    console.log({ asBinary });
    let startingBound = 0;
    let distances = [];

    for(let i = 0; i < asBinary.length; i++){
        if(asBinary[i] === '1'){
            startingBound = i;
        } else if (asBinary[i] === '0') {
            distances.push(i - startingBound);
        }

        console.log({ startingBound });
        console.log({ distances });
        
    }

    if (distances.length === 0) {
        return 0;
    }

    const longest = distances.sort((a, b) => b - a);
    console.log({ longest });
    return longest[0];
}

console.log(' - POINTSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS - ');



function solution2(A, B, C, D) {
    // write your code in JavaScript (Node.js 8.9.4
    
    // find highest absolute values pairs of difference between two points
    // as x and as y


    // 3 distances and x1 and x2

    let distancesWithPoints = {
        d1:  Math.pow(Math.abs(A - B), 2) + Math.pow(Math.abs(C - D), 2),
        d2:  Math.pow(Math.abs(A - C), 2) + Math.pow(Math.abs(B - D), 2),
        d3:  Math.pow(Math.abs(A - D), 2) + Math.pow(Math.abs(B - C), 2)
    }
    
    // iterate over properties

  
    var max = Math.max(distancesWithPoints.d1, distancesWithPoints.d2, distancesWithPoints.d3);


    return max;
    // try all posible combination
}


console.log(solution2(1, 1, 2, 3))

function solution3(T){
    // returns number of visible nodes

    // store value of root

    // traversing the tree find node values higher than the root
    
    // and count

    let pointer = T;

    if(T == null)
        return -1;
    else if(T.l == null && T.r == null)
        return 0;

   
    const path = [];
    path.push(T.x); // path[0] is the root

    while(T){
        const index = pointer.indexOf()

        solution(T.l);
        solution(T.r);
    }

}


function solution(T) {
    // write your code in JavaScript (Node.js 8.9.4)
    return traverseTree(-1, -1, T);
}
function traverseTree(nVisibleNodes, parentNodeValue, node) {
  let n = 0;
  if (node.x > parentNodeValue) nVisibleNodes += 1;
  if (null !== node.l) n += traverseTree(nVisibleNodes, node.x, node.l);
  if (null !== node.r) n += traverseTree(nVisibleNodes, node.x, node.r);
  nVisibleNodes += n;
  return nVisibleNodes;
}


function solution5(A) {
    // A = [10, -10, -1, -1, 10]
        // indexOfNegative = [1, 2 ,3]
    // return min number of relocation expenses at the end of array//
    // to avoid dept at the start of the year

    // sum of array is negative
    // return 0
    // 
 
    let indexOfNegative = {}; 
    indexOfNegative.indexes = [];
    indexOfNegative.negativeValues = [];

    for (let i = 0; i < A.length; i++){
        if( A[i] < 0 ) {
            let indexAndValue = {};
            let arrayPair = [i, A[i]];

            indexAndValue.pair = A[i];
            console.log(arrayPair);
            indexOfNegative.indexes.push(i);
            indexOfNegative.negativeValues.push(A[i]);
        }
    }
    console.log(indexOfNegative);

    // 
    let counter = 0;

    for(let i = 0; i < indexOfNegative.indexes.length; i++){
        // elementi para me ate pas nese eshte negativ duhet bere alokim ne fund
       
        let beforeIndexVal = A[indexOfNegative.indexes[i] - 1];
        if(beforeIndexVal != undefined){
            if(A[indexOfNegative.indexes[i] - 1] + indexOfNegative.negativeValues[i] < 0){
                console.log(A[indexOfNegative.indexes[i] - 1] + indexOfNegative.negativeValues[i])
                console.log(A[indexOfNegative.indexes[i] - 1] )
                console.log(indexOfNegative.negativeValues[i])
                counter++;
            }
        }
    }

    return counter;
}

[[0, -1], [1, -1], [2, -1]]

console.log(solution5([-1,-1, -1,1,1,1]))

// subsequence 
function isValidSubsequence(array, sequence) {
    let arrIdx = 0;
    let seqIdx = 0;
    while(arrIdx < array.length && seqIdx < sequence.length) {
        if (array[arrIdx] === sequence[seqIdx]) seqIdx++;
        arrIdx++;
    }

    return seqIdx === sequence.length;
}

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1]))


function fibonacci(n){
    
    let term1 = 0;
    let term2 = 1;
    let nextTerm;
    let i = 0;
    while(i <= n) {
        
        nextTerm = term1 + term2;
        console.log(term1);

        term1 = term2;
        term2 = nextTerm;
        
        i++;
    }
}

fibonacci(4)

function squareN(n) {
    console.log('square');
    if (n === 0)
        return 1;
    if (n === 1)
        return n;
    return n + squareN(n - 1);
}

console.log(squareN(10));


function subArrayOrderedNjPasNj(A){
    let subArrayLongest = [];
    let subArray = [];
    for(let i = 0; i < A.length; i++){
        
        if( A[i + 1] > A[i] && A[i + 1] != undefined){
            subArray.push(A[i]);
            
            console.log("subArray - " + subArray);
        } else {
            subArray.push(A[i]); // push the last sub element
            if(subArrayLongest.length < subArray.length){
                subArrayLongest = subArray;
            }
            subArray = [];
        }
       
       console.log(subArrayLongest)
    }
    return subArrayLongest.length;
}

function subArrayOrdered(A){
    let setOfSubsLengths = [];
    let subArray = [];
    for(let i = 0; i < A.length; i++){
        subArray.push(A[i]);
        let currentElement = A[i];
        for (let j = i + 1; j < A.length; j++) {
            if(currentElement <= A[j]){
                subArray.push(A[j]);
                currentElement = A[j];
            }
        }

        console.log(subArray);
        console.log(setOfSubsLengths);
        if(subArray.length === 9){
            console.log('e nenta - ---------------------------' + subArray);
        }

        setOfSubsLengths.push(subArray.length);
        subArray = [];
    }
   
    return Math.max(...setOfSubsLengths);
}

// find min of array after current element that is bigger than it
// and push to subArray

function subArrayOrderedMinOption(A){
    let setOfSubsLengths = [];
    let subArray = [];
    for(let i = 0; i < A.length; i++){
        let slicedArray = A.slice(i);

        let minElementHigherThanCurrent =  slicedArray 
        console.log(minElement);
    }
   
    return 1;
}

console.log('returned - ' + subArrayOrderedMinOption([ 69, 54, 19, 51, 16, 54, 64, 89, 72, 40, 31, 43, 1, 11, 82, 65, 75, 67, 25, 98, 31, 77, 55, 88, 85, 76, 35, 101, 44, 74, 29, 94, 72, 39, 20, 24, 23, 66, 16, 95, 5, 17, 54, 89, 93, 10, 7, 88, 68, 10, 11, 22, 25, 50, 18, 59, 79, 87, 7, 49, 26, 96, 27, 19, 67, 35, 50, 10, 6, 48, 38, 28, 66, 94, 60, 27, 76, 4, 43, 66, 14, 8, 78, 72, 21, 56, 34, 90, 89 ]
    ));