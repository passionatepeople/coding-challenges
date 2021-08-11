const thatsEnough = (items, limit) => {
    const list = new Map([]);

    return items.filter(item => {
        const occurrence = list.has(item)
            ? list.get(item) + 1
            : 1;
        list.set(item, occurrence);
        return occurrence <= limit;
    });
};

module.exports = thatsEnough;
