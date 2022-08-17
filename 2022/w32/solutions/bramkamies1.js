const counts = new Array(10);
const order = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const allocs = Array.from({length: 30}, (_, i) => new Array(i).fill(0));

module.exports = (n) => {
    counts.fill(0);

    const N = n.length;
    for (let i = 0; i < N; i++) {
        const num = n[i];
        counts[num]++;
    }

    order.sort((a, b) => {
        const ac = counts[a];
        const bc = counts[b];
        return (bc - ac) || (a - b);
    });

    const answer = allocs[N];

    let index = 0;
    for (let i = 0; i < 10; i++) {
        const next = order[i];
        const count = counts[next];
        for (let j = 0; j < count; j++) {
            answer[index++] = next;
            if (index >= N) return answer;
        }
    }
    return counts;
};