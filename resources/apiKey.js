const db = require('../server');

const createUser = (userReqData) => new Promise((resolve, reject) => {
    if (userReqData === undefined) {
        console.log(`object user is: ${userReqData}`);
        reject(new Error(`object user is: ${userReqData}`));
    } else {
        const reg_index = db.users.push(userReqData);
        // console.log(reg_index);
        (reg_index <= 0) ? resolve({Error: 'Fail to register user'}) : resolve(userReqData);
    }
});

const findUserByEmail_Password = (auth_data) => {
    return new Promise((resolve, reject) => {
        if (!auth_data) {
            reject(new Error('Auth is not defined'));
        } else {
            const account = db.users.find(
                (user) => user.email == auth_data.email && user.passoword == auth_data.passoword
            );

            if (account === undefined) {
                resolve({Error: 'Invalid email or Password'});
            } 
            resolve(account);
        }
    });
};

module.exports = {
    findUserByEmail_Password: findUserByEmail_Password,
    createUser
}
