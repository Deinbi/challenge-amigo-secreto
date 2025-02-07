
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Se declara un array vacío llamado "amigos" donde se almacenarán los nombres ingresados
let amigos = [];

function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let input = document.getElementById("nombreAmigo");
    let nombre = input.value.trim();

    // Validar la entrada
    if (nombre == "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Actualizar el array de amigos
    amigos.push(nombre);
    
    // Limpiar el campo de entrada
    input.value = "";

    // Mostrar la lista actualizada
    actualizarLista();
}    
                              
function actualizarLista() {                
    let lista = document.getElementById("listaAmigos"); // Obtener el elemento de la lista
    lista.innerHTML = ""; // Limpiar la lista existente

    // Iterar sobre el array amigos y agregar cada nombre como un elemento <li>
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li"); // Crear un nuevo elemento <li>
        li.textContent = amigos[i]; // Asignar el nombre del amigo al elemento <li>
        lista.appendChild(li); // Agregar el <li> a la lista
    }
}

