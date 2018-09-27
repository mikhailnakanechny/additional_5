module.exports = function check(str, bracketsConfig) {
    // your solution
    let state=false;
    let arr = str.split("");
    let arrCheck = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (arr[i] === bracketsConfig[j][1] && arrCheck[arrCheck.length - 1] === bracketsConfig[j][0]) {
                arrCheck.pop();
                break;
            } else if (arr[i] === bracketsConfig[j][0]) {
                arrCheck.push(arr[i]);
                break;
            } else if (arr[i] === bracketsConfig[j][1]
                && (arrCheck.length === 0 || arrCheck[arrCheck.length - 1] !== bracketsConfig[j][0])) {
                return false;
            }
        }
    }
    state = arrCheck.length === 0 ? true : false;
    return state;
    //  console.log(state);
};

