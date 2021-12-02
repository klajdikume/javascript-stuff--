const verifyUser = async function(username, password) {
    try {
        const userInfo = await dataBase.verifyUser(username, password);
        return userInfo;
    }
    catch(e){
        console.log(e);
    }
}
