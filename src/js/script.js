

document.querySelectorAll(".contato").forEach((item) => {
    item.addEventListener("click", (event) => {
        const numero = 5599982219604;
        const msg = 'Olá, gostaria de saber mais informações.';
        const url = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(msg)}`;
        window.open(url);
    })
})