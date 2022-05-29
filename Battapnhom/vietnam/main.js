const urlParams = (new URL(document.location)).searchParams
const myParam = urlParams.get('id');
console.log(myParam)

const doanHan = [{
        id: 1,
        tenmonan: "Cơm tấm",
        buoclam: [{
                tenbuoc: "Cách nấu cơm bằng nồi cơm điện.",
                buoccuthe: "Đo 2 chén gạo và rửa dưới vòi nước lạnh.</Br>Chuyển gạo sạch vào nồi cơm điện của bạn.</Br>Thêm 2 cốc nước và một nhúm muối.Đặt nồi cơm điện của bạn để bắt đầu nấu ăn",
                img: "/Acesst/vogao.webp"
            },
            {
                tenbuoc: "Làm sườn heo nướng",
                buoccuthe: "Chuẩn bị nước ướp cho sườn lợn.</Br>Trong một món ăn lớn trộn hành tím xắt nhỏ, hành lá, dầu annatto, nước tương, dầu hào với bột gà, đường và bột ngũ vị gia vị.</Br>Đậy nắp sườn lợn với nước ướp và để yên trong 10 - 15 phút để hấp thụ hương vị.Làm nóng vỉ nướng của bạn ở mức trung bình và nấu sườn lợn cho đến khi chúng chuyển sang màu nâu vàng.</Br>Cắt cà chua, dưa chuột và củ cải theo phong cách julienne",
                img: "/Acesst/suonheo.jpg"
            },
            {
                tenbuoc: "Pha nước chấm",
                buoccuthe: "Trong một món ăn riêng biệt, trộn 4 muỗng canh nước mắm, với 6 muỗng canh nước và 3 muỗng canh đường.</Br>Khuấy cho đến khi mọi thứ tan biến hoàn toàn.Hãy thoải mái nếm thử và điều chỉnh bất kỳ thành phần nào theo ý thích của bạn",
                img: "/Acesst/nuoccham.png"
            },
            {
                tenbuoc: "Chuẩn bị đĩa cơm",
                buoccuthe: "Để chuẩn bị đĩa của bạn theo phong cách Việt Nam, hãy bắt đầu bằng cách phục vụ cơm.</Br> Đổ đầy một chén hoặc bát cơm nhỏ với gạo đã nấu chín.Ấn nhẹ vào bát.</Br>Lật ngược nó lên một tấm và nó sẽ tạo thành một mái vòm hoàn hảo.Tiếp theo, đặt thịt lợn nướng bên cạnh cơm.Đổ nước chấm vào bát nhỏ.</Br>Trang trí đĩa với cà chua thái lát, dưa chuột hoặc củ cải.",
                img: "/Acesst/com.jpg"
            }
        ]

    },
    {
        id: 2,
        tenmonan: "Trà chanh đá",
        buoclam: [{
                tenbuoc: "Bước 1",
                buoccuthe: "Để pha trà đá, thêm túi trà vào bình và trên cùng với nước lạnh. Đậy nắp và làm lạnh qua đêm (hoặc trong ít nhất 8 giờ). Ngày hôm sau, lọc và kết hợp với nước chanh. Làm lạnh cho đến khi sẵn sàng để phục vụ.",
                img: "/Acesst/tra-chanh-50428249.jpg"
            },
            {
                tenbuoc: "Bước 2",
                buoccuthe: "Khi đã sẵn sàng để phục vụ, trên cùng với bia gừng và trang trí với lát chanh và bạc hà.",
                img: "/Acesst/trach.jpg"
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