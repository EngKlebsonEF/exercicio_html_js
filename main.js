document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var campoA = parseInt(document.getElementById('campoA').value);
    var campoB = parseInt(document.getElementById('campoB').value);

    if (campoB > campoA) {
    document.getElementById('message').textContent = "Formulário válido!";
    document.getElementById('message').style.color = "green";
    } else {
    document.getElementById('message').textContent = "Formulário inválido! O número B deve ser maior que o número A.";
    document.getElementById('message').style.color = "red";
    }
});
