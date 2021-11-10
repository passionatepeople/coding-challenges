module.exports=(_array) => {
    const array = [..._array];
    let min = array[0];
    let indexOfMin = 0;
    for (let indexOfCurrent = 1; indexOfCurrent < array.length; indexOfCurrent++) {
        let valueOfCurrent = array[indexOfCurrent];
        if (valueOfCurrent >= min)
            continue;
        indexOfMin = indexOfCurrent;
        min = valueOfCurrent;
    }
    array.splice(indexOfMin,1);
    return array;
}