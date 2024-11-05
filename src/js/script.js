

document.querySelectorAll(".contato").forEach((item) => {
    item.addEventListener("click", (event) => {
        const numero = 5599982219604;
        const msg = 'Olá, gostaria de saber mais informações.';
        const url = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(msg)}`;
        window.open(url);
    })
})


listJson.map(item => {
    let { title, description } = item;
    const newCard = document.querySelector('.infoCard').cloneNode(true);

    newCard.style.display = 'inline';
    newCard.querySelector('h2').innerHTML = title;
    newCard.querySelector('.cardHiddem').innerHTML = description;

    document.querySelector('.information').append(newCard);

})
document.querySelectorAll('.infoCard').forEach((itens) => {
    itens.addEventListener('click', (event) => {
        let card = itens.children[1]
        card.classList.toggle('showAbout');
    })
})