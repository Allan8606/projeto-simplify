// Selecionando elementos
const taskInput = document.getElementById("task");
const prioridade = document.getElementById("prioridade");
const time = document.getElementById("time");
const form = document.querySelector("form");

//Selecionando elementos da lista
const ul = document.querySelector("ul");

// Função para adicionar tarefa
function addTask() {
    try {
        const taskName = taskInput.value;
        const taskPriority = prioridade.options[prioridade.selectedIndex].text;
        const taskPriorityValue = prioridade.value;
        const taskTime = time.value;

        // Criando Li
        const li = document.createElement("li");
        li.classList.add("list");

        // Adcionando li na ul
        ul.appendChild(li);

        // Adcionando div na li
        const divUl = document.createElement("div");
        li.append(divUl);

        // Adcionando nome da tarefa
        const taskNameLi = document.createElement("span");
        taskNameLi.classList.add("task-name");
        taskNameLi.textContent = taskName;

        // Adcionando prioridade da tarefa
        const taskTimeLi = document.createElement("span");
        taskTimeLi.classList.add("time");
        taskTimeLi.textContent = taskTime;

        // Adcionando prioridade da tarefa
        const taskPriorityLi = document.createElement("span");
        taskPriorityLi.textContent = taskPriority;
        // Função que muda a cor da prioridade da tarefa
        function changeColor() {
            if (taskPriorityValue === "baixa") {
                taskPriorityLi.classList.add("baixa");
                taskPriorityLi.classList.add("priority");
            } else if (taskPriorityValue === "media") {
                taskPriorityLi.classList.add("media");
                taskPriorityLi.classList.add("priority");
            } else if (taskPriorityValue === "alta") {
                taskPriorityLi.classList.add("alta");
                taskPriorityLi.classList.add("priority");
            } else {
                taskPriorityLi.classList.add("priority");
            }
        }
        changeColor();
        updateTotalTasks();
        clearForm();

        // Adcionando botao de concluir
        const btnTask = document.createElement("button");
        btnTask.classList.add("btn-concluir");
        btnTask.textContent = "Concluir";
        li.append(btnTask);

        // Adcionando prioridade da tarefa
        divUl.append(taskNameLi, taskTimeLi, taskPriorityLi);
    } catch (error) {
        alert("Não foi possivel adicionar a tarefa");
        console.log(error);
    }
}

// Função que conclui a tarefa
ul.onclick = (event) => {
    const btnConcluir = document.querySelector(".btn-concluir");

    if (event.target.classList.contains("btn-concluir")) {
        const item = event.target.closest(".list");
        item.remove();
    }

    updateTotalTasks();
};

// Atualiza o total de tarefas pendentes
function updateTotalTasks() {
    // Recupera itens da lista
    const tasksElements = ul.children; // Seleciona todos os elementos filhos da ul

    const total = tasksElements.length;

    // Pegando elemento do html
    const totalTasks = document.querySelector(".total-tasks");

    totalTasks.textContent = total;
}

form.onsubmit = (event) => {
    event.preventDefault();

    addTask();
};

// Função que limpa formulario
function clearForm() {
    taskInput.value = "";
    prioridade.value = "";
    time.value = "";

    taskInput.focus();
}
