let amigos = []; // Se declara un array vacío llamado "amigos" para almacenar los nombres ingresados.

function agregarAmigo() {
    // Se obtiene la referencia al campo de entrada del nombre del amigo.
    let input = document.getElementById("nombreAmigo"); 
    // Se obtiene el valor ingresado en el campo de entrada y se eliminan espacios en blanco innecesarios.
    let nombre = input.value.trim();
    // Se valida si el campo está vacío. Si lo está, se muestra una alerta y se detiene la ejecución de la función.
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    // Se agrega el nombre al array "amigos".
    amigos.push(nombre);
    // Se limpia el campo de entrada después de agregar el nombre.
    input.value = "";
    // Se actualiza la lista de amigos en la interfaz.
    actualizarLista();
}

function actualizarLista() {                
    // Se obtiene la referencia al elemento de la lista donde se mostrarán los nombres.
    let lista = document.getElementById("listaAmigos");
    // Se limpia el contenido del elemento de la lista antes de actualizarlo.
    lista.innerHTML = "";
    // Se recorre el array "amigos" y por cada nombre se crea un nuevo elemento <li>.
    amigos.forEach(nombre => {
        let li = document.createElement("li");  // Se crea un elemento <li>.
        li.textContent = nombre;                // Se asigna el nombre del amigo al contenido del <li>.
        lista.appendChild(li);                  // Se agrega el elemento <li> a la lista en el DOM.
    });
}

function sortearAmigo() {
    // Se verifica si hay amigos en la lista. Si no hay, se muestra una alerta y se detiene la ejecución.
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }
    // Se genera un índice aleatorio dentro del rango del array "amigos".
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    // Se obtiene el nombre del amigo sorteado usando el índice aleatorio.
    let amigoSorteado = amigos[indiceAleatorio];
    // Se actualiza el contenido del elemento con id "resultado" para mostrar el amigo sorteado.
    document.getElementById("resultado").innerHTML = `<li>${amigoSorteado}</li>`;
}

