// ----#4
async function timeout(data, ms) {
    return new Promise(resolve => {
        setTimeout(() => resolve(data), ms)
    })
};

timeout({name: "user"}, 1000).then((data) => console.log("Hello!", data));
timeout({name: "Vic"}, 1000).then((data) => console.log("Hello,", data.name + "!"))

// -------#5
async function getResult() {
    let userInfo = await timeout(getUserInfo());
    let userAvatar = await timeout(getUserAvatar(userInfo), 1000);
    let userAdditInfo = await timeout(getUserAdditionalInfo(userAvatar),1000);
    console.log(userAdditInfo);
};
getResult();

async function getUserInfo() {
    return { name: 'Vic', age: 21, id: 1 };
};

async function getUserAvatar(userInfo) {
    userInfo.avatar = 'https://previews.123rf.com/images/stockgiu/stockgiu1708/stockgiu170802061/83728179-avatar-sketch-of-a-funny-man-s-haed-with-sunglasses-and-hairstyle-design.jpg'
    return userInfo;
};

async function getUserAdditionalInfo(userInfo) {
    userInfo.interests = ['sport', 'books'];
    return userInfo;
};


// -------#6
async function getUser() {
    return {name: 'Vic', age: 21, id: 1};
}

async function getInfo() {
    try {
        let user = await getUser();
        throw new Error('error');
    } catch (err) {
        console.log(err)
    }
}

getInfo();