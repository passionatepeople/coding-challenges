const counts = new Array(10);
const order = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const indexOf = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const allocs = Array.from({length: 30}, (_, i) => new Array(i).fill(0));

const fill = Array.prototype.fill;
module.exports = (n) => {
    fill.call(counts, 0);

    const N = n.length;
    for (let i = 0; i < N;) {
        const num = n[i];
        counts[num]++;

        while (++i < N && n[i] === num) {
            counts[num]++;
        }

        const from = indexOf[num];
        const total = counts[num];
        for (let j = 0; j < from; j++) {
            const jnum = order[j];
            const jcount = counts[jnum];
            if (total > jcount || (total === jcount && num < jnum)) {
                let carry = num;
                do {
                    let old = order[j];
                    order[j] = carry;
                    indexOf[carry] = j;
                    carry = old;
                } while (j++ < from);
                break;
            }
            if (jnum === num) {
                break;
            }
        }
    }

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