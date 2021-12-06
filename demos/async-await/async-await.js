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