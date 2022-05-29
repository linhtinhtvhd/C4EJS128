const urlParams = (new URL(document.location)).searchParams
const myParam = urlParams.get('id');
console.log(myParam)

const doanHan = [{
        id: 1,
        tenmonan: "Trà xanh Nhật Bản",
        buoclam: [{
                tenbuoc: "Bước 1.",
                buoccuthe: "Đầu tiên, đặt ấm đun nước vào và lấy cho mình một cốc hoặc nếu bạn muốn xác thực hơn, hãy thử sử dụng chawan, một tách trà truyền thống của Nhật Bản.",
                img: "/Acesst/tra1.jpg"
            },
            {
                tenbuoc: "Bước 2: Nấu",
                buoccuthe: "Một khi ấm đun sôi, chờ một hoặc hai phút để nhiệt độ của nước là khoảng 80 ° C. Nếu nước quá nóng, trà của bạn có thể trở nên quá đắng.",
                img: "/Acesst/tra2.jpg"
            },
            {
                tenbuoc: "Bước 3",
                buoccuthe: "Thêm một muỗng cà phê nhỏ bột matcha vào cốc của bạn và sau đó đổ đầy khoảng 60ml nước nóng.",
                img: "/Acesst/tra4.jpg"
            },
            {
                tenbuoc: "Bước 4",
                buoccuthe: "Sử dụng một chổi pha trà, hoặc dụng cụ khuấy trà, trộn bột trong với nước để không có cục u còn lại trong trà. Trộn trong một phút cho đến khi trà có nhiều bong bóng nhỏ trên bề mặt và xuất hiện hơi sủi bọt. Trà của bạn bây giờ đã sẵn sàng vì vậy hãy ngồi xuống, thư giãn và thưởng thức trà xanh của bạn, có lẽ với một chút ngọt nhật bản ở bên cạnh.",
                img: "/Acesst/tr3.jpg"
            }
        ]

    },
    {
        id: 2,
        tenmonan: "Mì ramen",
        buoclam: [{
                tenbuoc: "Chuẩn bị sườn và nước dùng",
                buoccuthe: "Xương sườn ngắn màu nâu ở tất cả các bên.Xào hành tây, thêm tỏi, gừng và ớt đỏ, và xào cho đến khi thơm.</Br>Khử dầu nồi với rượu mirin. Thêm nước tương và nước dùng gà.</Br>Trả lại sườn vào nồi. </Br>Nấu trong 1,5 đến 2 giờ hoặc cho đến khi xương sườn rất mềm.</Br>Cắt nhỏ xương sườn thành từng khúc.</Br> Nếm thử nước dùng và thêm 2 cốc nước nếu cần.",
                img: "/Acesst/suon1.jpg"
            },
            {
                tenbuoc: "Bước 2:Nấu mì",
                buoccuthe: "Nấu mì ramen trong nước sôi theo hướng dẫn đóng gói. Để ráo nước và chạy dưới nước lạnh để ngừng nấu ăn.",
                img: "/Acesst/soimi2.jpg"
            },
            {
                tenbuoc: "Bước 3:Chuẩn bị bát mì",
                buoccuthe: "Chia mì và sườn ngắn giữa 4 bát.</Br>Ladle trên nước dùng nóng.Đầu mỗi bát với toppings mong muốn và rưới dầu mè.",
                img: "/Acesst/mr3.jpg"
            },

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