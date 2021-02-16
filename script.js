// Definimos variables
let $input = document.querySelector('.input')
let $boton_agregar = document.querySelector('.boton_agregar')
let $container = document.querySelector('.container')


// Creamos la class Item
class Item {
    constructor(task) { // task es nombreItem del Pledu
        this.crearDiv(task) // llamado a un metodo propio

    }

    crearDiv(task) {  // 2. Definimos el metodo crearDiv dentro de class Item
        let inputItem = document.createElement('input') // 3. Creamos el input dentro del metodo crearDiv utilizando
        // createElement asignandole a este elemento la variable inputItem
        
        // 3.2 A la variable inputItem le damos el value del constructor (task)
        inputItem.value = task;
        // 3.3 A la variable inputItem le damos la propiedad disabled con valor true
        inputItem.disabled = true;
        // 3.4 A inputItem le agregamos la class (css) item_input
        inputItem.classList.add('item_input')
        // 3.5 A inputItem le agregamos type text
        inputItem.type = 'text';

        // 4. Declaramos $div creando el elemento div
        let $div = document.createElement('div')
        // 4.1 A $div le agregamos la class (css) item
        $div.classList.add('item')

        // 5. boton editar (el boton del candado / lock)
        let botonEditar = document.createElement('button')
        // 5.1 insertamos el codigo de font awesome
        botonEditar.innerHTML = '<i class="fas fa-lock"></i>'
        // 5.3 agregamos la class (css) al boton
        botonEditar.classList.add('boton_editar')

        let botonRemover = document.createElement('button')
        botonRemover.innerHTML = '<i class="fas fa-trash"></i>'
        botonRemover.classList.add('boton_remover')

        $container.appendChild($div)
        $div.appendChild(inputItem)
        $div.appendChild(botonEditar)
        $div.appendChild(botonRemover)


        botonEditar.addEventListener('click', () => { // arrow function
            inputItem.disabled = !(inputItem.disabled)
            if (inputItem.disabled == false) { // si el valor booleano es falso
                botonEditar.innerHTML = '<i class="fas fa-lock-open"></i>' // abrimos el candado
            } else if (inputItem.disabled == true) { // si el valor booleano es verdadero
                botonEditar.innerHTML = '<i class="fas fa-lock"></i>' // cerramos el candado
            }
        })

        botonRemover.addEventListener('click', () => {
            $div.remove()
        })

    };




}

$boton_agregar.addEventListener('click', cheaquearItem)

window.addEventListener('keydown', (returnOrEnter) => {
    (returnOrEnter.key == 'Enter') ? cheaquearItem():{}
})

function cheaquearItem() {

    if ($input.value != '') {
        new Item($input.value)
        $input.value = ''
    }
}

// Gracias Julian!