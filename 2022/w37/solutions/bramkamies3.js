function quickSort(arr, start, end) {
    if (start < end) {
        const pivot = arr[end];
        let index = start;
        for (let i = start; i < end; i++) {
            if (arr[i] > pivot) {
                [arr[i], arr[index]] = [arr[index], arr[i]];
                index++;
            }
        }
        [arr[index], arr[end]] = [arr[end], arr[index]]
        quickSort(arr, start, index - 1);
        quickSort(arr, index + 1, end);
    }
}

module.exports = (input) => {
    const {length} = input;
    const sorted = input.slice();
    quickSort(sorted, 0, length-1);
    const result = [];
    input.forEach((value, index) => {
        let counter = 1;
        for (let sortCounter = 0; sortCounter < length; sortCounter++) {
            if (sorted[sortCounter] > value) {
                counter++;
            } else {
                break;
            }
        }
        result.push(counter);
    });
    return result;
}