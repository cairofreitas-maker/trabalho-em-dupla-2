function gerarTabuada() {

    const numero = Number(document.getElementById("numero").value);

    const resultado = document.getElementById("resultado");

    resultado.innerHTML = "";

    if (document.getElementById("numero").value === "") {
        resultado.innerHTML = "<p>Digite um número válido!</p>";
        return;
    }

    for (let i = 1; i <= 10; i++) {
        const soma = numero + i;

        resultado.innerHTML += `
            <div class="linha">
                ${numero} + ${i} = <strong>${soma}</strong>
            </div>
        `;
    }
}