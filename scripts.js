const botao = document.querySelector(".botao");
const input = document.querySelector(".input");
let lista = [];
const listaCompleta = document.querySelector(".lista");

function addItem() {
    if (input.value.trim() !== '') {
        lista.push({ tarefa: input.value, concluida: false });
        input.value = "";
        mostrarItem();
    }
}

function mostrarItem() {
    let novaTarefa = "";
    lista.forEach((item, index) => {
        novaTarefa = novaTarefa + `<li class="tarefa ${item.concluida && "feito"}" onclick="tarefaFeita(${index})">
                                    <p>${item.tarefa}</p>
                                    <img class="lixeira" src="img/lixo.png" alt="ícone apagar item" onclick="deletarTarefa(${index})">
                                  </li>`
    })
    listaCompleta.innerHTML = novaTarefa;

    localStorage.setItem("lista", JSON.stringify(lista));
}

botao.addEventListener('click', addItem);

function deletarTarefa(index) {
    lista.splice(index, 1);
    mostrarItem();
}

function tarefaFeita(index) {
    lista[index].concluida = !lista[index].concluida;
    mostrarItem();
}

function recarregarTarefa() {
    const tarefasLocalStorage = localStorage.getItem("lista");
    if (tarefasLocalStorage) {
        lista = JSON.parse(tarefasLocalStorage);
    }
    mostrarItem();
}
recarregarTarefa();