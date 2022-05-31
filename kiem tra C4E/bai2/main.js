let m = prompt('Nhap so ')
let n = parseInt(m)

function numberOneTriangle(a) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (j <= i) {
                document.write('*')
            }
        }
        document.write("<br/>")
    }
}

numberOneTriangle(n)