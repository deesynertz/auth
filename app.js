const api = require('./resources/apiKey');

var reqMethod = null;

const signIn = (loginUserReq) => {
    reqMethod = 'login';
    return new Promise((resolve, reject) => {
        if (loginUserReq.email === undefined && loginUserReq.password === undefined) {
            reject(new Error(reqMethod + 'email & password required!!'));
        } 

        api.findUserByEmail_Password(loginUserReq).then(authirization => {
            if ('Error' in authirization) {
                resolve(authirization.Error);
            } 
                
            resolve(authirization);
            
        }).catch(err => console.log(err.message));
        
    });
}

const signUp = (url, userReqData) => {
    reqMethod = 'reqistration';
    return new Promise((resolve, reject) => {

        if (url === undefined) {
            reject(new Error(reqMethod + 'url is required!!'));
        }

        const {name,email,gender,passoword} = userReqData;
        const today = new Date().toISOString().split('T')[0];
        userReqData = {_id: Date.now(),name,email,gender,passoword,regDate: today,}

        api.createUser(userReqData).then(response_data => {
            if ('Error' in response_data) { resolve(response_data)}

            response_data = {url,user: response_data}
            // console.log(response_data);
            resolve(response_data);
        }).catch(err => console.log(err.message));
    });
}


module.exports = {
    signIn, 
    signUp
}