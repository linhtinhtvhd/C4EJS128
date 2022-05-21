const btn = document.querySelector('.btn')
const ip = document.querySelector('.ip')
let n = 1;
let m = 1

function acTive() {
    n += 1
    if (n % 2 == 0) {
        ip.classList.add('active')
    } else {
        ip.classList.remove('active')
    }
}

function acTbtn() {
    m += 1
    if (m % 2 == 0) {
        btn.classList.add('activebtn')
    } else {
        btn.classList.remove('activebtn')
    }

}
btn.addEventListener('click', acTive)
btn.addEventListener('click', acTbtn)