
// Agrega en el elemento de clase display el contenido actual más el numero seleccionado
function appendNumber(number) {
    document.getElementById('display').value += number;
}

// Función para establecer la operación actual
function setOperation(operation) {
    document.getElementById('display').value += operation;
}

// Función para borrar el contenido de la pantalla
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Función para calcular el resultado y mostrarlo en la pantalla
function calculateResult() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}