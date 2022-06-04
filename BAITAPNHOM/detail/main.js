const urlParams = (new URL(document.location)).searchParams
const myParam = urlParams.get('coutry');

const couTry = [{
        coutry: 1,
        quocGia: "Món ăn Việt Nam",
        monChinh: "Cơm tấm",
        imgmonchinh: "../assets/comtam.jpg",
        contentmc: "Đây là món ăn đặc trưng của người Việt Nam. Cách làm món ăn đơn giản! Cách làm ...",
        urlmc: "../list/index.html?id=5",
        monPhu: "Trà chanh đá",
        imgmonPhu: "../assets/trachanh.jpg",
        contentmp: "Đây là nước uống được người việt nam ưa chuộng. Cách làm đơn giản! Cách làm ...",
        urlmp: "../list/index.html?id=6"

    },
    {
        coutry: 2,
        quocGia: "Món ăn Hàn Quốc",
        monChinh: "Canh rong biển",
        imgmonchinh: "../assets/rongbien.jpg",
        contentmc: "Đây là món ăn đặc trưng của người Hàn Quốc. Cách làm món ăn đơn giản! Cách làm ...",
        urlmc: "../list/index.html?id=1",
        monPhu: "Sữa chuối",
        imgmonPhu: "../assets/suachuoi.webp",
        contentmp: "Đây là nước uống được người Hàn Quốc ưa chuộng. Cách làm đơn giản! Cách làm ...",
        urlmp: "../list/index.html?id=2"

    },
    {
        coutry: 3,
        quocGia: "Món ăn Nhật Bản",
        monChinh: "Mì Ramen",
        imgmonchinh: "../assets/miramen.jpg",
        contentmc: "Đây là món ăn đặc trưng của người Nhật Bản. Cách làm món ăn đơn giản! Cách làm ...",
        urlmc: "../list/index.html?id=4",
        monPhu: "Trà xanh Nhật Bản",
        imgmonPhu: "../assets/matcha-green-tea-1296x728-feature.webp",
        contentmp: "Đây là nước uống được người Nhật Bản ưa chuộng. Cách làm đơn giản! Cách làm ...",
        urlmp: "../list/index.html?id=3"

    },
]

let flag = -1;
for (let i = 0; i < couTry.length; i++) {
    if (couTry[i].coutry == myParam) {
        flag = i;
        break;
    }
}

const monAnquocgia = document.querySelector('.Vietnam')
const cacMon = document.querySelector('.menu_c4e')


monAnquocgia.innerText = `${couTry[flag].quocGia}`
cacMon.innerHTML = ` <div class="menu active">

<div class="menu-item">
    <div class="menu-item-img">
        <img src="${couTry[flag].imgmonchinh}"alt="">
    </div>
    <div class="menu-item-content">
        <div class="tenmonan">${couTry[flag].monChinh}</div>
        <div class="gioithieumon">${couTry[flag].contentmc}</div>
        <a href="${couTry[flag].urlmc}" class="btn-menu">Chi tiết</a>
    </div>
</div>
<div class="menu-item">
    <div class="menu-item-img">
        <img src="${couTry[flag].imgmonPhu}" alt="">
    </div>
    <div class="menu-item-content">
        <div class="tenmonan">${couTry[flag].monPhu}</div>
        <div class="gioithieumon">${couTry[flag].contentmc}</div>
        <a href="${couTry[flag].urlmp}" class="btn-menu">Chi tiết</a>
    </div>
</div>

</div>
<div class="menu ">

<div class="menu-item">
    <div class="menu-item-img">
        <img src="${couTry[flag].imgmonchinh}"alt="">
    </div>
    <div class="menu-item-content">
        <div class="tenmonan">${couTry[flag].monChinh}</div>
        <div class="gioithieumon">${couTry[flag].contentmc}</div>
        <a href="${couTry[flag].urlmc}" class="btn-menu">Chi tiết</a>
    </div>
</div>

</div>
<div class="menu ">

<div class="menu-item">
    <div class="menu-item-img">
        <img src="${couTry[flag].imgmonPhu}" alt="">
    </div>
    <div class="menu-item-content">
        <div class="tenmonan">${couTry[flag].monPhu}</div>
        <div class="gioithieumon"><${couTry[flag].contentmp}</div>
        <a href="${couTry[flag].urlmp}" class="btn-menu">Chi tiết</a>
    </div>
</div>

</div>`