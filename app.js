let taskToDelete = null;

function addTask() {
    const container = document.querySelector(".main-container");
    const taskInput = document.getElementById("taskInput");
    const prioritySelect = document.getElementById("prioritySelect");

    if (taskInput.value.trim()) {
        const card = document.createElement("div");
        card.classList.add("card");

        // Asigna una clase a la tarjeta y un atributo de datos según la prioridad seleccionada
        if (prioritySelect.value === "alta") {
            card.classList.add("alta");
            card.setAttribute("data-priority", "alta"); // Guardamos la prioridad
        } else if (prioritySelect.value === "intermedia") {
            card.classList.add("intermedia");
            card.setAttribute("data-priority", "intermedia");
        } else if (prioritySelect.value === "baja") {
            card.classList.add("baja");
            card.setAttribute("data-priority", "baja");
        }

        const text = document.createElement("p");
        text.textContent = taskInput.value;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Eliminar";

        // Al hacer clic en eliminar, verifica la prioridad de la tarjeta
        deleteBtn.onclick = function () {
            const taskPriority = card.getAttribute("data-priority"); // Obtener la prioridad de la tarjeta
            if (taskPriority === "alta") {
                // Muestra el modal si la tarea es de alta prioridad
                taskToDelete = card; // Guarda la tarea a eliminar
                document.getElementById("confirmModal").style.display = "block";
            } else {
                // Elimina directamente si la prioridad no es alta
                container.removeChild(card);
            }
        }

        card.appendChild(text);
        card.appendChild(deleteBtn);
        container.appendChild(card);

        taskInput.value = "";
    }
}

// Lógica para el modal de confirmación
document.getElementById("confirmDelete").onclick = function () {
    const container = document.querySelector(".main-container");
    if (taskToDelete) {
        //remuevo el child seleccionado
        container.removeChild(taskToDelete);
        taskToDelete = null;
    }
    document.getElementById("confirmModal").style.display = "none";
};

document.getElementById("cancelDelete").onclick = function () {
    taskToDelete = null;
    document.getElementById("confirmModal").style.display = "none";
};