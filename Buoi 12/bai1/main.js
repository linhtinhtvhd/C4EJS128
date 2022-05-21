const img = document.querySelectorAll(".item__img")
for (let i of img) {
    i.addEventListener("click", (e) => {

        for (let a of img) {
            a.classList.remove("active")
        }
        i.classList.add("active")
    })

}