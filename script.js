const button = document.getElementById('generate')

button.addEventListener('click', function() {

    const min = parseInt(document.getElementById("min").value)

    const max = parseInt(document.getElementById("max").value)

    let result = Math.floor(Math.random() * (max - min + 1) + min)

    document.querySelector('#result > span > h1').textContent = result
})

function abrirLink () {

    window.location = "assets/Advinhe o Número/index.html";

}