// Bai 1: tim hieu 2 duong cheo hinh vuong
function diagonalDifference(arr) {
    let left = 0
    let right = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i == j) {
                left += arr[i][j]
            }
            if (i + j == arr.length - 1) {
                right += arr[i][j]
            }
        }
    }
    return Math.abs(left - right)
}
// Bai 2: