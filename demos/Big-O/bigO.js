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