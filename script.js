let produtos = document.querySelector('#Produtos')
let botao = document.querySelector('#comprar')

botao.addEventListener('click', comprar)
function comprar() {
    let compra = "Produtos comprado\n"
    if (produtos.value == "Suvaco de URSO") {
        compra += "Produtos:" + produtos.value + ", valor: R$69,00"
    } else if (protudos.value == "Perna de TOURO") {
        compra += "Produtos:" + produtos.value + ", valor: R$24,00"
    } else if (protudos.value == "ASFALTO enlatado") {
        compra += "Produtos:" + produtos.value + ", valor: R$100,00"
    } else if (protudos.value == "GASOLINA gaseificada") {
        compra += "Produtos:" + produtos.value + ", valor: R$66,00"
    }
    alert(compra)
}

