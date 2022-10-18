
document.addEventListener('DOMContentLoaded', retirar)
document.addEventListener('DOMContentLoaded', retirarPrimeiro)

const lista = []
const listaPop = ['Maçã', ' Laranja', ' Manga', ' Banana', ' Abacaxi']
const listaShift = ['Maçã', ' Laranja', ' Manga', ' Banana', ' Abacaxi']
const listaUnshift = []

function inserir() {
  const itens = document.getElementById('itens').value
  lista.push(itens)
  teste.innerHTML = lista
}

function retirar() {
  const lista2 = (document.getElementById('itensPop').innerHTML = listaPop)
  lista2.pop()
}
function retirarPrimeiro() {
  const lista3 = (document.getElementById('itensShift').innerHTML = listaShift)
  lista3.shift()
}
function inserirUnshift() {
  const itensUn = document.getElementById('itensUn').value
  listaUnshift.unshift(itensUn)
  itensUnshift.innerHTML = listaUnshift
}

// ==================================================================================


const menuBar = document.querySelector('.btn-mobile')

function toggleMenu() {
  const nav = document.querySelector('.show-menu')
  nav.classList.toggle('active')
  menuBar.style.display = 'none'
  
}
function fechaMenu() {
  const nav = document.querySelector('.show-menu')
  nav.classList.remove('active')
  menuBar.style.display = 'flex'

}