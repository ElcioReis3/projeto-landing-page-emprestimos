

document.querySelectorAll(".contato").forEach((item) => {
    item.addEventListener("click", (event) => {
        window.open("https://api.whatsapp.com/send/?phone=5599982219604&text&type=phone_number&app_absent=0")
    })
})