const urlParams = (new URL(document.location)).searchParams
const myParam = urlParams.get('id');
console.log(myParam)

const doanHan = [{
        id: 1,
        tenmonan: "Canh rong biển",
        buoclam: [{
                tenbuoc: "Bước 1:Sơ chế nguyên liệu",
                buoccuthe: "Ngâm rong biển vào nước lạnh.</Br>Dùng 1/3 gói rong biển đủ cho 4,5 người ăn.</Br>Ngâm tầm 20 phút là được, sau đó rửa với nước.Tỏi đập nhỏ, đậu cắt ô vuống to bé tùy sở thích chị em. </Br>Thịt rửa sạch với chanh và muối, rồi thái hạt lựu kích thuocs 1.5cm x 1.5cm x 1cm",
                img: "../assets/rongbien1.jpg"
            },
            {
                tenbuoc: "Bước 2: Nấu",
                buoccuthe: "Cho dầu mè vào chảo rồi phi thơm tỏ.</Br>Dùng 1/3 gói rong biển đủ cho 4,5 người ăn.</Br>Cho thịt vào đảo rồi cho rong biển vào đảo</Br>.Xong cho nước vào đun tầm 15 – 20 phút, nêm nếm gia vị vừa miệng rồi cho đậu vào.</Br>Đun thêm một lúc nữa rồi ai thích ăn nhiều tỏi thì cho thêm tỏi sống băm nhỏ rồi là xong.",
                img: "../assets/rongbien2.webp"

            }
        ]

    },
    {
        id: 2,
        tenmonan: "Sữa chuối",
        buoclam: [{
                tenbuoc: "Bước 1",
                buoccuthe: "Lột vỏ 1 trái chuối rồi dùng muỗng nghiền cho thật nhuyễn.",
                img: "../assets/suachuoi1.jpg"
            },
            {
                tenbuoc: "Bước 2",
                buoccuthe: "Cho 20g đường vào chuối đã nghiền rồi trộn đều.",
                img: "../assets/suachuoi3.jpg"
            },
            {
                tenbuoc: "Bước 3",
                buoccuthe: "Lột nhỏ trái chuối còn lại và cắt nhỏ thành những miếng vừa ăn",
                img: "../assets/suachuoi2.jpg"
            },
            {
                tenbuoc: "Bước 4",
                buoccuthe: "Cho tất cả chuối và 200ml sữa tươi và lắc đều. Thức uống đã sẵn sàng để thưởng thức.",
                img: "../assets/OIP.jpg"
            }
        ]

    },
    {
        id: 3,
        tenmonan: "Trà xanh Nhật Bản",
        buoclam: [{
                tenbuoc: "Bước 1.",
                buoccuthe: "Đầu tiên, đặt ấm đun nước vào và lấy cho mình một cốc hoặc nếu bạn muốn xác thực hơn, hãy thử sử dụng chawan, một tách trà truyền thống của Nhật Bản.",
                img: "../assets/tra1.jpg"
            },
            {
                tenbuoc: "Bước 2: Nấu",
                buoccuthe: "Một khi ấm đun sôi, chờ một hoặc hai phút để nhiệt độ của nước là khoảng 80 ° C. Nếu nước quá nóng, trà của bạn có thể trở nên quá đắng.",
                img: "../assets/tra2.jpg"
            },
            {
                tenbuoc: "Bước 3",
                buoccuthe: "Thêm một muỗng cà phê nhỏ bột matcha vào cốc của bạn và sau đó đổ đầy khoảng 60ml nước nóng.",
                img: "../assets/tra4.jpg"
            },
            {
                tenbuoc: "Bước 4",
                buoccuthe: "Sử dụng một chổi pha trà, hoặc dụng cụ khuấy trà, trộn bột trong với nước để không có cục u còn lại trong trà. Trộn trong một phút cho đến khi trà có nhiều bong bóng nhỏ trên bề mặt và xuất hiện hơi sủi bọt. Trà của bạn bây giờ đã sẵn sàng vì vậy hãy ngồi xuống, thư giãn và thưởng thức trà xanh của bạn, có lẽ với một chút ngọt nhật bản ở bên cạnh.",
                img: "../assets/tr3.jpg"
            }
        ]

    },
    {
        id: 4,
        tenmonan: "Mì ramen",
        buoclam: [{
                tenbuoc: "Chuẩn bị sườn và nước dùng",
                buoccuthe: "Xương sườn ngắn màu nâu ở tất cả các bên.Xào hành tây, thêm tỏi, gừng và ớt đỏ, và xào cho đến khi thơm.</Br>Khử dầu nồi với rượu mirin. Thêm nước tương và nước dùng gà.</Br>Trả lại sườn vào nồi. </Br>Nấu trong 1,5 đến 2 giờ hoặc cho đến khi xương sườn rất mềm.</Br>Cắt nhỏ xương sườn thành từng khúc.</Br> Nếm thử nước dùng và thêm 2 cốc nước nếu cần.",
                img: "../assets/suon1.jpg"
            },
            {
                tenbuoc: "Bước 2:Nấu mì",
                buoccuthe: "Nấu mì ramen trong nước sôi theo hướng dẫn đóng gói. Để ráo nước và chạy dưới nước lạnh để ngừng nấu ăn.",
                img: "../assets/soimi2.jpg"
            },
            {
                tenbuoc: "Bước 3:Chuẩn bị bát mì",
                buoccuthe: "Chia mì và sườn ngắn giữa 4 bát.</Br>Ladle trên nước dùng nóng.Đầu mỗi bát với toppings mong muốn và rưới dầu mè.",
                img: "../assets/mr3.jpg"
            },

        ]

    },
    {
        id: 5,
        tenmonan: "Cơm tấm",
        buoclam: [{
                tenbuoc: "Cách nấu cơm bằng nồi cơm điện.",
                buoccuthe: "Đo 2 chén gạo và rửa dưới vòi nước lạnh.</Br>Chuyển gạo sạch vào nồi cơm điện của bạn.</Br>Thêm 2 cốc nước và một nhúm muối.Đặt nồi cơm điện của bạn để bắt đầu nấu ăn",
                img: "../assets/vogao.webp"
            },
            {
                tenbuoc: "Làm sườn heo nướng",
                buoccuthe: "Chuẩn bị nước ướp cho sườn lợn.</Br>Trong một món ăn lớn trộn hành tím xắt nhỏ, hành lá, dầu annatto, nước tương, dầu hào với bột gà, đường và bột ngũ vị gia vị.</Br>Đậy nắp sườn lợn với nước ướp và để yên trong 10 - 15 phút để hấp thụ hương vị.Làm nóng vỉ nướng của bạn ở mức trung bình và nấu sườn lợn cho đến khi chúng chuyển sang màu nâu vàng.</Br>Cắt cà chua, dưa chuột và củ cải theo phong cách julienne",
                img: "../assets/suonheo.jpg"
            },
            {
                tenbuoc: "Pha nước chấm",
                buoccuthe: "Trong một món ăn riêng biệt, trộn 4 muỗng canh nước mắm, với 6 muỗng canh nước và 3 muỗng canh đường.</Br>Khuấy cho đến khi mọi thứ tan biến hoàn toàn.Hãy thoải mái nếm thử và điều chỉnh bất kỳ thành phần nào theo ý thích của bạn",
                img: "../assets/nuoccham.png"
            },
            {
                tenbuoc: "Chuẩn bị đĩa cơm",
                buoccuthe: "Để chuẩn bị đĩa của bạn theo phong cách Việt Nam, hãy bắt đầu bằng cách phục vụ cơm.</Br> Đổ đầy một chén hoặc bát cơm nhỏ với gạo đã nấu chín.Ấn nhẹ vào bát.</Br>Lật ngược nó lên một tấm và nó sẽ tạo thành một mái vòm hoàn hảo.Tiếp theo, đặt thịt lợn nướng bên cạnh cơm.Đổ nước chấm vào bát nhỏ.</Br>Trang trí đĩa với cà chua thái lát, dưa chuột hoặc củ cải.",
                img: "../assets/com.jpg"
            }
        ]

    },
    {
        id: 6,
        tenmonan: "Trà chanh đá",
        buoclam: [{
                tenbuoc: "Bước 1",
                buoccuthe: "Để pha trà đá, thêm túi trà vào bình và trên cùng với nước lạnh. Đậy nắp và làm lạnh qua đêm (hoặc trong ít nhất 8 giờ). Ngày hôm sau, lọc và kết hợp với nước chanh. Làm lạnh cho đến khi sẵn sàng để phục vụ.",
                img: "../assets/tra-chanh-50428249.jpg"
            },
            {
                tenbuoc: "Bước 2",
                buoccuthe: "Khi đã sẵn sàng để phục vụ, trên cùng với bia gừng và trang trí với lát chanh và bạc hà.",
                img: "../assets/trach.jpg"
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