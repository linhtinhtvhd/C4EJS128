// Bai 1: Tim so xuat hien nhieu nhat va nho nhat trong mang

let numberArr = [1, 5, 2, 4, 5, 2, 4]
let tansuat = 0;
let max = 0
let socantim = 0
for (let i = 0; i < numberArr.length; i++) {
    for (let j = 0; j < numberArr.length; j++) {
        if (numberArr[i] == numberArr[j]) {
            tansuat += 1
        }

    }
    if (max < tansuat) {
        max = tansuat
        socantim = numberArr[i]
    }
    if (max == tansuat && numberArr[i] < socantim) {
        socantim = numberArr[i]
    }
    tansuat = 0
}
console.log(socantim)

//Bai 2: