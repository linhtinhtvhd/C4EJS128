// Bai 1:
let a = "";
for (let i = 0; i < 10; i++) {
    for (let j = 0; j <= i; j++) {
        a += "* "
    }
    a += "\n"
}
console.log(a)

// bai 2
let b = ""
for (let i = 1; i <= 15; i++) {
    for (let k = 15; k > i; k--) {
        b += ' '
    }
    for (let j = 1; j <= i * 2 - 1; j += 2) {
        b += "* "
    }


    b += '\n'
}
console.log(b)

// bai 3

let c = ""
for (let i = 1; i <= 12; i++) {
    for (let j = 1; j <= 6; j++) {
        if (j + i <= 7 || i - j >= 7) {
            c += "    "
        } else {
            c += "*   "
        }

    }
    c += '\n'
}
console.log(c)

// bai 4
let d = ""
for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        if (((i > j || j + i > 10) && i <= 5) || (i > 5 && ((i + j < 10) || j > i))) {
            d += " "
        } else {
            d += "*"
        }
    }
    d += '\n'
}
console.log(d)

// bai 5
let e = ""
for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
        if ((i < j) || (i <= 9) && (i - j >= 1) && j >= 1) {
            e += " "
        } else {
            e += "*"
        }
    }
    e += '\n'
}
console.log(e)

// bai 6: kiem tra so nguyen to
let x = prompt('nhap so can kiem tra')
let flag = true
if (x < 2) {
    flag == false
}
for (let i = 2; i < x; i++) {
    if (x % i == 0) {
        flag = false;
        break;
    }
}
console.log(flag)
if (flag == false) {
    console.log("day khong la so nguyen to")
} else {
    console.log("day la so nguyen to")
}