let titulo = document.getElementById("titulo")
titulo.innerText = "Título da Pagina"

let elementoA = document.querySelector('a')
elementoA.innerText = "Visite o ProZeducação"

let elementoUl = document.querySelector('ul')
elementoUl.style.listStyleType = 'none'
elementoUl.innerHTML = `
<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>
`

let listaOrdenada = document.getElementById('lista-ordenada')
listaOrdenada.style.listStyleType = 'none'
listaOrdenada.innerHTML = `
<li><a href="https://site1.com">Link 1</a></li>
<li><a href="https://site1.com">Link 2</a></li>
<li><a href="https://site1.com">Link 3</a></li>
`


