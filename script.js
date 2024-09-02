function marcarRespostas() {
    const respostas = {
        q1: '4',
        q2: '4',
        q3: '4'
    };

    for (let pergunta in respostas) {
        let inputs = document.getElementsByName(pergunta);

        inputs.forEach(input => {
            if (input.value === respostas[pergunta]) {
                let label = input.parentElement;
                label.style.color = 'red';
            }
        });
    }
}