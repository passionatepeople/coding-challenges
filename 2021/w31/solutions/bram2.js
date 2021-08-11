const thatsEnough = (items, limit) => {
    const list = new Map([]);

    const result = [];

    for (let item of items) {
        const needle = list.get(item) || 0;
        
        list.set(item, needle + 1);
        
        if (needle < limit) {
            result.push(item);
        }
    }

    return result;
};

module.exports = thatsEnough;
