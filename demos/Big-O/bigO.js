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