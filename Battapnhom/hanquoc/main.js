const urlParams = (new URL(document.location)).searchParams
const myParam = urlParams.get('id');
console.log(myParam)

const doanHan = [{
        id: 1,
        tenmonan: "Canh rong biển",
        buoclam: [{
                tenbuoc: "Bước 1:Sơ chế nguyên liệu",
                buoccuthe: "Ngâm rong biển vào nước lạnh.</Br>Dùng 1/3 gói rong biển đủ cho 4,5 người ăn.</Br>Ngâm tầm 20 phút là được, sau đó rửa với nước.Tỏi đập nhỏ, đậu cắt ô vuống to bé tùy sở thích chị em. </Br>Thịt rửa sạch với chanh và muối, rồi thái hạt lựu kích thuocs 1.5cm x 1.5cm x 1cm",
                img: "/Acesst/rongbien1.jpg"
            },
            {
                tenbuoc: "Bước 2: Nấu",
                buoccuthe: "Cho dầu mè vào chảo rồi phi thơm tỏ.</Br>Dùng 1/3 gói rong biển đủ cho 4,5 người ăn.</Br>Cho thịt vào đảo rồi cho rong biển vào đảo</Br>.Xong cho nước vào đun tầm 15 – 20 phút, nêm nếm gia vị vừa miệng rồi cho đậu vào.</Br>Đun thêm một lúc nữa rồi ai thích ăn nhiều tỏi thì cho thêm tỏi sống băm nhỏ rồi là xong.",
                img: "/Acesst/rongbien2.webp"

            }
        ]

    },
    {
        id: 2,
        tenmonan: "Sữa chuối",
        buoclam: [{
                tenbuoc: "Bước 1",
                buoccuthe: "Lột vỏ 1 trái chuối rồi dùng muỗng nghiền cho thật nhuyễn.",
                img: "/Acesst/suachuoi1.jpg"
            },
            {
                tenbuoc: "Bước 2",
                buoccuthe: "Cho 20g đường vào chuối đã nghiền rồi trộn đều.",
                img: "/Acesst/suachuoi3.jpg"
            },
            {
                tenbuoc: "Bước 3",
                buoccuthe: "Lột nhỏ trái chuối còn lại và cắt nhỏ thành những miếng vừa ăn",
                img: "/Acesst/suachuoi2.jpg"
            },
            {
                tenbuoc: "Bước 4",
                buoccuthe: "Cho tất cả chuối và 200ml sữa tươi và lắc đều. Thức uống đã sẵn sàng để thưởng thức.",
                img: "/Acesst/OIP.jpg"
            }
        ]

    }
]
let flag = -1;
for (let i = 0; i < doanHan.length; i++) {
    if (doanHan[i].id == myParam) {
        flag = i;
        break;
    }
}
let tenMon = document.querySelector(".tenmonan")
let buocLam = document.querySelector(".swiper_container")


tenMon.innerHTML = `<span>${doanHan[flag].tenmonan}</span>`
let contentHtml = '';
doanHan[flag].buoclam.forEach((pok, i) => {
    console.log(pok)
    if (i % 2 == 0) {
        contentHtml += `<div class="swiper_container-item">
        <div class="swiper_container-content">
            <span class="container-content-big">${pok.tenbuoc}</span>
            <p>${pok.buoccuthe}</p>

        </div>
        <div class="swiper_container-img">
            <img src="${pok.img}" alt="">
        </div>

    </div>`
    } else {
        contentHtml += `<div class="swiper_container-item">
        <div class="swiper_container-img2">
        <img src="${pok.img}" alt="">
    </div>
        <div class="swiper_container-content2">
            <span class="container-content-big">${pok.tenbuoc}</span>
            <p>${pok.buoccuthe}</p>

        </div>
       

    </div>`
    }
})
buocLam.innerHTML = contentHtml