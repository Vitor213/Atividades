function calcular() {
    let num = document.getElementById('tabu');
    let tab = document.getElementById('seltab');
    tab.innerHTML = ''; // Limpa resultados anteriores

    if (num.value.length == 0) {
        tab.innerHTML = '<option>Por favor, digite um número</option>';
    } else {
        let n = Number(num.value);
        for (let i = 1; i <= 10; i++) {
            let item = document.createElement('option');
            item.text = `${n} x ${i} = ${n * i}`;
            tab.appendChild(item);
        }
    }
}