const verifyUser = async function(username, password) {
    try {
        const userInfo = await dataBase.verifyUser(username, password);
        return userInfo;
    }
    catch(e){
        console.log(e);
    }
}


function invertTree(node){
    let left = node.left;
    let right = node.right;
    node.right = left;
    node.left = right;
    invertTree(left);
    invertTree(right);
}

console.log('-------------START----------------'); // 1 

const func = () => {
    console.log('-------------INSIDE func----------------'); // 5 func enviroment
    return new Promise(resolve => {
        console.log('-----------------------------'); // 6 after this line code send setTimeout in a queue to be waited for call stack
        setTimeout(() => {
            resolve('done!') 
        }, 1000)
    })
}

const response = async () => {
    console.log('-------------RESPONSE----------------'); // 3 res enviroment
    const data = await func() // 4 call async func 
    console.log('-------------AFTER func call 1----------------'); // 8 
    console.log(data);
    console.log('-------------END RESPONSE----------------');
}

response(); // 2 call response

console.log('-------------END----------------'); // 7 this line jumps to call stack

response(); // 2 call response

console.log('------------------ END SECOND RESPONSE CALL --------------------')

/*
    - stack
        1. START log
        2. response call
        3. RESPONSE LOG
        4. Call func
        5. Inside func LOG
    - WEB API QUEUE
        - send SetTimeout to WEB API 
    - CAll Back Queue

*/