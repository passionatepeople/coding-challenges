const thatsEnough = (list, limit) => {
    let newArr = []
    for (let i = 0; i < list.length; i++) {
        let localLimit = 0
        for (let j = 0; j < i; j++) {
            if (list[j] === list[i]) localLimit++;
        }
        if (localLimit < limit) {
            newArr.push(list[i])
        }
    }

    return newArr;
};

module.exports = thatsEnough;
