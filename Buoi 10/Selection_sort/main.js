let numberArr = [1, 5, 8, 45, 3, 4, 9, 2]
for (let i = 0; i < numberArr.length; i++) {
    min = i
    for (let j = i + 1; j < numberArr.length; j++) {
        if (numberArr[j] < numberArr[min])
            min = j
    }
    if (i !== min) {
        let temp = numberArr[i]
        numberArr[i] = numberArr[min]
        numberArr[min] = temp
    }
}
console.log(numberArr)